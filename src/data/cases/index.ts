import { checkout } from './checkout'
import { pickup } from './pickup'
import { copilot } from './copilot'
import { fraud } from './fraud'
import { swiggy } from './swiggy'
import { whatsapp } from './whatsapp'
import { gpay } from './gpay'
import { expense } from './expense'
import { ops } from './ops'
import type { Case } from './types'

export const cases: Case[] = [checkout, fraud, ops, expense, swiggy, whatsapp, gpay, pickup, copilot]
export const findCase = (id: string) => cases.find((c) => c.id === id)
export type { Case, Opp } from './types'
