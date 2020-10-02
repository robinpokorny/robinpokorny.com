---
title: First result in a sequence of promises
date: 2017-01-04T22:00:00.000Z
image: https://cdn-images-1.medium.com/max/2000/1*9eDsuqqhFAYAZZo5A01vag.png
excerpt: Recently we were implementing a feature in our app that resulted in a nice kata-like task, encouraging me to play with JavaScript Promises and deepening my knowledge of them.
---

Recently we were implementing a feature in our app that resulted in a nice kata-like task, encouraging me to play with JavaScript Promises and deepening my knowledge of them.

**The task:**

> _For an autocomplete there are several services to ask for suggestions on user input. Those services are ordered from our own servers (cheap), to partners', to Google's (expensive). We want to show the user the first non-empty response. Moreover, we want to ask the next service only if the previous service suggested no items._

Oh, and one part that resembled the kata, too, was that I had a lot of fun solving it.

## Problem in a kata form

In technical terms a _service_ is an asynchronous function which returns a promise. This promise, when resolved, contains an array of suggestions. The array can be empty. Please note that an empty result is different to rejecting the promise.

Given a list of these _services_ invoke each _service_, wait for its result, and then either return the result if non-empty or continue with the next _service_.

> Now it's the time to try it yourself—if you want to—before I show my solution. Start with this [boilerplate with basic test cases](https://gist.github.com/robinpokorny/fb01d868d79e9afadff5d5ddcfa48f08):

## Existing libraries and solutions

A small obstacle in my research for existing solutions was that I did not know how to describe it in keywords. In the end I tried ‘first’, ‘sequence’, ‘cascade’, ‘waterfall’, and ‘fallback’ combined with the obvious ‘promise’. Then I had to filter out numerous results describing Promise.all or Promise.race.

### [promise-fallback](https://www.npmjs.com/package/promise-fallback)

After some research I found this NPM package which basically solves the problem. It uses a (rather cumbersome) recursion and overall is neither easily understandable nor elegant. See the [code](https://github.com/CharlesWall/promise-fallback/blob/6095a5deff9dbbe60006d50d1d2ccda82e8187c4/src/index.coffee) on GitHub (in CoffeeScript). However, _mutatis mutandis_ it could be used for our needs.

### [Executing Promises in Sequence](https://www.abeautifulsite.net/executing-promises-in-sequence-and-stopping-at-the-first-resolved-promise)

The second approach for a similar task (first existing file in a file names list) is explained in a more recent article by [Cory LaViska](undefined). It also takes advantage of recursion. Although it feels tidier (no CoffeeScript helps 😜), I cannot say it reads well. The author himself concludes with a question ‘Do you have a more elegant approach?’

## My solution

Still, I hoped for an approach that would be small, readable, and maintainable. My ideal solution would be analogous to [koa](http://koajs.com/) middlewares.

### Iteration 1: Promise.reduce, Koa, and wrappers

In the end, Cory's article has proven to be extremely useful as it pointed me to the Bluebird documentation where I discovered [Promise.reduce](http://bluebirdjs.com/docs/api/promise.reduce.html).

![Middleware architecture on a [slide](http://www.slideshare.net/joncrosby/rack-middleware/89-Middleware_App_HTTPTuesday_March_17) by [Jon Crosby](undefined)](https://cdn-images-1.medium.com/max/2000/1*leI8zeQaAZcyXEif2-XlOQ.jpeg)_Middleware architecture on a [slide](http://www.slideshare.net/joncrosby/rack-middleware/89-Middleware_App_HTTPTuesday_March_17) by [Jon Crosby](undefined)_

While Promise.reduce is meant for different usages—e.g. summing content of multiple files—it performs one important thing. When going through the array ‘the result of the promise is awaited, before continuing with next iteration.’

Instead of recursively calling the fallback function, I wanted to create a promise chain. So I wrapped each _service_ in a wrapper function that receives the latest result _so far_. Then if this result is empty it calls the service and returns the promise it receives. In the other way it simply passes on the result—as if the path does not match in a koa middleware.

It looks like this:

```ts
const myServiceWrapper = (latestResult) =>
  !latestResult.length
    ? myService(userInput)
    : latestResult

const partnerServiceWrapper = …
const googleServiceWrapper = …
```

Such wrappers can easily be chained:

```ts
Promise.resolve([])
  .then(myServiceWrapper)
  .then(partnerServiceWrapper)
  .then(googleServiceWrapper);
```

Here Promise.resolve([])serves as a _starter_ of the promise chain. Thanks to it we can immediately use then. Also, it sets the latestResult for the first wrapper to [].

Eureka! This _nearly_ solves our problem!

### Iteration 2: Reduce to five lines

These wrappers are simple, readable, and independent. Which hence means maintainable.

So what is left to come? Firstly, we do not want to write the boilerplate. Secondly, the number of _services_ is unknown. We want to pass our function just a given array of _services_.

Coincidently, we solve them both in one step. An important hint here is the name of aforementioned Promise.reduce.

The five (!) line solution does exactly the same as the wrappers chain above for any number of services using Array.reduce (Ooooh! 😃).

We start the chain again with Promise.resolve([]), then in each iteration prev is a promise and next is a _service_.

```ts
const firstResult = (services, userInput) =>
  services.reduce(
    (prev, next) =>
      prev.then((result) => (!result.length ? next(userInput) : result)),
    Promise.resolve([])
  );
```

## Generalised solution

Later I generalised the code for any ‘**first non-empty result in a sequence of promises**’ use case. S*ervices* are now ambiguous _tasks_.

> Do you like [Flow](https://flowtype.org/)? See the solution with type annotations below!

As the second argument you can pass some options (with default values):

- args=[]: Arguments to be passed to each _task_

- initial=undefined: A value to _start_ the promise chain with

- isEmpty=(x) => !x: A function to determine if the result is empty. Should be fast as it is run repeatedly.

```ts
export default (tasks, { args = [], initial, isEmpty = (x) => !x } = {}) =>
  tasks.reduce(
    (prev, next) =>
      prev.then((value) => (isEmpty(value) ? next(...args) : value)),
    Promise.resolve(initial)
  );
```

## Remarks

- Because the code is _de facto_ five lines I decided not to publish it as an standalone NPM package. Or should I?

- As mentioned, number of times the isEmpty function is called is always the same as the number of tasks. This is a drawback of isolation.

- In the example, !result.length is not a good real-world condition as it would throw an exception if theresult was undefined.

- When any of the _tasks_ is rejected the whole encapsulating promise is also rejected.

## Bonus: Solution with Flow type annotations

For clarity I present the solution above with _Flow_ type annotations, which make the whole code a bit longer; although, the main part is still about five lines.

Note that the generic type T corresponds to the results of the _tasks_ and, hence, to the overall result.

```ts
// @flow
type Task<T> = (...args: any[]) => Promise<?T>;

type Options<T> = {
  args?: any[];
  initial?: T;
  isEmpty?: (value: ?T) => boolean;
};

export default <T>(tasks: Task<T>[], options: Options<T> = {}): Promise<?T> => {
  const { args = [], initial, isEmpty = (x) => !x } = options;

  return tasks.reduce(
    (prev, next) =>
      prev.then((value) => (isEmpty(value) ? next(...args) : value)),
    Promise.resolve(initial)
  );
};
```

Notation ?T means that the type is _nullable_, see [explanation](https://gist.github.com/robinpokorny/b18ecd4565104831a78b02a43d62c1af).

> **Please help:** Do you find the Flow annotations helpful? Does it add value for you? Should I keep adding them?

### Related articles

- [Executing Promises in Sequence (and Stopping at the First Resolved Promise)](https://www.abeautifulsite.net/executing-promises-in-sequence-and-stopping-at-the-first-resolved-promise) by [Cory LaViska](undefined)

- [Promise.reduce](http://bluebirdjs.com/docs/api/promise.reduce.html) in Bluebird docs

---

Intro image [Autocomplete Martin Bonov](https://dribbble.com/shots/2220256-Autocomplete).

**This article was [cross-posted to Medium](https://medium.com/hackernoon/first-result-in-a-sequence-of-promises-e8c5f01a1678), please use discussion there.**
