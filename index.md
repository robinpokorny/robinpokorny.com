---
layout: default
alt_title: Ahoy
sub_title: I am **Robin Pokorny**, a zealous Software Developer based in Berlin.
image: assets/image/profile.jpg
introduction: >
  Lead Engineer at [Klarna](https://klarna.com). I’m really passionate about
  engineering best practices. I think the biggest problem for developers is lack
  of focus. 

  As a developer who specialises in *JavaScript*, I’m helping to find solutions through applying functional programming principles. I organise meetups, record coding videos, and speak about my findings.
actions:
  - label: Twitter
    icon: twitter
    url: https://twitter.com/robinpokorny
  - label: Talks
    icon: youtube
    url: /talks
featured_talk: https://www.meetup.com/JAMStack_berlin/events/270057505/
---

{% include page-intro.html %}

<main id="main" class="page-content" aria-label="Content">
  <div class="index inner">
    {% comment %}
    <div>
      <header class="section-title">
        <h2>Talks</h2>
      </header>
      <div class="entries-list">
        {% assign featured = site.data.talks.items | find:"eventUrl", "page.featured_talk" %}
        {{ site.data.talks.items | where: "eventUrl", page.featured_talk }}
        {{ page.featured_talk }}
      </div>
      <div>
        <a href="{% link talks.md %}" class="btn">All talks <span class="icon icon--arrow-right">{% include icon-arrow-right.svg %}</span></a>
      </div>
    </div>
    {% endcomment %}
    <div>
      <h2>Contact</h2>
      <ul class="taxonomy-index">
        <li><a href="https://twitter.com/robinpokorny" rel="me"><strong>Twitter</strong></a></li>
        <li><a href="https://www.youtube.com/c/robinpokorny" rel="me"><strong>YouTube</strong></a></li>
        <li><a href="https://dev.to/robinpokorny" rel="me">DEV</a></li>
        <li><a href="https://instagram.com/robinpokorny" rel="me">Instagram</a></li>
        <li><a href="https://github.com/robinpokorny" rel="me">GitHub</a></li>
        <li><a href="https://medium.com/@robinpokorny" rel="me">Medium</a></li>
        <li><a href="https://noti.st/robinpokorny" rel="me">Notist</a></li>
        <li><a href="https://stackoverflow.com/users/1517783/robin-pokorny" rel="me">StackOverflow</a></li>
        <li><a href="https://www.meetup.com/members/43669902/" rel="me">Meetup</a></li>
        <li><a href="https://www.twitch.tv/robinpokorny" rel="me">Twitch</a></li>
        <li><a href="https://www.facebook.com/robin.pokorny" rel="me">Facebook</a></li>
        <li><a href="http://stackoverflow.com/story/robinpokorny" rel="me">Résumé</a></li>
        <li><a href="mailto:me@robinpokorny.com">E-mail</a></li>
      </ul>
    </div>
    {% comment %}
    <div>
      <header class="section-title">
        <h2>Posts</h2>
      </header>
      <div class="entries-list">
        {% for post in site.posts limit:5 %}
          {% include entry.html %}
        {% endfor %}
      </div>
      <div>
        <a href="{% link blog.md %}" class="btn">All posts <span class="icon icon--arrow-right">{% include icon-arrow-right.svg %}</span></a>
      </div>
    </div>
    {% endcomment %}
  </div>
</main>
