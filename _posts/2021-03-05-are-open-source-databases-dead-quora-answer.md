---
title: Are open-source databases dead? [Quora answer]
date: 2021-03-05T16:08:51.181Z
excerpt: Yes, they are dying (this is no joke answer). Sure, many open-source
  databases are being used and maintained every day. And, of course, any
  open-source software will exist and can be forked by anybody. So on the
  technical level, they cannot die.
---
> This is an answer to a Quora question: [Are open-source databases dead?](https://www.quora.com/Are-open-source-databases-dead/answer/Robin-Pokorn%C3%BD).

Yes, they are dying (this is no joke answer).

Sure, many open-source databases are being used and maintained every day. And, of course, any open-source software will exist and can be forked by anybody. So on the technical level, they cannot die.

However, we have seen several big open-source databases die in the past years. MongoDB, Redis, CockroachDB, TimescaleDB, and–most recently–Elasticsearch. All of those databases ceased to be open-source.

Let me show it on the example of MongoDB and Elasticsearch. Both of the companies behind the databases decided to switch to Server Side Public License (SSPL) which is not considered to be an open-source license. Since this license allows free (as in beer) use for _some_ use cases we will likely be seeing them for quite some time. It’s nevertheless a death of an open-source project.

The reason cited by both projects is… Amazon. More specifically AWS. You see, Mongo and ES were developed by companies and these companies not only lead the project development, but they also hold the trademarks etc. They both also make money on providing some services for their DB, be it consulting, paid extensions, or DBaaS (database-as-a-service) hosting. Historically, publishing open-source software and making money on the services worked great and for many companies, it was a viable business strategy (yes, open source is a business strategy).

In the world of AWS (and other cloud providers) it creates an asymmetrical relationship: AWS can provide and charge for their DBaaS based on an open-source database while paying nothing back to Mongo or Elastic (Amazon has the manpower to support it themselves even on large scale). Which is completely OK under the open-source licenses.

Both of those companies realised that their business strategy was wrong and open-sourcing their DB was a mistake (from the business point of view). So they changed the license to a non-free (as in speech) and non-open one. This created some controversy as relicensing open-source is generally not possible, they took advantage of a clause in CLA that every contributor had to sign.

(Side note, this lowered already low trust in CLAs. A problem for some mostly big companies, that feel they need some extra intellectual property protection and still want to have an open-source program.)

If I were starting a business in providing a database engine now, I’d really think about open-sourcing it based on the experience of Mongo and Elastic. And we see exactly that already, with DBs like Fauna or Firebase not being open-sourced at all.

So __I think that open-source databases are dying__ because we might see less and less of them published in the future.

---

### Related articles

* [And just like that, Amazon Web Services forked Elasticsearch, Kibana. Was that part of the plan, Elastic?](https://www.theregister.com/AMP/2021/01/22/aws_elastic_fork/ "www.theregister.com") on The Register
* [Elasticsearch does not belong to Elastic ](https://drewdevault.com/2021/01/19/Elasticsearch-does-not-belong-to-Elastic.html "drewdevault.com")on Drew DeVault's blog
* [Doubling down on open, Part II](https://www.elastic.co/blog/licensing-change "www.elastic.co") on Elastic blog
* [Why We're Relicensing CockroachDB](https://www.cockroachlabs.com/blog/oss-relicensing-cockroachdb/ "www.cockroachlabs.com") on Cockroachlabs blog
* [How we are building a self-sustaining open-source business in the cloud era (version 2)](https://blog.timescale.com/blog/building-open-source-business-in-cloud-era-v2/ "blog.timescale.com") on Timescale blog