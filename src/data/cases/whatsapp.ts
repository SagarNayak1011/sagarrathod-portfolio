import type { Case } from './types'

export const whatsapp: Case = {
  id: 'whatsapp',
  title: 'WhatsApp teardown: onboarding to engagement',
  tag: 'Product Teardown',
  cats: ['Product Discovery', 'Product Analytics'],
  blurb: 'How does a new user get from install to a first useful conversation, and what keeps them coming back?',
  summary: 'I evaluated user journeys across onboarding, messaging and engagement to identify potential friction, then mapped improvement ideas to activation and retention.',
  problem: 'A messaging app is only valuable once a user reaches a conversation with someone they care about. My observations are from using a public product and are not validated research.',
  users: 'New users joining because their contacts already use it, and existing users with groups and daily chats.',
  research: ['Walk through onboarding, a first message and group creation, recording each step.', 'Plan, not yet run: ask a few new users where they hesitated.', 'Separate what I saw from what I am inferring.'],
  journey: [['Onboarding', 'Setup steps before the first chat', 'Guide to a first conversation'], ['Messaging', 'Finding the right contact or group', 'Faster path to recent chats'], ['Engagement', 'Notification and group overload', 'Smarter controls']],
  rca: [['New users stall before a first conversation', 'Activation rate by onboarding step'], ['Busy groups reduce attention', 'Mute and leave rates'], ['Retention depends on habit formation', 'Week-4 retention by cohort']],
  opps: [
    { n: 'Guided first-conversation onboarding', r: 8000, i: 1, c: 0.4, e: 2 },
    { n: 'Simpler group notification controls', r: 12000, i: 0.5, c: 0.5, e: 1.5 },
    { n: 'Faster path to recent chats', r: 12000, i: 0.5, c: 0.5, e: 1 },
  ],
  riceNote: 'All inputs are my assumptions. Activation matters most because nothing else matters if a new user never reaches a first conversation.',
  decisions: [['Add', 'Guided first conversation for new users'], ['Improve', 'Group notification controls'], ['Simplify', 'Setup steps before the first chat']],
  prd: ['These teardowns propose opportunities, not full requirements.', 'For the strongest idea I would write a PRD and an experiment plan.'],
  metrics: [['Primary', 'Activation: new users who send or receive a first message within a set window'], ['Supporting', 'User retention at week 4, notification mute rate']],
  experiment: ['A/B test of guided onboarding against the current one, measured on activation, with retention as the follow-up.'],
  rollout: ['Roll out to a small share of new users first.'],
  risks: ['My view of the product is limited to the public experience.'],
  next: ['Check the friction points with a few new users.', 'Draft a PRD for the guided onboarding idea.'],
}
