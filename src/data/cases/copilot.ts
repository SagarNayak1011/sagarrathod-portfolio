import type { Case } from './types'

export const copilot: Case = {
  id: 'copilot',
  title: 'Job application copilot',
  tag: 'Product Concept',
  cats: ['AI Product Management', 'Product Discovery'],
  blurb: 'A proposed AI product that explains job requirements, finds skill gaps and helps edit applications.',
  summary: 'A concept, not a launched product. The AI explains and suggests; the user edits and approves. It never invents qualifications or submits an application on its own.',
  problem: 'Job postings are hard to parse, resumes are often generic, and applications get lost across tabs and spreadsheets. I would verify each of these with research before building.',
  users: 'Early-career job seekers applying to many roles who want clarity on fit and a tidy pipeline.',
  research: ['Plan, not yet run: interviews on how seekers read postings and decide whether to apply.', 'Review how existing job tools handle matching and tracking.', 'Build a small labelled set of job and resume pairs for evaluation.'],
  journey: [['Discover', 'Hard to tell if a role fits', 'Explain requirements and gaps'], ['Prepare', 'Generic resume', 'Evidence-based edit suggestions'], ['Track', 'Applications get lost', 'Simple pipeline']],
  rca: [['Job posts are hard to parse', 'Interview plan: how seekers read postings'], ['Generic resumes', 'Compare tailored vs untailored outcomes'], ['Applications get lost', 'Tracking behaviour in research']],
  opps: [
    { n: 'Resume-to-job match with cited evidence', r: 5000, i: 2, c: 0.6, e: 3 },
    { n: 'Editable tailoring suggestions', r: 5000, i: 1, c: 0.6, e: 2 },
    { n: 'Application tracker', r: 4000, i: 0.5, c: 0.8, e: 1 },
    { n: 'Job recommendations', r: 3000, i: 1, c: 0.3, e: 4 },
  ],
  riceNote: 'Recommendations score low on confidence and need data I do not have, so I would defer them. Auto-submit is removed by design, not scored.',
  decisions: [['Add', 'Resume-to-job match with cited evidence'], ['Improve', 'Editable suggestions, never auto-applied'], ['Defer', 'Job recommendations'], ['Remove', 'Any auto-submit']],
  prd: ['MVP: paste a job and a resume, get a gap explanation and suggested edits.', 'Retrieval grounds each claim in the user’s own resume text.', 'Acceptance: every suggestion links to a resume line or is labelled as a gap.', 'Fallback: low confidence routes to a plain checklist.'],
  metrics: [['North Star', 'Applications the user tailors and approves per week'], ['AI quality', 'Unsupported-claim rate, suggestion acceptance rate'], ['Cost', 'Cost per completed task, p95 latency']],
  experiment: ['Evaluate offline on the labelled pairs before any user sees it; track unsupported-claim rate.', 'Then a small beta comparing tailored vs untailored applications by the user’s own judgement.'],
  rollout: ['Closed beta with human review of every suggestion at first.', 'Pause if unsupported claims appear above the agreed threshold.'],
  risks: ['Hallucinated qualifications.', 'Privacy of resumes and consent for storing them.', 'Bias in matching.'],
  next: ['Run the discovery interviews.', 'Build the evaluation set and a manual-prompt prototype.'],
}
