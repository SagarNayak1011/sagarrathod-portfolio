export const experience = [
  {
    role: 'Executive – Operations & Analytics',
    org: 'Vayuputra Management Services (VMS)',
    when: 'Nov 2025 – Present',
    pts: [
      'Coordinate daily operational workflows, stakeholder dependencies, and escalations to support timely issue resolution and consistent execution.',
      'Conduct root-cause analysis and review operational trends to identify recurring bottlenecks, prioritize issues, and recommend process improvements.',
      'Collaborate with relevant stakeholders to clarify requirements, manage changing priorities, and coordinate follow-up actions on operational issues.',
    ],
  },
  {
    role: 'Technical & Product Consultant',
    org: 'Independent Consulting – Small and Mid-Sized Businesses',
    when: 'Jul 2023 – Oct 2025',
    pts: [
      'Partnered with business owners to identify business, technology, and operational challenges and translate ambiguous requirements into practical solution options.',
      'Evaluated potential solutions against feasibility, implementation effort, stakeholder priorities, and expected business value to support informed decision-making.',
      'Refined recommendations using client feedback and clarified requirements to align proposed solutions with business needs and operational constraints.',
    ],
  },
]

export const skills: [string, string][] = [
  ['Product Management', 'Product Discovery, Product Strategy, Product Sense, Problem Framing, PRDs, MVP Definition, User Stories, Acceptance Criteria, User Journeys, Roadmaps, RICE, ICE, MoSCoW Prioritization'],
  ['Product Analytics', 'KPI Trees, North Star Metrics, Funnel Analysis, Cohort Analysis, Conversion Analysis, Retention, Root-Cause Analysis, Hypothesis Testing, A/B Testing Fundamentals, SQL, Excel'],
  ['Technical', 'C/C++, Python, OOPs, Computer Networking, DBMS, MySQL, Java, Git, GitHub'],
  ['Tools', 'Jira, Figma, Google Analytics, Microsoft Excel, Google Sheets, Git/GitHub'],
  ['Execution & Collaboration', 'Agile, Scrum, Kanban, Requirements Gathering, Stakeholder Management, Cross-Functional Coordination, Process Optimization, Technical Feasibility, Prioritization, Sprint Planning'],
]

export const frameworks: [string, string, string][] = [
  ['Discovery', 'JTBD, interviews, journey maps', 'I use these to find what job a user is hiring the product for, before debating features. Output: problem statement and ranked hypotheses. Limit: interviews tell you why, not how many.'],
  ['Root cause', 'Five Whys, Pareto, funnel, cohort', 'I separate symptom from cause and list the evidence that would confirm each hypothesis. An untested hypothesis stays a hypothesis.'],
  ['Analytics', 'North Star, guardrails, A/B tests', 'Every metric gets a numerator, denominator, time window and event definition, plus guardrails so a win on one metric does not hide a loss on another.'],
  ['AI product', 'Eval sets, RAG, human-in-the-loop', 'I ask whether AI beats a rules-based approach, then define quality metrics, fallbacks and approval steps before choosing a model.'],
]

export const approach: [string, string, string, string, string][] = [
  ['Understand context', 'What is the business goal and who is affected?', 'Stakeholder notes, metrics tree', 'Context brief', 'Checkout: the goal is conversion, not just traffic'],
  ['Define the problem', 'What exactly is happening, to whom, and how do we know?', 'Problem statement', 'One-sentence problem', 'Users reach payment but do not finish'],
  ['Segment users', 'Whose needs differ?', 'JTBD, personas', 'Segments', 'New vs returning, mobile vs desktop'],
  ['Gather evidence', 'What data or research exists?', 'SQL, interviews', 'Evidence list', 'Funnel by step and device'],
  ['Map the journey', 'Where is the friction?', 'Journey map', 'Friction points', 'Fee reveal at the final step'],
  ['Find root causes', 'Symptom or cause?', 'Five Whys, Pareto', 'Ranked hypotheses', 'Fees vs forced signup vs forms'],
  ['Generate options', 'What else could we try?', 'Opportunity tree', 'Solution options', 'Guest checkout, autofill, fee display'],
  ['Prioritise', 'What gives the most value for the least effort and risk?', 'RICE, impact/effort', 'Ranked list', 'Fees and autofill first'],
  ['Define MVP and PRD', 'What is the smallest testable version?', 'PRD, user stories', 'PRD', 'Upfront totals on mobile'],
  ['Prototype and validate', 'Does it make sense to users?', 'Wireframes, tests', 'Validated flow', 'Five-user walkthrough plan'],
  ['Align and plan', 'Who needs to agree, and what blocks us?', 'Roadmap, risk log', 'Execution plan', 'Payments team dependency'],
  ['Launch carefully', 'How do we limit harm?', 'Staged rollout, guardrails', 'Rollout plan', '5% → 25% → 100%'],
  ['Learn and iterate', 'What did we learn?', 'Experiment readout', 'Next bet', 'Re-run on guest checkout'],
]
