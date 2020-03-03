---
title:  "Index as a key is an anti-pattern"
date:   2015-10-12T00:00:00Z
---
So many times I have seen developers use the index of an item as its key when they render a list.

    {todos.map((todo, index) =>
      <Todo
        {...todo}
        key={index}
      />
    )}

It looks elegant and it does get rid of the warning (which was the ‘real’ issue, right?). What is the danger here?
> It may break your application and display wrong data!

Let me explain, a *key* is the only thing React uses to identify DOM elements. What happens if you push an item to the list or remove something in the middle? If the *key* is same as before React assumes that the DOM element represents the same component as before. But that is no longer true.

![Stephen describes the problem he run into on [egghead.io](https://egghead.io/forums/lesson-discussion/topics/break-up-components-into-smaller-pieces-using-functional-components#post-6310)](https://cdn-images-1.medium.com/max/4716/1*9N62zUlyJcQet8kr7e_FVg.png)*Stephen describes the problem he run into on [egghead.io](https://egghead.io/forums/lesson-discussion/topics/break-up-components-into-smaller-pieces-using-functional-components#post-6310)*

To demonstrate the potential danger I created [a simple example](https://jsbin.com/wohima/edit?output) ([with source](http://jsbin.com/wohima/edit?js,output)).

![Screenshot of the example showing the danger of using the index as key.](https://cdn-images-1.medium.com/max/3840/1*GFYGPdDFLYcLFzx-E-GEcw.jpeg)*Screenshot of the example showing the danger of using the index as key.*

It turns out, when nothing is passed React uses the *index *as *key* because it is the best guess at the moment. Moreover, it will warn you that it is suboptimal (it says that in a bit confusing words, yes). If you provide it by yourself React just thinks that you know what you are doing which — remember the example — can lead to unpredictable results.

### Better

Each such item should have a *permanent* and *unique* property. Ideally, it should be assigned when the item is created. Of course, I am speaking about an *id*. Then we can use it the following way:

    {todos.map((todo) =>
      <Todo {...todo}
        key={todo.id} />
    )}
> **Note:** First look at the existing properties of the items. It is possible they already have something that can be used as an *id*.

One way to do so it to just move the numbering one step up in the abstraction. Using a global index makes sure any two items would have different *id*s.

    todoCounter = 1;

    function createNewTodo(text) {
      return {
        completed: false,
        id: todoCounter++,
        text
      }
    }

### Much better

A production solution should use a more robust approach that would handle distributed creation of items. For such, I recommend [shortid](https://www.npmjs.com/package/shortid). It quickly generates ‘short non-sequential url-friendly unique’ ids. The code could look like the following:

    var shortid **=** require('shortid');

    function createNewTodo(text) {
      return {
        completed: false,
        id: shortid.generate(),
        text
      }
    }
> # **TL;DR: **Generate a unique *id* for every item and use it as *key* when rendering the list.

### Update: Exception from the rule

Many people asked if they always, *always* have to generate ids. Others have suggested use cases when using the index as a key seems justifiable.

It is true that sometimes generating new ids is redundant and may be avoided. For example translation of license terms or list of contributors.

To help you decide, I put together three conditions which these examples have in common:

1. the list and items are static–they are not computed and do not change;

1. the items in the list have no ids;

1. the list is *never* reordered or filtered.

When *all* of them are met, you **may safely use the index as a key**.

### Update 2: React, Preact, and *react

Although in this article I write about React, the problem is not exclusive to it. In similar libraries, like Preact, the danger is present, too. However, the effects can be different.

See the following StackOverflow question, where the last element disappears. Also please note the explanation in the answers provided by the creator of Preact, [Jason Miller](undefined).
[**Wrong components rendered by Preact**
*This is a classic issue that is totally underserved by Preact's documentation, so I'd like to personally apologize for…*stackoverflow.com](http://stackoverflow.com/questions/42773892/wrong-components-rendered-by-preact)

### References and related articles

* [Dynamic Children](https://facebook.github.io/react/docs/multiple-components.html#dynamic-children) and [Keyed Fragments](https://facebook.github.io/react/docs/create-fragment.html) in React Docs

* [Explanation from Paul O’Shannessy](https://github.com/facebook/react/issues/1342#issuecomment-39230939)

* [The importance of component keys in React.js](https://coderwall.com/p/jdybeq/the-importance-of-component-keys-in-react-js)

* [React.js and Dynamic Children — Why the Keys are Important](http://blog.arkency.com/2014/10/react-dot-js-and-dynamic-children-why-the-keys-are-important/)

* [React animations for a single component](http://unitstep.net/blog/2015/03/03/using-react-animations-to-transition-between-ui-states/), section *The key is using key*

* [Why you need keys for collections in React](https://paulgray.net/keys-in-react/) by [Paul Gray](undefined)

*If you like this post, please don’t forget to give a *👏* below*.* Every clap notification is a motivational boost for me.*

*If you would like to learn more, I recently (August 2018) started a YouTube channel about JavaScript. I post new video every week, so consider subscribing. Be there from the beginning and help me get better.*
[**Robin Pokorny on YouTube**
*JavaScript is my passion: I like to write JavaScript, I like to read JavaScript, and I like to talk JavaScript.*www.youtube.com/c/robinpokorny](https://www.youtube.com/c/robinpokorny?sub_confirmation=1)
