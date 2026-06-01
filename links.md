---
layout: page
title: Links
permalink: /links/
---

<style>
.links-container {
  max-width: 480px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.links-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.links-avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 3px solid #c44536;
}

.links-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: inherit;
}

.links-bio {
  color: #666;
  font-size: 0.95rem;
  margin: 0;
}

.links-section {
  margin-bottom: 2rem;
}

.links-section-title {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #888;
  margin-bottom: 0.75rem;
  padding-left: 0.25rem;
}

.link-item {
  display: block;
  padding: 1rem 1.25rem;
  margin-bottom: 0.75rem;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.link-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: #c44536;
}

.link-item-title {
  font-weight: 600;
  font-size: 1rem;
  margin: 0 0 0.25rem;
}

.link-item-desc {
  font-size: 0.85rem;
  color: #666;
  margin: 0;
}

.link-item-icon {
  display: inline-block;
  margin-right: 0.5rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: #393e46;
  text-decoration: none;
  transition: all 0.2s ease;
}

.social-link:hover {
  background: #c44536;
  border-color: #c44536;
  color: #fff;
  transform: scale(1.1);
}

.social-link svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .links-bio {
    color: #aaa;
  }

  .links-section-title {
    color: #888;
  }

  .link-item {
    background: #16213e;
    border-color: rgba(255, 255, 255, 0.1);
  }

  .link-item:hover {
    border-color: #e94560;
  }

  .link-item-desc {
    color: #aaa;
  }

  .social-link {
    background: #16213e;
    border-color: rgba(255, 255, 255, 0.1);
    color: #eaeaea;
  }

  .social-link:hover {
    background: #e94560;
    border-color: #e94560;
  }
}
</style>

<div class="links-container">
  <div class="links-header">
    <img src="/assets/image/profile.jpg" alt="Robin Pokorny" class="links-avatar">
    <h1 class="links-name">Robin Pokorny</h1>
    <p class="links-bio">Software architect, meet-up organiser, podcaster</p>
  </div>

  <div class="links-section">
    <div class="links-section-title">Featured</div>
    <a href="https://www.linkedin.com/in/robinpokorny/recent-activity/all" class="link-item">
      <p class="link-item-title">Latest posts on LinkedIn</p>
      <p class="link-item-desc">Thoughts on software architecture and engineering</p>
    </a>
    <a href="/talks/" class="link-item">
      <p class="link-item-title">Talks</p>
      <p class="link-item-desc">Conference presentations and meetup talks</p>
    </a>
    <a href="/blog/" class="link-item">
      <p class="link-item-title">Blog</p>
      <p class="link-item-desc">Articles on JavaScript, TypeScript, and architecture</p>
    </a>
  </div>

  <div class="links-section">
    <div class="links-section-title">Meetups & Podcasts</div>
    <a href="https://www.meetup.com/react-berlin-meetup/" class="link-item">
      <p class="link-item-title">React Berlin Meetup</p>
      <p class="link-item-desc">Monthly meetup for React developers in Berlin</p>
    </a>
    <a href="https://www.meetup.com/software-design-berlin/" class="link-item">
      <p class="link-item-title">Software Design Berlin Meetup</p>
      <p class="link-item-desc">Discussing software design and architecture</p>
    </a>
    <a href="https://open.spotify.com/show/1Eo2sxfbDhiOTnRXDbsBYT" class="link-item">
      <p class="link-item-title">FrontKec Podcast</p>
      <p class="link-item-desc">Czech podcast about frontend development</p>
    </a>
  </div>

  <div class="links-section">
    <div class="links-section-title">Support</div>
    <a href="https://www.buymeacoffee.com/robinpokorny" class="link-item">
      <p class="link-item-title">Buy me a coffee</p>
      <p class="link-item-desc">Support my open source and community work</p>
    </a>
  </div>

  <div class="social-links">
    <a href="https://www.linkedin.com/in/robinpokorny/" class="social-link" title="LinkedIn">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    </a>
    <a href="https://www.youtube.com/c/robinpokorny" class="social-link" title="YouTube">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    </a>
    <a href="https://github.com/robinpokorny" class="social-link" title="GitHub">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    </a>
    <a href="https://instagram.com/robinpokorny" class="social-link" title="Instagram">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
    </a>
    <a href="mailto:me@robinpokorny.com" class="social-link" title="Email">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
    </a>
  </div>
</div>
