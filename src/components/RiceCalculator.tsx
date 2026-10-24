import { useState } from 'react'
import type { Opp } from '../data/cases'

const fields: [keyof Omit<Opp, 'n'>, string, number][] = [['r', 'reach', 1], ['i', 'impact', 0.25], ['c', 'confidence', 0.1], ['e', 'effort', 0.5]]
const score = (o: Opp) => (o.e > 0 ? (o.r * o.i * o.c) / o.e : NaN)

export default function RiceCalculator({ initial, note }: { initial: Opp[]; note: string }) {
  const [rows, setRows] = useState(initial)
  const scores = rows.map(score)
  const mx = Math.max(...scores.filter(isFinite), 0)
  const sorted = rows.map((o, i) => ({ n: o.n, s: scores[i] })).sort((a, b) => (isFinite(b.s) ? b.s : -1) - (isFinite(a.s) ? a.s : -1))
  const set = (i: number, k: keyof Omit<Opp, 'n'>, v: string) => setRows(rows.map((o, j) => (j === i ? { ...o, [k]: parseFloat(v) || 0 } : o)))
  return (
    <div className="calc">
      <div className="scroll">
        <table>
          <thead><tr><th>Opportunity</th><th>Reach</th><th>Impact</th><th>Conf.</th><th>Effort</th><th>Score</th></tr></thead>
          <tbody>
            {rows.map((o, i) => (
              <tr key={o.n} className={scores[i] === mx && mx > 0 ? 'top' : ''}>
                <td>{o.n}</td>
                {fields.map(([k, label, step]) => (
                  <td key={k}><input type="number" min="0" step={step} value={o[k]} aria-label={`${o.n} ${label}`} onChange={(e) => set(i, k, e.target.value)} /></td>
                ))}
                <td className="score">{isFinite(scores[i]) ? Math.round(scores[i]).toLocaleString() : '–'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: 13, color: 'var(--mut)' }}><b>RICE = (Reach × Impact × Confidence) ÷ Effort.</b> Reach: affected users per quarter. Impact: 0.25 minimal, 0.5 low, 1 medium, 2 high, 3 massive. Confidence: 0–1. Effort: person-months.</p>
      </div>
      <div>
        {sorted.map((x) => (
          <div className="bar" key={x.n}><span style={{ minWidth: 150 }}>{x.n}</span><i style={{ width: `${isFinite(x.s) && mx ? (x.s / mx) * 50 : 0}%` }} /></div>
        ))}
        <div className="note"><b>Reading the result:</b> {note} All values are illustrative.</div>
      </div>
    </div>
  )
}
