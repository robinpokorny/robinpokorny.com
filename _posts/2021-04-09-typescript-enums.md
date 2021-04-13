---
title: TypeScript enums
date: 2021-04-09T14:51:07.447Z
image: https://res.cloudinary.com/dljslvfla/image/upload/v1617482051/qinghill-GMU6ldtMxGQ-unsplash_sf7dbu.jpg
excerpt: "Since the very first moment I learned about TypeScript, I knew there's
  always goona be this one thing I'll hate on: Enums. So un-elegant, so
  old-school, and so why-do-you-polute-my-runtime. Well, I was wrong. I use
  Enums now. At least some of them. Let me show you."
---

Since the very first moment I learned about TypeScript, I knew there's gonna be this one thing I'll always hate: _Enums_. So un-elegant, so old-school, and so why-do-you-pollute-my-runtime. Well, I was wrong. I use Enums now. At least some of them. Let me show you.

## What are Enums in TypeScript

First, let's quickly talk about what are Enums in TypeScript. An Enum is a well-defined collection of a limited number of cases. For example, countries that my app supports:

```ts
enum Country {
  Germany,
  Sweden,
  USA,
}
```

There is one interesting property of an Enum: it defines both types and values. See some use here:

```ts
enum Country {
  Germany,
  Sweden,
  USA,
}

const setActiveCountry = (country: Country) => {
  //                               ^^^ this is a type
  // do something
};

setActiveCountry(Country.Sweden);
//               ^^^ this is a value

// @ts-expect-error
setActiveCountry('SE');
```

[Playground Link](https://www.typescriptlang.org/play?#code/KYOwrgtgBAwg9mEAXATgTygbwFBSgcWBQgEMQ0AaXKAZQHdgATUKvAVRoEEqBfavAYLzYAxnBABnJFAnAknEUgCWAN2DxEqDAF4oACjGb0ALlgJk6AJRRtAPizUA9I6Gu37oQD1vUJAAslCShAqBJfNAAHYGonF0Y4GTgIOQCQAHNsPmxZeUVVdXMtPQ0LNAA6eiZQS1iPQW9PXwCgkLCVEgAbMGjsZygAASQJAFpgAA8oxVGUFDgUbLkFZTUSooByGgBRNcsgA)

> _Note_: I use `@ts-expect-error` in the code examples to mark there is a TypeScript error on the next line. This also suppresses the error, so you will not see it in the playgroud. Remove the line to see the error reported.

## What's wrong with Enums?

Right, that sounds kind of nice, what is the problem?

There are these three main points, I've held against Enums since day one. In fact, several (I think like 5 or 6) years back, I was interviewed about TypeScript when my stance at that point was that Flow was superior to TypeScript, I used exactly the same points. Unfortunately, the interview was never published…

### 1. It introduces (ugly) runtime code

If you want to have a value available, it means that the value has to be there during runtime. That means Enums are one of the very few (and probably the only regularly used) TypeScript constructs that generate some code in the resulting JavaScript.

Usually, when the target is the current ECMAScript, all type definitions and annotations are just removed. That is because all other constructs like object literals, functions, or classes are the same in JavaScript as in TypeScript.

Look at how the `Country` Enum ends up as:

```js
var Country;
(function (Country) {
  Country[(Country['Germany'] = 0)] = 'Germany';
  Country[(Country['Sweden'] = 1)] = 'Sweden';
  Country[(Country['USA'] = 2)] = 'USA';
})(Country || (Country = {}));
```

### 2. Number based by default

Do you see that code? Do you see those numbers 0, 1, and 2?

That is the actual value assigned to the country. So while you work with nice names, they are translated to numbers.

The generated code is practically equal to the following dictionary object. Let's ignore the rest, it's used seldomly (and is useful even less).

```js
const Country = {
  Germany: 0,
  Sweden: 1,
  USA: 2,
};
```

So when you want to debug your code and you log the country your function received you get a cryptic number. Then you need to go and see the relevant version of the source code in TypeScript, count that number from the top, and then you have the name you actually wanted in the first place.

Another problem is that you can actually pass a number where `Country` is expected. A maintenance headache about to happen on its own. But, you can actually pass _any_ number, irrespective if it is defined in the Enum or not. Both of these calls [will pass the type check](https://www.typescriptlang.org/play?target=99&strict=true#code/KYOwrgtgBAwg9mEAXATgTygbwFBSgcWBQgEMQ0AaXKAZQHdgATUKvAVRoEEqBfbbAMZwQAZyRQRwJJwFIAlgDdg8RKgwBeKAAohq9AC5YCZOgCUUdQD4s1APS2ojOBLgQpACzkgA5tj7ZJaVlFZWM1LQBGUwCpGXklFRM0SIAGFNMgA):

```ts
setActiveCountry(1);
setActiveCountry(100);
```

Sure, it should be just a value, hopefully unique. And the developer should not care about it, and treat the Enum as opaque. However, using numbers feels very old-school, a reminder of times where memory mattered and numbers were used as a means of saving it.

I know there is a solution for this with string Enums (we will talk about them in a bit). Yet, I do not understand why the values could not be equal to the labels which are unique already. Or, when the target is ES2015+, the values could be Symbols – using them at a place they were created for.

### 3. You do not need them

Back then, I was using Flow. And Flow did not have (and could not have) Enums. We did it in a different way. My favorite was to define a disjoint union of literal types (that still sounds so dorky).

Today, I see people avoiding Enums in many other ways. Either on purpose or out of habit. And, of course, you do not _need_ them to write good code.

Before I show you how I'm using Enums now so that I'm comfortable with them, let's explore these common alternatives and discuss their pros and cons.

## Alternatives to Enums

### Disjoint union of iteral types

A rather straightforward option is to define a type that consists of all the actual strings (or other values) that are permitted. This is called disjoint or discriminated union; see [Discriminated Unions](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#discriminated-unions) in TypeScript docs.

```ts
type Country = 'DE' | 'SE' | 'US';

const setActiveCountry = (country: Country) => {
  // do something
};

setActiveCountry('SE');

// @ts-expect-error
setActiveCountry('CZ');
```

[Playground Link](https://www.typescriptlang.org/play?#code/C4TwDgpgBAwg9gVwHbAE4igXigcgCICiOUAPrgMpGm4Cq5OAUFMy6ywwMZxIDOwUPCMACCHYAEsAbhHjI0GbAAouc9AC5YiFOgCUWAHxQA3kygB6M1AAmcAXAC2QgBbikAcwYBfBg0EixUjJa8oo4lDg6PhZQAALAPAC0EAAekGJJqKhwqL5CohLSstogoTAAWhFAA)

As you can see this approach correctly types the function. The problem is that there are ‘magic’ strings all over the place. Sure, for my example the strings are actually somewhat self-explanatory. But let's imagine that instead of [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) two-letter country codes we would be using [ISO 3166-1 numeric](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) country codes:

```ts
type Country = '276' | '752' | '840';

const setActiveCountry = (country: Country) => {
  // do something
};

setActiveCountry('752');

// @ts-expect-error
setActiveCountry('203');
```

[Playground Link](https://www.typescriptlang.org/play?#code/C4TwDgpgBAwg9gVwHbAE4igXigcgEwDsAbDlAD64ECsepFOAHACwAMOAUFF9z9+wMZwkAZ2BRhEYAEF+wAJYA3CPGRoM2ABSDV6AFyxEKdAEosAPigBvTlAD0tqABM44uAFtJACzlIA5uwBfdnYJaVlFZUM1DRxqWmNg+ygAAWBhAFoIAA9IWUzUVDhUEMkZeSUVIxAYvBYAZhxjIA)

While technically equivalent to the previous, this is now utterly unreadable and error-prone.

### Disjoint union of iteral types with constants

What can we do to remove those ‘magic’ strings? Let's save the values to constants:

```ts
const GERMANY = '276';
const SWEDEN = '752';
const USA = '840';
const CZECHIA = '203';

type Country = '276' | '752' | '840';

const setActiveCountry = (country: Country) => {
  // do something
};

setActiveCountry(SWEDEN);

// @ts-expect-error
setActiveCountry(CZECHIA);
```

[Playground Link](https://www.typescriptlang.org/play?#code/MYewdgzgLgBA4gUQEoFkCCA5AmjAvDAcgCYB2ANgIChRJYBlAdQQBEEM9CSBWIqm6GAFU6aDgQAcAFgAMfcAIDCALQQKAEgElR+YtIDMVSlACeABwCmMBSACuYKACdjY0hRgAfTjwIfCU2ZQwQcEhwdTysBDmUGjAUACWAG7m1naOzvgAFKBpTgBcVrb2TgCUeAB8MADegTAA9HUwACYgMBAgALbRABbxYADmlAC+lJRRMXFJKUXpmYwsbCWjDTAAAlAQALTmAB4WcdsODiAOY9GxCcmpxcaZyqqaaCVAA)

Now, that sure is better. This is, in fact, a way that is popular in the Redux community for Redux actions (Or, should I say [was popular](https://phryneas.de/redux-typescript-no-discriminating-union)?).

Still, we can identify problems. First, nothing forces you to use these constants, so if it slips the usually meticulous reviewer's eye, you can end up with a mixed approach. Second, the code is not very elegant, we either have to repeat the value in the type or use a strange-looking `typeof` operators. In either way, adding or removing means a change in two places.

### Dictionary

Hmm, maybe there is a way to combine them all in one. When we look at the code generated for an Enum, we might think: can we just use that dictionary in the first place?

This works. And it is really close to Enum:

```ts
const Country = {
  Germany: 'DE',
  Sweden: 'SE',
  USA: 'US',
} as const;

type Country = typeof Country[keyof typeof Country];

const setActiveCountry = (country: Country) => {
  // do something
};

setActiveCountry(Country.Sweden);

// @ts-expect-error
setActiveCountry('CZ');
```

[Playground Link](https://www.typescriptlang.org/play?ssl=16&ssc=23&pln=1&pc=1#code/MYewdgzgLgBAwiArmKAnAnjAvDA3gKBhgHEBTVAWwEMx0AuGAcgBEBRRgGkJgGUB3UgBNSYBox7suRAKo8AgmNmd8AXxhUIMUJCj58UdAAdS8JCgzYYB4yABmp5GnQBtANal0dq0dJeEjjABdAG5uInCIonxtaBgIUig5YCgASwA3Un9zTBwAClAA+gdsgEpsAD48bgB6aphBEDiQCgSACxSwAHNVPXjE5PTMsydcrKcAOn4hERK9WpgAASgIAFpSAA9jZLXUVBBUfD6k1IyxjFzGOAAtRhKgA)

Weeeeel, it's not terrible. But it's not great either.

(Read the previous two sentences in [Dyatlov's accent](https://www.youtube.com/watch?v=Mg5HOnq7zD0), please.)

Let me go through some points to keep in mind.

1. The dictionary has to be declared [`as const`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions). This prevents the type engine to infer the type as general dictionary `Record<string, string>`. This is OK.

2. The `Country` dictionary is a value and not a type. We need to define the type separately. It's a cryptic command, one I always have to google – not so OK. Fortunately, the type can be named the same as the dictionary, so from now on it's the same as Enum, right? Well, no.

3. As in the previous case, nothing truly ties the dictionary to the function arguments. Calling `setActiveCountry('SE') ` raises no error. The `Country` type is, in the end, just another disjoint union of iteral types again. The benefit is that changes are made only in one place. This is Boo (or at least Meh).

## Enums ~~the right~~ my way

For years, I'd been using the previous techniques to avoid Enums, looking down on all that subjected to the inferior code constructs.

And then one day on one PR someone asked: ‘Why?’.

I was in the middle of my reply, when I decided to fact-check some points and, …, and I discovered how wrong I'd been. There were two important additions to Enums that made them _superior_ to anything else. Even for people that worry about moving back to vanilla JavaScript one day.

### String Enums

Instead of depending on the source code order to define the value of an option in an Enum, you can define it yourself.

The following code is so close to the dictionary example above, just much cleaner.

```ts
enum Country {
  Germany = 'DE',
  Sweden = 'SE',
  USA = 'US',
}

const setActiveCountry = (country: Country) => {
  // do something
};

setActiveCountry(Country.Sweden);

// @ts-expect-error
setActiveCountry('CZ');

// @ts-expect-error
setActiveCountry('SE');
```

[Playground Link](https://www.typescriptlang.org/play?ssl=1&ssc=1&pln=18&pc=1#code/KYOwrgtgBAwg9mEAXATgTygbwFBSgcWBQgEMQMBeKAcgBEBRagGlygGUB3YAE1CiuptGLPAFU2AQX41xzbAF9WeZSrzYAxnBABnJFG3AkE9UgCWAN2DxEqSlAAUmm+gBcsBMnQBKfgD4srAD0gVDccPpwEIYAFqYgAOYK2NgGRiYWVh629taeaAB0nDygXsnBUAACSNoAtMAAHgAOwCZ1KChwKCmGxmaWudnUMABa1KXY5VW1Dc2tRB1dqb0ZA+j2goylQA)

Again, let's discuss some more or less obvious observations:

1. It uses equal sigs, not colons. Do not ask me why. Still, it's very close to object literal. So close that developing a code mod is piece of cake (if you know how to write code mods, of course).

2. The values should be all strings. You cannot create the values dynamically and mixing them with numbers yield weird results (why would you do that, anyway?).

3. You have to use the Enum anywhere where an Enum value is expected. Passing the same string doesn't work. This makes refactoring a headache-free process. And your codebase stays consistent.

4. However, it's not all unicorns and rainbow. The generated code is a) still there and b) still (kind of) ugly.

‘How on earth you want to improve that, Robin?’

You're in for a treat.

### Constant, string Enums

The second improvement that helped me cross the Enum Rubicon (‘The type is cast!’, sorry, sorry, I had to) is constant Enum or [const Enum](https://www.typescriptlang.org/docs/handbook/enums.html#const-enums) for short.

How does it look like?

```ts
const enum Country {
  Germany = 'DE',
  Sweden = 'SE',
  USA = 'US',
}

const setActiveCountry = (country: Country) => {
  // do something
};

setActiveCountry(Country.Sweden);

// @ts-expect-error
setActiveCountry('CZ');

// @ts-expect-error
setActiveCountry('SE');
```

[Playground Link](https://www.typescriptlang.org/play?#code/MYewdgzgLgBApmArgWxgYRIsUBOBPGAbwCgYYBxOHZAQzAIF4YByAEQFFmAaUmAZQDucACYIYTZn048yAVT4BBcS3ndiAX15ltOssVCRYEOFAXAoASwBucDFlyMYAClD38ALnSZs+AJTiAPiJeAHoQmGEQGAgQZBMACwswAHMNYmJjU3NrW28HJzsfPAA6QREEX3SwmAABKAgAWjgADwAHOHMmnBwQHAyTM0sbQvzmNAAtZkriarrGlvbOqh6+zMGckfwnSU5fIA)

Wait, wait, I'm not pulling your leg.

It is a letter-to-letter, carbon copy of the previous code, except for the addition of the `const` in front of the `enum`.

The functionality is exactly the same, too. Looking at the list items above: 1. is the same, 2. is the same, 3. is the same, 4. is… NOT the same!

This is what the output of the previous code look like:

```js
const setActiveCountry = (country) => {
  // do something
};

setActiveCountry('SE' /* Sweden */);
```

Yes, all the values are now inlined in the place of use. There is no clue that there ever was an Enum. Except, maybe, for the helpful comment.

In the end, the result is the same as in the very first alternative we talked about: disjoint union of iteral types. Yet, it is so much easier to use and safer in all regards.

One great use case I found, is that you do not care about the size of the enum. There could a const string Enum of all the countries and only the used ones would make it to the production code. The rest would just disappear. And code autocomplete still works with no issue.

In our service code, we now have a share const string Enum with all defined HTTP response codes (excerpt):

```ts
export const enum Success {
  OK = 200,
  Created = 201,
  // …
}

export const enum ClientError {
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  // …
}

// …

export type HttpStatusCode =
  | InformationalResponse
  | Success
  | Redirection
  | ClientError
  | ServerError;
```

Find the whole file in this [GitHub Gist](https://gist.github.com/robinpokorny/284d8a9406b8599dbde8dff12c9e4aa6).

## What makes a great Enum

Const string Enums.

That's it.

That is what I now use everywhere.

Before commit, I make sure each Enum fulfills the following two conditions:

1. All Enum options have a defined custom string value.
2. The Enum is declared as `const`.

I think this combines the benefits of TypeScript with the eloquence of pure JavaScript. A superb developer experience with close to zero impact on the result.

> Do you use Enums in your code? Do you avoid language features that are not considered for ECMAScript? Tweet a reply
