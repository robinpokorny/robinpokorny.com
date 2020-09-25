---
layout: page
title: Talks
permalink: /talks/
---

{% assign talksByYear = site.data.talks.items | sort: 'date' | reverse | group_by_exp: 'talk', 'talk.date | date: "%Y"' %}
{% for year in talksByYear %}

  <section id="{{ year.name }}" class="taxonomy-section">
    <h2 class="taxonomy-title">{{ year.name }}</h2>
    <div class="entries-grid">
      {% for talk in year.items %}
        <article class="entry">
          <header class="entry-header">
            <h3 class="entry-title">
              {{ talk.title }}
            </h3>
            {% if talk.image and talk.image != '' %}
              {% assign entry_image = talk.image %}
              {% unless entry_image contains '://' %}
                {% assign entry_image = entry_image | relative_url %}
              {% endunless %}
              {% assign entry_image = entry_image | escape %}
              <img class="entry-image u-photo" src="{{ entry_image }}" alt="">
            {% endif %}
          </header>
          <footer class="entry-meta">
            <ul>
              <li><span class="icon">{% include icon-calendar.svg %}</span><time class="entry-time" datetime="{{ talk.date | date_to_xmlschema }}">{{ talk.date | date: "%-d %b %Y" }}</time></li>
              {% if talk.video %}
              <li><span class="icon">{% include icon-youtube.svg %}</span><a href="{{ talk.video }}">video</a></li>
              {% endif %}
              {% if talk.slides %}
              <li><span class="icon">{% include icon-pdf.svg %}</span><a href="{{ talk.slides }}">slides</a></li>
              {% endif %}
            </ul>
          </footer>
          <div class="entry-excerpt">
            {% if talk.description %}
              {{ talk.description | markdownify }}
            {% endif %}
            {% if talk.event and talk.eventUrl %}
            <p>
              <a href="{{ talk.eventUrl }}" class="more-link">{{ talk.event }} <span class="icon icon--arrow-right">{% include icon-arrow-right.svg %}</span></a>
            </p>
            {% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  </section>
{% endfor %}
