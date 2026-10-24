import type { Case } from './types'

export const swiggy: Case = {
  id: 'swiggy',
  title: 'Swiggy teardown: from discovery to checkout',
  tag: 'Product Teardown',
  cats: ['Product Analytics', 'Product Design'],
  blurb: 'Where could friction appear between finding a restaurant and placing an order?',
  summary: 'I evaluated the user journey across discovery and checkout to identify potential usability and workflow friction, then mapped each improvement idea to funnel conversion.',
  problem: 'Food-delivery users choose from many options quickly, and every extra decision before checkout can cost an order. These are observations from using a public product, not validated research.',
  users: 'Consumers ordering delivery, often on mobile and in a hurry.',
  research: ['Walk the flow end to end and record each step and decision point.', 'Plan, not yet run: confirm any friction I spot with a few real users.', 'Keep observations separate from assumptions.'],
  journey: [['Discovery', 'Many options to compare quickly', 'Clearer ranking cues'], ['Menu', 'Hard to find a specific dish', 'Better in-menu search'], ['Checkout', 'Total cost and arrival time clarity', 'Show total and ETA early']],
  rca: [['Choice overload at discovery', 'Search-to-order ratio'], ['Costs feel unclear until late', 'Drop-off at the point fees appear'], ['Repeat ordering depends on a smooth first order', 'Repeat order rate within 30 days']],
  opps: [
    { n: 'Clearer ranking cues in discovery', r: 10000, i: 1, c: 0.5, e: 2 },
    { n: 'Show total and ETA earlier', r: 10000, i: 1, c: 0.6, e: 1.5 },
    { n: 'Faster reorder shortcut', r: 6000, i: 1, c: 0.5, e: 1 },
  ],
  riceNote: 'All inputs are my assumptions, since I have no access to Swiggy’s data. The point is to show how I compare ideas, not to claim what they should build.',
  decisions: [['Add', 'Total and ETA earlier in the flow'], ['Improve', 'Discovery ranking cues'], ['Simplify', 'Steps between menu and payment']],
  prd: ['These teardowns propose opportunities, not full requirements.', 'For the strongest idea I would write a PRD with acceptance criteria and a measurement plan.'],
  metrics: [['Primary', 'Funnel conversion: sessions with an order ÷ sessions with a discovery view'], ['Supporting', 'Search-to-order ratio, repeat order rate']],
  experiment: ['A/B test showing total and ETA earlier against the current flow, measured on funnel conversion.'],
  rollout: ['Staged rollout with guardrails on order value and cancellations.'],
  risks: ['My observations may not match what the company’s data shows.'],
  next: ['Validate the friction points with a few users.', 'Turn the strongest idea into a full case study.'],
}
