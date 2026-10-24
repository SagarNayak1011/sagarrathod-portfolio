export interface Opp { n: string; r: number; i: number; c: number; e: number }
export interface Case {
  id: string
  title: string
  tag: string
  cats: string[]
  blurb: string
  summary: string
  problem: string
  users: string
  research: string[]
  journey: [string, string, string][]
  rca: [string, string][]
  opps: Opp[]
  riceNote: string
  decisions: [string, string][]
  prd: string[]
  metrics: [string, string][]
  experiment: string[]
  rollout: string[]
  risks: string[]
  next: string[]
  checkout?: boolean
}
