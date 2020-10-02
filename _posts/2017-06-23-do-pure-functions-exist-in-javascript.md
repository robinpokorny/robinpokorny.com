---
title: Do pure functions exist in JavaScript?
date: 2017-06-23T22:00:00.000Z
image: https://miro.medium.com/max/2200/1*ngrcIKRhCQUL9TbCW9IB2A.jpeg
excerpt: Recently I got into a discussion about how to decide a function is pure in JavaScript. The whole concept of pureness seems to be blurry in such a dynamic language.
---

Recently I got into a [discussion](http://disq.us/p/1jvymj2) about how to decide a function is pure in JavaScript. The whole concept of pureness seems to be blurry in such a dynamic language. The following examples show we might need to redefine the term ‘pure function’, or — at least–be very careful when we decide on it.

## What is a pure function

If you are new to this term I recommend you first read some introduction. [The Definition of “Pure Function”](http://alvinalexander.com/scala/fp-book/definition-of-pure-function) by [Alvin Alexander](https://twitter.com/alvinalexander) and [Master the JavaScript Interview: What is a Pure Function?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976) by [Eric Elliott](undefined) are excellent choices.

To sum up, a function is called pure if it satisfies the two conditions:

> # 1) The function returns exactly the same result every time it’s called with the same set of arguments.
>
> # 2) Evaluation of the function does not modify some state outside its scope nor has an observable interaction with the outside world besides returning a value. (No side effects.)

Sometimes, a third condition is added: ‘Relies on no external mutable state.’ This, in fact, is redundant as such dependency on mutable variable would inevitably lead to breaking the first condition, too.

## Which of these is pure

Here I wrote four example functions. Before proceeding, please review them and decide, on your own, which is pure and which is impure.

```ts
// A: Simple multiplication
function doubleA(n) {
  return n * 2;
}

// B: With a variable
var two = 2;
function doubleB(n) {
  return n * two;
}

// C: With a helper function
function getTwo() {
  return 2;
}
function doubleC(n) {
  return n * getTwo();
}

// D: Mapping an array
function doubleD(arr) {
  return arr.map((n) => n * 2);
}
```

Done? Great, let's compare.

When I asked around, the vast majority answered that function _doubleB_ is the only impure, functions _doubleA_, _doubleC_, and _doubleD_ are pure.

So let's go through the conditions. The latter one is oblivious; there are no side effects.

The first one, is more interesting. When called with the same arguments all of them return the same value (using [toEqual](https://facebook.github.io/jest/docs/expect.html#toequalvalue) to support arrays):

```ts
expect(doubleA(1)).toEqual(doubleA(1));
expect(doubleB(1)).toEqual(doubleB(1));
expect(doubleC(1)).toEqual(doubleC(1));
expect(doubleD([1])).toEqual(doubleD([1]));
```

Right? Right?

Weeeell, written like this yes. However, what about this piece of code my friend [Alexander](undefined) [replied](https://twitter.com/agudulin/status/877946353799880704) with?

```ts
doubleB(1); // -> 2

two = 3;

doubleB(1); // -> 3
```

This is valid. I ran the function twice with the same argument and received different value. That makes it impure. No matter what happened in between.

That made me think. If this is the proof, what about the others? Will they hold if I try hard enough? As you guess, no, they don't. In fact, I now say:

> # None of the four functions is pure.

### Functions are first-class

In JavaScript functions are first-class, meaning they are a value of a variable, that can be passed, returned, and–yes–reassigned. If I can change the variable _two_, I can do the following:

```ts
doubleC(1); // -> 2

getTwo = function () {
  return 3;
};

doubleC(1); // -> 3
```

It is important to emphasise that this does not differ to what Alex did above. Just instead of holding a number, the variable holds a function.

### Map on array

[“Map, filter, reduce. Repeat.”](https://www.youtube.com/watch?v=RUXUXup1Ji0) that was the name of one of my [livecoding sessions](https://www.twitch.tv/robinpokorny). These three are the core of data transformation in functional programming. So they should be safe to use in pure functions.

As it turns out, in JavaScript nothing is set in stone. Or should I say in _prototype_?

```ts
doubleD([1]); // -> [2]

Array.prototype.map = function () {
  return [3];
};

doubleD([1]); // -> [3]
```

Wait. That is surely not allowed. This is wrong.

It might be wrong, it might be stupid. The truth is, I just called the function _doubleD_ twice with the same argument and received different values. _No matter what happened in between_.

All we do is reassigning variables between the function calls. As we did before.

Therefore, _doubleD_ is not pure.

### Multiplication is pure

However dynamic, in JavaScript one cannot override built-in operators like in [some languages](https://stackoverflow.com/a/9745356/1517783).

Also, _n_ is a local variable living only in that function's scope. No way to change it from outside.

Or is it?

No, it really is not possible. You must think low of JavaScript if you got your hopes up 😄

But I gave myself away when I wrote that none of the four functions is pure. There's another trick up my sleeve.

While I cannot change the operation nor the argument after it's passed, I have a freedom of choosing what to pass. Numbers, strings, booleans, objects…

Objects? What use can they have? A number multiplied by an object is, eh, is… like in `2 * {}`, is… _NaN._ (Go check it out in the console.) (As I did.)

That doesn't help, though. If only there was a way to make the runtime convert the object to a number when multiplied.

### toString for numbers

If an object appears in a string context, like concatenation with a string, the engine will run _toString_ function of the object and use the result. If it's not implemented, it will fallback to known* '[object Object]'* produced by _Object.prototype.toString_ method.

While less used, JavaScript also calls _valueOf_ method of an object when it expects a number (or a boolean, or a function). What's left is to make this function return different value each time it is invoked.

```ts
var o = {
  valueOf: Math.random,
};

doubleA(o); // -> 1.7709942335937932

doubleA(o); // -> 1.2600863386367704
```

[Run this in JS Bin.](http://jsbin.com/lojupas/edit?js,console)

Uff, yes. The function was called twice with the exactly same (by any comparing mean) argument, the second time it returned a different value than the first time. It is not pure.

> **Note**: The previous version of this article used _@@toPrimitive_ *or, more verbose, *Symbol.toPrimitive*. As [Alexandre Morgaut](undefined) pointed out, *valueOf* is sufficient and supported since the first version of JavaScript. If you don't know *@@toPrimitive\*, you still might want to [check it out](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive).

## What is a pure function, again

I know, I am being scrupulous, evil, and I use some dirty tricks. We use pure functions to gain confidence over the code. To be sure the code does what it should. Anytime, under any circumstances.

**I want all of the four functions to be pure** if I decide to. Yes, that includes functions like _doubleB_. What if that variable (_two_ in our case) is not supposed to be changed, it's a mathematical constant e, pi, or [phi](https://en.wikipedia.org/wiki/Golden_ratio)? That should be pure.

I want to be able to trust built-in functions. What kind of programs can I create if I assume anything in _Array.prototype_ or _Object.prototype_ can change? Extremely basic ones; nobody would ever want to use them.

As a result of this small, fun exercise I believe **we need a new definition of what we consider a pure function in JavaScript**. Unfortunately, I see no way this could be limited only to technical terms.

In some way, it must take into account the intended use of the code. A function can be considered pure in one project and impure in another. And it is OK. As long as the program works. As long as the developers have confidence.

_Do you have an idea for the definition? How do you decide a function is pure? Is there something I missed? Did you learn something?_

## Remarks

There are _some_ ways to protect against _some_ of the tricks used above.

Overwriting a free variable like _two_ or _getTwo_ can be avoided by encapsulating the whole block into a function. Either using [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) or modules:

```ts
var doubleB = (function () {
  var two = 2;

  return function (n) {
    return n * two;
  };
})();
```

A better approach would be to use [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) introduced in ES2015:

```ts
const two = 2;
const doubleB = (n) => n * two;
```

Preventing abuse of _valueOf_ or _@@toPrimitive_ is also possible, yet cumbersome. For example like this:

```ts
function doubleA(n) {
  if (typeof n !== "number") return NaN;

  return n * 2;
}
```

One could get around the trick with changing the _Array.prototype_ only by avoiding such functions and falling back to *for (for … of) *loops. That is ugly, impractical, and potentially impossible. Abstracting these or using a library has drawbacks on its own.

Don't forget that to make a function truly pure, one would need to combine all of those anti-tricks together. Imagine how doubleD, now that elegant, would look like, how long it would be, and how it would hurt the readability.

---

Intro photo by [Benjamin Bousquet](http://unsplash.com/@bixphotos?utm_campaign=photographer-credit)

**This article was [cross-posted to Medium](https://medium.com/hackernoon/do-pure-functions-exist-in-javascript-b128ed5f0ed2), please use discussion there.**
