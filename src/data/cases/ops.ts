import type { Case } from './types'

export const ops: Case = {
  id: 'ops',
  title: 'Operations control tower and productivity tool',
  tag: 'Product Concept',
  cats: ['Product Strategy', 'Technical Product Management', 'Product Design'],
  blurb: 'An SLA-at-risk dashboard and a unified task workflow, scoped with Impact-vs-Effort and MoSCoW.',
  summary:
    'I designed a proposed SLA-at-risk dashboard with prioritised exceptions, ownership assignment, countdowns and escalation workflows. I then proposed a unified workflow for task assignment, ownership tracking, SLA monitoring, status updates and escalation, with the MVP scoped using Impact-versus-Effort and MoSCoW.',
  problem: 'Operations teams may learn an SLA is breached only after it happens, because exceptions are scattered and ownership is unclear. This draws on what I see in operations work, but the designs here are proposals.',
  users: 'Operations managers and the people who own exceptions and tasks.',
  research: ['Plan, not yet run: ask operations teams how they find out an SLA is at risk.', 'List the tools where tasks and exceptions live today.'],
  journey: [['Exception appears', 'Buried across tools', 'One prioritised feed'], ['Ownership', 'Nobody clearly owns it', 'Assign an owner'], ['Escalation', 'Raised late or informally', 'Escalation routing']],
  rca: [['Exceptions are invisible until late', 'Time between exception and first action'], ['Unclear ownership', 'Share of exceptions without an owner'], ['Late escalation', 'Time from risk to escalation']],
  opps: [
    { n: 'Exception feed with SLA countdown', r: 500, i: 2, c: 0.7, e: 2 },
    { n: 'Ownership assignment', r: 500, i: 2, c: 0.7, e: 1 },
    { n: 'Escalation routing', r: 500, i: 2, c: 0.6, e: 2 },
    { n: 'Predictive ETA', r: 500, i: 2, c: 0.2, e: 6 },
  ],
  riceNote: 'Visibility, ownership and escalation deliver the most for the least effort. Predictive features wait until the basic workflow is in use and measured.',
  decisions: [['Must', 'Task assignment, ownership tracking, SLA monitoring, escalation'], ['Should', 'Status updates'], ['Could', 'Summary reporting'], ["Won't (yet)", 'Workflow automation rules']],
  prd: ['MVP: prioritised exception view, owner, countdown and escalation path.', 'Acceptance: every at-risk exception shows an owner and a time remaining.', 'Non-goal: automating resolution.'],
  metrics: [['Control tower', 'SLA breach rate, mean time to resolution, overdue exception count, percentage resolved within SLA'], ['Productivity tool', 'Task completion rate, average resolution time, SLA compliance, overdue task count, escalation rate']],
  experiment: ['Pilot with one team and compare SLA compliance and overdue counts against a comparable team without the tool.'],
  rollout: ['One team, then neighbouring teams after the pilot.'],
  risks: ['Adoption: people may keep using old tools.', 'Escalation noise if thresholds are too sensitive.'],
  next: ['Interview a few operations owners.', 'Wireframe the feed and test it for clarity.'],
}
