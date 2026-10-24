import { useState } from 'react'
import { funnel } from './FunnelBars'

export function SampleSize() {
  const base = (funnel[3][1] / funnel[0][1]) * 100
  const [p, setP] = useState(Number(base.toFixed(1)))
  const [d, setD] = useState(2)
  const n = d > 0 && p > 0 && p < 100 ? Math.ceil((16 * (p / 100) * (1 - p / 100)) / (d / 100) ** 2) : 0
  const perDay = funnel[0][1] / 30
  return (
    <div className="card" style={{ marginTop: 16 }}>
      <span className="lbl">Illustrative sample-size estimate</span>
      <div className="row" style={{ marginTop: 8 }}>
        <label>Baseline conversion (%) <input type="number" min="1" max="99" step="0.1" value={p} onChange={(e) => setP(parseFloat(e.target.value) || 0)} /></label>
        <label>Minimum detectable effect (points) <input type="number" min="0.5" step="0.5" value={d} onChange={(e) => setD(parseFloat(e.target.value) || 0)} /></label>
      </div>
      <p style={{ color: 'var(--ink)' }}>About <b>{n.toLocaleString()}</b> eligible sessions per arm, roughly <b>{n ? Math.ceil((2 * n) / perDay) : 0}</b> days at {Math.round(perDay)} sessions a day (illustrative traffic).</p>
      <small style={{ color: 'var(--mut)' }}>Rule of thumb for 80% power at 5% significance: n ≈ 16·p(1−p)/δ². I would run a proper power analysis before launch.</small>
    </div>
  )
}

type Step = 'cart' | 'account' | 'address' | 'pay' | 'fail' | 'done'

export function Prototype() {
  const [proposed, setProposed] = useState(true)
  const [step, setStep] = useState<Step>('cart')
  const [fail, setFail] = useState(false)
  const reset = (v: boolean) => { setProposed(v); setStep('cart'); setFail(false) }
  const fields = proposed ? ['Full name', 'Phone', 'Address', 'PIN code'] : ['Full name', 'Phone', 'Address line 1', 'Address line 2', 'Landmark', 'City', 'PIN code']
  const total = 1947
  return (
    <div className="pv">
      <div className="phone" role="group" aria-label="Interactive checkout prototype" aria-live="polite">
        {step === 'cart' && <>
          <b>Your cart</b>
          <p>Running shoes ₹1,299<br />Sports socks (3) ₹599<br /><b>Subtotal ₹1,898</b></p>
          <p style={{ color: 'var(--mut)' }}>{proposed ? 'Shipping ₹49, taxes included. Total ₹1,947.' : 'Shipping and taxes are calculated at payment.'}</p>
          {proposed ? <><button className="btn p" onClick={() => setStep('address')}>Checkout as guest</button><button className="btn" onClick={() => setStep('address')}>Sign in for saved details</button></> : <button className="btn p" onClick={() => setStep('account')}>Sign in to checkout</button>}
        </>}
        {step === 'account' && <><b>Create an account</b>{['Email', 'Password', 'Confirm password'].map((f) => <input key={f} type="text" aria-label={f} placeholder={f} />)}<button className="btn p" onClick={() => setStep('address')}>Create account and continue</button></>}
        {step === 'address' && <><b>Delivery address</b>{fields.map((f) => <input key={f} type="text" aria-label={f} placeholder={f} />)}<button className="btn p" onClick={() => setStep('pay')}>Continue to payment</button></>}
        {step === 'pay' && <>
          <b>Payment</b><p>Total ₹{total.toLocaleString()}</p>
          {!proposed && <p className="bad">Includes ₹49 shipping, shown for the first time.</p>}
          <label><input type="checkbox" checked={fail} onChange={(e) => setFail(e.target.checked)} /> Simulate a payment failure</label>
          <button className="btn p" onClick={() => setStep(fail ? 'fail' : 'done')}>Pay ₹{total.toLocaleString()}</button>
        </>}
        {step === 'fail' && <>
          <b className="bad">Payment failed</b>
          {proposed ? <><p>Your cart and address are saved and nothing was charged. Try another method:</p>{['UPI', 'Card', 'Cash on delivery'].map((m) => <button key={m} className="btn" onClick={() => { setFail(false); setStep('done') }}>{m}</button>)}</> : <><p>Something went wrong.</p><button className="btn p" onClick={() => reset(proposed)}>Start over</button></>}
        </>}
        {step === 'done' && <><b className="ok">Order confirmed ✓</b><p>Total ₹{total.toLocaleString()}</p><button className="btn" onClick={() => reset(proposed)}>Replay</button></>}
      </div>
      <div style={{ maxWidth: 360 }}>
        <div className="seg" role="group" aria-label="Prototype version">
          <button aria-pressed={!proposed} onClick={() => reset(false)}>Current flow</button>
          <button aria-pressed={proposed} onClick={() => reset(true)}>Proposed MVP</button>
        </div>
        <p>Switch flows and complete a purchase in each. Count the screens, fields and surprises. In the proposed flow, tick “Simulate a payment failure” to see the recovery path.</p>
        <div className="note">Working concept prototype with illustrative prices. It does not process payments or connect to a real store.</div>
      </div>
    </div>
  )
}
