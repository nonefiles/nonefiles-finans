import Link from "next/link"
import { Calculator, Home, TrendingUp, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Refinance Calculator Guide & When to Refinance Your Mortgage | LoanSense",
  description:
    "Learn when to refinance your mortgage with break-even analysis and rate comparison tools. Calculate savings and understand refinancing costs and benefits.",
}

export default function RefinanceGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="ad-slot ad-top bg-muted/30 h-24 flex items-center justify-center text-muted-foreground text-sm mb-8 rounded">
          Ad Space - Top Banner
        </div>

        <article className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Refinance Calculator Guide & When to Refinance Your Mortgage
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            Refinancing replaces your current mortgage with a new loan, potentially lowering rates, reducing payments,
            or changing terms. Understanding break-even points and costs helps determine if refinancing makes financial
            sense.
          </p>

          <Card className="my-8 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Calculator className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold m-0">Try Our Free Refinance Calculator</h3>
              </div>
              <p className="mb-4 text-muted-foreground">
                Compare your current loan with refinance options and see potential savings instantly.
              </p>
              <Link href="/calculators/refinance">
                <Button size="lg" className="w-full sm:w-auto">
                  Calculate Refinance Savings
                </Button>
              </Link>
            </CardContent>
          </Card>

          <nav className="bg-muted/50 p-6 rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-3">Table of Contents</h2>
            <ul className="space-y-2 list-none pl-0">
              <li>
                <a href="#what-is" className="text-primary hover:underline">
                  What is Refinancing
                </a>
              </li>
              <li>
                <a href="#when-refinance" className="text-primary hover:underline">
                  When to Refinance
                </a>
              </li>
              <li>
                <a href="#costs" className="text-primary hover:underline">
                  Refinancing Costs
                </a>
              </li>
              <li>
                <a href="#break-even" className="text-primary hover:underline">
                  Break-Even Analysis
                </a>
              </li>
              <li>
                <a href="#types" className="text-primary hover:underline">
                  Types of Refinancing
                </a>
              </li>
              <li>
                <a href="#process" className="text-primary hover:underline">
                  Refinancing Process
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </nav>

          <h2 id="what-is" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            What is Refinancing
          </h2>

          <p>
            Mortgage refinancing involves taking out a new loan to pay off your existing mortgage. The new loan replaces
            the old one, with potentially different terms, rates, or loan amounts.
          </p>

          <p>
            Borrowers refinance to lower interest rates, reduce monthly payments, shorten loan terms, convert
            adjustable-rate mortgages to fixed rates, or access home equity through cash-out refinancing.
          </p>

          <div className="ad-slot ad-inline bg-muted/30 h-32 flex items-center justify-center text-muted-foreground text-sm my-8 rounded">
            Ad Space - Inline Content
          </div>

          <h2 id="when-refinance" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            When to Refinance
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Interest Rates Drop</h3>
          <p>
            The general rule suggests refinancing when rates drop 0.75% to 1.0% below your current rate. Smaller rate
            reductions may still be worthwhile depending on loan size and remaining term.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Credit Score Improves</h3>
          <p>
            Higher credit scores qualify for better rates. If your score has increased 40+ points since origination,
            refinancing may provide significantly lower rates.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Remove PMI</h3>
          <p>
            Once home equity reaches 20%, refinancing to a conventional loan eliminates private mortgage insurance. This
            is especially beneficial for FHA loans with lifetime MIP.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Change Loan Term</h3>
          <p>
            Switching from 30-year to 15-year terms accelerates equity building and reduces total interest. Conversely,
            extending to 30 years lowers monthly payments.
          </p>

          <h2 id="costs" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Refinancing Costs
          </h2>

          <p>
            Refinancing involves closing costs similar to original mortgage origination. Total costs typically range
            from 2% to 5% of loan amount.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-3 font-semibold">Cost Type</th>
                  <th className="text-left p-3 font-semibold">Typical Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-3">Application Fee</td>
                  <td className="p-3">$75 - $300</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Appraisal</td>
                  <td className="p-3">$300 - $700</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Title Search & Insurance</td>
                  <td className="p-3">$700 - $1,500</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Origination Fee</td>
                  <td className="p-3">0.5% - 1.5% of loan</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Attorney Fees</td>
                  <td className="p-3">$500 - $1,000</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Credit Report</td>
                  <td className="p-3">$25 - $50</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="break-even" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Break-Even Analysis
          </h2>

          <p>
            The break-even point shows how long it takes for monthly savings to recover closing costs. Calculate by
            dividing total closing costs by monthly payment reduction.
          </p>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-3">Example Break-Even Calculation</h3>
            <ul className="space-y-2 list-none pl-0">
              <li>Current monthly payment: $2,200</li>
              <li>New monthly payment: $1,950</li>
              <li>Monthly savings: $250</li>
              <li>Closing costs: $6,000</li>
              <li>
                <strong>Break-even: $6,000 ÷ $250 = 24 months</strong>
              </li>
            </ul>
            <p className="mt-3">
              If you plan to stay in the home more than 24 months, refinancing saves money over time.
            </p>
          </div>

          <Card className="my-8 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold m-0">Unlock Your Full Amortization Schedule</h3>
              </div>
              <p className="mb-4 text-muted-foreground">
                Enter your email to receive a detailed PDF breakdown showing your break-even timeline, total savings
                over the life of the loan, and month-by-month payment comparisons.
              </p>
            </CardContent>
          </Card>

          <h2 id="types" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Types of Refinancing
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Rate-and-Term Refinance</h3>
          <p>
            Changes interest rate, loan term, or both without altering loan amount. Most common refinance type for
            lowering payments or accelerating payoff.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Cash-Out Refinance</h3>
          <p>
            Replaces existing mortgage with larger loan, providing cash difference to borrower. Used for home
            improvements, debt consolidation, or major expenses. Requires sufficient equity.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Cash-In Refinance</h3>
          <p>
            Borrower pays down principal during refinancing to reach lower LTV, eliminate PMI, or qualify for better
            rates. Less common but strategically valuable.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Streamline Refinance</h3>
          <p>
            Simplified refinancing for FHA, VA, or USDA loans with reduced documentation and no appraisal. Faster
            processing with lower costs. Only available for same loan type.
          </p>

          <h2 id="process" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Refinancing Process
          </h2>

          <ol className="space-y-3 my-4">
            <li>
              <strong>Check Credit and Finances:</strong> Review credit reports, calculate debt-to-income ratio, and
              gather financial documents.
            </li>
            <li>
              <strong>Compare Lenders:</strong> Shop multiple lenders for best rates and terms. Request loan estimates
              within 14-day period to minimize credit impact.
            </li>
            <li>
              <strong>Lock Rate:</strong> Secure interest rate when favorable. Rate locks typically last 30-60 days.
            </li>
            <li>
              <strong>Submit Application:</strong> Complete full application with chosen lender. Provide employment
              verification, income documentation, and asset statements.
            </li>
            <li>
              <strong>Home Appraisal:</strong> Lender orders appraisal to confirm property value and loan-to-value
              ratio.
            </li>
            <li>
              <strong>Underwriting:</strong> Lender reviews application, documentation, and appraisal. May request
              additional information.
            </li>
            <li>
              <strong>Closing:</strong> Sign final documents and pay closing costs. New loan funds and pays off existing
              mortgage.
            </li>
          </ol>

          <div className="bg-muted/50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-3">Related Tools</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/calculators/refinance" className="text-primary hover:underline flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Refinance Calculator
              </Link>
              <Link href="/calculators/mortgage" className="text-primary hover:underline flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                Mortgage Calculator
              </Link>
              <Link
                href="/guides/mortgage-calculator-guide"
                className="text-primary hover:underline flex items-center gap-2"
              >
                <Home className="h-4 w-4" />
                How Mortgage Calculators Work
              </Link>
              <Link href="/guides/15-year-vs-30-year" className="text-primary hover:underline flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                15-Year vs 30-Year Mortgage
              </Link>
              <Link href="/guides/closing-costs" className="text-primary hover:underline flex items-center gap-2">
                <Home className="h-4 w-4" />
                Closing Costs Breakdown
              </Link>
            </div>
          </div>

          <h2 id="faq" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">How often can I refinance my mortgage?</h3>
              <p>
                No legal limit exists on refinancing frequency. However, lenders typically require 6-12 months of
                payment history. Frequent refinancing incurs repeated closing costs that may outweigh benefits.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Does refinancing hurt my credit score?</h3>
              <p>
                Refinancing causes a temporary 5-10 point drop from credit inquiries and new account. Scores typically
                recover within months. Multiple rate shopping inquiries within 14-45 days count as single inquiry.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Can I refinance with bad credit?</h3>
              <p>
                Possible but challenging. Most conventional refinances require 620 minimum credit score. FHA streamline
                refinancing accepts lower scores for existing FHA borrowers. Rates will be higher with lower credit.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Should I refinance to pay off my mortgage faster?</h3>
              <p>
                Refinancing to shorter term (30-year to 15-year) saves substantial interest but increases monthly
                payments. Only pursue if budget comfortably accommodates higher payments.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">What is a no-closing-cost refinance?</h3>
              <p>
                Lender covers closing costs by charging slightly higher interest rate or adding costs to loan balance.
                Useful if you lack cash for closing but increases total interest paid.
              </p>
            </div>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How often can I refinance my mortgage?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No legal limit exists on refinancing frequency. However, lenders typically require 6-12 months of payment history.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does refinancing hurt my credit score?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Refinancing causes a temporary 5-10 point drop from credit inquiries and new account. Scores typically recover within months.",
                    },
                  },
                ],
              }),
            }}
          />
        </article>

        <div className="ad-slot ad-bottom bg-muted/30 h-24 flex items-center justify-center text-muted-foreground text-sm mt-12 rounded">
          Ad Space - Bottom Banner
        </div>
      </div>
    </div>
  )
}
