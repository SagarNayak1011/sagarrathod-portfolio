import { useEffect, useRef, useState } from 'react'
import CaseStudyDetail from './components/CaseStudyDetail'
import { Home, Work, Skills, Process, About, Contact } from './components/Pages'
import { PHOTO_NOTE } from './data/links'

const pages = [
  ['home', 'Home', '#5cb8ff', Home],
  ['work', 'Work', '#ff8fb7', Work],
  ['skills', 'Skills', '#8fdc5a', Skills],
  ['process', 'Process', '#ffd54f', Process],
  ['about', 'About', '#a78bfa', About],
  ['contact', 'Contact', '#ff9d5c', Contact],
] as const

const parse = (h: string) => h.replace(/^#\/?/, '').split('/').filter(Boolean)

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try { const t = localStorage.getItem('theme'); if (t === 'light' || t === 'dark') return t } catch { /* storage unavailable */ }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const page = useRef<HTMLDivElement>(null)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* storage unavailable */ }
  }, [theme])
  useEffect(() => {
    const on = () => setHash(window.location.hash)
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  const [first, second] = parse(hash)
  const key = first === 'case' ? `case/${second}` : first ?? 'home'
  useEffect(() => { page.current?.scrollTo(0, 0); window.scrollTo(0, 0) }, [key])
  const current = first === 'case' ? 'work' : pages.find((p) => p[0] === first)?.[0] ?? 'home'
  const Page = pages.find((p) => p[0] === current)![3]
  return (
    <>
      <div className="bgfx" aria-hidden="true">
        <div className="blob" style={{ width: 380, height: 380, left: '-6%', top: '8%', background: '#ff8fb7' }} />
        <div className="blob" style={{ width: 420, height: 420, right: '-8%', top: '30%', background: '#5cb8ff', animationDelay: '-6s' }} />
        <div className="blob" style={{ width: 360, height: 360, left: '30%', bottom: '-10%', background: '#ffd54f', animationDelay: '-11s' }} />
      </div>
      <a className="skip" href="#main">Skip to content</a>
      <div className="win">
        <div className="top">
          <div className="dots" aria-hidden="true"><i style={{ background: '#ff6b6b' }} /><i style={{ background: '#ffd54f' }} /><i style={{ background: '#8fdc5a' }} /></div>
          <div className="addr" aria-hidden="true">sagar-rathod.vercel.app / {key}</div>
          <button className="tbtn" aria-pressed={theme === 'dark'} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>{theme === 'dark' ? '☀ Light' : '☾ Dark'}</button>
        </div>
        <nav className="wnav" aria-label="Main">
          {pages.map(([id, label, c]) => <a key={id} href={`#/${id === 'home' ? '' : id}`} aria-current={current === id ? 'page' : undefined} style={{ ['--c' as string]: c }}>{label}</a>)}
        </nav>
        <main className="page" id="main" ref={page}>
          <div className="pg" key={key}>
            {first === 'case' ? <CaseStudyDetail id={second ?? ''} /> : <Page />}
            <p className="foot">© {new Date().getFullYear()} Sagar Rathod · Case studies use illustrative data where company data isn’t available.{PHOTO_NOTE ? ` ${PHOTO_NOTE}` : ''}</p>
          </div>
        </main>
      </div>
    </>
  )
}
