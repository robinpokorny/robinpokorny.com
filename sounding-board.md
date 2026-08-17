---
layout: default
title: Sounding Board Consultation
permalink: /sounding-board/
image: https://res.cloudinary.com/dljslvfla/image/upload/t_Thumb/v1781183584/20260528_WEB-EXPO-2026_2.Photo_PetrLebeda_normal-size-62_copy_mabja4.jpg
---

<style>
  /* Premium, less-is-more design aesthetic */
  .sb-container {
    max-width: 800px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    color: #111;
  }

  .sb-hero {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    margin: 4rem 0;
  }

  @media (min-width: 768px) {
    .sb-hero {
      flex-direction: row;
      text-align: left;
      margin: 6rem 0;
    }
    .sb-hero-content {
      flex: 1.2;
      padding-right: 2rem;
    }
    .sb-hero-image {
      flex: 0.8;
    }
  }

  .sb-hero h1 {
    font-size: 2.5rem;
    line-height: 1.15;
    margin-bottom: 1.25rem;
    letter-spacing: -0.03em;
    font-weight: 800;
  }

  .sb-hero p {
    font-size: 1.2rem;
    color: #444;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .sb-image {
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
    max-width: 100%;
    display: block;
  }

  .sb-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #111;
    color: #fff !important;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none !important;
    font-size: 1.1rem;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  .sb-btn:hover {
    background: #000;
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  }

  .sb-section {
    margin: 5rem 0;
  }

  .sb-section h2 {
    font-size: 1.8rem;
    letter-spacing: -0.02em;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  .sb-card {
    background: #fafafa;
    border-radius: 16px;
    padding: 3rem;
    margin: 3rem 0;
    border: 1px solid #f0f0f0;
  }

  .sb-card ul {
    margin: 1.5rem 0;
    padding-left: 1.5rem;
  }

  .sb-card li {
    margin-bottom: 0.75rem;
    line-height: 1.5;
  }

  .sb-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  @media (min-width: 600px) {
    .sb-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .sb-step-card {
    background: #fff;
    border: 1px solid #eaeaea;
    border-radius: 12px;
    padding: 2rem;
    position: relative;
    overflow: hidden;
  }

  .sb-step-num {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 700;
    color: #888;
    margin-bottom: 0.75rem;
    display: block;
  }

  .sb-step-title {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    letter-spacing: -0.01em;
  }

  .sb-step-desc {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    margin: 0;
  }

  .sb-faq {
    max-width: 650px;
    margin: 0 auto;
  }

  .sb-faq-item {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #eee;
  }

  .sb-faq-item:last-child {
    border-bottom: none;
  }

  .sb-faq-q {
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 0;
    letter-spacing: -0.01em;
    cursor: pointer;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    padding: 0.5rem 0;
  }

  .sb-faq-q::-webkit-details-marker {
    display: none;
  }

  .sb-faq-q::after {
    content: "+";
    font-size: 1.25rem;
    font-weight: 400;
    color: #666;
    transition: transform 0.2s ease;
    margin-left: 1rem;
    flex-shrink: 0;
  }

  details.sb-faq-item[open] .sb-faq-q::after {
    content: "−";
  }

  details.sb-faq-item[open] .sb-faq-q {
    margin-bottom: 0.75rem;
  }

  .sb-faq-a {
    color: #444;
    line-height: 1.6;
    font-size: 1.05rem;
  }

  .sb-price-block {
    text-align: center;
    background: #111;
    color: #fff;
    padding: 4rem 2rem;
    border-radius: 16px;
    margin: 5rem 0;
  }

  .sb-price-block h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    letter-spacing: -0.03em;
  }

  .sb-price-block p {
    color: #aaa;
    max-width: 500px;
    margin: 0 auto 2rem auto;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  .sb-price-block .sb-btn {
    background: #fff;
    color: #111 !important;
  }

  .sb-price-block .sb-btn:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }

  .sb-text-content {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #333;
  }

  .sb-text-content p {
    margin-bottom: 1.5rem;
  }

  .sb-hero-bio-text {
    font-size: 0.95rem;
    color: #555;
    line-height: 1.5;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #eee;
  }
  .sb-hero-skimmer {
    display: inline-block;
    background: #f5f5f5;
    padding: 1rem 1.25rem;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    color: #222;
    margin-bottom: 2rem;
    border-left: 3px solid #111;
  }
</style>

<div class="sb-container">

  <header class="sb-hero">
    <div class="sb-hero-content">
      <h1>An hour of thinking with someone who has seen this before.</h1>
      <p>A confidential sounding-board session on architecture and socio&#8288;-&#8288;technical strategy: buy vs. build, vendor and platform choices, team boundaries. One decision, sixty minutes, an experienced architect with no stake in the answer.</p>

      <div class="sb-hero-skimmer">
        For VPs of Engineering, CTOs, and heads of platform.<br/>One participant, one decision. Not a workshop, not a project.
      </div>

      <div>
        <a href="https://cal.com/robinpokorny/60min" class="sb-btn">Book a session &rarr;</a>
      </div>
    </div>
    <div class="sb-hero-image">
      <img src="{{ page.image }}" alt="Robin Pokorny" class="sb-image">
      <div class="sb-hero-bio-text">
        <strong>Robin Pokorny</strong>, socio-technical software architect based in Berlin. Sr Staff Engineer at Ataccama, conference speaker, twenty years across product engineering and architecture.
      </div>
    </div>
  </header>

  <section class="sb-card">
    <h2>When this is the right call</h2>
    <p class="sb-text-content">You lead engineering, and a decision is on your desk:</p>
    <ul class="sb-text-content">
      <li><strong>Buy vs. build,</strong> and your own team isn't neutral about the answer.</li>
      <li><strong>A vendor or platform choice</strong> that feels off in a way you can't articulate yet.</li>
      <li><strong>A team-boundary or ownership question</strong> that's still a hunch, not yet a conflict.</li>
      <li><strong>An RFC waiting for your approval,</strong> and you want one independent read before you sign off.</li>
      <li><strong>A consultancy proposal for a six-week engagement,</strong> and you'd like to confirm it's even the right problem first.</li>
    </ul>
    <p class="sb-text-content" style="color: #666; font-size: 1rem; margin-top: 2rem;">
      These decisions rarely lack information. What they lack is a neutral, experienced counterpart: your team is a stakeholder in the outcome, peers at other companies can't see your context, and a consultancy needs weeks before it earns an opinion. This session exists to fill exactly that gap: a small investment from both sides, and often the fastest way to unblock a decision that has been circling for months.
    </p>
  </section>

  <section class="sb-section sb-text-content">
    <h2>What this is</h2>
    <p>One hour, one decision, one specialist across the table. My work sits at the seam where organisation and architecture meet: strategic domain-driven design, bounded contexts, team topologies, and the coördination problems that show up as "technical" debates. You bring the decision; I bring twenty years of pattern recognition and no stake in the answer.</p>
    <p>This is a <strong>sounding board, not a verdict machine.</strong> I'll challenge your assumptions directly, name the concern you haven't named, and map how reversible each option really is. You leave with <em>your</em> position clarified: one you can defend to your team, because you've already defended it once.</p>

    <blockquote style="margin: 2rem 0; padding: 1.5rem 2rem; background: #f9f9f9; border-left: 4px solid #111; font-size: 1.15rem; font-style: italic; border-radius: 0 8px 8px 0;">
      The last ten minutes are the deliverable. You say your decision back to me the way you'll say it to your team. If it doesn't hold up in the room, we fix it in the room.
    </blockquote>
  </section>

  <section class="sb-section sb-text-content">
    <h2>Who you'll be talking to</h2>
    <p>I'm Robin Pokorny, a socio-technical software architect based in Berlin. For twenty years I've worked where architecture and organisation intersect: currently as Sr Staff Engineer at Ataccama, previously across product engineering in startups and scale-ups. I practise strategic domain-driven design, work with team topologies daily, and speak about both at international conferences.</p>
    <p>I run these sessions deliberately alongside my full-time role. It keeps my judgment anchored in the day-to-day reality of shipping software with real teams, not in a slide deck from a past life. It also means I hold only a few slots per week, and I'd rather keep the offering small and sharp than scale it.</p>
  </section>

  <section class="sb-section sb-text-content">
    <h2>The shape of these decisions</h2>
    <p><em>Illustrative examples, composited from real situations; details changed.</em></p>

    <div style="margin-top: 2rem;">
      <h4 style="margin-bottom: 0.5rem; font-size: 1.2rem;">Buy vs. build</h4>
      <p>A VP of Engineering arrives with an RFC to build an internal feature-flag and rollout platform after six weeks of back-and-forth. In the session we separate the one genuinely differentiating requirement from the pride of ownership driving the rest. He leaves with a buy decision, a thin adapter around the one gap, and a written revisit criterion for twelve months out.</p>
    </div>

    <div style="margin-top: 2rem;">
      <h4 style="margin-bottom: 0.5rem; font-size: 1.2rem;">The vendor that feels off</h4>
      <p>A CTO can't articulate why a data-platform contract makes her uneasy, even though the demos are good and the price is fine. Mapping the proposal against her team boundaries surfaces it: the contract quietly couples two domains that need to evolve independently, putting the vendor in the middle of every future change. She doesn't walk away; she renegotiates the scope to one domain. The unease gets a name, and the deal gets smaller and better.</p>
    </div>
  </section>

  <section class="sb-section">
    <h2>How it works</h2>
    <div class="sb-grid">
      <div class="sb-step-card">
        <span class="sb-step-num">Step 1</span>
        <h4 class="sb-step-title">Book &amp; pay</h4>
        <p class="sb-step-desc">Pick a slot, pay by card, done in one sitting.</p>
      </div>
      <div class="sb-step-card">
        <span class="sb-step-num">Step 2</span>
        <h4 class="sb-step-title">Answer five questions</h4>
        <p class="sb-step-desc">A short intake form at booking, ten minutes of your time. It's how we skip the small talk and start at minute one. One optional attachment if you have an RFC or diagram.</p>
      </div>
      <div class="sb-step-card">
        <span class="sb-step-num">Step 3</span>
        <h4 class="sb-step-title">We talk, 60 minutes</h4>
        <p class="sb-step-desc">High density, zero fluff. Your thinking, stress-tested.</p>
      </div>
      <div class="sb-step-card">
        <span class="sb-step-num">Step 4</span>
        <h4 class="sb-step-title">Same-day recap</h4>
        <p class="sb-step-desc">A short bullet email: the question, the options, where you landed, and the risks you consciously chose to accept. A paper trail for yourself.</p>
      </div>
    </div>
  </section>

  <section class="sb-section sb-text-content" style="max-width: 650px;">
    <h2>Fair terms, stated up front</h2>
    <p>The boundaries are part of the product. Here they are, plainly:</p>
    <ul>
      <li><strong>The 20-minute rule.</strong> If, by the 20-minute mark, either of us concludes this isn't the right format for your problem, we stop and I refund in full. Neither of us should pay for an hour that isn't working.</li>
      <li><strong>One decision per session.</strong> A second topic is a second booking. Depth over coverage.</li>
      <li><strong>One participant, two at most.</strong> If your real problem is five architects who disagree, this format won't fix it, and I'll say so, including mid-session.</li>
      <li><strong>No implementation, no report.</strong> No code, no PR reviews, no 20-page deck. You get the conversation and a sharp recap email. You're paying for judgment, not paper.</li>
      <li><strong>Strictly confidential.</strong> Nothing from the session is reused, referenced, or written about without your explicit agreement.</li>
    </ul>
  </section>

  <section class="sb-price-block">
    <h2>&euro;650</h2>
    <p>One session, 60 minutes, prepaid at booking. Includes intake review and the same-day recap.</p>
    <a href="https://cal.com/robinpokorny/60min" class="sb-btn">Book a session</a>
    <p style="margin-top: 1.5rem; font-size: 0.9rem; opacity: 0.8;">I hold a small number of slots per week, alongside my full-time role. If none fit, write to me and we'll find one.</p>
  </section>

  <section class="sb-section sb-faq">
    <h2 style="text-align: center; margin-bottom: 3rem;">Questions people ask</h2>

    <details class="sb-faq-item">
      <summary class="sb-faq-q">How soon can we talk?</summary>
      <div class="sb-faq-a">Usually within days; in busy weeks, the following week. The booking calendar shows exactly what's open.</div>
    </details>

    <details class="sb-faq-item">
      <summary class="sb-faq-q">Where do the sessions take place?</summary>
      <div class="sb-faq-a">Sessions take place remotely over video call via Google Meet. All you need is a web browser.</div>
    </details>

    <details class="sb-faq-item">
      <summary class="sb-faq-q">What if 60 minutes isn't enough?</summary>
      <div class="sb-faq-a">Then the problem is bigger than a sounding board, and I'll say so plainly rather than let the clock run out politely. Usually that means it's an alignment problem inside your team, and knowing that is itself worth the hour.</div>
    </details>

    <details class="sb-faq-item">
      <summary class="sb-faq-q">Can I bring a colleague?</summary>
      <div class="sb-faq-a">One colleague, yes. Three colleagues means you need the room aligned, and a sounding board isn't the tool for that.</div>
    </details>

    <details class="sb-faq-item">
      <summary class="sb-faq-q">Will you tell me what to do?</summary>
      <div class="sb-faq-a">I'll tell you what I see, including things you may not want to hear. But the decision stays yours: that's the point. A decision you were handed is one you'll reëxamine at the first sign of trouble; a decision you made holds.</div>
    </details>
  </section>

  <section class="sb-section" style="text-align: center; margin-bottom: 6rem;">
    <p style="font-size: 1.2rem; margin-bottom: 2rem; color: #444; max-width: 550px; margin-left: auto; margin-right: auto;">If this sounds like the right room for the decision you're carrying, the calendar is open.</p>
    <a href="https://cal.com/robinpokorny/60min" class="sb-btn">Book a session &rarr;</a>
  </section>

</div>