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
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    max-width: 100%;
    display: block;
  }
  
  .sb-image:hover {
    transform: translateY(-8px);
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
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .sb-step-card:hover {
    border-color: #ddd;
    box-shadow: 0 12px 24px rgba(0,0,0,0.04);
    transform: translateY(-4px);
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
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #eee;
  }
  
  .sb-faq-item:last-child {
    border-bottom: none;
  }
  
  .sb-faq-q {
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    letter-spacing: -0.01em;
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

  .sb-recap-sample {
    margin-top: 1.5rem;
    padding: 1.5rem;
    background: #fafafa;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    font-size: 0.95rem;
    color: #444;
    position: relative;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
  }
  .sb-recap-sample::before {
    content: "From a real recap (redacted):";
    display: block;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #888;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  .sb-recap-sample ul {
    margin: 0 !important;
    padding-left: 1.25rem !important;
  }
  .sb-recap-sample li {
    margin-bottom: 0.5rem !important;
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
  /* Infographic Styles */
  .sb-toggle-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.9rem;
    font-weight: 600;
  }
  .sb-toggle-label {
    color: #888;
    transition: color 0.3s;
  }
  .sb-toggle-label.sb-toggle-active {
    color: #111;
  }
  .sb-toggle-btn {
    width: 50px;
    height: 26px;
    background: #e0e0e0;
    border-radius: 13px;
    border: none;
    position: relative;
    cursor: pointer;
    padding: 0;
    transition: background 0.3s;
  }
  .sb-toggle-knob {
    width: 22px;
    height: 22px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
  .state-sb-active .sb-toggle-btn {
    background: #111;
  }
  .state-sb-active .sb-toggle-knob {
    transform: translateX(24px);
  }

  .sb-infographic-container {
    background: #fafafa;
    border: 1px solid #eaeaea;
    border-radius: 12px 12px 0 0;
    padding: 2rem 1rem 1rem;
    overflow-x: auto;
  }
  .sb-svg {
    width: 100%;
    min-width: 600px;
    height: auto;
    display: block;
  }
  
  .sb-svg text {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-size: 14px;
    fill: #111;
    pointer-events: none;
    transition: opacity 0.4s;
  }

  /* Transition Defaults */
  .ig-bg-line { stroke: #ddd; stroke-width: 2; stroke-dasharray: 4 4; }
  .ig-fg-line { stroke: #111; stroke-width: 2; transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
  
  .ig-node {
    cursor: pointer;
  }
  .ig-node rect, .ig-node circle, .ig-decision text {
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .ig-node:hover rect, .ig-node:hover circle.outer-circle {
    stroke-width: 3 !important;
    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
  }

  /* SVG State: DEFAULT */
  .state-default .ig-fg-line { x2: 750px; }
  .state-default .ig-problem circle { fill: #111; }
  
  .state-default .ig-middle1 rect { x: 150px; width: 200px; fill: #fff; stroke: #ccc; stroke-width: 2; }
  .state-default .ig-text-sb { opacity: 0; }
  .state-default .ig-text-default { opacity: 1; }
  
  .state-default .ig-middle2 { opacity: 1; pointer-events: auto; }
  .state-default .ig-middle2 rect { fill: #fff; stroke: #ccc; stroke-width: 2; }
  
  .state-default .ig-decision circle.outer-circle { cx: 750px; fill: #111; }
  .state-default .ig-decision circle.inner-circle { cx: 750px; fill: #fff; }
  .state-default .ig-decision text { transform: translateX(0); }

  .state-default .ig-bypassed-group { opacity: 0; pointer-events: none; }

  /* SVG State: SOUNDING BOARD (SB) */
  .state-sb .ig-fg-line { x2: 320px; }
  .state-sb .ig-problem circle { fill: #111; }
  
  .state-sb .ig-middle1 rect { x: 150px; width: 160px; fill: #111; stroke: #111; stroke-width: 2; }
  .state-sb .ig-middle1 text { fill: #fff; }
  .state-sb .ig-text-sb { opacity: 1; }
  .state-sb .ig-text-default { opacity: 0; }
  
  .state-sb .ig-middle2 { opacity: 0; pointer-events: none; }
  .state-sb .ig-middle2 rect { transform: scale(0.9); transform-origin: 495px 100px; }
  
  .state-sb .ig-decision circle.outer-circle { cx: 320px; fill: #111; }
  .state-sb .ig-decision circle.inner-circle { cx: 320px; fill: #fff; }
  .state-sb .ig-decision text { transform: translateX(-430px); }

  .state-sb .ig-bypassed-group { opacity: 1; pointer-events: auto; transition: opacity 0.4s 0.3s; }
  .ig-bypassed-text { fill: #666 !important; font-style: italic; font-size: 13px !important; }

  /* Readout Panel */
  .sb-readout-panel {
    background: #fff;
    border: 1px solid #eaeaea;
    border-top: none;
    border-radius: 0 0 12px 12px;
    padding: 1.5rem 2rem;
    min-height: 120px;
  }
  .sb-readout-title {
    font-weight: 700;
    font-size: 1.05rem;
    margin-bottom: 0.5rem;
    color: #111;
  }
  .sb-readout-text {
    font-size: 0.95rem;
    color: #555;
    line-height: 1.5;
  }

</style>

<div class="sb-container">

  <header class="sb-hero">
    <div class="sb-hero-content">
      <h1>One decision. One hour. An architect with no stake in the answer.</h1>
      <p>A confidential 60-minute sounding-board session on architecture, buy-vs-build, and socio-technical strategy. No project. No multi-day commitment. Book today, think clearly tomorrow.</p>
      
      <div class="sb-hero-skimmer">
        For VPs, directors, and CTOs with one strategic decision on the desk.<br/>Not for teams, not for implementation.
      </div>
      
      <div>
        <a href="https://cal.com/robinpokorny/60min" class="sb-btn">Book your session &rarr;</a>
      </div>
    </div>
    <div class="sb-hero-image">
      <img src="{{ page.image }}" alt="Robin Pokorny" class="sb-image">
      <div class="sb-hero-bio-text">
        <strong>Robin Pokorny</strong> &mdash; Sr Staff Engineer at Ataccama, conference speaker, twenty years across product engineering and architecture.
      </div>
    </div>
  </header>

  <section class="sb-card">
    <h2>The situation you're probably in</h2>
    <p class="sb-text-content">You're a VP, director, or CTO, and a decision is sitting on your desk:</p>
    <ul class="sb-text-content">
      <li><strong>Buy vs. build:</strong> your own team isn't neutral about the answer.</li>
      <li><strong>A vendor or platform choice</strong> that feels off in a way you can't articulate yet.</li>
      <li><strong>A team-boundary or ownership question</strong> that's still a hunch, not yet a conflict.</li>
      <li><strong>An RFC waiting for your approval,</strong> and you want one independent read before you sign off.</li>
      <li><strong>A consultancy proposal for a six-week engagement,</strong> and you'd like to check it's even the right problem first.</li>
    </ul>
    <p class="sb-text-content" style="color: #666; font-size: 1rem; margin-top: 2rem;">
      Your options today are all slow or compromised: consultancies need weeks of lead time and multi-day minimums, your team is a stakeholder in the outcome, and peers at other companies can't see your context. Meanwhile the decision quietly degrades into the default one.
    </p>
  </section>

  <!-- INFOGRAPHIC SECTION -->
  <section class="sb-section" style="margin-top: 6rem; margin-bottom: 6rem;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;">
      <h2 style="margin: 0;">The Decision Timeline</h2>
      
      <div class="sb-toggle-wrapper">
        <span class="sb-toggle-label sb-toggle-active" id="lbl-default">Default Path</span>
        <button class="sb-toggle-btn" id="infographic-toggle" aria-label="Toggle process state">
          <div class="sb-toggle-knob"></div>
        </button>
        <span class="sb-toggle-label" id="lbl-sb">Sounding Board</span>
      </div>
    </div>

    <div class="sb-infographic-container state-default" id="infographic-container">
      <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" class="sb-svg">
        
        <!-- Background timeline (dashed) -->
        <line x1="50" y1="100" x2="750" y2="100" class="ig-bg-line"/>
        
        <!-- Foreground timeline (solid) -->
        <line x1="50" y1="100" x2="750" y2="100" class="ig-fg-line"/>

        <!-- Bypassed Space Label (Visible in SB state) -->
        <g class="ig-bypassed-group" data-id="bypassed" cursor="pointer">
          <rect x="330" y="80" width="370" height="40" fill="transparent" />
          <text x="515" y="60" text-anchor="middle" class="ig-bypassed-text">Weeks bypassed</text>
          <path d="M 330 70 Q 515 40 700 70" fill="none" stroke="#aaa" stroke-width="1.5" stroke-dasharray="4 4" />
        </g>

        <!-- Node 1: Problem -->
        <g class="ig-node ig-problem" data-id="problem">
          <circle cx="50" cy="100" r="10" />
          <text x="50" y="70" text-anchor="middle">The Problem</text>
        </g>

        <!-- Node 2: Internal Debates / Sounding Board -->
        <g class="ig-node ig-middle1" data-id="middle1">
          <rect x="150" y="70" width="200" height="60" rx="8" />
          <text x="250" y="105" text-anchor="middle" class="ig-text-default">Internal Debates</text>
          <text x="230" y="105" text-anchor="middle" class="ig-text-sb">60-Min Session</text>
        </g>

        <!-- Node 3: Consultancy Discovery (Fades out) -->
        <g class="ig-node ig-middle2" data-id="middle2">
          <rect x="380" y="70" width="230" height="60" rx="8" />
          <text x="495" y="105" text-anchor="middle">Consultancy Discovery</text>
        </g>

        <!-- Node 4: Decision -->
        <g class="ig-node ig-decision" data-id="decision">
          <circle cx="750" cy="100" r="14" class="outer-circle"/>
          <circle cx="750" cy="100" r="6" class="inner-circle"/>
          <text x="750" y="70" text-anchor="middle">The Decision</text>
        </g>
      </svg>
    </div>

    <div class="sb-readout-panel">
      <div class="sb-readout-title" id="readout-title">Click a phase to inspect</div>
      <div class="sb-readout-text" id="readout-text">Select any block on the timeline above to see what typically happens at that stage.</div>
    </div>
  </section>

  <section class="sb-section sb-text-content">
    <h2>What this is</h2>
    <p>One hour, one decision, one specialist across the table. I'm a socio-technical software architect focusing on strategic domain-driven design, bounded contexts, team topologies, the seams where organisation and architecture meet. You bring the decision; I bring twenty years of pattern recognition and no stake in the answer.</p>
    <p>This is a <strong>sounding board, not a verdict machine.</strong> I'll challenge your assumptions directly, name the fear you haven't named, and map how reversible each option really is. But you leave with <em>your</em> position clarified.</p>
    
    <blockquote style="margin: 2rem 0; padding: 1.5rem 2rem; background: #f9f9f9; border-left: 4px solid #111; font-size: 1.15rem; font-style: italic; border-radius: 0 8px 8px 0;">
      The last ten minutes are the deliverable. You say your decision back to me the way you'll say it to your team. If you can't say it convincingly to me, you're not ready to say it to them. We fix that in the room.
    </blockquote>
  </section>

  <section class="sb-section sb-text-content">
    <!-- TODO(robin): confirm vignettes are real-anonymised or switch intro to 'Illustrative examples…' -->
    <h2>Decisions that have come through this room</h2>
    <p><em>Details changed to protect confidentiality; the shape of each decision is real.</em></p>
    
    <div style="margin-top: 2rem;">
      <h4 style="margin-bottom: 0.5rem; font-size: 1.2rem;">Buy vs. build</h4>
      <p>A VP of Engineering arrived with an RFC to build an internal feature-flag and rollout platform — six weeks of back-and-forth already behind it. In the session we separated the actual differentiating requirement (one unusual targeting rule) from the pride of ownership driving the rest. He left with a buy decision, a thin adapter around the one gap, and a written revisit criterion for twelve months out. The RFC thread closed that week.</p>
    </div>

    <div style="margin-top: 2rem;">
      <h4 style="margin-bottom: 0.5rem; font-size: 1.2rem;">The vendor that felt off</h4>
      <p>A CTO couldn't articulate why a data-platform contract made her uneasy — the demos were good, the price was fine. Mapping the proposal against her team boundaries surfaced it: the contract quietly coupled two domains that needed to evolve independently, putting the vendor in the middle of every future change. She didn't walk away; she renegotiated the scope to one domain. The unease had a name, and the deal got smaller and better.</p>
    </div>
  </section>

  <section class="sb-section">
    <h2>How it works</h2>
    <div class="sb-grid">
      <div class="sb-step-card">
        <span class="sb-step-num">Step 1</span>
        <h4 class="sb-step-title">Book & pay</h4>
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
        <!-- TODO(robin): replace with a genuinely redacted recap or label as example -->
        <div class="sb-recap-sample">
          <ul>
            <li><strong>Decision:</strong> migrate billing to vendor X, scoped to invoicing only</li>
            <li><strong>Deliberately rejected:</strong> full-suite adoption (lock-in on the ledger)</li>
            <li><strong>Accepted risks:</strong> 6-mo dual-running cost; renegotiation exposure in 2028</li>
            <li><strong>Revisit trigger:</strong> if reconciliation errors exceed 0.1% in Q1</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="sb-section sb-text-content" style="max-width: 650px;">
    <h2>What this is not</h2>
    <p>Fair warning, because the boundaries are the product:</p>
    <ul>
      <li><strong>Not a team workshop.</strong> One participant (two at most). If your real problem is five architects who disagree, this format won't fix it, and I'll tell you so honestly — including mid-session.</li>
      <li><strong>Not implementation.</strong> No code, no PR reviews, no hands on keyboards.</li>
      <li><strong>Not a subscription.</strong> No Slack access, no "quick follow-up calls." One decision per session; a second topic is a second booking.</li>
      <li><strong>Not a report shop.</strong> You get a sharp recap email, not a 20-page deck. You're paying for judgment, not paper.</li>
    </ul>
  </section>

  <section class="sb-price-block">
    <h2>€650</h2>
    <p>prepaid at booking.</p>
    <p style="font-size: 0.95rem; opacity: 0.7; max-width: 600px; margin-bottom: 2.5rem;">For calibration: a five-engineer team costs roughly €2,500 per day in salaries. If this hour shortens your decision by even a single day (and it usually shortens it by weeks) it has paid for itself several times over.</p>
    <a href="https://cal.com/robinpokorny/60min" class="sb-btn">Secure your slot now</a>
    <p style="margin-top: 1.5rem; font-size: 0.9rem; opacity: 0.8;">I run these sessions alongside my full-time role, so availability is genuinely limited — book ahead rather than last-minute.</p>
  </section>

  <section class="sb-section sb-faq">
    <h2 style="text-align: center; margin-bottom: 3rem;">Frequently Asked Questions</h2>
    
    <div class="sb-faq-item">
      <div class="sb-faq-q">How fast can we actually talk?</div>
      <div class="sb-faq-a">I hold a small number of dedicated slots each week. Usually you can find time within days; in busy weeks it may be the following week.</div>
    </div>
    
    <div class="sb-faq-item">
      <div class="sb-faq-q">What if 60 minutes isn't enough?</div>
      <div class="sb-faq-a">Then the problem is bigger than a sounding board, and I'll say so plainly rather than let the clock run out politely. Usually that means it's an alignment problem inside your team, and that's yours to run — you'll at least leave knowing that's what it is.</div>
    </div>
    
    <div class="sb-faq-item">
      <div class="sb-faq-q">Can I bring a colleague?</div>
      <div class="sb-faq-a">One colleague, yes. Three colleagues means you need the room aligned, and a sounding board session isn't the tool for that.</div>
    </div>
    
    <div class="sb-faq-item">
      <div class="sb-faq-q">What if I need to reschedule?</div>
      <div class="sb-faq-a">Free up to 24 hours before the session. Inside 24 hours the slot can't be resold, so it's charged. That's the honest cost of holding dedicated time.</div>
    </div>
    
    <div class="sb-faq-item">
      <div class="sb-faq-q">Do you refund if it wasn't useful?</div>
      <div class="sb-faq-a">If, at the 20-minute mark, either of us concludes this isn't the right format for your problem, we stop and I refund in full. After that, we're committed for the hour.</div>
    </div>
  </section>

  <section class="sb-section" style="text-align: center; margin-bottom: 6rem;">
    <h2 style="font-size: 2rem; margin-bottom: 1rem;">Ready?</h2>
    <p style="font-size: 1.2rem; margin-bottom: 2rem; color: #444;">One decision is sitting on your desk right now. Give it an hour.</p>
    <a href="https://cal.com/robinpokorny/60min" class="sb-btn">Book your session &rarr;</a>
  </section>

</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('infographic-toggle');
    const container = document.getElementById('infographic-container');
    const toggleWrapper = toggleBtn.parentElement;
    const lblDefault = document.getElementById('lbl-default');
    const lblSb = document.getElementById('lbl-sb');
    const readoutTitle = document.getElementById('readout-title');
    const readoutText = document.getElementById('readout-text');
    
    let currentState = 'default';
    
    const readouts = {
      default: {
        problem: { title: "The Problem", text: "A strategic decision hits your desk. It feels complex, and the stakes are high." },
        middle1: { title: "Internal Debates & Endless RFCs", text: "Teams have a stake in the outcome, causing gridlock and endless back-and-forth. The RFC thread becomes a battleground for ownership rather than architecture." },
        middle2: { title: "Consultancy Discovery", text: "Traditional agencies require multi-week discovery phases and massive statements of work before giving advice. The timeline stretches." },
        decision: { title: "The Compromised Decision", text: "Eventually, fatigue sets in. The default, easiest path is taken, often inheriting tech debt simply because it was the path of least resistance." }
      },
      sb: {
        problem: { title: "The Problem", text: "A strategic decision hits your desk. It feels complex, and the stakes are high." },
        middle1: { title: "60-Minute Sounding Board", text: "A single 60-minute session with an impartial expert. We skip the small talk and stress-test your thinking immediately." },
        decision: { title: "Clear, Owned Decision", text: "You leave with a clarified position that you fully own, ready to communicate to your team." },
        bypassed: { title: "The Bypassed Space", text: "Weeks of gridlock and expensive discovery phases are completely bypassed. You're ready to act tomorrow." }
      }
    };

    function setReadout(id) {
      const data = readouts[currentState][id];
      if (data) {
        readoutTitle.textContent = data.title;
        readoutText.textContent = data.text;
      } else {
        readoutTitle.textContent = "Click a phase to inspect";
        readoutText.textContent = "Select any block on the timeline above to see what typically happens at that stage.";
      }
    }

    toggleBtn.addEventListener('click', () => {
      if (currentState === 'default') {
        currentState = 'sb';
        container.classList.remove('state-default');
        container.classList.add('state-sb');
        toggleWrapper.classList.add('state-sb-active');
        lblDefault.classList.remove('sb-toggle-active');
        lblSb.classList.add('sb-toggle-active');
      } else {
        currentState = 'default';
        container.classList.remove('state-sb');
        container.classList.add('state-default');
        toggleWrapper.classList.remove('state-sb-active');
        lblDefault.classList.add('sb-toggle-active');
        lblSb.classList.remove('sb-toggle-active');
      }
      setReadout(null);
    });

    const nodes = document.querySelectorAll('.ig-node, .ig-bypassed-group');
    nodes.forEach(node => {
      node.addEventListener('click', () => {
        const id = node.getAttribute('data-id');
        setReadout(id);
      });
    });
  });
</script>
