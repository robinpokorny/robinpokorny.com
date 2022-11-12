---
layout: default
alt_title: Ahoy
sub_title: I am **Robin Pokorny**, a zealous Software Developer based in Berlin.
image: assets/image/profile.jpg
introduction: >
  Lead Software Engineer at [Klarna](https://klarna.com). I’m really passionate about
  engineering best practices. I think the biggest problem for developers is the lack of focus.

  I started with CSS during the Responsive revolution, moved to JavaScript just when React dropped, and now design full-stack systems for 1M cardholders. As a developer who specialises in *TypeScript*, I help to find solutions by applying functional programming principles. I also organise several meetups: I co-founded [Frontendisti.cz](https://frontendisti.cz/) and run [React Berlin](https://www.meetup.com/react-berlin-meetup/).
featured_talk: https://heapcon.io/railway-oriented-typescript/
---

{% include page-intro.html %}

<main id="main" class="page-content" aria-label="Content">
  <div class="index inner">
    <div style="margin-top: 4rem;">
      <h2>Contact</h2>
      <ul class="taxonomy-index">
        <li><a href="https://twitter.com/robinpokorny" rel="me"><strong>Twitter</strong></a></li>
        <li><a href="https://www.youtube.com/c/robinpokorny" rel="me"><strong>YouTube</strong></a></li>
        <li><a href="https://www.linkedin.com/in/robinpokorny/" rel="me">LinkedIn</a></li>
        <li><a href="https://github.com/robinpokorny" rel="me">GitHub</a></li>
        <li><a href="https://instagram.com/robinpokorny" rel="me">Instagram</a></li>
        <li><a href="https://www.goodreads.com/robinpokorny" rel="me">Goodreads</a></li>
        <li><a href="https://dev.to/robinpokorny" rel="me">DEV</a></li>
        <li><a href="https://medium.com/@robinpokorny" rel="me">Medium</a></li>
        <li><a href="https://noti.st/robinpokorny" rel="me">Notist</a></li>
        <li><a href="https://stackoverflow.com/users/1517783/robin-pokorny" rel="me">StackOverflow</a></li>
        <li><a href="https://www.meetup.com/members/43669902/" rel="me">Meetup</a></li>
        <li><a href="https://www.twitch.tv/robinpokorny" rel="me">Twitch</a></li>
        <li><a href="https://www.facebook.com/robin.pokorny" rel="me">Facebook</a></li>
        <li><a href="mailto:me@robinpokorny.com">E-mail</a></li>
      </ul>
    </div>
    <div style="margin-top: 7rem;">
      <header class="section-title">
        <h2>Latest posts</h2>
      </header>
      <div class="entries-list">
        {% for post in site.posts limit:3 %}
          {% include entry.html show_image=true hide_excerpt=false %}
        {% endfor %}
      </div>
      <div>
        <a href="{% link blog.md %}" class="btn">All posts <span class="icon icon--arrow-right">{% include icon-arrow-right.svg %}</span></a>
      </div>
    </div>
    <div style="margin-top: 7rem;">
      <header class="section-title">
        <h2>Featured talk</h2>
      </header>
      <div class="entries-grid">
        {% assign talk = site.data.talks.items | find: "eventUrl", page.featured_talk %}
        {% include talk.html talk=talk %}
      </div>
      <div>
        <a href="{% link talks.md %}" class="btn">All talks <span class="icon icon--arrow-right">{% include icon-arrow-right.svg %}</span></a>
      </div>
    </div>
    <div style="margin-top: 7rem;">
      {% include newsletter.html %}
    </div>
  </div>
</main>
