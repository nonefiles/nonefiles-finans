import { SiteHeader } from "@/components/site-header"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Home, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AdSenseAd } from "@/components/adsense-ad"

export const metadata = {
  title: "Complete Mortgage Guide - Loan Calculator Hub",
  description:
    "Learn everything about mortgages including types of loans, how to qualify, down payment requirements, and tips for first-time homebuyers.",
}

export default function MortgageGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/guides"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Guides
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Home className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Mortgage Guide</h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your comprehensive guide to understanding mortgages and the home buying process.
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Is a Mortgage?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A mortgage is a loan specifically used to purchase real estate. The property itself serves as collateral,
              meaning if you fail to make payments, the lender can foreclose and take ownership of the home.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Most mortgages have terms of 15 or 30 years, though other options exist. Your monthly payment typically
              includes principal, interest, property taxes, and homeowners insurance (often abbreviated as PITI).
            </p>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Types of Mortgages</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3">Fixed-Rate Mortgage</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  The most common type of mortgage. Your interest rate stays the same for the entire loan term,
                  providing predictable monthly payments.
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Stable payments make budgeting easier</li>
                  <li>Protected from rising interest rates</li>
                  <li>30-year terms have lower payments but more interest</li>
                  <li>15-year terms build equity faster with less interest paid</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Adjustable-Rate Mortgage (ARM)</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Starts with a lower fixed rate for an initial period (typically 5, 7, or 10 years), then adjusts
                  periodically based on market conditions.
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Lower initial rates than fixed mortgages</li>
                  <li>Good if you plan to sell or refinance before adjustment</li>
                  <li>Payments can increase significantly after initial period</li>
                  <li>Caps limit how much rates can increase</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">FHA Loan</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Insured by the Federal Housing Administration, designed for first-time buyers and those with lower
                  credit scores or smaller down payments.
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Down payment as low as 3.5%</li>
                  <li>More lenient credit requirements (580+ score)</li>
                  <li>Requires mortgage insurance for the life of the loan</li>
                  <li>Loan limits vary by location</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">VA Loan</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Guaranteed by the Department of Veterans Affairs for eligible military service members, veterans, and
                  spouses.
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>No down payment required</li>
                  <li>No private mortgage insurance (PMI)</li>
                  <li>Competitive interest rates</li>
                  <li>Funding fee typically required (can be financed)</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Understanding Down Payments</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your down payment is the upfront cash you pay toward the home purchase. It directly affects your loan
              amount, monthly payments, and whether you'll need to pay PMI.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 mb-4">
              <h3 className="font-medium mb-3">Common Down Payment Amounts</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">3-5%:</strong> Minimum for many conventional and FHA loans
                </li>
                <li>
                  <strong className="text-foreground">10%:</strong> Better rates and lower monthly payments
                </li>
                <li>
                  <strong className="text-foreground">20%:</strong> Avoids PMI and gets best rates
                </li>
                <li>
                  <strong className="text-foreground">20%+:</strong> Strongest position, lowest overall costs
                </li>
              </ul>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              While 20% down is ideal, many buyers successfully purchase homes with less. First-time buyer programs, FHA
              loans, and VA loans offer paths to homeownership with smaller down payments.
            </p>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Private Mortgage Insurance (PMI)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              PMI protects the lender if you default on your loan. It's typically required when you put down less than
              20% on a conventional mortgage.
            </p>

            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Cost:</strong> Usually 0.5-1.5% of the loan amount annually, divided
                into monthly payments
              </p>
              <p>
                <strong className="text-foreground">Duration:</strong> Required until you reach 20% equity (80%
                loan-to-value ratio)
              </p>
              <p>
                <strong className="text-foreground">Removal:</strong> You can request PMI removal once you hit 20%
                equity, or it automatically drops at 22%
              </p>
              <p>
                <strong className="text-foreground">Alternatives:</strong> Some lenders offer "lender-paid PMI" with a
                slightly higher interest rate instead
              </p>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">First-Time Homebuyer Tips</h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">1. Check Your Credit Early</h3>
                <p>
                  Review your credit report 6-12 months before house hunting. Dispute any errors and work on improving
                  your score. Even a small increase can save thousands in interest.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">2. Get Pre-Approved</h3>
                <p>
                  Pre-approval shows sellers you're a serious buyer and helps you understand your budget. It's different
                  from pre-qualification and carries more weight in competitive markets.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">3. Budget for All Costs</h3>
                <p>
                  Beyond the down payment, plan for closing costs (2-5% of purchase price), moving expenses, immediate
                  repairs, and an emergency fund for homeownership surprises.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">4. Don't Max Out Your Budget</h3>
                <p>
                  Just because you're approved for a certain amount doesn't mean you should borrow it all. Leave room in
                  your budget for other goals, maintenance, and unexpected expenses.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">5. Research First-Time Buyer Programs</h3>
                <p>
                  Many states and municipalities offer down payment assistance, tax credits, or special loan programs
                  for first-time buyers. Research what's available in your area.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Try Our Mortgage Calculator</h2>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Use our free mortgage calculator to estimate your monthly payments and see how different down payments,
              interest rates, and loan terms affect your costs.
            </p>
            <Link href="/calculators/mortgage">
              <Button size="lg" className="w-full sm:w-auto">
                Calculate Your Mortgage
              </Button>
            </Link>
          </Card>
        </div>

        {/* Ad Placeholder */}
        <AdSenseAd adSlot="1234567913" format="horizontal" fullWidth={true} />
      </main>
    </div>
  )
}
