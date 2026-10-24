import { useState } from 'react'
import { cases, findCase } from '../data/cases'
import { kpis, groups, short } from '../data/kpis'
import { experience, skills } from '../data/profile'
import { checkout } from '../data/cases/checkout'
import { LINKS, TRAINING_PROVIDER } from '../data/links'
import RiceCalculator from './RiceCalculator'
import Hero3D from './Hero3D'

const colors = ['#ff8fb7', '#ffd54f', '#8fdc5a', '#5cb8ff', '#a78bfa', '#ff9d5c']
const C = (c: string) => ({ ['--c' as string]: c }) as React.CSSProperties
const H = ({ t, s }: { t: string; s?: string }) => (<><h2>{t}</h2><div className="rule" />{s && <p className="sub">{s}</p>}</>)

export function Home() {
  const stats: [string, string][] = [['3+', 'years across consulting, operations & analytics'], [String(cases.length), 'case studies, teardowns & concepts'], ['2', 'roles: VMS and independent consulting'], ['B.Tech', 'ECE, IIIT Dharwad']]
  const bring: [string, string, string][] = [
    ['Engineering', 'I understand feasibility because I studied how systems are built (C/C++, Python, Java, MySQL).', '#5cb8ff'],
    ['Operations', 'I coordinate workflows, escalations and stakeholders daily at VMS, then look for the root cause.', '#ffd54f'],
    ['Analytics', 'I define metrics, funnels and experiments before I propose a solution.', '#8fdc5a'],
  ]
  return (
    <div className="wrap">
      <section className="hero" aria-label="Introduction">
        <div>
          <span className="tag">Associate Product Manager</span>
          <h1>Turning complex problems into <span>thoughtful products.</span></h1>
          <p>I’m Sagar. I bring an engineering foundation and 3+ years across technical consulting, operations and analytics to product work: framing the problem, prioritising with evidence, and defining how success will be measured.</p>
          <div className="row">
            <a className="btn p" href="#/work">Explore my work</a>
            {LINKS.resume && <a className="btn" href={LINKS.resume} download="Sagar-Rathod-Resume.pdf">View resume</a>}
            <a className="btn" href="#/contact">Contact me</a>
          </div>
        </div>
        <Hero3D />
      </section>
      <div className="stats">
        {stats.map(([n, l], i) => <div className="card tc stat" style={C(colors[i])} key={l}><b>{n}</b><span style={{ color: 'var(--mut)', fontSize: 13 }}>{l}</span></div>)}
      </div>
      <div className="grid">
        {bring.map(([t, d, c]) => <div className="card tc" style={C(c)} key={t}><h3>{t}</h3><p>{d}</p></div>)}
      </div>
    </div>
  )
}

export function Work() {
  const [g, setG] = useState(0)
  const [id, setId] = useState(groups[0][1][0])
  const c = findCase(id)!
  const pick = (i: number) => { setG(i); setId(groups[i][1][0]) }
  return (
    <div className="wrap">
      <H t="Case studies" s="Learning case studies and teardowns. Proposed solutions are ideas, not implemented features or verified business results." />
      <div className="chips" role="group" aria-label="Project type">
        {groups.map(([n], i) => <button key={n} className="chip" aria-pressed={g === i} onClick={() => pick(i)} style={g === i ? { background: 'var(--ind)', color: '#fff' } : undefined}>{n}</button>)}
      </div>
      <div className="tabs" role="tablist" aria-label="Choose a project">
        {groups[g][1].map((x) => <button key={x} role="tab" aria-selected={id === x} onClick={() => setId(x)}>{short[x]}</button>)}
      </div>
      <article className="card" key={c.id} aria-live="polite" style={{ animation: 'pageIn .5s' }}>
        <span className="pill" style={C('#ffd54f')}>{c.tag}</span>
        <h3 style={{ fontSize: 24, margin: '10px 0 16px' }}>{c.title}</h3>
        <div className="cols">
          <div><b>What I looked at</b><ul><li>{c.problem.split(/(?<=\.)\s/)[0]}</li>{c.research.slice(0, 2).map((r) => <li key={r}>{r}</li>)}</ul></div>
          <div><b>Potential friction</b><span className="hl" style={{ background: '#ffd0e0' , color: '#7a1236' }}>Hypothesis</span><ul>{c.rca.map((r) => <li key={r[0]}>{r[0]}</li>)}</ul></div>
          <div><b>Explored solutions</b><span className="hl" style={{ background: '#e0d6ff', color: '#3b1f9e' }}>Proposed, not implemented</span><ul>{c.decisions.map((d) => <li key={d[1]}>{d[1]}</li>)}</ul></div>
          <div><b>How success would be measured</b><div className="chips" style={{ marginTop: 10, flexDirection: 'column', alignItems: 'flex-start' }}>{kpis[c.id].map((k, i) => <span className="pill" style={C(colors[i % 6])} key={k}>{k}</span>)}</div></div>
        </div>
        <div className="row"><a className="btn p" href={`#/case/${c.id}`}>Open full case study →</a></div>
      </article>
      <div className="note">Illustrative data and proposed ideas only. No real business results are claimed.</div>
    </div>
  )
}

const fw: [string, string][] = [
  ['RICE', 'Scores ideas by Reach × Impact × Confidence ÷ Effort. Try it in the calculator below.'],
  ['MoSCoW', 'Sorts scope into Must, Should, Could and Won’t to protect the MVP.'],
  ['AARRR', 'Acquisition, Activation, Retention, Referral, Revenue: the pirate-metrics funnel.'],
  ['JTBD', 'Frames needs as the “job” a user hires a product to do.'],
  ['North Star Metric', 'One metric that captures the value users get, with guardrails beside it.'],
  ['Root Cause Analysis', 'Asks “why” repeatedly to separate symptoms from causes before proposing fixes.'],
  ['PRDs', 'Documents problem, goals, scope, user stories, acceptance criteria and success metrics.'],
  ['Roadmaps', 'Sequences work into Now / Next / Later themes tied to outcomes.'],
]

export function Skills() {
  return (
    <div className="wrap">
      <H t="Frameworks" s="The tools I reach for, and what each one is for." />
      <div className="grid">{fw.map(([t, d], i) => <div className="card tc" style={C(colors[i % 6])} key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>
      <h2 style={{ marginTop: 34 }}>RICE calculator</h2><div className="rule" />
      <p className="sub">Wired to my checkout case. Every input is an assumption I would replace with real analytics data.</p>
      <div className="card"><RiceCalculator initial={checkout.opps} note={checkout.riceNote} /></div>
      <h2 style={{ marginTop: 34 }}>Skills &amp; tools</h2><div className="rule" />
      <div className="grid">
        {skills.map(([g, list], i) => (
          <div className="card tc" style={C(colors[(i + 2) % 6])} key={g}>
            <h3>{g}</h3>
            <div className="chips" style={{ marginTop: 10 }}>{list.split(', ').map((s, j) => <span className="pill" style={C(colors[(i + j) % 6])} key={s}>{s}</span>)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const steps: [string, string][] = [
  ['Discover', 'I talk to users, review competitors and map the journey to find where people struggle.'],
  ['Define', 'I turn findings into a sharp problem statement, a persona and a job-to-be-done.'],
  ['Prioritise', 'I rank ideas with RICE and MoSCoW so effort goes where impact is highest, and I say what would change my mind.'],
  ['Design', 'I sketch flows and wireframes, then write the PRD with user stories and acceptance criteria.'],
  ['Validate', 'I test assumptions with prototypes, interviews and experiments before committing engineering time.'],
  ['Launch', 'I roll out in stages with guardrail metrics and clear rollback triggers.'],
  ['Learn', 'I read the results honestly, write down what I learned and choose the next bet.'],
]

export function Process() {
  return (
    <div className="wrap">
      <H t="Product thinking process" s="The loop I follow for every problem, from first question to measured outcome." />
      {steps.map(([t, d], i) => <div className="step" style={C(colors[i % 6])} key={t}><h3>{i + 1}. {t}</h3><p>{d}</p></div>)}
    </div>
  )
}

export function About() {
  return (
    <div className="wrap">
      <div className="two" style={{ gridTemplateColumns: 'auto 1fr', alignItems: 'center', gap: 34 }}>
        <img className="photo" style={C('#a78bfa')} src="/photos/p2.jpg" alt="Portrait of Sagar sitting with a laptop" width={300} height={400} />
        <div>
          <H t="About me" />
          <p>I graduated in Electronics and Communication Engineering (B.Tech, IIIT Dharwad, 2023). Since then I’ve worked as a technical and product consultant for small and mid-sized businesses, translating ambiguous requirements into practical solution options.</p>
          <p>Today I’m an Executive in Operations &amp; Analytics at VMS. That mix taught me how decisions get made when data is messy and teams have competing priorities, which is the habit I want to bring to product work.</p>
        </div>
      </div>
      <h2 style={{ marginTop: 34 }}>Experience</h2><div className="rule" />
      <div className="grid">
        {experience.map((e, i) => (
          <article className="card tc" style={C(colors[i * 3])} key={e.role}>
            <span className="lbl">{e.when}</span><h3>{e.role}</h3><p style={{ marginBottom: 4 }}>{e.org}</p>
            <ul style={{ color: 'var(--mut)', fontSize: 14 }}>{e.pts.map((p) => <li key={p}>{p}</li>)}</ul>
          </article>
        ))}
      </div>
      <h2 style={{ marginTop: 34 }}>Education &amp; training</h2><div className="rule" />
      <div className="grid">
        <div className="card tc" style={C('#8fdc5a')}><h3>B.Tech, Electronics and Communication Engineering</h3><p>Indian Institute of Information Technology (IIIT) Dharwad · 2019 – 2023</p></div>
        <div className="card tc" style={C('#ffd54f')}><h3>Product Management Program</h3><p>{TRAINING_PROVIDER ? `${TRAINING_PROVIDER} · ` : ''}Structured training in discovery, strategy, prioritisation, PRDs, metrics, experimentation and product execution.</p></div>
      </div>
    </div>
  )
}

export function Contact() {
  return (
    <div className="wrap">
      <div className="cdark">
        <img className="av" src="/photos/p5.jpg" alt="Portrait of Sagar" width={140} height={140} style={{ objectPosition: '50% 20%' }} />
        <h2 style={{ marginTop: 18 }}>Let’s build <span style={{ background: 'linear-gradient(90deg,#5cb8ff,#ff8fb7)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>better products.</span></h2>
        <p>Open to Associate Product Manager roles. Email is the fastest way to reach me.</p>
        <div className="row" style={{ justifyContent: 'center' }}>
          {LINKS.email && <a className="btn p" href={`mailto:${LINKS.email}`}>Email me</a>}
          {LINKS.linkedin && <a className="btn" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
          {LINKS.github && <a className="btn" href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          {LINKS.resume && <a className="btn" href={LINKS.resume} download="Sagar-Rathod-Resume.pdf">Resume</a>}
        </div>
        <p style={{ marginTop: 22, fontSize: 14 }}>
          {LINKS.phone && <a href={`tel:${LINKS.phone.replace(/\s/g, '')}`}>{LINKS.phone}</a>}
          {LINKS.phone && LINKS.email && ' · '}{LINKS.email}
          {LINKS.location && <><br />{LINKS.location}</>}
        </p>
      </div>
    </div>
  )
}
