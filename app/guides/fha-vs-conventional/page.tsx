import Link from "next/link"
import { Calculator, Home, TrendingUp, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "FHA vs. Conventional Loan Comparison: Credit Scores, Down Payments, and PMI/MIP | LoanSense",
  description:
    "Compare FHA and conventional loans. Learn credit requirements, down payments, and the critical differences between PMI and MIP cancellation policies.",
}

export default function FHAvsConventionalPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="ad-slot ad-top bg-muted/30 h-24 flex items-center justify-center text-muted-foreground text-sm mb-8 rounded">
          Ad Space - Top Banner
        </div>

        <article className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            FHA vs. Conventional Loan Comparison: Credit Scores, Down Payments, and PMI/MIP
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            FHA and conventional loans differ in credit requirements, down payments, and mortgage insurance.
            Understanding these differences helps buyers choose the right loan program for their financial situation.
          </p>

          <Card className="my-8 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Calculator className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold m-0">Calculate Your Loan Payments</h3>
              </div>
              <p className="mb-4 text-muted-foreground">
                Compare FHA and conventional loan payments with our mortgage calculator.
              </p>
              <Link href="/calculators/mortgage">
                <Button size="lg" className="w-full sm:w-auto">
                  Calculate Payments
                </Button>
              </Link>
            </CardContent>
          </Card>

          <nav className="bg-muted/50 p-6 rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-3">Table of Contents</h2>
            <ul className="space-y-2 list-none pl-0">
              <li>
                <a href="#overview" className="text-primary hover:underline">
                  Overview of Loan Types
                </a>
              </li>
              <li>
                <a href="#requirements" className="text-primary hover:underline">
                  Credit and Down Payment Requirements
                </a>
              </li>
              <li>
                <a href="#mortgage-insurance" className="text-primary hover:underline">
                  PMI vs. MIP: Critical Differences
                </a>
              </li>
              <li>
                <a href="#pros-cons" className="text-primary hover:underline">
                  Pros and Cons
                </a>
              </li>
              <li>
                <a href="#which-choose" className="text-primary hover:underline">
                  Which Loan to Choose
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </nav>

          <h2 id="overview" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Overview of Loan Types
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">FHA Loans</h3>
          <p>
            FHA loans are government-backed mortgages insured by the Federal Housing Administration. These loans allow
            lower credit scores and smaller down payments, making homeownership accessible to more borrowers.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Conventional Loans</h3>
          <p>
            Conventional loans are not government-backed and conform to standards set by Fannie Mae and Freddie Mac.
            These loans typically require stronger credit and larger down payments but offer more flexibility.
          </p>

          <div className="ad-slot ad-inline bg-muted/30 h-32 flex items-center justify-center text-muted-foreground text-sm my-8 rounded">
            Ad Space - Inline Content
          </div>

          <h2 id="requirements" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Credit and Down Payment Requirements
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-3 font-semibold">Requirement</th>
                  <th className="text-left p-3 font-semibold">FHA Loan</th>
                  <th className="text-left p-3 font-semibold">Conventional Loan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-3">Minimum Credit Score</td>
                  <td className="p-3">
                    580 (3.5% down)
                    <br />
                    500-579 (10% down)
                  </td>
                  <td className="p-3">620 minimum</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Minimum Down Payment</td>
                  <td className="p-3">3.5%</td>
                  <td className="p-3">3% (up to 20% to avoid PMI)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Debt-to-Income Ratio</td>
                  <td className="p-3">Up to 50%</td>
                  <td className="p-3">Up to 43-50%</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Loan Limits (2025)</td>
                  <td className="p-3">$498,257 (most areas)</td>
                  <td className="p-3">$766,550 (conforming)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Credit Score Flexibility</h3>
          <p>
            FHA loans accept credit scores as low as 500 with a 10% down payment, and 580 with 3.5% down. Conventional
            loans require minimum scores of 620, with significantly better rates available above 740. This flexibility
            makes FHA ideal for borrowers rebuilding credit or with limited credit history.
          </p>

          <h2 id="mortgage-insurance" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            PMI vs. MIP: Critical Differences
          </h2>

          <p>
            The most significant difference between FHA and conventional loans is how mortgage insurance works. This
            single factor can add tens of thousands of dollars to your total loan cost.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">FHA Mortgage Insurance Premium (MIP)</h3>
          <p>
            FHA loans require both upfront mortgage insurance premium (1.75% of loan amount) and annual mortgage
            insurance premium. Annual premiums range from 0.45% to 1.05% depending on loan term and down payment.
          </p>
          <p className="font-semibold">
            Critical: FHA mortgage insurance remains for the life of the loan if down payment is less than 10%. This
            means you cannot cancel MIP without refinancing, regardless of how much equity you build. Only loans with
            10% or more down can cancel insurance after 11 years.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
            Conventional Private Mortgage Insurance (PMI)
          </h3>
          <p>
            Conventional loans require private mortgage insurance when down payment is less than 20%. PMI rates range
            from 0.3% to 1.5% annually based on credit score and down payment.
          </p>
          <p className="font-semibold">
            Major advantage: Conventional PMI automatically cancels when loan-to-value reaches 78%. Borrowers can
            request cancellation at 80% LTV with good payment history. This automatic termination can save $50,000+ over
            the loan term compared to FHA MIP.
          </p>

          <Card className="my-8 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold m-0">Unlock Your Full Amortization Schedule</h3>
              </div>
              <p className="mb-4 text-muted-foreground">
                Enter your email to receive a detailed PDF breakdown showing exactly when PMI cancels and how much
                you'll save compared to FHA MIP over the full loan term.
              </p>
            </CardContent>
          </Card>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-3 font-semibold">Feature</th>
                  <th className="text-left p-3 font-semibold">FHA MIP</th>
                  <th className="text-left p-3 font-semibold">Conventional PMI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-3">Upfront Cost</td>
                  <td className="p-3">1.75% of loan amount</td>
                  <td className="p-3">None</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Annual Premium</td>
                  <td className="p-3">0.45% - 1.05%</td>
                  <td className="p-3">0.3% - 1.5%</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Cancellation</td>
                  <td className="p-3 font-semibold">Lifetime (if &lt;10% down)</td>
                  <td className="p-3 font-semibold">Auto-cancels at 78% LTV</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Removal Method</td>
                  <td className="p-3">Refinance only</td>
                  <td className="p-3">Automatic or request at 80% LTV</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="pros-cons" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Pros and Cons
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">FHA Loan Advantages</h3>
          <ul className="space-y-2 my-4">
            <li>Lower credit score requirements</li>
            <li>Smaller down payment options</li>
            <li>Higher debt-to-income ratios accepted</li>
            <li>More lenient underwriting standards</li>
            <li>Assumable by future buyers</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">FHA Loan Disadvantages</h3>
          <ul className="space-y-2 my-4">
            <li>Upfront and annual mortgage insurance</li>
            <li>Lifetime mortgage insurance on most loans</li>
            <li>Lower loan limits in most areas</li>
            <li>Property must meet FHA appraisal standards</li>
            <li>Cannot be used for investment properties</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Conventional Loan Advantages</h3>
          <ul className="space-y-2 my-4">
            <li>No upfront mortgage insurance</li>
            <li>PMI cancels automatically at 78% LTV</li>
            <li>Higher loan limits available</li>
            <li>More property types eligible</li>
            <li>Lower rates for strong credit profiles</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Conventional Loan Disadvantages</h3>
          <ul className="space-y-2 my-4">
            <li>Higher credit score requirements</li>
            <li>Stricter underwriting standards</li>
            <li>Larger reserves may be required</li>
            <li>Less flexibility for unique situations</li>
            <li>Higher rates for lower credit scores</li>
          </ul>

          <div className="bg-muted/50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-3">Related Resources</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/calculators/mortgage" className="text-primary hover:underline flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                Mortgage Calculator
              </Link>
              <Link
                href="/guides/first-time-homebuyer"
                className="text-primary hover:underline flex items-center gap-2"
              >
                <Home className="h-4 w-4" />
                First-Time Buyer Programs
              </Link>
              <Link href="/guides/pmi-guide" className="text-primary hover:underline flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                PMI Guide
              </Link>
              <Link
                href="/guides/mortgage-calculator-guide"
                className="text-primary hover:underline flex items-center gap-2"
              >
                <Calculator className="h-4 w-4" />
                How Mortgage Calculators Work
              </Link>
              <Link href="/calculators/refinance" className="text-primary hover:underline flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Refinance Calculator
              </Link>
            </div>
          </div>

          <h2 id="which-choose" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Which Loan to Choose
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Choose FHA If:</h3>
          <ul className="space-y-2 my-4">
            <li>Your credit score is below 620</li>
            <li>You have limited savings for down payment</li>
            <li>Your debt-to-income ratio is high</li>
            <li>You had recent credit events (bankruptcy, foreclosure)</li>
            <li>You are a first-time homebuyer with limited credit history</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Choose Conventional If:</h3>
          <ul className="space-y-2 my-4">
            <li>Your credit score is 680 or higher</li>
            <li>You can afford 10-20% down payment</li>
            <li>You want to eliminate mortgage insurance quickly</li>
            <li>You need a loan above FHA limits</li>
            <li>You are buying an investment property</li>
          </ul>

          <h2 id="faq" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I switch from FHA to conventional later?</h3>
              <p>
                Yes. Refinancing from FHA to conventional is common once you build 20% equity and improve credit. This
                eliminates mortgage insurance and may lower rates.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Which loan has better interest rates?</h3>
              <p>
                Conventional loans typically offer better rates for borrowers with strong credit. FHA rates may be
                competitive for lower credit scores but total costs include mortgage insurance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Do FHA loans have higher closing costs?</h3>
              <p>
                FHA closing costs are similar to conventional loans. The main difference is the upfront mortgage
                insurance premium of 1.75% added to the loan balance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Can I use an FHA loan for a second home?</h3>
              <p>
                No. FHA loans require owner occupancy as primary residence. Conventional loans allow purchase of second
                homes and investment properties with higher down payments.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">How long does FHA mortgage insurance last?</h3>
              <p>
                FHA mortgage insurance is permanent for loans with less than 10% down. Loans with 10% or more down can
                cancel insurance after 11 years.
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
                    name: "Can I switch from FHA to conventional later?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Refinancing from FHA to conventional is common once you build 20% equity and improve credit.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Which loan has better interest rates?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Conventional loans typically offer better rates for borrowers with strong credit.",
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
