---
layout: default
alt_title: "Ahoy"
sub_title: "I am **Robin Pokorny**, a zealous Software Developer based in Berlin."
image: assets/image/profile.jpg
introduction: |
  Lead Engineer at [Klarna](https://klarna.com). I’m really passionate about engineering best practices. I think the biggest problem for developers is lack of focus. 
  As a developer who specialises in *JavaScript*, I’m helping to find solutions through applying functional programming principles. I organise meetups, record coding videos, and speak about my findings.
actions:
  - label: "Get Started"
    icon: github
    url: "https://github.com/mmistakes/jekyll-theme-basically-basic"
  - label: "Download"
    icon: download
    url: "https://github.com/mmistakes/jekyll-theme-basically-basic/archive/master.zip"
---

{% include page-intro.html %}

<main id="main" class="page-content" aria-label="Content">
  <div class="index inner">
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
  </div>
</main>