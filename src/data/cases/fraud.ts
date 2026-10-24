import type { Case } from './types'

export const fraud: Case = {
  id: 'fraud',
  title: 'Real-time suspicious transaction detection',
  tag: 'Analytics Case Study',
  cats: ['Product Analytics', 'Technical Product Management'],
  blurb: 'An Allow / Review / Block framework and the trade-off between catching fraud, false positives, customer friction and review cost.',
  summary:
    'I designed a proposed Allow / Review / Block risk-scoring framework to classify suspicious transactions and route higher-risk cases for investigation. The core product question is the trade-off: catching more fraud raises false positives, customer friction and review workload.',
  problem: 'Treating every suspicious signal the same fills review queues and declines genuine customers. I would not claim any detection performance, because this is a proposed design with no real transaction data.',
  users: 'Fraud-operations analysts who investigate flagged cases (primary) and customers whose payments are screened (secondary).',
  research: ['Plan, not yet run: interview analysts about what makes a case slow to review.', 'Map the transaction signals, decision outcomes and investigation workflow.', 'Check data quality of the signals before trusting any score.'],
  journey: [['Transaction', 'Signals arrive in many forms', 'Map signals to a score'], ['Decision', 'Binary approve or decline is too blunt', 'Allow / Review / Block'], ['Investigation', 'Handoffs between teams', 'Clear queue and ownership']],
  rca: [['Review queue grows too fast', 'Share of flagged cases that turn out genuine'], ['Genuine customers declined', 'False-positive rate by segment'], ['Fraud slips through', 'False-negative rate and detection coverage'], ['Slow investigations', 'Turnaround time by case type']],
  opps: [
    { n: 'Three-outcome routing', r: 20000, i: 2, c: 0.7, e: 3 },
    { n: 'Prioritised analyst queue', r: 20000, i: 1, c: 0.6, e: 2 },
    { n: 'Threshold tuning view', r: 20000, i: 1, c: 0.5, e: 2 },
    { n: 'Step-up verification for medium risk', r: 5000, i: 1, c: 0.4, e: 4 },
  ],
  riceNote: 'Three-outcome routing leads because it creates the Review lane that keeps borderline cases away from automatic blocks. Step-up verification adds customer friction and needs more evidence, so it waits.',
  decisions: [['Add', 'A Review lane between Allow and Block'], ['Improve', 'Analyst queue ordered by risk and age'], ['Defer', 'Step-up verification'], ['Remove', 'Single hard threshold with no human review']],
  prd: ['Problem: blunt decisions raise both false positives and missed fraud.', 'Requirement: score each transaction and route it to Allow, Review or Block.', 'Acceptance: every Review case appears in the analyst queue with its signals.', 'Non-goal: building the scoring model itself.'],
  metrics: [['Primary', 'Suspicious transaction detection coverage'], ['Error rates', 'False-positive rate and false-negative rate'], ['Operations', 'Investigation turnaround time']],
  experiment: ['Offline: replay labelled historical cases (synthetic here) at different thresholds and compare the error trade-off.', 'Online: shadow mode first, with no customer impact, then a small live slice.'],
  rollout: ['Shadow mode, then a small live slice with analyst oversight.', 'Pull back if false positives or turnaround time worsen.'],
  risks: ['Over-blocking harms trust.', 'Analyst workload can overwhelm the Review lane.', 'Signal drift over time.'],
  next: ['Define the signal list and a data-quality checklist.', 'Prototype the analyst queue and test it with real reviewers.'],
}
