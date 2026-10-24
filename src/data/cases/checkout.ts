import type { Case } from './types'

export const checkout: Case = {
  id: 'checkout',
  title: 'Reducing checkout friction to improve purchase conversion',
  tag: 'Product Case Study',
  cats: ['Product Analytics', 'Product Discovery', 'Product Strategy'],
  blurb: 'Why do users add to cart but abandon before paying? Funnel definition, competing hypotheses, RICE and an A/B test.',
  summary:
    'My goal is to lift checkout conversion (completed purchases ÷ eligible checkout sessions). I treat abandonment as a symptom with several candidate causes, rank them by the evidence needed, and test the cheapest high-confidence fixes first.',
  problem:
    'Shoppers add items to a cart, but many do not complete payment. I do not yet know why, so I will not assume a cause. The funnel numbers in this study are illustrative and only give the analysis a concrete shape.',
  users:
    'Mobile-first shoppers with purchase intent: new guests, returning logged-out buyers and logged-in repeat buyers. Their needs differ, so I would segment before drawing any conclusion.',
  research: [
    'Plan, not yet run: 8–10 interviews with recent abandoners, asking them to walk me through the last time they left a cart.',
    'Funnel by step, device and login state to see where the drop-off concentrates.',
    'Exit survey on the payment screen, plus session replays at the shipping and payment steps.',
    'Hands-on audit of a few public checkout flows, recording guest options, cost visibility, form length and failure handling.',
  ],
  journey: [
    ['Add to cart', 'Total cost not visible yet', 'Show the full cost early'],
    ['Start checkout', 'Forced account creation', 'Offer a guest path'],
    ['Enter address', 'Long form, typing on mobile', 'Fewer fields, autofill'],
    ['Pay', 'Surprise fees, failed payments, few methods', 'Upfront total, recovery path'],
  ],
  rca: [
    ['Surprise fees at the last step', 'Compare drop-off at fee reveal vs earlier steps; exit survey'],
    ['Forced account creation', 'Drop-off by new vs returning users'],
    ['Long address form on mobile', 'Mobile vs desktop completion time and field errors'],
    ['Payment failures', 'Failure rate by method and bank, retry success'],
  ],
  opps: [
    { n: 'Transparent fees upfront', r: 9000, i: 1, c: 0.8, e: 1 },
    { n: 'Guest checkout', r: 7000, i: 2, c: 0.8, e: 3 },
    { n: 'Address autofill', r: 6000, i: 1, c: 0.8, e: 2 },
    { n: 'Payment-failure recovery', r: 1500, i: 2, c: 0.8, e: 2 },
  ],
  riceNote:
    'Fees upfront scores highest, but I would not ship on score alone. Guest checkout has a larger impact estimate yet needs account-linking work and carries fraud risk, so I would ship fees and autofill first and A/B test guest checkout.',
  decisions: [
    ['Add', 'Upfront fee and total display'],
    ['Improve', 'Address autofill, mobile form'],
    ['Defer', 'Saved addresses (needs a login base)'],
    ['Test', 'Guest checkout behind an A/B test'],
    ['Remove', 'Optional fields: company, second address line'],
  ],
  prd: [
    'Problem: assumed drop-off between the shipping and payment steps (illustrative).',
    'Goals: raise checkout conversion. Non-goal: redesign the whole cart.',
    'Requirements: show the total including fees before address entry; autofill; guest option under test.',
    'Acceptance: given a cart, the total with fees is visible before payment entry on mobile and desktop.',
    'Edge cases: unserviceable PIN code, price change mid-checkout, payment succeeds but confirmation is delayed.',
  ],
  metrics: [
    ['Primary', 'Checkout conversion = completed purchases ÷ eligible checkout sessions, 7-day window'],
    ['Guardrails', 'Payment failure rate, average order value, refund rate, p95 page latency'],
    ['Events', 'checkout_started, address_completed, payment_attempted, payment_failed, order_completed'],
  ],
  experiment: [
    'Hypothesis: showing the total with fees before address entry will raise checkout conversion because it removes the late surprise.',
    'Control: current flow. Variant: upfront total. Randomise at user level, 50/50.',
    'Run at least two full weeks; size the test from baseline conversion and minimum detectable effect (calculator below).',
    'Ship only if the primary metric clears the minimum effect and no guardrail degrades.',
  ],
  rollout: ['5% → 25% → 100%, holding each step until guardrails are stable.', 'Roll back if payment failure rate or refund rate worsens versus control.'],
  risks: ['Guest checkout may raise fraud and duplicate-order exposure, so it needs the risk team.', 'The fee service must respond within the cart’s latency budget.'],
  next: ['Instrument the five events and collect a clean baseline.', 'Run the interviews, then re-rank the RICE table with the evidence.'],
  checkout: true,
}
