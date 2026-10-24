import type { Case } from './types'

export const gpay: Case = {
  id: 'gpay',
  title: 'Google Pay teardown: payment completion and trust',
  tag: 'Product Teardown',
  cats: ['Product Analytics', 'Technical Product Management'],
  blurb: 'What makes a payment feel reliable, and what happens when it fails?',
  summary: 'I evaluated the payment completion journey to identify potential usability and reliability friction, then mapped improvement ideas to transaction success rate.',
  problem: 'People pay with it for everyday needs, so a failed or unclear payment damages trust fast. My observations are from using a public product, not validated research.',
  users: 'Everyday consumers paying merchants and friends from their phones.',
  research: ['Walk the pay-a-merchant and pay-a-friend flows, noting trust signals and status messages.', 'Plan, not yet run: ask a few people what they do when a payment fails.', 'Treat anything about internal failure rates as unknown.'],
  journey: [['Initiate', 'Confirming the right recipient and amount', 'Clear confirmation'], ['Authorise', 'Moments of delay or uncertainty', 'Visible progress'], ['Complete or fail', 'Unclear status after a failure', 'Clear recovery and status']],
  rca: [['Unclear status after a failed payment', 'Retry rate and repeat-attempt behaviour'], ['Low trust at authorisation', 'Abandonment at the authorisation step'], ['Recovery is slow', 'Time to resolution for failed transactions']],
  opps: [
    { n: 'Clear status and next step after a failure', r: 10000, i: 2, c: 0.5, e: 2 },
    { n: 'Visible progress during authorisation', r: 10000, i: 1, c: 0.4, e: 1.5 },
    { n: 'Pre-payment recipient confirmation', r: 8000, i: 1, c: 0.5, e: 1 },
  ],
  riceNote: 'All inputs are my assumptions. A clear failure state ranks first because it affects trust directly and is relatively cheap to improve.',
  decisions: [['Add', 'Clear recovery guidance after a failure'], ['Improve', 'Progress visibility during authorisation'], ['Simplify', 'Extra confirmations for low-risk repeat payments']],
  prd: ['These teardowns propose opportunities, not full requirements.', 'Any change would need payments, risk and compliance review.'],
  metrics: [['Primary', 'Transaction success rate: successful payments ÷ attempted payments'], ['Supporting', 'Retry rate, time to resolution of failed payments']],
  experiment: ['A/B test of an improved failure screen, measured on retry success and transaction success rate.'],
  rollout: ['Small share first, with monitoring for fraud and support contacts.'],
  risks: ['Security and regulatory constraints limit what can change.'],
  next: ['Validate with a few users how they handle failures.', 'Write a PRD for the failure-recovery idea.'],
}
