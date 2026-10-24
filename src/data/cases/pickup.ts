import type { Case } from './types'

export const pickup: Case = {
  id: 'pickup',
  title: 'Making ride pickup more predictable',
  tag: 'Independent Product Analysis',
  cats: ['Product Analytics', 'Product Design', 'Product Strategy'],
  blurb: 'Why might riders cancel before pickup, and how could ETA uncertainty be communicated without false precision?',
  summary:
    'My analysis is based on public information only, and I make no claim about Uber’s internal data. I frame pre-pickup cancellation as a possible outcome of uncertainty, and look at ETA ranges, change explanations and pickup-point clarity.',
  problem: 'Riders may cancel after booking when the wait feels long or unreliable, and may lose confidence when ETAs shift or the pickup point is unclear. Both are hypotheses I would need to validate.',
  users: 'Riders (primary), drivers and the platform. I would also keep driver distraction and safety in view.',
  research: ['Plan, not yet run: interviews with riders who cancelled recently.', 'Cancellation funnel from request to pickup, split by wait time and ETA changes.', 'Review of comparable ride-hailing pickup experiences using public screens.'],
  journey: [['Request', 'Initial ETA feels uncertain', 'Set expectations honestly'], ['Waiting', 'ETA changes with no explanation', 'Explain changes plainly'], ['Pickup', 'Unclear pickup point', 'Confirm the pickup point']],
  rca: [
    ['ETA changed with no explanation', 'ETA volatility vs cancellation, by segment'],
    ['Unclear pickup point', 'Pickup-point edits and driver-rider calls before cancel'],
    ['Driver reassignment', 'Cancel rate after reassignment vs without'],
    ['Long actual wait', 'ETA error vs cancel timing'],
  ],
  opps: [
    { n: 'Reason when ETA changes', r: 40000, i: 1, c: 0.6, e: 1.5 },
    { n: 'Pickup-point confirmation', r: 30000, i: 1, c: 0.5, e: 2 },
    { n: 'ETA confidence range', r: 40000, i: 2, c: 0.3, e: 4 },
    { n: 'Meaningful-delay notification', r: 20000, i: 0.5, c: 0.5, e: 1 },
  ],
  riceNote: 'The confidence range has the highest impact estimate but the lowest confidence, so I would defer it until estimates are accurate enough to support it. A plain-language reason is cheap and testable first.',
  decisions: [['Add', 'Plain-language reason when ETA changes'], ['Improve', 'Pickup-point confirmation'], ['Defer', 'Confidence ranges until estimates support them'], ['Avoid', 'Frequent delay pushes (notification fatigue)']],
  prd: ['Problem: riders may cancel when ETA or pickup is uncertain (hypothesis).', 'Non-goal: change driver pay or dispatch.', 'Requirement: show a range only when model confidence passes a threshold.', 'Acceptance: an ETA change over 2 minutes shows a reason within 3 seconds.'],
  metrics: [['Primary', 'Pre-pickup cancellation rate'], ['Supporting', 'ETA error, ETA volatility, successful pickup rate, support-contact rate'], ['Causality', 'Correlation can come from city or time of day, so I would randomise riders and compare treated vs control instead of trusting before/after.']],
  experiment: ['Hypothesis: explaining ETA changes reduces cancellations among riders who see a change.', 'Randomise at rider level; compare cancellation rate and support contacts.', 'Do not claim an effect until the experiment shows it.'],
  rollout: ['Pilot in one city at low traffic, then widen.', 'Stop if support contacts or cancellations rise.'],
  risks: ['Ranges can be read as promises.', 'Driver safety and distraction near pickup spots.'],
  next: ['Define the cancellation funnel and event list.', 'Prototype the ETA-change message and test comprehension.'],
}
