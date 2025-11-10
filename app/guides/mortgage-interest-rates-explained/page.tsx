import type { Metadata } from "next"
import Link from "next/link"
import { Calculator, TrendingUp, BarChart3, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AdSenseAd } from "@/components/adsense-ad"

export const metadata: Metadata = {
  title: "Mortgage Interest Rates Explained: Fixed vs. ARM and Factors Affecting Rates",
  description:
    "Learn what determines mortgage interest rates, the difference between fixed-rate and adjustable-rate mortgages (ARM), and how to secure the best rate for your profile.",
}

export default function MortgageInterestRatesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Ad Space - Top Leaderboard */}
      <div className="bg-muted border-b">
        <div className="container mx-auto px-4 py-4">
          <AdSenseAd adSlot="1234567914" format="horizontal" fullWidth={true} />
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
              <span className="text-foreground">Mortgage Interest Rates Explained</span>
            </nav>

            <h1 className="text-4xl font-bold mb-4 text-balance">
              Mortgage Interest Rates Explained: Fixed vs. ARM and Factors Affecting Rates
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 not-prose">
              <time>Updated: January 2025</time>
              <span>•</span>
              <span>9 min read</span>
            </div>

            {/* Table of Contents */}
            <Card className="my-8 not-prose">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
                <ol className="space-y-2 text-sm">
                  <li>
                    <a href="#what-determines-rates" className="text-primary hover:underline">
                      1. What Determines Mortgage Rates
                    </a>
                  </li>
                  <li>
                    <a href="#fixed-vs-arm" className="text-primary hover:underline">
                      2. Fixed-Rate vs. Adjustable-Rate Mortgages
                    </a>
                  </li>
                  <li>
                    <a href="#factors-affecting" className="text-primary hover:underline">
                      3. Personal Factors Affecting Your Rate
                    </a>
                  </li>
                  <li>
                    <a href="#rate-types" className="text-primary hover:underline">
                      4. APR vs. Interest Rate
                    </a>
                  </li>
                  <li>
                    <a href="#when-to-lock" className="text-primary hover:underline">
                      5. When to Lock Your Rate
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-primary hover:underline">
                      6. Frequently Asked Questions
                    </a>
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Introduction */}
            <p className="text-lg">
              Mortgage interest rates represent the cost of borrowing money to purchase a home. Your rate directly
              impacts your monthly payment and total interest paid over the loan term. This guide explains how rates are
              determined, the difference between fixed and adjustable-rate mortgages, and strategies to secure the best
              rate.
            </p>

            {/* CTA Block */}
            <Card className="my-8 bg-primary/5 border-primary/20 not-prose">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Calculator className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Test Different Interest Rate Scenarios</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      See how a 0.5% or 1% rate change affects your monthly payment and lifetime interest. Compare rates
                      instantly.
                    </p>
                    <Button asChild>
                      <Link href="/calculators/mortgage">Use Mortgage Calculator</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 1 */}
            <h2 id="what-determines-rates">What Determines Mortgage Rates</h2>
            <p>
              Mortgage rates fluctuate based on macroeconomic factors and individual borrower risk profiles. Key
              influences include:
            </p>

            <h3>Federal Reserve Policy</h3>
            <p>
              The Federal Reserve's federal funds rate influences short-term interest rates across the economy. While
              the Fed doesn't set mortgage rates directly, its monetary policy affects lender costs. When the Fed raises
              rates to combat inflation, mortgage rates typically increase. Conversely, rate cuts to stimulate economic
              growth often lead to lower mortgage rates.
            </p>

            <h3>10-Year Treasury Yield</h3>
            <p>
              Fixed-rate mortgages closely track the 10-year U.S. Treasury bond yield. When investors demand higher
              yields on Treasury bonds (often during inflation or economic uncertainty), mortgage rates rise. The spread
              between the 10-year Treasury and 30-year mortgage rates typically ranges from 1.5% to 2.5%.
            </p>

            <h3>Inflation</h3>
            <p>
              Inflation erodes the purchasing power of future dollars. When inflation rises, lenders demand higher
              interest rates to compensate for the decreased value of repayments. The Consumer Price Index (CPI) and
              Producer Price Index (PPI) serve as primary inflation indicators that influence mortgage pricing.
            </p>

            <h3>Housing Market Conditions</h3>
            <p>
              Strong housing demand and rising home prices can push rates higher as lenders compete for limited
              mortgage-backed securities (MBS) inventory. Conversely, weak demand may lower rates as lenders compete for
              borrowers.
            </p>

            {/* Ad Space - In-Content */}
            <div className="my-8 not-prose">
              <AdSenseAd adSlot="1234567915" format="rectangle" />
            </div>

            {/* Section 2 */}
            <h2 id="fixed-vs-arm">Fixed-Rate vs. Adjustable-Rate Mortgages</h2>

            <h3>Fixed-Rate Mortgages</h3>
            <p>
              Fixed-rate mortgages maintain the same interest rate for the entire loan term, providing payment stability
              and protection against rising rates. Common terms include:
            </p>
            <ul>
              <li>
                <strong>30-Year Fixed:</strong> Lower monthly payments but higher total interest
              </li>
              <li>
                <strong>20-Year Fixed:</strong> Moderate payment increase with substantial interest savings
              </li>
              <li>
                <strong>15-Year Fixed:</strong> Highest monthly payment but lowest total interest and fastest equity
                building
              </li>
            </ul>
            <p>
              <strong>Best For:</strong> Borrowers who plan to stay in their home long-term and prefer payment
              predictability. Fixed rates are ideal when rates are historically low, locking in favorable terms for
              decades.
            </p>

            <h3>Adjustable-Rate Mortgages (ARMs)</h3>
            <p>
              ARMs offer an initial fixed-rate period (typically 5, 7, or 10 years) followed by annual adjustments based
              on a benchmark index plus a margin. Structure example:
            </p>
            <ul>
              <li>
                <strong>5/1 ARM:</strong> Fixed rate for 5 years, then adjusts annually
              </li>
              <li>
                <strong>7/6 ARM:</strong> Fixed rate for 7 years, then adjusts every 6 months
              </li>
              <li>
                <strong>10/1 ARM:</strong> Fixed rate for 10 years, then adjusts annually
              </li>
            </ul>

            <h3>ARM Rate Caps</h3>
            <p>ARMs include three types of caps to limit rate increases:</p>
            <ul>
              <li>
                <strong>Initial Cap:</strong> Maximum rate increase at first adjustment (typically 2% or 5%)
              </li>
              <li>
                <strong>Periodic Cap:</strong> Maximum increase per adjustment period (typically 1% or 2%)
              </li>
              <li>
                <strong>Lifetime Cap:</strong> Maximum rate increase over loan life (typically 5% or 6% above start
                rate)
              </li>
            </ul>
            <p>
              <strong>Example:</strong> A 5/1 ARM starting at 5.5% with a 2/2/5 cap structure means:
            </p>
            <ul>
              <li>First adjustment cannot exceed 7.5% (5.5% + 2%)</li>
              <li>Subsequent adjustments limited to 2% per year</li>
              <li>Rate can never exceed 10.5% (5.5% + 5%)</li>
            </ul>

            <h3>When to Choose an ARM</h3>
            <p>ARMs suit borrowers who:</p>
            <ul>
              <li>Plan to sell or refinance before the adjustment period</li>
              <li>Expect income increases that can absorb payment changes</li>
              <li>Anticipate falling interest rates</li>
              <li>Want lower initial payments to qualify for a larger loan</li>
            </ul>

            {/* Comparison Table */}
            <div className="my-8 overflow-x-auto not-prose">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left p-3 font-semibold">Feature</th>
                    <th className="text-left p-3 font-semibold">Fixed-Rate</th>
                    <th className="text-left p-3 font-semibold">ARM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3">Rate Stability</td>
                    <td className="p-3">Never changes</td>
                    <td className="p-3">Changes after initial period</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Payment Predictability</td>
                    <td className="p-3">Fully predictable</td>
                    <td className="p-3">Uncertain after adjustment</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Initial Rate</td>
                    <td className="p-3">Higher</td>
                    <td className="p-3">Lower (0.5%-1% less)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Risk</td>
                    <td className="p-3">None (rate locked)</td>
                    <td className="p-3">Rate may increase significantly</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Best Timeline</td>
                    <td className="p-3">Long-term (7+ years)</td>
                    <td className="p-3">Short-term (3-7 years)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Alert Box */}
            <Card className="my-8 bg-amber-50 border-amber-200 not-prose">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-amber-900">ARM Risk Consideration</h3>
                    <p className="text-sm text-amber-800">
                      Ensure you can afford the maximum potential payment if your ARM adjusts to its lifetime cap. A 5/1
                      ARM at 5.5% could increase to 10.5% after 5 years, significantly raising your monthly obligation.
                      Budget conservatively to avoid payment shock.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <h2 id="factors-affecting">Personal Factors Affecting Your Rate</h2>
            <p>
              While macroeconomic conditions set baseline rates, your personal financial profile determines the exact
              rate you receive:
            </p>

            <h3>Credit Score</h3>
            <p>
              Lenders offer tiered pricing based on credit score ranges. Higher scores receive lower rates due to
              reduced default risk:
            </p>
            <ul>
              <li>
                <strong>760-850:</strong> Best available rates
              </li>
              <li>
                <strong>700-759:</strong> Approximately 0.25% higher
              </li>
              <li>
                <strong>680-699:</strong> Approximately 0.50% higher
              </li>
              <li>
                <strong>660-679:</strong> Approximately 0.75% higher
              </li>
              <li>
                <strong>640-659:</strong> Approximately 1.00% higher
              </li>
              <li>
                <strong>620-639:</strong> Approximately 1.50% higher
              </li>
            </ul>
            <p>Improving your credit score by even 20-40 points can reduce your rate and save thousands in interest.</p>

            <h3>Down Payment</h3>
            <p>Larger down payments reduce lender risk and often secure better rates:</p>
            <ul>
              <li>
                <strong>20% or more:</strong> Best rates and no PMI requirement
              </li>
              <li>
                <strong>10%-19%:</strong> Slightly higher rates plus PMI
              </li>
              <li>
                <strong>5%-9%:</strong> Moderately higher rates plus higher PMI
              </li>
              <li>
                <strong>Less than 5%:</strong> Highest rates and PMI costs
              </li>
            </ul>

            <h3>Loan-to-Value (LTV) Ratio</h3>
            <p>
              LTV compares your loan amount to the property value. Lower LTV ratios (higher equity) receive better
              rates. For example, a 95% LTV loan (5% down) may carry a rate 0.25%-0.50% higher than an 80% LTV loan (20%
              down).
            </p>

            <h3>Debt-to-Income (DTI) Ratio</h3>
            <p>
              DTI measures your monthly debt obligations against gross income. Lower DTI ratios demonstrate greater
              repayment capacity:
            </p>
            <ul>
              <li>
                <strong>Below 36%:</strong> Best rates
              </li>
              <li>
                <strong>37%-43%:</strong> Standard rates
              </li>
              <li>
                <strong>44%-50%:</strong> Higher rates or manual underwriting
              </li>
            </ul>

            <h3>Loan Type and Term</h3>
            <p>Different loan types command different rates:</p>
            <ul>
              <li>
                <strong>Conventional loans:</strong> Typically offer the lowest rates for well-qualified borrowers
              </li>
              <li>
                <strong>FHA loans:</strong> Slightly higher rates but more accessible to lower credit scores
              </li>
              <li>
                <strong>VA loans:</strong> Competitive rates with no down payment for eligible veterans
              </li>
              <li>
                <strong>Jumbo loans:</strong> Often 0.25%-0.50% higher due to increased loan size
              </li>
            </ul>
            <p>Shorter terms (15-year) typically offer rates 0.50%-0.75% lower than 30-year mortgages.</p>

            {/* Ad Space - In-Content */}
            <div className="my-8 not-prose">
              <AdSenseAd adSlot="1234567915" format="rectangle" />
            </div>

            {/* Section 4 */}
            <h2 id="rate-types">APR vs. Interest Rate</h2>
            <p>
              Understanding the difference between interest rate and Annual Percentage Rate (APR) is critical when
              comparing lenders:
            </p>

            <h3>Interest Rate</h3>
            <p>
              The interest rate is the annual cost of borrowing the principal, expressed as a percentage. This rate
              determines your monthly principal and interest payment. For example, a $300,000 loan at 6% for 30 years
              results in a monthly P&I payment of $1,799.
            </p>

            <h3>Annual Percentage Rate (APR)</h3>
            <p>APR includes the interest rate plus additional costs such as:</p>
            <ul>
              <li>Origination fees</li>
              <li>Discount points</li>
              <li>Mortgage insurance premiums</li>
              <li>Certain closing costs</li>
            </ul>
            <p>
              APR provides a more complete picture of the loan's true cost. A loan advertising a 6% interest rate might
              have a 6.25% APR once fees are included. Always compare APRs when evaluating multiple loan offers.
            </p>

            {/* Section 5 */}
            <h2 id="when-to-lock">When to Lock Your Rate</h2>
            <p>
              A rate lock guarantees your interest rate for a specified period (typically 30, 45, or 60 days) while your
              loan processes. Considerations include:
            </p>

            <h3>Lock Immediately If:</h3>
            <ul>
              <li>Rates are rising or expected to increase</li>
              <li>You've found a favorable rate that meets your budget</li>
              <li>Your closing date is confirmed and within the lock period</li>
            </ul>

            <h3>Wait to Lock If:</h3>
            <ul>
              <li>Rates are falling or uncertain economic news suggests decreases</li>
              <li>Your closing date is not yet confirmed</li>
              <li>You're early in the process and outside typical lock periods</li>
            </ul>

            <h3>Float-Down Options</h3>
            <p>
              Some lenders offer float-down provisions allowing you to lock a rate but adjust to a lower rate if rates
              fall before closing. These options typically cost 0.125%-0.25% of the loan amount or have specific
              conditions (e.g., rates must drop by at least 0.25%).
            </p>

            {/* CTA Block */}
            <Card className="my-8 bg-primary/5 border-primary/20 not-prose">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <BarChart3 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Compare Fixed vs. ARM Scenarios</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Model different rate scenarios to understand payment impacts. See how fixed-rate stability
                      compares to ARM flexibility.
                    </p>
                    <Button asChild>
                      <Link href="/calculators/mortgage">Use Mortgage Calculator</Link>
                    </Button>
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
                    href="/guides/15-year-vs-30-year"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                  >
                    <Calculator className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">15-Year vs 30-Year Mortgage</div>
                      <div className="text-xs text-muted-foreground">Compare loan terms</div>
                    </div>
                  </Link>
                  <Link
                    href="/guides/refinance-calculator-guide"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                  >
                    <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Refinance Calculator Guide</div>
                      <div className="text-xs text-muted-foreground">Lower your rate</div>
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
                  How much does 1% difference in interest rate matter?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-muted-foreground">
                    A 1% rate difference significantly impacts costs. On a $300,000 30-year mortgage, a 6% rate costs
                    $1,799/month versus $2,108/month at 7%, a difference of $309/month or $111,240 over the loan term.
                    Even small rate changes generate substantial lifetime savings.
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-lg font-semibold mb-2" itemProp="name">
                  Can I negotiate my mortgage rate?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-muted-foreground">
                    Yes. Lenders have some flexibility in rate pricing, particularly if you have strong credit and can
                    demonstrate competing offers. Consider buying discount points (paying upfront to lower the rate) or
                    negotiating lender fees. Always compare offers from at least three lenders to leverage competitive
                    pricing.
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-lg font-semibold mb-2" itemProp="name">
                  What is a discount point?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-muted-foreground">
                    A discount point is a fee paid at closing to reduce your interest rate. One point equals 1% of the
                    loan amount and typically lowers the rate by 0.25%. On a $300,000 loan, one point costs $3,000 and
                    might reduce your rate from 6.5% to 6.25%. Points make sense if you plan to stay in the home long
                    enough to recoup the upfront cost through monthly savings.
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-lg font-semibold mb-2" itemProp="name">
                  Do ARM rates ever decrease?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-muted-foreground">
                    Yes. ARMs adjust based on an index (such as SOFR or the 1-year Treasury rate) plus a fixed margin.
                    If the index falls, your rate decreases at the adjustment period, subject to periodic caps. However,
                    most borrowers choose ARMs assuming worst-case increases and treating potential decreases as bonuses
                    rather than expectations.
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-lg font-semibold mb-2" itemProp="name">
                  How often do mortgage rates change?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-muted-foreground">
                    Mortgage rates can change daily or even multiple times per day based on bond market activity,
                    economic data releases, and Federal Reserve announcements. Lenders typically update rates each
                    morning based on overnight market movements. This volatility underscores the importance of rate
                    locks once you find favorable terms.
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <Card className="my-12 bg-primary text-primary-foreground not-prose">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Test Different Interest Rate Scenarios Now</h2>
                <p className="mb-6 text-primary-foreground/90">
                  See how rate changes affect your monthly payment and lifetime interest. Compare fixed and ARM options.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/calculators/mortgage">
                    <Calculator className="mr-2 h-5 w-5" />
                    Use Mortgage Calculator
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Ad Space - Sidebar */}
            <div className="sticky top-4">
              <AdSenseAd adSlot="1234567916" format="vertical" fullWidth={true} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
