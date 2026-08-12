---
title: The Array Modeling Problem Every JSON Merge Patch API Eventually Hits
date: 2026-08-12T21:43:00.000+02:00
image: https://res.cloudinary.com/dljslvfla/image/upload/c_fill,f_auto,g_center,h_720,w_1280/v1786563565/leo_visions-cCNtRmBBMw8-unsplash_j7yzua.jpg
excerpt: We use RFC 7396 JSON Merge Patch across our public API. It's simple,
  it's well specified, and clients like it. JSON Merge Patch acts like a simple
  ‘diff’. The patch document mirrors the structure of the document you want to
  change. To add or update a field, you send the new value. To delete a field,
  you set the value to `null`. The rest stays as it was. Simple. Then we hit
  arrays.
---
We use RFC 7396 JSON Merge Patch across our public API. It's simple, it's well specified, and clients like it.

(Note: not to be confused with RFC 6902 JSON Patch, which is much more complicated.)

JSON Merge Patch acts like a simple ‘diff’. The patch document mirrors the structure of the document you want to change. To add or update a field, you send the new value. To delete a field, you set the value to `null`. The rest stays as it was. Simple.

Then we hit arrays.

## The problem

JSON Merge Patch replaces arrays as a whole. That's not a bug, it's the spec.

```json
// GET
{"tags": ["draft", "internal", "q3"]}

// PATCH
// You only want to remove "internal", but the patch document
// has no way to say "remove one element". You send the whole array.
{"tags": ["draft", "q3"]}
```

One of our teams ran into this first, on a real feature, not a thought experiment. They brought it to our architecture forum as a high-level question: what do we do when JSON Merge Patch and arrays stop getting along. That's usually where these things stall, a good question with no clear owner. So a few of us met with the team again and went through it properly.

The problem turned out to have two different shapes, not one.

The first is that arrays were often used in for a set, which JSON doesn't have. You don't care what was there before. You just want to add something, remove something, and move on. The mechanic forces you to reconstruct and resend the whole thing every time, even though your actual intent was one small delta.

The second, and the more interesting one, is sub-objects which are more complex and can have an internal state. Replacing the whole array means the client has to re-parse every element on every patch, even the ones that haven't changed. If something in the UI was rendered from that sub-object, a full-array replace could reset it, because the client had no signal that most of what came back was untouched. In our case, some of these sub-objects were, honestly, sub-resources with a life of their own. But they felt like a natural part of the parent, changed often at the same time as the parent itself, and that's exactly why they got modeled as an array in the first place.

The discussion that followed was the good kind, the kind where people push back because they actually care about getting it right. The sticking point wasn't technical. It was that exposing a shape in the public API that didn't match how we stored or treated the data internally felt, to some people meeting the idea for the first time, like a kind of dishonesty. If it's a map on the wire, shouldn't it be a map everywhere?

We talked it through. The contract and the storage don't have to agree, and they usually shouldn't. A public API is a promise to clients about how they can interact with a resource, not a mirror of your schema. Once that separation clicked, most of the discomfort went with it, and we converged on a default within the day.

Below are the options we actually put on the table, roughly in order of how much they change what you're modeling. Our default, the shape we reach for unless something specific argues otherwise, is Option 1 for anything simple and Option 4 for anything with real per-item lifecycle. The rest are here because they're real tools, not runners-up, and the right call depends on your resource, not on ours. Maybe they will inspire you.

## Option 1: Stay with the array

Accept that a change means resending the whole thing.

This is fine, and honestly the easiest choice, for short arrays of simple values, or arrays of value objects with no independent identity. Labels, a handful of monetary amounts, ID references.

```json
{"amounts": [{"currency": "EUR", "value": 100}, {"currency": "USD", "value": 50}]}
```

It gets uncomfortable the moment you're thinking of the array as a set, where position never mattered, when the list gets long and changes often, or the moment the elements are complex enough that a client shouldn't have to reparse all of them just because one changed.

If nothing about your collection has a life of its own, don't give it one just to look sophisticated.

## Option 2: Index as key

A middle ground before you commit to real ids: keep the collection positional, the way arrays in JavaScript work under the hood, but expose it as an object keyed by index instead of a JSON array.

```json
// GET
{
  "items": {
    "0": {"name": "one"},
    "1": {"name": "two"},
    "2": {"name": "three"}
  }
}
```

Number keys are technically strings in JSON, same as they are in a JavaScript object, so this pattern is somewhat established. You get per-slot patching without inventing any id scheme:

```json
// PATCH
{
  "items": {
    "1": {"name": "changed"}
  }
}
```

You can even accept both shapes on write, a JSON array or a string-numbered dictionary, and normalize internally. That's a nice bridge if you don't want to break existing clients that still send arrays while letting newer clients patch by index.

The catch is the one we already ran into with plain arrays: position is not identity. Insert at the front, and every later index now points at a different element than it did a moment ago. Same with delete.

This option is worth reaching for only when the collection is truly positional and clients aren't going to reorder or splice it mid-life. The moment reordering or deletion becomes routine, you've quietly outgrown this option and want real ids, which is Option 3\.

## Option 3: Give elements an id, model the collection as a map

Turn the array into an object keyed by id. Now the standard JSON Merge Patch semantics apply per element: send a key to update it, send `null` to delete it, leave a key out and it's untouched.

```json
// GET
{
  "items": {
    "a1": {"name": "one"},
    "a2": {"name": "two"},
    "a3": {"name": "three"}
  }
}

// PATCH
{
  "items": {
    "a2": {"name": "changed"},
    "a1": null
  }
}
```

This is the point where the storage-versus-contract question comes up, and it's worth being direct about it, since it's exactly what our own team pushed back on. What you expose in the public API doesn't have to match what's in your database. If you're already storing these as an array internally, that's fine, you're free to keep it that way and only shape the id-keyed map at the API boundary. The contract is a promise about interaction, not a confession about your schema.

The ids themselves don't need to be global. They just need to be stable to this context, so the same id comes back every time a client reads the resource. If there's already a natural field that can serve as one, this is close to free. If there isn't, minting one purely for this purpose is still a reasonable thing to do.

## Option 4: Server-generated ids, with a placeholder convention

Building on Option 3: we didn't want client-provided ids. Efficiency, security, and just not wanting two id-generation paths in the system all pointed the same direction.

So creation uses a temporary key with a reserved prefix `new_`. Any key matching that pattern is treated as "add this to the collection." The server generates the real id and echoes the temporary key back as a `correlation-id`, so the client can map its local reference to what the server assigned.

```json
// PATCH
{
  "items": {
    "a2": {"name": "changed"},
    "new_1": {"name": "four"}
  }
}

// response
{
  "items": {
    "a2": {"name": "changed"},
    "a4": {"correlation-id": "new_1", "name": "four"}
  }
}
```

`correlation-id` only appears in the response to a patch that created something. It's never stored, never returned on a plain `GET`. Its whole job is closing the loop between the client's temporary key and the server's real one, in the same request.

This is the option that ended up carrying the most weight in our own discussion, and where the team landed. One request, any mix of create, update, and delete, still a fully valid JSON Merge Patch. Nothing invented beyond a naming convention and one response-only field.

## Option 5: Model it as its own sub-resource

Give the collection its own path. Nested under the parent, or, if the elements have real global identity, as its own top-level collection.

```
GET /orders/{orderId}/items
POST /orders/{orderId}/items
GET /orders/{orderId}/items/{itemId}
PATCH /orders/{orderId}/items/{itemId}
DELETE /orders/{orderId}/items/{itemId}
```

This is the most honest modeling option if the elements genuinely have independent identity and lifecycle. It's also the most disruptive to the existing contract, since you're no longer patching the parent to change a child.

The deciding question is how your clients actually make changes. If a parent and its sub-collection tend to change together, and you want that to happen atomically in one request, Options 3 or 4 keep that possible and a separate sub-resource doesn't. If changes to the sub-collection happen on their own, independent of the parent, giving it its own path is the more honest, RESTful choice.

## Where we landed

We didn't pick one option and retire the rest, but we also don't reach for all five with any regularity. Option 5 showed up when a sub-collection was sufficiently complex and deserves its own path. Option 2 and Option 3 stayed as discussion points rather than something we shipped.

Our default is Option 1 when nothing has independent identity, and Option 4 the moment something does and the server needs to own its id. The others are on this list because they're real, useful tools for a shape of problem we haven't hit yet, not because we're using them in parallel across the API.

The mistake we were making before this discussion wasn't picking the wrong option. It was never asking the question, and letting every array stay an array because that's the shape it happened to arrive in.

If you're stuck on the same problem, don't look for the one correct answer. Look at what your collection actually is, then pick from here. And if you've found a sixth option, or a use case where one of ours falls apart, I'd very much like to hear about it.  
