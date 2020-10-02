---
title: Async testing Koa with Jest
date: 2017-10-18T22:00:00.000Z
image: https://miro.medium.com/max/4158/1*oqHRzO0eQZOmZgK1aex6Ew.jpeg
excerpt: Let’s briefly describe the libraries we will be working with. Koa is a JavaScript web server framework. It was developed by the people behind a more famous Express as a lightweight and expressive ‘spiritual successor.’
introduction: Simplify API and middleware tests with lesser-known features
---

> This is a transcript of a presentation given at [October Node.js Berlin Meetup](https://www.meetup.com/preview/Node-js-Meetup-Berlin/events/241810015).

## What is Koa and what is Jest

Let's briefly describe the libraries we will be working with.

**Koa** ([koajs.com](http://koajs.com/)) is a JavaScript web server framework. It was developed by the people behind a more famous Express as a lightweight and expressive ‘spiritual successor.’

It, too, is middleware based. However, it comes bundled with none. Yes, no router, no body parser, and no proxy. Utilising ES2017 _async/await_ functions brings user-friendly functions and end-to-end flow control. (Are you not familiar with _async/await_? Read [this helpful intro](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9) by [Mostafa Gaafar](undefined). We will use them a lot.) That means we can say ‘bye-bye’ to the callback hell, we know from Express. We will be using the second version; in Koa v1 generators provided the flow control.

**Jest** ([facebook.github.io/jest](http://facebook.github.io/jest/)) is a modern unit testing framework from Facebook. It brought several concepts to mainstream JavaScript testing: zero configuration, first-class mocking, and snapshots.

If we say Koa is a (spiritual) successor of Express, Jest can be described as a (spiritual) successor of Jasmine and Expect (which was later [donated to Jest](https://github.com/facebook/jest/issues/1679)).

[The May release](http://facebook.github.io/jest/blog/2017/05/06/jest-20-delightful-testing-multi-project-runner.html) includes a better async/Promise support, which–I think–hasn't received the attention it deserves. I hope it is clear, that is what we will use later.

Personally, I have much more experience with Jest, which I use daily for testing React-based apps. Koa, on the other hand, is my hobby which I've only used on private projects.

## Testing a middleware

A Koa middleware has–in general–this form:

```ts
const greetings = async (ctx, next) => {
  ctx.body = "Hello.";

  await next();

  ctx.body += " Remember to subscribe.";
};

const app = new Koa();
app.use(greetings);
app.listen(3000);
```

It receives context ctx which includes information about the request and response. Mutating this object is the only way the middleware communicates. There is no return value; if there were it would be ignored. Testing the middleware, therefore, means observing changes on the context.

The second argument is the callback that suspends the current middleware and passes control to the next one. This callback must either be awaited or not be invoked at all–turning the middleware order execution. Of course, it may not be called more than once.

![Read more details in the well-written [guide](https://github.com/koajs/koa/blob/master/docs/guide.md), from where I borrowed this animation](https://cdn-images-1.medium.com/max/2338/1*s1Pn5FjXVCs2bBE5sBsaBw.gif)_Read more details in the well-written [guide](https://github.com/koajs/koa/blob/master/docs/guide.md), from where I borrowed this animation_

### Simple test

A simple test of the greeting middleware above can look like this:

```ts
test("greetings works", async () => {
  const ctx = {};

  await greetings(ctx, () => {});

  expect(ctx.body).toBe("Hello. Remember to subscribe.");
});
```

First, yes you may use _async_ in Jest. The framework will wait for all asynchronous operations to finish.

The next callback is an empty function–that is the required minimum. It just returns the flow immediately back to our function.

The context object is a mock. We could provide other data like requested URL or headers.

When the whole middleware finishes, we run assertions on the context object.

As you can see, we cannot distinguish when the changes happened–‘before’ or ‘after’ await next(), we only know the result. However, for many middleware this is enough. Especially those that run something small only before the next middleware, or only after.

What if we need more?

### Before-and-after test

Reading from a file, logging time, and generating ETag are some of the examples when it's essential if it's run before or after passing to next middleware.

Such test could look like the following:

```ts
test("greetings works before-and-after", async () => {
  const ctx = {};

  const next = jest.fn(() => {
    expect(ctx.body).toBe("Hello."); // (1)
    ctx.body += " I am content.";
  });

  await greetings(ctx, next);

  expect(next).toHaveBeenCalledTimes(1);

  expect(ctx.body).toBe(
    // (2)
    "Hello. I am content. Remember to subscribe."
  );
});
```

Whoa, that has grown a bit. But fear not, it's easy.

The most important change is inside the next callback. It's not a noop anymore. This is the place, marked with (1), where we test how ctx changed ‘before.’ Here, we can also prepare for the ‘after’ part, which is asserted at (2).

Please note, we wrap next in jest.fn so we can check it run and the assertions in it passed. Otherwise, they could be skipped by not calling await next(). You can remove it if you test it in a separate test. Alternatively, we could add expect.assertions(2)on top –and keep it updated.

A small warning: I've seen attempts to divide the test for the two parts by calling the middleware without _await_. That is wrong and dangerous as potentially the ‘after’ part may be called, too. Moreover, it would not work if there were asynchronous operations in the ‘before.’

### Complete middleware test

The following is an updated example that uses snapshot testing. The added benefit is that it will catch additional changes, you might otherwise miss.

It also shows how to test a function call on a utility provided by Koa, response.set in our case. It uses a short version how to test the number of calls and arguments in each call, order sensitive.

```ts
test("greetings works complete", async () => {
  const ctx = {
    response: { set: jest.fn() },
    /* ADD OTHER MOCKS */
  };

  const next = jest.fn(() => {
    expect(ctx).toMatchSnapshot();
  });

  await expect(greetings(ctx, next)).resolves.toBeUndefined();

  expect(next).toHaveBeenCalledTimes(1);

  expect(ctx).toMatchSnapshot();
  expect(ctx.response.set.mock.calls).toMatchSnapshot();
});
```

The last enhancement, you can see there, is .resolves matcher added in Jest 20. It does two things: checks the middleware does not return anything and provides better messages in case something throws. Compare:

Before:

```
    Read error
```

After:

```
    Expected received Promise to resolve, instead it rejected to value
     [Error: Read error]
```

The difference would be even more pronounced when we would expect an error. For more, watch my presentation with examples: [Async testing in Jest](https://www.youtube.com/watch?v=bw10S2BK-5w).

### What next?

The small units are tested. Does that mean we are done? No. I like this GIF:

![Still love this one. Unit testers be like: “Looks like it’s working” — [Kent C. Dodds](undefined)](https://cdn-images-1.medium.com/max/2000/1*Aj4uKEWlXBkXhJxxx-XIGA.gif)_Still love this one. Unit testers be like: “Looks like it’s working” — [Kent C. Dodds](undefined)_

We need confidence. Confidence our app works for the end user. We build it up when we pretend to use the app.

## Testing full API

The whole app is technically one middleware which is a [composition](https://github.com/koajs/compose) of all applied middleware, written by us or taken from libraries. It could be tempting to obtain the list with app.middleware and test it the same way as described above. That would be wrong.

On top of composing middleware, Koa wraps the native response and request objects and does few other things. We want to test the whole app. It's not a unit test, let's call this an API test.

Jest cannot do this by itself, for HTTP assertions we will use [supertest](https://github.com/visionmedia/supertest). Supertest is a small wrapper over [SuperAgent](http://visionmedia.github.io/superagent/). The great benefit is that it supports promises from the box.

### Sample app and test boilerplate

The sample app has been taken (with some modifications) from [Valentino Gagliardi](undefined)'s article [A clear and concise introduction to testing Koa with Jest and Supertest](https://www.valentinog.com/blog/testing-api-koa-jest/). Read it! It goes a bit slower and includes a step-by-step guide to get it all running.

Here I will show few other ways to test the app.

```ts
// server/index.js
const Koa = require("koa");
const Router = require("koa-router");
const router = new Router();

const app = new Koa();

router.get("/", async (ctx) => {
  ctx.body = {
    data: "Sending some JSON",
    person: {
      name: "Ferdinand",
      lastname: "Vaněk",
      role: "Brewery worker",
      age: 42,
    },
  };
});

app.use(router.routes());

module.exports = app;
```

It is important we export the koa server instance before we call app.listen(3000). This way, in the test, we have access to the app.callback, and we will avoid one of the most common mistakes in API testing: not closing the server and subsequent memory leaks. Supertest will open and _close_ the server for us.

A basic boilerplate of a test is pretty straightforward:

```ts
// test/root.spec.js

const request = require("supertest");
const app = require("../server");

test("root route", async () => {
  const response = await request(app.callback()).get("/");

  expect(response).toBeDefined(); // @TODO
});
```

Firstly, we describe the request: specify path, set headers, or append data. The result is a response promise. We await it to get the content.

Secondly, we run assertions on the response. In the following we will replace placeholder-like expect(response).toBeDefined in the boilerplate with something more sophisticated.

### Item-level assertions

Of course, response is just an other JS object, so we can use the usual assertions. This is what Valentino does:

```ts
expect(response.status).toEqual(200);
expect(response.type).toEqual("application/json");
expect(response.body.data).toEqual("Sending some JSON");
expect(Object.keys(response.body.person)).toEqual(
  expect.arrayContaining(["name", "lastname", "role", "age"])
);
```

It's great, except the last expect. That one is confusing and doesn't read well.

In terms of readability and maintainability, I prefer more expressive syntax which is part of Expect.

### Object equality

```ts
expect(response.body).toEqual(
  expect.objectContaining({
    person: {
      name: expect.anything(),
      lastname: expect.any(String),
      role: expect.stringMatching(/^Brewery/),
      age: expect.any(Number),
    },
  })
);
```

Here, we describe the structure. Think of Flow or PropTypes.

Expect has several utilities: [expect.anything()](http://facebook.github.io/jest/docs/en/expect.html#expectanything), [expect.any(constructor)](http://facebook.github.io/jest/docs/en/expect.html#expectanyconstructor), [expect.stringContaining(string)](http://facebook.github.io/jest/docs/en/expect.html#expectstringcontainingstring), [expect.stringMatching(regexp)](http://facebook.github.io/jest/docs/en/expect.html#expectstringmatchingregexp), and some [others](http://facebook.github.io/jest/docs/en/expect.html#methods).

Jest will try to match the whole object. So when we would add, say, field nationality, it would fail. To ignore other properties use expect.objectContaining as we do with the whole body (remember it also includes field data).

### Snapshots

There is an alternative: Snapshots. As might have noticed, they are opposite to TDD. One cannot reasonably follow TDD and use snapshots. They show their strength when we either gradually build the API up bit-by-bit in the watch mode, or when we add tests for already working servers.

Starting with snapshots cannot get any simpler:

```ts
expect(response.body).toMatchSnapshot();
```

And the snapshot saved:

```ts
// test/__snapshots__/root.spec.js.snap

exports[`root route with snapshots 1`] = `
    Object {
      "data": "Sending some JSON",
      "person": Object {
        "age": 42,
        "lastname": "Vaněk",
        "name": "Ferdinand",
        "role": "Brewery worker",
      },
    }
    `;
```

I will repeat it: it cannot get any simpler.

Yet, it makes sure we return what we need and nothing extra–which is equally important.

## Not only Koa

Of course, everything we've shown applies to other frameworks as well. For example, API testing is the same for Express–how convenient for refactoring!

> All code is available on GitHub: [robinpokorny/jest-example-koa](https://github.com/robinpokorny/jest-example-koa).

Please, if you have any comments or suggestions reach to me. I love to solve puzzles, so I'll look at any problem you send me about Jest.

### Slides:

<script async class="speakerdeck-embed" data-id="d114e16ab3b5419a840d89c896a88761" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

_Slides from the presentation in Berlin_

### Related:

- [A clear and concise introduction to testing Koa with Jest and Supertest](https://www.valentinog.com/blog/testing-api-koa-jest/) by [Valentino Gagliardi](undefined)

- [An Introduction to Building TDD RESTful APIs with Koa 2, Mocha and Chai](https://www.valentinog.com/blog/test-driven-api-koa-2-mocha-chai/) by [Valentino Gagliardi](undefined)

- [API testing with Jest](https://hackernoon.com/api-testing-with-jest-d1ab74005c0a) by [Koen van Gilst](undefined)

- [Testing async/await middleware?](https://github.com/koajs/koa/issues/1017) (GitHub Issue)

- [Async testing in Jest](https://www.youtube.com/watch?v=bw10S2BK-5w) (recording of presentation)

- [Snapshot Testing APIs with Jest](https://daveceddia.com/snapshot-testing-apis-with-jest/) by [Dave Ceddia](undefined)

- [Snapshot testing in Jest](https://www.youtube.com/watch?v=yUlfFMhVfZo) (recording of presentation)

---

**This article was [cross-posted to Medium](https://medium.com/hackernoon/async-testing-koa-with-jest-1b6e84521b71), please use discussion there.**
