import Link from "next/link"
import { Calculator, Home, TrendingUp, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Mortgage Calculator: How Your Payment is Calculated (Principal & Interest Breakdown) | LoanSense",
  description:
    "Learn how mortgage calculators work with real payment examples. Understand PITI breakdown, amortization structure, and how principal and interest change over time.",
}

export default function MortgageCalculatorGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="ad-slot ad-top bg-muted/30 h-24 flex items-center justify-center text-muted-foreground text-sm mb-8 rounded">
          Ad Space - Top Banner
        </div>

        <article className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Mortgage Calculator: How Your Payment is Calculated (Principal & Interest Breakdown)
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            A mortgage calculator estimates monthly home loan payments based on loan amount, interest rate, term, and
            additional costs. Understanding how these tools work helps borrowers plan budgets and compare loan options.
          </p>

          <Card className="my-8 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Calculator className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold m-0">Try Our Free Mortgage Calculator</h3>
              </div>
              <p className="mb-4 text-muted-foreground">
                Estimate your monthly payments instantly with our comprehensive mortgage calculator.
              </p>
              <Link href="/calculators/mortgage">
                <Button size="lg" className="w-full sm:w-auto">
                  Calculate Your Payment
                </Button>
              </Link>
            </CardContent>
          </Card>

          <nav className="bg-muted/50 p-6 rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-3">Table of Contents</h2>
            <ul className="space-y-2 list-none pl-0">
              <li>
                <a href="#how-it-works" className="text-primary hover:underline">
                  How Mortgage Calculators Work
                </a>
              </li>
              <li>
                <a href="#components" className="text-primary hover:underline">
                  Payment Components (PITI)
                </a>
              </li>
              <li>
                <a href="#amortization" className="text-primary hover:underline">
                  Understanding Amortization
                </a>
              </li>
              <li>
                <a href="#examples" className="text-primary hover:underline">
                  Example Calculations
                </a>
              </li>
              <li>
                <a href="#factors" className="text-primary hover:underline">
                  Factors That Affect Payments
                </a>
              </li>
              <li>
                <a href="#using" className="text-primary hover:underline">
                  How to Use a Mortgage Calculator
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </nav>

          <h2 id="how-it-works" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            How Mortgage Calculators Work
          </h2>

          <p>
            Mortgage calculators use standard amortization formulas to determine monthly payments. The calculator takes
            your loan amount, interest rate, and term length to compute principal and interest payments.
          </p>

          <p>
            Most calculators also factor in property taxes, homeowners insurance, HOA fees, and private mortgage
            insurance (PMI) when applicable. This provides a complete picture of monthly housing costs.
          </p>

          <p>
            The calculation follows this formula: M = P[r(1+r)^n]/[(1+r)^n-1], where M is the monthly payment, P is
            principal, r is monthly interest rate, and n is number of payments.
          </p>

          <div className="ad-slot ad-inline bg-muted/30 h-32 flex items-center justify-center text-muted-foreground text-sm my-8 rounded">
            Ad Space - Inline Content
          </div>

          <h2 id="components" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Payment Components (PITI)
          </h2>

          <p>A complete mortgage payment consists of four primary components, commonly referred to as PITI:</p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Principal</h3>
          <p>
            The portion of your payment that reduces the loan balance. Early payments apply less to principal due to
            amortization structure. In the first year of a 30-year mortgage, only about 20-30% of your payment goes
            toward principal.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Interest</h3>
          <p>
            The cost of borrowing money, calculated as a percentage of the remaining loan balance. Interest comprises
            most of early payments. During the first years of a mortgage, 70-80% of your monthly payment covers interest
            costs.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Property Taxes</h3>
          <p>
            Annual property taxes divided into monthly payments and held in escrow. Tax rates vary significantly by
            location, ranging from 0.3% to 2.5% of home value annually.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Insurance</h3>
          <p>
            Homeowners insurance protects the property. Lenders require coverage equal to the loan amount. Premiums are
            escrowed monthly and typically cost $800-$2,000 annually depending on location and coverage.
          </p>

          <h2 id="amortization" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Understanding Amortization
          </h2>

          <p>
            Amortization is the process of gradually paying off your loan through regular payments. Each payment
            includes both principal and interest, but the proportions change dramatically over the life of the loan.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Early Years: Interest-Heavy Payments</h3>
          <p>
            In the early years of your mortgage, the majority of each payment goes toward interest. For a $300,000 loan
            at 6.5% over 30 years, the first payment includes approximately $1,625 in interest and only $271 in
            principal.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Later Years: Principal Acceleration</h3>
          <p>
            As the loan balance decreases, less interest accrues each month, meaning more of your payment applies to
            principal. By year 20, approximately 60% of each payment reduces the loan balance. This acceleration
            continues until the final payment.
          </p>

          <Card className="my-8 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold m-0">Unlock Your Full Amortization Schedule</h3>
              </div>
              <p className="mb-4 text-muted-foreground">
                Enter your email to receive a detailed PDF breakdown of your payments, principal, and interest for the
                full loan term.
              </p>
            </CardContent>
          </Card>

          <h2 id="examples" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Example Calculations
          </h2>

          <p>The following examples demonstrate how different loan parameters affect monthly payments:</p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-3 font-semibold">Loan Amount</th>
                  <th className="text-left p-3 font-semibold">Interest Rate</th>
                  <th className="text-left p-3 font-semibold">Term</th>
                  <th className="text-left p-3 font-semibold">P&I Payment</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-3">$300,000</td>
                  <td className="p-3">6.5%</td>
                  <td className="p-3">30 years</td>
                  <td className="p-3 font-semibold">$1,896</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">$300,000</td>
                  <td className="p-3">6.5%</td>
                  <td className="p-3">15 years</td>
                  <td className="p-3 font-semibold">$2,613</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">$400,000</td>
                  <td className="p-3">7.0%</td>
                  <td className="p-3">30 years</td>
                  <td className="p-3 font-semibold">$2,661</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">$500,000</td>
                  <td className="p-3">6.0%</td>
                  <td className="p-3">30 years</td>
                  <td className="p-3 font-semibold">$2,998</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            These figures represent principal and interest only. Add approximately $300-$800 monthly for taxes and
            insurance depending on location.
          </p>

          <h2 id="factors" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Factors That Affect Payments
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Credit Score</h3>
          <p>
            Higher credit scores qualify for lower interest rates. A difference of 0.5% in rate can save thousands over
            the loan term.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Down Payment</h3>
          <p>
            Larger down payments reduce loan amount and may eliminate PMI requirements. Standard down payments range
            from 3% to 20%.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Loan Type</h3>
          <p>
            FHA, VA, conventional, and USDA loans have different requirements and rate structures. Government-backed
            loans often accept lower down payments.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Location</h3>
          <p>
            Property tax rates and insurance costs vary by state and county. High-tax areas like New Jersey or Texas
            significantly increase monthly costs.
          </p>

          <h2 id="using" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            How to Use a Mortgage Calculator
          </h2>

          <p>Follow these steps to get accurate payment estimates:</p>

          <ol className="space-y-3 my-4">
            <li>Enter the home purchase price or loan amount</li>
            <li>Input your expected down payment percentage</li>
            <li>Select the loan term (typically 15 or 30 years)</li>
            <li>Enter the current interest rate from your lender</li>
            <li>Add property tax and insurance estimates</li>
            <li>Include HOA fees if applicable</li>
            <li>Review the complete monthly payment breakdown</li>
          </ol>

          <p>
            Most calculators provide amortization schedules showing how much of each payment applies to principal versus
            interest over time.
          </p>

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
              <Link href="/guides/fha-vs-conventional" className="text-primary hover:underline flex items-center gap-2">
                <Home className="h-4 w-4" />
                FHA Loan Guide
              </Link>
              <Link href="/guides/15-year-vs-30-year" className="text-primary hover:underline flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                15-Year vs 30-Year Mortgage
              </Link>
              <Link href="/guides/pmi-guide" className="text-primary hover:underline flex items-center gap-2">
                <Home className="h-4 w-4" />
                PMI Guide
              </Link>
            </div>
          </div>

          <h2 id="faq" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Are mortgage calculators accurate?</h3>
              <p>
                Mortgage calculators provide close estimates but may not include all fees. Actual payments depend on
                final loan terms, escrow requirements, and lender-specific costs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">What is not included in a mortgage calculator?</h3>
              <p>
                Most calculators exclude closing costs, origination fees, discount points, and ongoing maintenance
                expenses. These one-time and variable costs affect total homeownership cost.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">How much house can I afford?</h3>
              <p>
                Lenders typically allow housing payments up to 28% of gross monthly income. Total debt payments should
                not exceed 36% to 43% depending on loan program.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Should I use a 15-year or 30-year mortgage?</h3>
              <p>
                15-year mortgages have higher monthly payments but lower total interest costs. 30-year terms offer lower
                payments with more interest paid over time. Choice depends on budget and financial goals.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">How do I reduce my mortgage payment?</h3>
              <p>
                Increase your down payment, improve credit score for better rates, shop multiple lenders, consider a
                longer term, or buy in areas with lower property taxes.
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
                    name: "Are mortgage calculators accurate?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Mortgage calculators provide close estimates but may not include all fees. Actual payments depend on final loan terms, escrow requirements, and lender-specific costs.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is not included in a mortgage calculator?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Most calculators exclude closing costs, origination fees, discount points, and ongoing maintenance expenses.",
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
