import type { Metadata } from "next"
import Link from "next/link"
import { Calculator, Download, TrendingDown, Clock, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Refinance Calculator Guide: How to Lower Payments and When to Refinance",
  description:
    "Understand how refinancing can change your rate, term, and monthly payment. Use our calculator to determine if a cash-out or rate-and-term refinance is right for you.",
}

export default function RefinanceCalculatorGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Ad Space - Top Leaderboard */}
      <div className="bg-muted border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="bg-accent/50 rounded flex items-center justify-center h-[90px] text-sm text-muted-foreground">
            Advertisement Space (728x90)
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          {/* Main Content */}
          <article className="prose prose-slate max-w-none">
            {/* Breadcrumb */}
            <nav className="text-sm text-muted-foreground mb-6 not-prose">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/guides" className="hover:text-primary">
                Guides
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Refinance Calculator Guide</span>
            </nav>

            <h1 className="text-4xl font-bold mb-4 text-balance">
              Refinance Calculator Guide: How to Lower Payments and When to Refinance
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 not-prose">
              <time>Updated: January 2025</time>
              <span>•</span>
              <span>8 min read</span>
            </div>

            {/* Table of Contents */}
            <Card className="my-8 not-prose">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
                <ol className="space-y-2 text-sm">
                  <li>
                    <a href="#what-is-refinancing" className="text-primary hover:underline">
                      1. What Is Refinancing?
                    </a>
                  </li>
                  <li>
                    <a href="#types-of-refinancing" className="text-primary hover:underline">
                      2. Types of Refinancing
                    </a>
                  </li>
                  <li>
                    <a href="#when-to-refinance" className="text-primary hover:underline">
                      3. When to Refinance
                    </a>
                  </li>
                  <li>
                    <a href="#break-even-analysis" className="text-primary hover:underline">
                      4. Break-Even Analysis
                    </a>
                  </li>
                  <li>
                    <a href="#refinance-calculator" className="text-primary hover:underline">
                      5. Using the Refinance Calculator
                    </a>
                  </li>
                  <li>
                    <a href="#costs-and-fees" className="text-primary hover:underline">
                      6. Refinancing Costs and Fees
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-primary hover:underline">
                      7. Frequently Asked Questions
                    </a>
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Introduction */}
            <p className="text-lg">
              Mortgage refinancing replaces your existing loan with a new one, potentially offering lower interest
              rates, reduced monthly payments, or access to home equity. This guide explains the refinancing process and
              helps you determine if refinancing aligns with your financial goals.
            </p>

            {/* CTA Block */}
            <Card className="my-8 bg-primary/5 border-primary/20 not-prose">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Calculator className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Calculate Your Refinance Savings</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Compare your current mortgage with potential refinance options. See monthly payment changes and
                      break-even timelines.
                    </p>
                    <Button asChild>
                      <Link href="/calculators/refinance">Use Refinance Calculator</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 1 */}
            <h2 id="what-is-refinancing">What Is Refinancing?</h2>
            <p>
              Refinancing is the process of obtaining a new mortgage to replace your current loan. The new loan pays off
              the existing mortgage, and you begin making payments on the new terms. Borrowers refinance for three
              primary reasons:
            </p>
            <ul>
              <li>
                <strong>Lower Interest Rate:</strong> Reduce monthly payments and total interest paid over the loan term
              </li>
              <li>
                <strong>Shorter Loan Term:</strong> Switch from a 30-year to a 15-year mortgage to build equity faster
              </li>
              <li>
                <strong>Cash-Out:</strong> Access home equity for renovations, debt consolidation, or other expenses
              </li>
            </ul>

            {/* Ad Space - In-Content */}
            <div className="my-8 not-prose">
              <div className="bg-accent/50 rounded flex items-center justify-center h-[250px] text-sm text-muted-foreground">
                Advertisement Space (300x250)
              </div>
            </div>

            {/* Section 2 */}
            <h2 id="types-of-refinancing">Types of Refinancing</h2>

            <h3>Rate-and-Term Refinance</h3>
            <p>
              The most common type of refinancing modifies the interest rate, loan term, or both. This option does not
              provide cash beyond what's needed to pay off the existing mortgage and closing costs. Borrowers typically
              pursue rate-and-term refinancing to:
            </p>
            <ul>
              <li>Lower monthly payments by securing a reduced interest rate</li>
              <li>Shorten the loan term to build equity faster and reduce total interest</li>
              <li>Switch from an adjustable-rate mortgage (ARM) to a fixed-rate mortgage for payment stability</li>
            </ul>

            <h3>Cash-Out Refinance</h3>
            <p>
              A cash-out refinance replaces your current mortgage with a larger loan, allowing you to receive the
              difference in cash. This option accesses your home's equity while refinancing. Common uses include:
            </p>
            <ul>
              <li>Home improvements that increase property value</li>
              <li>Debt consolidation to eliminate high-interest credit cards</li>
              <li>Educational expenses or business investments</li>
            </ul>
            <p>
              Cash-out refinancing typically requires maintaining at least 20% equity in your home after the new loan is
              issued. Interest rates on cash-out refinances are generally 0.25% to 0.50% higher than rate-and-term
              refinances due to increased lender risk.
            </p>

            {/* Comparison Table */}
            <div className="my-8 overflow-x-auto not-prose">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left p-3 font-semibold">Feature</th>
                    <th className="text-left p-3 font-semibold">Rate-and-Term</th>
                    <th className="text-left p-3 font-semibold">Cash-Out</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3">Loan Amount</td>
                    <td className="p-3">Same as current balance</td>
                    <td className="p-3">Higher than current balance</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Cash Received</td>
                    <td className="p-3">None</td>
                    <td className="p-3">Difference minus closing costs</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Interest Rate</td>
                    <td className="p-3">Market rate</td>
                    <td className="p-3">0.25%-0.50% higher</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Equity Required</td>
                    <td className="p-3">Varies by lender</td>
                    <td className="p-3">Minimum 20% after refinance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section 3 */}
            <h2 id="when-to-refinance">When to Refinance</h2>
            <p>Refinancing makes financial sense under specific circumstances. Consider refinancing when:</p>

            <h3>Interest Rates Have Dropped</h3>
            <p>
              The traditional guideline suggests refinancing when rates fall by at least 1%. However, even a 0.5%
              reduction can generate significant savings, depending on your loan size and remaining term. For example:
            </p>
            <ul>
              <li>$300,000 loan at 6.5% for 30 years: $1,896/month</li>
              <li>Same loan at 6.0%: $1,799/month (saves $97/month, $34,920 over 30 years)</li>
            </ul>

            <h3>Your Credit Score Has Improved</h3>
            <p>
              If your credit score has increased by 50+ points since origination, you may qualify for better rates.
              Lenders offer the most favorable rates to borrowers with scores above 740.
            </p>

            <h3>You Want to Eliminate PMI</h3>
            <p>
              If your home value has increased and you now have more than 20% equity, refinancing can eliminate Private
              Mortgage Insurance (PMI), reducing monthly payments. For conventional loans, PMI typically costs 0.5% to
              1% of the original loan amount annually.
            </p>

            <h3>You Need to Change Loan Terms</h3>
            <p>
              Switching from a 30-year to a 15-year mortgage increases monthly payments but significantly reduces total
              interest. Conversely, extending to a longer term decreases monthly obligations but increases lifetime
              interest costs.
            </p>

            {/* Alert Box */}
            <Card className="my-8 bg-amber-50 border-amber-200 not-prose">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-amber-900">Consider Your Timeline</h3>
                    <p className="text-sm text-amber-800">
                      Refinancing is most beneficial if you plan to stay in your home long enough to recoup closing
                      costs through monthly savings. If you expect to move within 2-3 years, the upfront costs may
                      exceed the benefits.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <h2 id="break-even-analysis">Break-Even Analysis</h2>
            <p>
              The break-even point is the time it takes for monthly savings to offset closing costs. This calculation
              determines whether refinancing is financially advantageous:
            </p>
            <div className="my-6 p-6 bg-accent/30 rounded-lg not-prose">
              <p className="font-mono text-sm mb-2">Break-Even (months) = Total Closing Costs ÷ Monthly Savings</p>
            </div>
            <p>
              <strong>Example:</strong>
            </p>
            <ul>
              <li>Closing costs: $4,000</li>
              <li>Monthly savings: $150</li>
              <li>Break-even: $4,000 ÷ $150 = 26.7 months (approximately 2.2 years)</li>
            </ul>
            <p>
              If you plan to stay in your home beyond 2.2 years, refinancing generates net savings. If you anticipate
              moving sooner, the costs may outweigh the benefits.
            </p>

            {/* CTA Block */}
            <Card className="my-8 bg-primary/5 border-primary/20 not-prose">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <TrendingDown className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Compare Current vs. New Loan</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our refinance calculator shows monthly payment differences, break-even timelines, and lifetime
                      interest savings.
                    </p>
                    <Button asChild>
                      <Link href="/calculators/refinance">Calculate Break-Even Point</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <h2 id="refinance-calculator">Using the Refinance Calculator</h2>
            <p>
              The{" "}
              <Link href="/calculators/refinance" className="text-primary hover:underline">
                Refinance Calculator
              </Link>{" "}
              compares your current mortgage with a potential refinance by analyzing:
            </p>
            <ul>
              <li>
                <strong>Current Loan Details:</strong> Remaining balance, interest rate, and monthly payment
              </li>
              <li>
                <strong>New Loan Terms:</strong> Proposed interest rate, loan term, and closing costs
              </li>
              <li>
                <strong>Monthly Payment Change:</strong> Immediate impact on your cash flow
              </li>
              <li>
                <strong>Break-Even Analysis:</strong> Time required to recoup closing costs
              </li>
              <li>
                <strong>Lifetime Savings:</strong> Total interest reduction over the new loan term
              </li>
            </ul>
            <p>
              To use the calculator effectively, obtain a Loan Estimate from your lender that details the proposed
              interest rate and closing costs. This document provides the precise inputs needed for an accurate
              comparison.
            </p>

            {/* Ad Space - In-Content */}
            <div className="my-8 not-prose">
              <div className="bg-accent/50 rounded flex items-center justify-center h-[250px] text-sm text-muted-foreground">
                Advertisement Space (300x250)
              </div>
            </div>

            {/* Section 6 */}
            <h2 id="costs-and-fees">Refinancing Costs and Fees</h2>
            <p>Refinancing typically costs 2% to 5% of the loan amount. Common fees include:</p>
            <ul>
              <li>
                <strong>Application Fee:</strong> $75-$300 (covers credit report and processing)
              </li>
              <li>
                <strong>Origination Fee:</strong> 0.5%-1% of loan amount (lender's processing charge)
              </li>
              <li>
                <strong>Appraisal Fee:</strong> $300-$700 (required to determine current home value)
              </li>
              <li>
                <strong>Title Search and Insurance:</strong> $700-$1,000 (protects against ownership claims)
              </li>
              <li>
                <strong>Recording Fee:</strong> $25-$250 (local government charge)
              </li>
            </ul>
            <p>
              For a $300,000 refinance, expect total costs between $6,000 and $15,000. Some lenders offer
              "no-closing-cost" refinances, where fees are rolled into the loan principal or offset by a higher interest
              rate. These options reduce upfront expenses but increase long-term costs.
            </p>

            {/* Amortization Export CTA */}
            <Card className="my-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 not-prose">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Download className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Download Your Refinance Amortization Schedule</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get a detailed payment-by-payment breakdown showing how refinancing changes your principal and
                      interest over time. Enter your email to receive the full schedule.
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-sm"
                      />
                      <Button>Download PDF</Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      We respect your privacy. No spam, just your amortization schedule.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Internal Links */}
            <Card className="my-8 not-prose">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Related Guides</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link
                    href="/guides/mortgage-calculator-guide"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                  >
                    <Calculator className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Mortgage Calculator Guide</div>
                      <div className="text-xs text-muted-foreground">Learn the PITI formula</div>
                    </div>
                  </Link>
                  <Link
                    href="/guides/15-year-vs-30-year"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                  >
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">15-Year vs 30-Year Mortgage</div>
                      <div className="text-xs text-muted-foreground">Compare loan terms</div>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <h2 id="faq">Frequently Asked Questions</h2>

            <div className="space-y-6 not-prose" itemScope itemType="https://schema.org/FAQPage">
              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-lg font-semibold mb-2" itemProp="name">
                  How much do I need to save on interest rate to make refinancing worth it?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-muted-foreground">
                    Historically, a 1% rate reduction justified refinancing. Today, even a 0.5% decrease can generate
                    significant savings on larger loans. Calculate your break-even point to determine if the monthly
                    savings offset closing costs within your expected timeline in the home.
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-lg font-semibold mb-2" itemProp="name">
                  Does refinancing hurt my credit score?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-muted-foreground">
                    Refinancing may temporarily reduce your credit score by 5-10 points due to the hard inquiry and new
                    account. However, the impact is typically short-term, and your score should recover within 3-6
                    months if you maintain on-time payments.
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-lg font-semibold mb-2" itemProp="name">
                  Can I refinance if I have an FHA loan?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-muted-foreground">
                    Yes. You can refinance an FHA loan through the FHA Streamline Refinance program (requires less
                    documentation) or refinance into a conventional loan if you have at least 20% equity and meet
                    conventional underwriting standards. Conventional loans eliminate the lifetime mortgage insurance
                    premium (MIP) required on many FHA loans.
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-lg font-semibold mb-2" itemProp="name">
                  How long does the refinance process take?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-muted-foreground">
                    The refinancing process typically takes 30-45 days from application to closing. This timeline
                    includes credit review, home appraisal, underwriting, and final approval. Delays can occur if
                    additional documentation is requested or if the appraisal reveals issues.
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-lg font-semibold mb-2" itemProp="name">
                  What is a no-closing-cost refinance?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-muted-foreground">
                    A no-closing-cost refinance either adds closing costs to the loan principal or exchanges a slightly
                    higher interest rate to cover fees. This option reduces upfront expenses but increases long-term
                    costs. It's most suitable for borrowers who don't plan to stay in the home beyond the break-even
                    period.
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <Card className="my-12 bg-primary text-primary-foreground not-prose">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to Calculate Your Refinance Savings?</h2>
                <p className="mb-6 text-primary-foreground/90">
                  Compare your current mortgage with new loan options. See immediate payment changes and long-term
                  interest savings.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/calculators/refinance">
                    <Calculator className="mr-2 h-5 w-5" />
                    Use Refinance Calculator
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Ad Space - Sidebar */}
            <div className="sticky top-4">
              <div className="bg-accent/50 rounded flex items-center justify-center h-[600px] text-sm text-muted-foreground">
                Advertisement Space (300x600)
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
