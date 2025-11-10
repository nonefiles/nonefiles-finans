import RefinanceCalculatorClient from "./RefinanceCalculatorClient"

export const metadata = {
  title: "Refinance Calculator - Should You Refinance Your Mortgage?",
  description:
    "Calculate if refinancing will save you money. Compare current vs. new payments, break-even analysis, and lifetime savings.",
  openGraph: {
    title: "Refinance Calculator - Should You Refinance Your Mortgage?",
    description: "Find out if refinancing your mortgage will save you money with our detailed refinance calculator.",
  },
}

export default function RefinanceCalculatorPage() {
  return <RefinanceCalculatorClient />
}
