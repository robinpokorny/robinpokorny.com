---
title: 3 Mistakes That Give Microservices a Bad Name
date: 2023-11-09T09:05:03.400Z
image: https://res.cloudinary.com/dljslvfla/image/upload/c_scale,f_auto,w_1280/v1699522096/Blue_and_Red_Motivational_Quotes_Blog_Banner_wjq6br.png
excerpt: I'm sad to see that microservices are falling in popularity among
  architects and developers. Some say they are unnecessarily complex or
  overengineered. That one needs to learn so many new tools and technologies.
  That they introduce problems we had already solved. However, many ‘do
  microservices’ (unintentionally) wrong…
---
I’m sad to see that microservices are falling in popularity among architects and developers.

Some say they are  [unnecessarily complex or overengineered](https://metyis.com/impact/our-insights/is-over-engineering-always-the-best-approach). That one needs to learn so  [many new tools and technologies](https://landscape.cncf.io/). That they introduce  [problems we had already solved](https://stackoverflow.blog/2020/11/23/the-macro-problem-with-microservices/).

However, many ‘do microservices’ (unintentionally) wrong, mimicking the external displays without harvesting the benefits. I’d say that thinking in microservices is the most useful design approach we’ve created as an industry and every software architect should adopt it.

Here I list 3 mistakes I often see that make some people dislike microservices.

## Mistake 1: Confusing Microservices with Distributed Systems

When you chop your application into multiple servers/containers/lambdas, you haven’t created microservices.

Microservices require a lot of thinking about what logic should be together and what logic should be separate. The resulting areas form so-called Bounded Contexts (a term from DDD) that allow you to independently model that area’s problem. In each area, the same word (like User) has a different meaning so you need to be careful about translating from one context to another.

There is a lot of benefit in keeping these areas isolated and protected in a distributed system, so you bear with the increased complexity. Do not add complexity without that benefit.

## Mistake 2: Independent Deployability over Design-Time Decoupling

It’s nice and efficient when you can make a production change in one service without deploying other services.

But if that change required synchronisation with other team(s) during development then only the last bit was efficient. I’m sure most developers would trade meetings and Slack messages with some difficulties during deployment any day of the week. There is a huge compounding payoff every time a team is free to develop features without hard dependencies.

Decoupling modules during design will help you make those modules independently deployable later; it doesn’t work the other way around.

## Mistake 3: Unnecessarily Small Microservices

I think that the ‘micro’ in the name can mislead developers to create too many, too small microservices.

First, ‘micro’ does not mean the same as ‘atomic’: a piece of logic does not need its own service whenever you can draw some line around it. Second, let’s focus more on the final part: ‘service’. There should be enough functionality in a microservice that it would provide some useful, well, service. In my opinion, any need for distributed transactions is a strong indicator of too small microservices.

No simple rule (200 LOC, rewrite in two weeks, and even more reasonable ones like one-microservice-per-team) can replace a good, deep analysis of your system.

When you apply the microservices thinking and simultaneously avoid these mistakes you might come to the conclusion that your system needs only one microservice for now. That is fine and quite common. And yes, you end up with a ‘monolith’. Yet, you applied a powerful technique you can keep reusing. It was not a decision based on the fixed mindset of two competing patterns. Congrats.