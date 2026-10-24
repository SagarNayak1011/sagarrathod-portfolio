import { useRef, useState } from 'react'
import type { KeyboardEvent, ReactNode } from 'react'
import { findCase } from '../data/cases'
import RiceCalculator from './RiceCalculator'
import { Prototype, SampleSize } from './CheckoutExtras'

const Table = ({ head, rows }: { head: string[]; rows: string[][] }) => (
  <div className="scroll"><table><thead><tr>{head.map((h) => <th key={h}>{h}</th>)}</tr></thead><tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody></table></div>
)
const List = ({ items }: { items: string[] }) => <ul>{items.map((x) => <li key={x}>{x}</li>)}</ul>

export default function CaseStudyDetail({ id }: { id: string }) {
  const c = findCase(id)
  const [tab, setTab] = useState(0)
  const refs = useRef<(HTMLButtonElement | null)[]>([])
  if (!c)
    return (
      <section><div className="w"><h2>Case study not found</h2><p className="sub">That page doesn’t exist.</p><a className="btn p" href="#/work">Back to case studies</a></div></section>
    )
  const tabs: [string, ReactNode][] = [
    ['Summary', <><p>{c.summary}</p><h3>Problem</h3><p style={{ color: 'var(--ink)' }}>{c.problem}</p><h3>Users</h3><p style={{ color: 'var(--ink)' }}>{c.users}</p></>],
    ['Research', <><h3>Research plan</h3><List items={c.research} /><h3>Journey</h3><Table head={['Stage', 'Possible friction (hypothesis)', 'Opportunity']} rows={c.journey} /></>],
    ['Root causes', <><Table head={['Hypothesis (untested)', 'Evidence to validate']} rows={c.rca} /><div className="note">These are hypotheses, not findings.</div></>],
    ['Prioritisation', <><RiceCalculator initial={c.opps} note={c.riceNote} /><h3>Feature decisions</h3><Table head={['Call', 'Feature']} rows={c.decisions} /></>],
    ['PRD', <List items={c.prd} />],
    ['Metrics & experiment', <><Table head={['Type', 'Definition']} rows={c.metrics} /><h3>Experiment</h3><List items={c.experiment} />{c.checkout && <SampleSize />}</>],
    ['Rollout & risks', <><h3>Rollout</h3><List items={c.rollout} /><h3>Risks</h3><List items={c.risks} /></>],
    ['Next steps', <List items={c.next} />],
    ...(c.checkout ? ([['Prototype', <Prototype />]] as [string, ReactNode][]) : []),
  ]
  const onKey = (e: KeyboardEvent, i: number) => {
    const n = e.key === 'ArrowRight' ? (i + 1) % tabs.length : e.key === 'ArrowLeft' ? (i - 1 + tabs.length) % tabs.length : e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : -1
    if (n < 0) return
    e.preventDefault(); setTab(n); refs.current[n]?.focus()
  }
  return (
    <section>
      <div className="w">
        <a className="back" href="#/work">← All case studies</a><br />
        <span className="lbl">{c.tag}</span>
        <h2>{c.title}</h2>
        <div className="tabs" role="tablist" aria-label="Case study sections">
          {tabs.map(([t], i) => (
            <button key={t} role="tab" id={`tab-${i}`} aria-selected={tab === i} aria-controls="panel" tabIndex={tab === i ? 0 : -1} ref={(el) => { refs.current[i] = el }} onClick={() => setTab(i)} onKeyDown={(e) => onKey(e, i)}>{t}</button>
          ))}
        </div>
        <div className="card" id="panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>{tabs[tab][1]}</div>
        <div className="note">Illustrative data and proposed ideas only. No real business results are claimed.</div>
      </div>
    </section>
  )
}
