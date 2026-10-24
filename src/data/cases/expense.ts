import type { Case } from './types'

export const expense: Case = {
  id: 'expense',
  title: 'Monthly expense management product',
  tag: 'Product Concept',
  cats: ['Product Discovery', 'Product Analytics', 'Product Design'],
  blurb: 'A budgeting MVP with category visibility and configurable alerts, plus a KPI tree and an A/B test plan for alert thresholds.',
  summary: 'I scoped a budgeting MVP with category-level spending visibility, monthly budget tracking and configurable spending alerts. I also outlined the user journey, core feature scope, KPI tree and an A/B testing approach for evaluating alert thresholds.',
  problem: 'People often see overspending only at month end, when it is too late to change behaviour. This is my hypothesis and I would validate it in interviews.',
  users: 'Individuals who want simple expense awareness without maintaining a spreadsheet.',
  research: ['Plan, not yet run: interviews on how people track spending today.', 'Review how existing budgeting tools present category spending and alerts.'],
  journey: [['Set budget', 'Setup feels like work', 'Quick monthly budget'], ['Track', 'No category view', 'Category-level visibility'], ['Alert', 'Alerts come too late or too often', 'Configurable thresholds']],
  rca: [['Month-end surprise', 'Share of users who exceed budget before they notice'], ['Alert fatigue', 'Alert dismissal rate'], ['Abandonment after setup', 'Repeat usage in week 2–4']],
  opps: [
    { n: 'Category spending visibility', r: 10000, i: 2, c: 0.7, e: 2 },
    { n: 'Configurable spending alerts', r: 10000, i: 2, c: 0.5, e: 2 },
    { n: 'Monthly budget tracking', r: 10000, i: 1, c: 0.8, e: 1 },
    { n: 'Bank-account sync', r: 6000, i: 2, c: 0.4, e: 6 },
  ],
  riceNote: 'Bank sync is attractive but expensive and uncertain, so it is out of the MVP. Alerts are central to the hypothesis, so I would test their thresholds rather than guess.',
  decisions: [['Add', 'Category visibility and budget tracking'], ['Test', 'Alert thresholds via A/B'], ['Defer', 'Bank-account sync'], ['Remove', 'Complex multi-account budgets from the MVP']],
  prd: ['MVP: category-level spending, monthly budget tracking and configurable alerts.', 'Acceptance: a user can set a budget and receive an alert when a category crosses the threshold they chose.', 'Non-goal: investment or credit features.'],
  metrics: [['North Star', 'Percentage of users staying within budget'], ['KPI tree', 'Budget adherence, alert engagement rate, monthly active users, repeat usage']],
  experiment: ['Hypothesis: a different alert threshold changes alert engagement and budget adherence.', 'Variant A: earlier alert. Variant B: later alert. Compare engagement and share of users within budget.'],
  rollout: ['Small beta, then widen if engagement holds.'],
  risks: ['Alerts could cause fatigue and uninstalls.', 'Self-reported or manual entry may be inaccurate.'],
  next: ['Run the interviews.', 'Prototype the budget setup and test it with a few people.'],
}
