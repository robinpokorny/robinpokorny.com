---
title: Function length property is not to be trusted
date: 2019-01-19T22:00:00.000Z
excerpt: This article is a reply to Stefan Judis’s article How the rest operator and default values affect the function length property.
---

> This article is a reply to [Stefan Judis](https://medium.com/u/c3a0319fab53)'s article [How the rest operator and default values affect the function length property](https://www.stefanjudis.com/today-i-learned/how-the-rest-operator-and-default-values-affect-the-function-length-property/).

Stefan shows how a function length is computed when it includes a rest parameter or parameters with a default value.

A quick summary:

```ts
const fn1 = (a, b) => {};
const fn2 = (a, ...b) => {};
const fn3 = (a, b = 2) => {};
const fn4 = (a = 1, b) => {};

fn1.length; // -> 2
fn2.length; // -> 1
fn3.length; // -> 1
fn4.length; // -> 0
```

### After a parameter with default

The last one, fn4, is the most interesting case and—as Stefan remarks—good to know.

Actually, I would say it is even more interesting. The interpret generally distinguishes between no default value and default value set to undefined; however, it has no effect on the function execution.

```ts
const fn1 = (a, b) => {};
const fn5 = (a = undefined, b = undefined) => {};

fn5.length; // -> 0
```

Surely, fn1 and fn5 behave exactly the same. The only observable difference is the function length.

As per the [specs](https://www.ecma-international.org/ecma-262/6.0/#sec-function-definitions-static-semantics-expectedargumentcount), internally, parameters without default that appear after one with default are ‘considered to be optional with undefined as their default value’.

Isn’t it crazy?

Oh, one more thing, fn4 would throw a syntax error in some older versions of Firefox.

### The length can change

This is some surprise. Yet, indeed, the length of a function can change.

```ts
const fn1 = (a, b) => {};
fn1.length; // -> 2

// some magic

fn1.length; // -> 3
```

What could that _magic_ be?

Assigning something to it would be ignored. (Compare to Array.length.)

```ts
fn1.length = 3;
fn1.length; // -> 2
```

The trick is that the length property of a function has the configurable attribute set to true.

```ts
Object.defineProperty(fn1, "length", { value: 3 });
fn1.length; // -> 3
```

We can go even further and make the property writable:

```ts
Object.defineProperty(fn1, "length", { writable: true });
fn1.length = 0;
fn1.length; // -> 0
```

Right. I know. It is weird.

_Valid?_ Totally.

_Valid to use?_ Hopefully not.

See the example in JSBin: [http://jsbin.com/lajucu/edit?js,console](http://jsbin.com/lajucu/edit?js,console)

It is worth noting that this is possible since [ES2015](https://www.ecma-international.org/ecma-262/6.0/#sec-function-instances-length).

---

**This article was [cross-posted to Medium](https://medium.com/@robinpokorny/function-length-property-is-not-to-be-trusted-27c3b2d468d5), please use discussion there.**
