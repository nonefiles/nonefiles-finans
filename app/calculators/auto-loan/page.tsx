import AutoLoanCalculatorClient from "./auto-loan-calculator-client"

export const metadata = {
  title: "Auto Loan Calculator - Calculate Car Payment",
  description:
    "Calculate your monthly car payment and total auto loan cost. Include trade-in value, sales tax, and fees for accurate estimates.",
  openGraph: {
    title: "Auto Loan Calculator - Calculate Car Payment",
    description: "Calculate your monthly car payment and total auto loan cost with our free auto loan calculator.",
  },
}

export default function AutoLoanCalculatorPage() {
  return <AutoLoanCalculatorClient />
}
