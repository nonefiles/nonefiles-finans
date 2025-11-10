import PersonalLoanCalculatorClientPage from "./client-page"

export const metadata = {
  title: "Personal Loan Calculator - Monthly Payment & Loan Amount",
  description:
    "Calculate personal loan payments or determine how much you can borrow. Free calculator with reverse calculation feature.",
  openGraph: {
    title: "Personal Loan Calculator - Monthly Payment & Loan Amount",
    description: "Calculate personal loan payments or find out how much you can borrow based on your budget.",
  },
}

export default function PersonalLoanCalculatorPage() {
  return <PersonalLoanCalculatorClientPage />
}
