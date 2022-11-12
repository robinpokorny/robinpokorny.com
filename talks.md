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
        {% include talk.html %}
      {% endfor %}
    </div>
  </section>
{% endfor %}
