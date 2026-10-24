// Short success-measure chips for the Work page overview.
export const kpis: Record<string, string[]> = {
  checkout: ['Checkout conversion', 'Payment failure rate', 'Refund rate', 'Average order value'],
  fraud: ['False-positive rate', 'False-negative rate', 'Detection coverage', 'Investigation turnaround'],
  ops: ['SLA breach rate', 'Mean time to resolution', 'Overdue exceptions', 'Resolved within SLA'],
  expense: ['Budget adherence', 'Alert engagement', 'Monthly active users', 'Users within budget'],
  swiggy: ['Funnel conversion'],
  whatsapp: ['Activation', 'User retention'],
  gpay: ['Transaction success rate'],
  pickup: ['Pre-pickup cancellation rate', 'ETA error', 'Support-contact rate'],
  copilot: ['Tailored applications / week', 'Unsupported-claim rate', 'Cost per task'],
}
export const groups: [string, string[]][] = [
  ['Case studies', ['checkout', 'fraud', 'ops', 'expense']],
  ['Teardowns', ['swiggy', 'whatsapp', 'gpay']],
  ['Concepts', ['pickup', 'copilot']],
]

export const short: Record<string, string> = {
  checkout: 'E-commerce checkout', fraud: 'Fraud detection', ops: 'Operations tools', expense: 'Expense management',
  swiggy: 'Swiggy', whatsapp: 'WhatsApp', gpay: 'Google Pay', pickup: 'Ride pickup', copilot: 'Job copilot',
}
