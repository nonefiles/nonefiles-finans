export const metadata = {
  title: "Mortgage Calculator - Estimate Monthly Payments",
  description:
    "Free mortgage calculator with principal, interest, taxes, insurance, PMI, and amortization schedule. Fast, accurate, no signup required. U.S. market formulas.",
  openGraph: {
    title: "Mortgage Calculator - Estimate Monthly Payments | LoanSense",
    description:
      "Free mortgage calculator with detailed breakdown. Calculate monthly payments including taxes, insurance, and PMI.",
  },
}

import MortgageCalculatorClient from "./mortgage-calculator-client"

export default function MortgageCalculatorPage() {
  return <MortgageCalculatorClient />
}
