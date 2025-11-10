import type { Metadata } from "next"
import Link from "next/link"
import { Calculator, Home, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AdSenseAd } from "@/components/adsense-ad"

export const metadata: Metadata = {
  title: "First-Time Homebuyer Loans (2025): FHA, VA, USDA, and Down Payment Assistance",
  description:
    "A comprehensive guide to U.S. loan programs for first-time buyers, including minimum down payment requirements, credit score allowances, and state assistance.",
}

export default function FirstTimeHomebuyerPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Ad Space - Top Leaderboard */}
      <div className="bg-muted border-b">
        <div className="container mx-auto px-4 py-4">
          <AdSenseAd adSlot="1234567900" format="horizontal" fullWidth={true} />
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
              <span className="text-foreground">First-Time Homebuyer Loan Programs</span>
            </nav>

            <h1 className="text-4xl font-bold mb-4 text-balance">
              First-Time Homebuyer Loans (2025): FHA, VA, USDA, and Down Payment Assistance
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 not-prose">
              <time>Updated: January 2025</time>
              <span>•</span>
              <span>10 min read</span>
            </div>

            {/* Table of Contents */}
            <Card className="my-8 not-prose">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
                <ol className="space-y-2 text-sm">
                  <li>
                    <a href="#overview" className="text-primary hover:underline">
                      1. First-Time Buyer Programs Overview
                    </a>
                  </li>
                  <li>
                    <a href="#fha-loans" className="text-primary hover:underline">
                      2. FHA Loans (3.5% Down)
                    </a>
                  </li>
                  <li>
                    <a href="#conventional-loans" className="text-primary hover:underline">
                      3. Conventional Loans (3% Down)
                    </a>
                  </li>
                  <li>
                    <a href="#va-loans" className="text-primary hover:underline">
                      4. VA Loans (0% Down for Veterans)
                    </a>
                  </li>
                  <li>
                    <a href="#usda-loans" className="text-primary hover:underline">
                      5. USDA Loans (0% Down for Rural Areas)
                    </a>
                  </li>
                  <li>
                    <a href="#state-programs" className="text-primary hover:underline">
                      6. State and Local Assistance Programs
                    </a>
                  </li>
                  <li>
                    <a href="#comparison" className="text-primary hover:underline">
                      7. Program Comparison Table
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-primary hover:underline">
                      8. Frequently Asked Questions
                    </a>
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Introduction */}
            <p className="text-lg">
              First-time homebuyers in the United States have access to several loan programs designed to reduce down
              payment requirements and credit score thresholds. This guide examines federal and state-level options,
              including FHA, VA, USDA, and conventional low-down-payment mortgages.
            </p>

            {/* CTA Block */}
            <Card className="my-8 bg-primary/5 border-primary/20 not-prose">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Calculator className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Calculate Your First Home Payment</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Estimate monthly payments with different down payment amounts and loan programs. See how FHA, VA,
                      or conventional loans affect your budget.
                    </p>
                    <Button asChild>
                      <Link href="/calculators/mortgage">Use Mortgage Calculator</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 1 */}
            <h2 id="overview">First-Time Buyer Programs Overview</h2>
            <p>
              First-time homebuyer programs reduce barriers to homeownership by lowering down payment requirements,
              offering flexible credit standards, and providing financial assistance. Key programs include:
            </p>
            <ul>
              <li>
                <strong>FHA Loans:</strong> 3.5% down payment with credit scores as low as 580
              </li>
              <li>
                <strong>Conventional 97 Loans:</strong> 3% down for qualified borrowers
              </li>
              <li>
                <strong>VA Loans:</strong> 0% down payment for eligible veterans and service members
              </li>
              <li>
                <strong>USDA Loans:</strong> 0% down for properties in designated rural areas
              </li>
              <li>
                <strong>State/Local Programs:</strong> Down payment assistance grants and low-interest loans
              </li>
            </ul>
            <p>
              Most programs do not require that you be a literal first-time buyer. Many define "first-time" as not
              having owned a home in the past three years, expanding eligibility to previous homeowners returning to the
              market.
            </p>

            {/* Ad Space - In-Content */}
            <div className="my-8 not-prose">
              <AdSenseAd adSlot="1234567901" format="rectangle" />
            </div>

            {/* Section 2 */}
            <h2 id="fha-loans">FHA Loans (3.5% Down)</h2>
            <p>
              Federal Housing Administration (FHA) loans are government-backed mortgages designed for borrowers with
              lower credit scores or limited savings. Key features include:
            </p>

            <h3>Minimum Requirements</h3>
            <ul>
              <li>
                <strong>Down Payment:</strong> 3.5% with a credit score of 580 or higher
              </li>
              <li>
                <strong>Credit Score:</strong> Scores between 500-579 may qualify with 10% down
              </li>
              <li>
                <strong>Debt-to-Income Ratio:</strong> Maximum 43% (some lenders allow up to 50%)
              </li>
              <li>
                <strong>Loan Limits:</strong> Vary by county; $498,257 in most areas, up to $1,149,825 in high-cost
                regions (2025)
              </li>
            </ul>

            <h3>Mortgage Insurance</h3>
            <p>FHA loans require two types of mortgage insurance:</p>
            <ul>
              <li>
                <strong>Upfront MIP:</strong> 1.75% of the loan amount, typically rolled into the loan
              </li>
              <li>
                <strong>Annual MIP:</strong> 0.45% to 1.05% of the loan amount, paid monthly
              </li>
            </ul>
            <p>
              For loans with down payments less than 10%, MIP continues for the life of the loan. If you put down 10% or
              more, MIP is removed after 11 years. This differs from conventional PMI, which cancels automatically at
              78% loan-to-value.
            </p>

            <h3>Best For</h3>
            <p>
              FHA loans suit borrowers with credit scores between 580-680, limited down payment funds, or recent credit
              issues. For more details, see our{" "}
              <Link href="/guides/fha-vs-conventional" className="text-primary hover:underline">
                FHA vs Conventional Loan Guide
              </Link>
              .
            </p>

            {/* Section 3 */}
            <h2 id="conventional-loans">Conventional Loans (3% Down)</h2>
            <p>
              Conventional loans are not government-backed and are underwritten by private lenders following Fannie Mae
              or Freddie Mac guidelines. Several programs offer low down payment options for first-time buyers:
            </p>

            <h3>Conventional 97 (3% Down)</h3>
            <ul>
              <li>
                <strong>Down Payment:</strong> As low as 3%
              </li>
              <li>
                <strong>Credit Score:</strong> Minimum 620, though 680+ receives better rates
              </li>
              <li>
                <strong>PMI:</strong> Required if down payment is less than 20%, but can be canceled once you reach 20%
                equity
              </li>
              <li>
                <strong>First-Time Buyer Requirement:</strong> At least one borrower must be a first-time homebuyer
              </li>
            </ul>

            <h3>HomeReady and Home Possible</h3>
            <p>
              Fannie Mae's HomeReady and Freddie Mac's Home Possible programs target low-to-moderate income borrowers:
            </p>
            <ul>
              <li>
                <strong>Income Limits:</strong> Must not exceed 80% of area median income (AMI)
              </li>
              <li>
                <strong>Down Payment:</strong> 3%
              </li>
              <li>
                <strong>Credit Score:</strong> Minimum 620
              </li>
              <li>
                <strong>Homebuyer Education:</strong> Required online course
              </li>
              <li>
                <strong>PMI Discount:</strong> Lower mortgage insurance rates compared to standard conventional loans
              </li>
            </ul>

            <h3>Comparison: FHA vs Conventional 3% Down</h3>
            <div className="my-8 overflow-x-auto not-prose">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left p-3 font-semibold">Feature</th>
                    <th className="text-left p-3 font-semibold">FHA (3.5% Down)</th>
                    <th className="text-left p-3 font-semibold">Conventional (3% Down)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3">Minimum Credit Score</td>
                    <td className="p-3">580</td>
                    <td className="p-3">620</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Down Payment</td>
                    <td className="p-3">3.5%</td>
                    <td className="p-3">3%</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Mortgage Insurance</td>
                    <td className="p-3">MIP for life (if down payment is less than 10%)</td>
                    <td className="p-3">PMI until 20% equity</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Upfront Costs</td>
                    <td className="p-3">1.75% upfront MIP</td>
                    <td className="p-3">None</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Best For</td>
                    <td className="p-3">Lower credit scores (580-679)</td>
                    <td className="p-3">Higher credit scores (680+)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Ad Space - In-Content */}
            <div className="my-8 not-prose">
              <AdSenseAd adSlot="1234567902" format="rectangle" />
            </div>

            {/* Section 4 */}
            <h2 id="va-loans">VA Loans (0% Down for Veterans)</h2>
            <p>
              VA loans, guaranteed by the U.S. Department of Veterans Affairs, offer unmatched benefits for eligible
              service members, veterans, and surviving spouses:
            </p>

            <h3>Key Benefits</h3>
            <ul>
              <li>
                <strong>No Down Payment:</strong> Purchase up to 100% of the home's value with no money down
              </li>
              <li>
                <strong>No PMI:</strong> No monthly mortgage insurance regardless of down payment
              </li>
              <li>
                <strong>Competitive Rates:</strong> Typically 0.25%-0.50% lower than conventional mortgages
              </li>
              <li>
                <strong>Flexible Credit:</strong> No minimum credit score requirement (though most lenders require 620+)
              </li>
              <li>
                <strong>Limits on Closing Costs:</strong> VA restricts which fees lenders can charge borrowers
              </li>
            </ul>

            <h3>Eligibility</h3>
            <p>To qualify, you must meet minimum service requirements:</p>
            <ul>
              <li>90 consecutive days of active service during wartime</li>
              <li>181 days of active service during peacetime</li>
              <li>6 years in the National Guard or Reserves</li>
              <li>Surviving spouses of service members who died in service or from service-connected disabilities</li>
            </ul>

            <h3>VA Funding Fee</h3>
            <p>
              VA loans require a one-time funding fee ranging from 1.25% to 3.3% of the loan amount, depending on down
              payment size and whether it's your first VA loan. This fee can be rolled into the loan balance. Veterans
              with service-connected disabilities are exempt.
            </p>

            {/* Section 5 */}
            <h2 id="usda-loans">USDA Loans (0% Down for Rural Areas)</h2>
            <p>
              USDA loans, backed by the U.S. Department of Agriculture, provide 100% financing for properties in
              eligible rural and suburban areas. Despite the "rural" designation, many suburban communities qualify.
            </p>

            <h3>Eligibility Requirements</h3>
            <ul>
              <li>
                <strong>Location:</strong> Property must be in a USDA-eligible area (check at{" "}
                <a
                  href="https://eligibility.sc.egov.usda.gov/eligibility/welcomeAction.do"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  USDA Eligibility Map
                </a>
                )
              </li>
              <li>
                <strong>Income Limits:</strong> Household income cannot exceed 115% of area median income
              </li>
              <li>
                <strong>Primary Residence:</strong> Must be your primary home (no investment properties)
              </li>
              <li>
                <strong>Credit Score:</strong> Minimum 640 for automated underwriting; manual underwriting available for
                lower scores
              </li>
            </ul>

            <h3>Guarantee Fee</h3>
            <p>USDA loans charge:</p>
            <ul>
              <li>
                <strong>Upfront Fee:</strong> 1% of the loan amount (can be rolled into the loan)
              </li>
              <li>
                <strong>Annual Fee:</strong> 0.35% of the loan balance, paid monthly
              </li>
            </ul>
            <p>
              These fees are lower than FHA's mortgage insurance, making USDA loans cost-effective for eligible buyers.
            </p>

            {/* CTA Block */}
            <Card className="my-8 bg-primary/5 border-primary/20 not-prose">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Calculate FHA vs Conventional Payments</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Compare monthly payments between FHA and conventional loans. See how down payment amounts and
                      mortgage insurance affect your budget.
                    </p>
                    <Button asChild>
                      <Link href="/calculators/mortgage">Use Mortgage Calculator</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <h2 id="state-programs">State and Local Assistance Programs</h2>
            <p>
              Most states offer down payment assistance (DPA) programs for first-time buyers. These programs provide
              grants or low-interest second mortgages to cover down payments and closing costs.
            </p>

            <h3>Common Program Types</h3>
            <ul>
              <li>
                <strong>Grants:</strong> Free money that doesn't need to be repaid (often 3%-5% of purchase price)
              </li>
              <li>
                <strong>Second Mortgages:</strong> Low-interest loans repaid over time or forgiven after staying in the
                home for a set period
              </li>
              <li>
                <strong>Matched Savings:</strong> Programs that match your savings dollar-for-dollar (Individual
                Development Accounts)
              </li>
              <li>
                <strong>Tax Credits:</strong> Mortgage Credit Certificates (MCC) provide annual tax credits equal to a
                percentage of mortgage interest paid
              </li>
            </ul>

            <h3>Examples by State</h3>
            <ul>
              <li>
                <strong>California:</strong> CalHFA offers up to 3.5% down payment assistance with credit scores as low
                as 660
              </li>
              <li>
                <strong>Texas:</strong> Texas State Affordable Housing Corporation provides $15,000-$17,500 DPA grants
              </li>
              <li>
                <strong>New York:</strong> SONYMA offers low-interest mortgages and up to $15,000 in down payment help
              </li>
              <li>
                <strong>Florida:</strong> Florida Housing offers down payment assistance of up to 5% combined with
                reduced interest rates
              </li>
            </ul>
            <p>
              Contact your state housing finance agency to explore available programs. Many local governments and
              nonprofits also offer assistance, particularly in urban areas.
            </p>

            {/* Section 7 - Comparison Table */}
            <h2 id="comparison">Program Comparison Table</h2>
            <div className="my-8 overflow-x-auto not-prose">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left p-3 font-semibold">Program</th>
                    <th className="text-left p-3 font-semibold">Min. Down</th>
                    <th className="text-left p-3 font-semibold">Min. Credit</th>
                    <th className="text-left p-3 font-semibold">Mortgage Insurance</th>
                    <th className="text-left p-3 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">FHA</td>
                    <td className="p-3">3.5%</td>
                    <td className="p-3">580</td>
                    <td className="p-3">MIP for life</td>
                    <td className="p-3">Lower credit scores</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">Conventional 97</td>
                    <td className="p-3">3%</td>
                    <td className="p-3">620</td>
                    <td className="p-3">PMI (removable)</td>
                    <td className="p-3">Good credit, first-time buyers</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">VA</td>
                    <td className="p-3">0%</td>
                    <td className="p-3">No minimum</td>
                    <td className="p-3">None</td>
                    <td className="p-3">Veterans, service members</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">USDA</td>
                    <td className="p-3">0%</td>
                    <td className="p-3">640</td>
                    <td className="p-3">0.35% annual fee</td>
                    <td className="p-3">Rural/suburban areas</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">HomeReady/Possible</td>
                    <td className="p-3">3%</td>
                    <td className="p-3">620</td>
                    <td className="p-3">Reduced PMI</td>
                    <td className="p-3">Low-to-moderate income</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Internal Links */}
            <Card className="my-8 not-prose">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Related Guides</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link
                    href="/guides/fha-vs-conventional"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                  >
                    <Calculator className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">FHA vs Conventional Loans</div>
                      <div className="text-xs text-muted-foreground">Compare loan types</div>
                    </div>
                  </Link>
                  <Link
                    href="/guides/mortgage-calculator-guide"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                  >
                    <DollarSign className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Mortgage Calculator Guide</div>
                      <div className="text-xs text-muted-foreground">Understand PITI payments</div>
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
                  Do I qualify as a first-time buyer if I owned a home years ago?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-muted-foreground">
                    Most programs define "first-time homebuyer" as someone who hasn't owned a primary residence in the
                    past three years. If you owned a home more than three years ago, you likely qualify for first-time
                    buyer programs. Some programs have no prior ownership restrictions at all.
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-lg font-semibold mb-2" itemProp="name">
                  Which is better for first-time buyers: FHA or conventional?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-muted-foreground">
                    If your credit score is below 680, FHA loans typically offer better approval odds and rates. With a
                    score above 680, conventional loans often provide lower costs due to removable PMI and no upfront
                    insurance premium. Use our calculator to compare both options with your specific numbers.
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-lg font-semibold mb-2" itemProp="name">
                  Can I combine down payment assistance with an FHA or VA loan?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-muted-foreground">
                    Yes. Many state and local down payment assistance programs work with FHA, VA, USDA, and conventional
                    loans. This combination allows you to minimize out-of-pocket expenses. Check with your state housing
                    finance agency for compatible programs.
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-lg font-semibold mb-2" itemProp="name">
                  How much should I save for closing costs?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-muted-foreground">
                    Closing costs typically range from 2% to 5% of the purchase price. On a $300,000 home, expect $6,000
                    to $15,000. Some programs offer grants specifically for closing costs, and sellers can contribute up
                    to 3%-6% of the price depending on loan type. Always request a Loan Estimate within three days of
                    application to see exact costs.
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-lg font-semibold mb-2" itemProp="name">
                  What credit score do I need for each program?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-muted-foreground">
                    FHA: 580 minimum (500-579 requires 10% down). Conventional: 620 minimum. VA: No official minimum,
                    but most lenders require 620. USDA: 640 for streamlined approval. Higher scores receive better
                    interest rates across all programs.
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <Card className="my-12 bg-primary text-primary-foreground not-prose">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to Calculate Your First Home Payment?</h2>
                <p className="mb-6 text-primary-foreground/90">
                  Compare FHA, conventional, and other loan programs. See how down payment size affects your monthly
                  budget.
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
              <AdSenseAd adSlot="1234567903" format="vertical" fullWidth={true} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
