---
title: AI Made Every Developer a Tech Lead. Now What?
date: 2026-11-06T10:56:00.000+01:00
image: https://res.cloudinary.com/dljslvfla/image/upload/t_Thumb/v1793958837/ai-made-every-developer-a-tech-lead-robin-pokorny_r6cah1.jpg
excerpt: "Two things happened to our industry at the same time, and I don't
  think we've connected them yet. The first: the cost of creating code is
  asymptotically approaching zero. Code is not the differentiator anymore. You
  can argue about how close to zero we are, but not about the direction.  The
  second comes from SignalFire's State of Talent Report 2026. In big companies
  and small startups alike, the number of developers per engineering manager is
  approaching 15."
---
Two things happened to our industry at the same time, and I don't think we've connected them yet.

The first: the cost of creating code is asymptotically approaching zero. Code is not the differentiator anymore. You can argue about how close to zero we are, but not about the direction.

The second comes from SignalFire's [State of Talent Report 2026](https://www.signalfire.com/blog/signalfire-state-of-talent-report-2026). In big companies and small startups alike, the number of developers per engineering manager is approaching 15. That is 30 to 40 percent more than just four years ago. Organisations are flattening. SignalFire calls the result the *Super IC*.

So the typing is going away and the management ladder is getting crowded. Yet somebody still has to decide what to build, which trade-offs to accept, where the boundaries go, and who, or what, builds it. That list has been a tech lead's job description.

> The typing is going away and the management ladder is getting crowded.

Which brings me to some great news. You have been promoted.

There was no budget for a compensation change. It comes with a lot more responsibility. And it is not optional.

Welcome to tech leadership. It's intimidating if nobody trained you for it. Nobody trained me either. The good news is that decades of people already thought hard about every item on that list and wrote it down. Most of us just never got the message.

So this post is your orientation. Five questions, and for each one the idea or two that shaped my own perspective the most, with the source named so you can go deeper. It's a subjective list. It's also the one I'd hand to a friend who just got the same promotion.

*Note: I gave it as a talk at [FrontKon](https://frontkon.cz) in Prague in October 2026. This is the blog version. It doesn't follow the slides card by card, but the ideas are the same and so are the jokes (sorry). If you'd rather watch than read, [the recording is on YouTube](https://youtu.be/vvQsZg0C5I0) (23 min).*

## The third prong

Seven years ago, an article shaped why I became a tech lead. Patrick Kua's [Trident Model of Career Development](https://www.patkua.com/blog/the-trident-model-of-career-development/). Kua says we used to have two prongs. Individual contributors, who write code and solve problems independently. And management, who organise the work, budgets, people. (Some people say resources. I don't call people resources.)

Then he names the third prong: **technical leadership**. It comes with four activities:

* Clarify technical requirements.
* Explain the trade-offs in technical solutions.
* Establish a technical vision.
* Manage technical risk.

![The Trident Model: three career paths, Management, Technical Leadership and Individual Contributor,](https://res.cloudinary.com/dljslvfla/image/upload/t_Thumb/v1793897869/trident-model-patrick-kua_rdv1pq.png)

*Diagram by [Patrick Kua](https://www.patkua.com/blog/the-trident-model-of-career-development/), from The Trident Model of Career Development. Used with attribution.*

Kua is careful to say that tech leadership is an activity, not necessarily a role. Many engineering managers have always done it. But over time we put it into specialised positions too: *staff engineers, principal engineers, tech leads, architects*, whatever your company calls them.

Now look at the two data points again. Being an IC whose job is typing code? That path is closing. The manager path? Good luck, there are 15 of you per opening. And when an AI writes your code, somebody still has to do all four things on the list.

That somebody is you. So yes, you've been promoted.

When I first saw that list I said: I love this, I want to do this. I also had no idea how to do most of it in practice.

Now I'll be your onboarding buddy and help you with it. We'll cover the five questions: WHAT, WHICH, WHERE, WHO and WHY.

Let's go.

## WHAT to build

The idea that shaped me most here is from Marty Cagan's [Inspired](https://www.goodreads.com/book/show/35249663-inspired). It's the seminal book for product managers, and I think every tech lead should read it as well.

The distinction is **outputs versus outcomes**. An output is a finished ticket. A button that appears somewhere. An outcome is a change in the behaviour of other humans. They buy something. They resolve their problem faster. They invite a teammate. Something changes.

We've been paid for outputs for a long time. That deal is ending.

AI is very good at outputs. A plethora of outputs. You don't want to match that. Outcomes are much harder, and understanding what actually drives them is where you have to put your input.

The second idea on WHAT is from Dave Griffith's piece [What Do Engineers Mean When We Say 'Taste'?](https://davegriffith.substack.com/p/what-do-engineers-mean-when-we-say) Picture two jigsaw pieces. One is jammed into the gap and held there with a strip of tape. The other drops in cleanly. Both close the hole. **One works. The other fits.** That's the difference between the competence of producing a solution that works and the taste of choosing a solution that fits.

When the boilerplate writes itself, competence is table stakes. Fit is a judgement call. Judgement is the part we still own.

This is the question our industry is already talking about. Product engineering. I've even seen articles saying everybody is a product manager now. I don't agree. It's necessary, but it's not enough. There's still a lot of technical work left, and that's the rest of this post.

## WHICH trade-offs to accept

My recommendation here is [Fundamentals of Software Architecture](https://www.goodreads.com/book/show/44144493-fundamentals-of-software-architecture) by Mark Richards and Neal Ford. I listened to it as an audiobook. A technical book, as an audiobook. It was an amazing experience, and then I bought the ebook version and read it again.

The idea that stuck is thinking in **architectural characteristics**. The *\-ilities*. Scalability, simplicity, extensibility, security, performance, consistency. And the point is not to list them. The point is to be very clear about what you want and what you are willing to not have.

> Strategy lives in where you say no.

Because many of them are at odds. Very secure is hard to make performant. Very scalable may cost you consistency. Very simple may not be easy to extend later. Strategy lives in where you say no.

Now try that with an AI. Performance? I want it. Security? Yes please. Consistency, extensibility,… all of it. And, sure, I know Google does all of it, therefore it's solvable and there will be a working solution.

It will just arrive with a really big bill from your cloud provider. Which is a trade-off of a different kind.

Richards and Ford call this the First Law of Software Architecture: **everything in software architecture is a trade-off.** There is a corollary: if you found something without a trade-off, you haven't found the trade-off yet. And it will be very painful when you do.

One more thing before we move on. A performant system is possible. A secure system is possible. The trade-off only bites when you demand both from the same piece of code. So build two pieces and draw a line between them. That line is a boundary.

## WHERE the boundaries go

I believe that a large part of an architect's job is finding boundaries between parts of a system that have different characteristics, or that somehow belong in their own bucket. One service handles the load, another does the slow verification, maybe asynchronously. That's one of the ideas behind microservices, when it's done for the right reason.

There's a big pitfall here, and the best thinking about it is Eric Evans' [Domain-Driven Design](https://www.goodreads.com/book/show/179133.Domain_Driven_Design). One of the greatest ideas in software architecture of the past twenty years. I still don't recommend reading the book first. It's this thick. It starts with the technical patterns, which many people now think are DDD (aggregates, anyone?), and the important part, bounded contexts, is buried in the middle.

Unfortunately I have no DDD book to recommend instead. All of them are thick. It's one of those topics you absorb through osmosis, and one day it clicks (and at exactly that moment you lose the ability to explain it to newcomers).

So let me try anyway. Just because two things share a name doesn't mean they belong together.

Take 'customer'. In sales, a customer is an ARR figure and a segment. In billing, a customer is a credit card and a billing address. In inventory, a customer is a shipping address and a list of shipments. Same word, three meanings. Each one is precise only inside its own boundary.

![Three hand-drawn bounded contexts, Sales, Billing and Inventory, each with its own meaning of Customer](https://res.cloudinary.com/dljslvfla/image/upload/t_Thumb/v1793897886/card-customer-bounded-contexts_kwmbzb.jpg)

It is very tempting to make it one thing. One class, accessed for three different reasons, with clashing requirements and clashing understanding of what it means. That is one of the main sources of architectural rot. **Boundaries can be microservices, modules, even separate classes.** What matters is that they exist and that they are enforced.

And there's a twist. Agents write fast across boundaries they cannot see. The coupling arrives before anyone notices.

Now the soft part. Evans realised these boundaries are defined by language. People in billing say 'customer', not 'billing customer', because in their context it's obvious. Finding the boundaries means finding where the language breaks. Which means talking to people.

That's where workshops come in. Specifically [EventStorming](https://www.goodreads.com/book/show/28947184-introducing-eventstorming), coined by Alberto Brandolini. I've been in rooms like that. A long wall, hundreds of sticky notes, people writing down the events as they happen in the system. And then they disagree.

The disagreement is the desired part. That's where you see the boundaries take shape.

Two implications. **Finding boundaries involves other people**, so it's not an architect in an ivory tower handing blueprints down to teams. And it's one of the main jobs an architect has. A lot of what I do now is talking to people, letting them talk back, and understanding the shared problem space together. Our job is facilitation.

## WHO builds it

We have the boundaries. We've picked the trade-offs. Now, who builds it?

This used to be a question like: do we hire an offshore company, or do we put our best principal engineer on it? We still have those questions. But now there's a new one. How much of this do we let AI build?

I hear rather simplifying answers. **Vibe coding all the way. Or: never vibe code**, it's maintenance hell. Michael Plöd took a more nuanced approach in [Staffing and Procurement for Fast Flow](https://www.michael-ploed.com/blog/staffing-and-procurement-for-fast-flow), and I want to show you my reading of it. It's a long article, so I'm summarising.

Two questions decide how far you can hand a piece of work to an agent.

First, how complex is it? Plöd borrows the Cynefin vocabulary. A clear problem has a known best practice; you follow it. A complicated one has many moving parts, but it is linear and an expert can describe all of it (think a Ferrari engine). A complex one is non-linear. It breaks in ways you can't predict, and you only learn what it is by building it.

Second, how much does it matter to your business? Core work is what differentiates you from everyone else. Supporting work has to be done, but every other business does it too.

Cross the two and you get a delegation level. Core and complex: AI as a coding assistant. Code gets written, but you understand every line and how it fits the whole. Complicated: spec-driven development. You write the specification in detail and let agents build it. One level further: agentic modelling, where the agent co-writes the spec with you and then implements it. Clear and supporting: the dark factory. Hands off, just build it, I don't care.

![Hand-drawn grid: Complex, Complicated and Clear across the top, Core and Supporting down the side, with delegation levels L1 Coding Agent to L4 Full Agentic in the cells](https://res.cloudinary.com/dljslvfla/image/upload/t_Thumb/v1793897878/card-ai-delegation-levels_wxak2c.jpg)

*My card from the talk. The model is Michael Plöd's, from [Staffing and Procurement for Fast Flow](https://www.michael-ploed.com/blog/staffing-and-procurement-for-fast-flow).*

Two things to take from this. First: if your core business is clear, you don't have a business. Second: this is not about saving money. It's about **saving cognitive load**. You delegate the specifiable so the team can think about what actually differentiates you.

And cognitive load brings us to the last question.

## WHY it feels so hard

We have the books. We have the tools. We can define the trade-offs and draw the boundaries. It still feels hard.

People disagree. People have ideas (which is great) and then don't follow the process and forget things. Somebody wasn't told. Somebody wasn't aligned.

It feels hard because our job is complex, not complicated. And that's because **software is socio-technical**.

We don't build in a vacuum. We build in a company, with coworkers, with office politics, with emotions. The realisation that took me longest is that these things are not a distraction from the work. They are the work. Anything that includes humans is complex in the Cynefin sense, and the technology sits inside that. Xin Yao puts it in five words: [social complexity subsumes technical complication](https://www.agile-meets-architecture.com/2026/schedule).

That was a difficult pill to swallow. You are not there just to write great specs and great code. You are there to align people. Bring them into a room, let them speak, explain the trade-offs, understand why they might not be happy about them, why they feel anxious or threatened. All of that is the job.

If that sounds soft, here is the hardest line in this post. About ten years ago I heard a phrase and my immediate reaction of my engineer's brain was: no, that can't be true. The phrase was 'emotions are facts'. I came to internalise it anyway. It doesn't mean the person is right. It doesn't mean their emotions overrule everything. But the reality that they feel a certain way is a fact, and you have to deal with it like any other fact.

Look at what happens when a project blows up. It's rarely the technical part. It's that somebody forgot to tell somebody something. Somebody acted in their own best interest without knowing what the rest of the organisation was doing. The code was cheap. The people stayed exactly as expensive.

This touches complexity and systems thinking, a rabbit hole I've enjoyed for years. [Thinking in Systems](https://www.goodreads.com/book/show/3828902-thinking-in-systems) by Donella Meadows is the entry. And early in that book there's a reference I dismissed when I first read it.

Meadows cites Václav Havel. When I finally read Havel's essays, I understood how well he grasped the complexity of a society. How it's not enough to say the right thing, or even to be right. How pressure works on people. I even enjoyed his letter to Gustáv Husák, which is a sentence I never expected to write. It's a serious analysis of a complex system, and I may have learned something for my job from it. Surprising.

His concept of **living in truth** feels pressing too. The greengrocer puts the slogan in his shop window not because he believes it, but so people leave him alone. In software, that's process theatre. Stand-ups nobody listens to. Rituals nobody believes in. Living in truth means naming what is actually happening, in the code and in the team.

The socio-technical part is the one I can't overstress. If you look at my LinkedIn, it says socio-technical architect. I stand by that.

## Go get made

We learned from a lot of people in this post. Kua, Cagan, Griffith, Richards and Ford, Evans, Brandolini, Plöd, Yao, Meadows. Even Havel.

None of them were born like that. That's the important bit. They were made by the problems in front of them. By the people they were in a room with. And by the books somebody handed them at some point.

I hope I did some of the handing. Pick one of them and commit to it. It helped me. It might just help you.

**Strong tech leads are made, not hired.**

Go get made.

- - -

**Reading list & video**

The [full reading list](https://robinpokorny.com/ai-tech-lead) has all resources in one place, plus the extended shelf that didn't fit here.

And if you prefer the stage version with the hand-drawn cards, [the talk recording from FrontKon#26](https://youtu.be/vvQsZg0C5I0) is 23 minutes.

![Robin on stage at FrontKon 2026](https://res.cloudinary.com/dljslvfla/image/upload/t_Thumb/v1793958889/robin-on-stage-frontkon_vkd8gk.jpg)

- - -

*Title photo by [Nubelson Fernandes](https://unsplash.com/@nublson).*
