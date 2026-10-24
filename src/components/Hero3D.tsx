import { useRef } from 'react'
import type { PointerEvent } from 'react'

export const photos = [
  { src: '/photos/p5.jpg', c: '#5cb8ff', pos: '50% 20%' },
  { src: '/photos/p3.jpg', c: '#ff8fb7', pos: '50% 25%' },
  { src: '/photos/p2.jpg', c: '#8fdc5a', pos: '50% 25%' },
  { src: '/photos/p4.jpg', c: '#ffd54f', pos: '50% 30%' },
  { src: '/photos/p1.jpg', c: '#a78bfa', pos: '50% 25%' },
]

const Cube = ({ s, c, style }: { s: number; c: string; style: React.CSSProperties }) => (
  <div className="cube" style={{ ['--s' as string]: `${s}px`, ['--c' as string]: c, ...style }} aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
)

export default function Hero3D() {
  const ref = useRef<HTMLDivElement>(null)
  const move = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el || e.pointerType === 'touch') return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--ry', `${((e.clientX - r.left) / r.width - 0.5) * 22}deg`)
    el.style.setProperty('--rx', `${-6 - ((e.clientY - r.top) / r.height - 0.5) * 16}deg`)
  }
  const leave = () => { ref.current?.style.setProperty('--ry', '0deg'); ref.current?.style.setProperty('--rx', '-6deg') }
  return (
    <div className="stage3d" onPointerMove={move} onPointerLeave={leave} role="group" aria-label="Rotating gallery of portraits of Sagar">
      <div className="tilt" ref={ref}>
        <div className="orb" aria-hidden="true" />
        <div className="ring">
          {photos.map((p, i) => (
            <div className="pc" key={p.src} style={{ ['--i' as string]: i, ['--c' as string]: p.c }}>
              <img src={p.src} alt={`Portrait of Sagar ${i + 1} of ${photos.length}`} style={{ objectPosition: p.pos }} loading={i === 0 ? 'eager' : 'lazy'} />
            </div>
          ))}
        </div>
        <Cube s={46} c="#ff8fb7" style={{ left: '8%', top: '12%' }} />
        <Cube s={34} c="#ffd54f" style={{ right: '10%', top: '8%', animationDuration: '10s' }} />
        <Cube s={40} c="#8fdc5a" style={{ right: '14%', bottom: '10%', animationDuration: '18s' }} />
        <Cube s={28} c="#5cb8ff" style={{ left: '14%', bottom: '14%', animationDuration: '12s' }} />
      </div>
    </div>
  )
}
