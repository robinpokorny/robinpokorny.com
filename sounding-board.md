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
    margin-bottom: 2rem;
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

</style>

<div class="sb-container">

  <header class="sb-hero">
    <div class="sb-hero-content">
      <h1>Stuck on a decision?<br/>Talk it through with a specialist.</h1>
      <p>A confidential 60-minute sounding-board session on architecture, buy-vs-build, and socio-technical strategy. No project. No procurement. No multi-day commitment. Book today, think clearly tomorrow.</p>
      <a href="https://cal.com/robinpokorny/60min" class="sb-btn">Book your session &rarr;</a>
    </div>
    <div class="sb-hero-image">
      <img src="{{ page.image }}" alt="Robin Pokorny" class="sb-image">
    </div>
  </header>

  <section class="sb-card">
    <h2>The situation you're probably in</h2>
    <p class="sb-text-content">You're a VP, director, or CTO, and a decision is sitting on your desk:</p>
    <ul class="sb-text-content">
      <li><strong>Buy vs. build</strong> — and your own team isn't neutral about the answer.</li>
      <li><strong>A vendor or platform choice</strong> that feels off in a way you can't articulate yet.</li>
      <li><strong>A team-boundary or ownership question</strong> that's still a hunch, not yet a conflict.</li>
      <li><strong>An RFC waiting for your approval</strong> — and you want one independent read before you sign off.</li>
      <li><strong>A consultancy proposal for a six-week engagement</strong> — and you'd like to check it's even the right problem first.</li>
    </ul>
    <p class="sb-text-content" style="color: #666; font-size: 1rem; margin-top: 2rem;">
      Your options today are all slow or compromised: consultancies need weeks of lead time and multi-day minimums, your team is a stakeholder in the outcome, and peers at other companies can't see your context. Meanwhile the decision quietly degrades into the default one.
    </p>
  </section>

  <section class="sb-section sb-text-content">
    <h2>What this is</h2>
    <p>One hour, one decision, one specialist across the table. I'm a socio-technical software architect — strategic domain-driven design, bounded contexts, team topologies, the seams where organisation and architecture meet. You bring the decision; I bring twenty years of pattern recognition and no stake in the answer.</p>
    <p>This is a <strong>sounding board, not a verdict machine.</strong> I'll challenge your assumptions directly, name the fear you haven't named, and map how reversible each option really is. But you leave with <em>your</em> position, clarified — the last ten minutes are you saying your decision back to me the way you'll say it to your team. If you can't say it convincingly to me, you're not ready to say it to them. We fix that in the room.</p>
  </section>

  <section class="sb-section">
    <h2>How it works</h2>
    <div class="sb-grid">
      <div class="sb-step-card">
        <span class="sb-step-num">Step 1</span>
        <h4 class="sb-step-title">Book & pay</h4>
        <p class="sb-step-desc">Pick a slot (sessions available within 2 business days), pay by card. Done in one sitting, fits a standard executive card limit. No vendor onboarding, no procurement.</p>
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
    <h2>What this is not</h2>
    <p>Fair warning, because the boundaries are the product:</p>
    <ul>
      <li><strong>Not a team workshop.</strong> One participant (two at most). If your real problem is five architects who disagree, that's a different format — the Architecture Decision Sprint — and I'll tell you so honestly, including mid-session.</li>
      <li><strong>Not implementation.</strong> No code, no PR reviews, no hands on keyboards.</li>
      <li><strong>Not a subscription.</strong> No Slack access, no "quick follow-up calls." One decision per session; a second topic is a second booking.</li>
      <li><strong>Not a report shop.</strong> You get a sharp recap email, not a 20-page deck. You're paying for judgment, not paper.</li>
    </ul>

    <h2 style="margin-top: 4rem;">Confidentiality</h2>
    <p>Everything you share is treated as confidential, stored in EU-hosted systems, and never used to train third-party models. If you need an NDA signed first, send it with your booking — reviewed within one business day.</p>
  </section>

  <section class="sb-price-block">
    <h2>€650</h2>
    <p>prepaid at booking.</p>
    <p style="font-size: 0.95rem; opacity: 0.7; max-width: 600px; margin-bottom: 2.5rem;">For calibration: a five-engineer team costs roughly €2,500 per day in salaries. If this hour shortens your decision by even a single day — and it usually shortens it by weeks — it has paid for itself several times over before lunch.</p>
    <a href="https://cal.com/robinpokorny/60min" class="sb-btn">Secure your slot now</a>
    <p style="margin-top: 1.5rem; font-size: 0.85rem; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.05em;">Slots are capped at 6 per month</p>
  </section>

  <section class="sb-section sb-faq">
    <h2 style="text-align: center; margin-bottom: 3rem;">Frequently Asked Questions</h2>
    
    <div class="sb-faq-item">
      <div class="sb-faq-q">How fast can we actually talk?</div>
      <div class="sb-faq-a">Within 2 business days, guaranteed; usually next-day. I hold dedicated slots each week for exactly these sessions.</div>
    </div>
    
    <div class="sb-faq-item">
      <div class="sb-faq-q">What if 60 minutes isn't enough?</div>
      <div class="sb-faq-a">Then the problem is bigger than a sounding board, and I'll say so plainly rather than let the clock run out politely. Usually that means it's a team problem.</div>
    </div>
    
    <div class="sb-faq-item">
      <div class="sb-faq-q">Can I bring a colleague?</div>
      <div class="sb-faq-a">One colleague, yes. Three colleagues means you need the room aligned, which is the Sprint's job, not this session's.</div>
    </div>
    
    <div class="sb-faq-item">
      <div class="sb-faq-q">What if I need to reschedule?</div>
      <div class="sb-faq-a">Free up to 24 hours before the session. Inside 24 hours, the slot is burned — that's the honest cost of a speed promise.</div>
    </div>
    
    <div class="sb-faq-item">
      <div class="sb-faq-q">Do you refund if it wasn't useful?</div>
      <div class="sb-faq-a">If, at the 20-minute mark, either of us concludes this isn't the right format for your problem, we stop and I refund in full. After that, we're committed — and I'll make it worth committing to.</div>
    </div>
  </section>

</div>
