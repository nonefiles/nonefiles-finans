import Link from "next/link"
import { Calculator, Home, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AdSenseAd } from "@/components/adsense-ad"

export const metadata = {
  title: "First-Time Homebuyer Loan Programs (2025 Edition) | LoanSense",
  description:
    "Comprehensive guide to first-time homebuyer programs including FHA, VA, USDA, and state assistance. Learn eligibility requirements and down payment options.",
}

export default function FirstTimeHomebuyerPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <AdSenseAd adSlot="1234567904" format="horizontal" fullWidth={true} />

        <article className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold mb-4 text-foreground">First-Time Homebuyer Loan Programs (2025 Edition)</h1>

          <p className="text-lg text-muted-foreground mb-8">
            First-time homebuyers have access to specialized loan programs with lower down payments, flexible credit
            requirements, and reduced costs. Understanding available options helps identify the best path to
            homeownership.
          </p>

          <Card className="my-8 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Calculator className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold m-0">Try Our Free Mortgage Calculator</h3>
              </div>
              <p className="mb-4 text-muted-foreground">
                Calculate your potential monthly payments for different loan programs.
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
                <a href="#definition" className="text-primary hover:underline">
                  Who Qualifies as First-Time Buyer
                </a>
              </li>
              <li>
                <a href="#federal-programs" className="text-primary hover:underline">
                  Federal Loan Programs
                </a>
              </li>
              <li>
                <a href="#conventional" className="text-primary hover:underline">
                  Conventional Options
                </a>
              </li>
              <li>
                <a href="#state-local" className="text-primary hover:underline">
                  State and Local Programs
                </a>
              </li>
              <li>
                <a href="#down-payment" className="text-primary hover:underline">
                  Down Payment Assistance
                </a>
              </li>
              <li>
                <a href="#choosing" className="text-primary hover:underline">
                  Choosing the Right Program
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </nav>

          <h2 id="definition" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Who Qualifies as First-Time Buyer
          </h2>

          <p>
            The IRS defines first-time homebuyer as someone who has not owned a primary residence in the past three
            years. This means previous homeowners may still qualify if enough time has passed.
          </p>

          <p>
            Additional categories qualify as first-time buyers even with past ownership: single parents who only owned
            with former spouse, individuals who only owned property not permanently attached to a foundation, and those
            whose previous home was not compliant with building codes.
          </p>

          <AdSenseAd adSlot="1234567905" format="rectangle" />

          <h2 id="federal-programs" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Federal Loan Programs
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">FHA Loans</h3>
          <p>
            Federal Housing Administration loans require only 3.5% down payment with credit scores as low as 580. These
            government-backed loans accept higher debt-to-income ratios and more lenient credit histories than
            conventional loans.
          </p>
          <p>
            FHA loans require upfront and annual mortgage insurance premiums. Annual MIP remains for loan life with less
            than 10% down payment. Loan limits for 2025: $498,257 in most areas, higher in expensive markets.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">VA Loans</h3>
          <p>
            Department of Veterans Affairs loans offer zero down payment options for eligible military service members,
            veterans, and surviving spouses. VA loans do not require mortgage insurance despite no down payment.
          </p>
          <p>
            VA loans charge one-time funding fee (1.4% to 3.6% depending on service type and down payment) but offer
            competitive rates and lenient credit standards. Minimum credit score requirements vary by lender, typically
            620.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">USDA Loans</h3>
          <p>
            United States Department of Agriculture loans provide zero down payment financing for homes in eligible
            rural and suburban areas. Properties must meet location requirements covering approximately 97% of U.S.
            geography.
          </p>
          <p>
            USDA loans require upfront guarantee fee (1% of loan amount) and annual fee (0.35%). Income limits apply
            based on area median income. Borrowers must have stable income and reasonable credit history.
          </p>

          <h2 id="conventional" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Conventional Options
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Conventional 97 Loans</h3>
          <p>
            Fannie Mae and Freddie Mac offer 3% down payment conventional loans for first-time buyers. These loans
            require private mortgage insurance until 20% equity is reached but PMI automatically cancels at 78% LTV.
          </p>
          <p>
            Conventional 97 loans require 620 minimum credit score. Borrowers must complete homebuyer education course.
            Only one borrower needs to be first-time buyer if multiple borrowers on loan.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">HomeReady and Home Possible</h3>
          <p>
            Fannie Mae HomeReady and Freddie Mac Home Possible programs serve low-to-moderate income borrowers with 3%
            down payment options. These programs accept non-traditional income sources including boarder rental income.
          </p>
          <p>
            Income limits apply based on area median income (typically 80% to 100% of AMI). Favorable mortgage insurance
            pricing compared to standard conventional loans. Homebuyer education required.
          </p>

          <h2 id="state-local" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            State and Local Programs
          </h2>

          <p>
            Most states operate housing finance agencies offering first-time buyer assistance. Programs vary
            significantly but commonly include down payment assistance grants, low-interest mortgages, and tax credits.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Common State Program Features</h3>
          <ul className="space-y-2 my-4">
            <li>Down payment and closing cost grants (typically $2,500 to $15,000)</li>
            <li>Below-market interest rates</li>
            <li>Mortgage Credit Certificates providing annual tax credits</li>
            <li>Second mortgages with deferred or forgiven repayment</li>
            <li>Property tax exemptions or reductions</li>
          </ul>

          <p>
            State programs typically combine with FHA, VA, USDA, or conventional loans rather than standing alone.
            Income and purchase price limits apply. Many programs require homebuyer education completion.
          </p>

          <h2 id="down-payment" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Down Payment Assistance
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">DPA Types</h3>
          <p>
            Down payment assistance comes in several forms: forgivable loans that disappear after 5-10 years of
            residence, deferred payment loans with no monthly payment until home sale or refinance, low-interest second
            mortgages, and outright grants requiring no repayment.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Employer Assistance</h3>
          <p>
            Some employers offer homebuyer assistance as recruitment or retention benefit. Programs may include
            forgivable loans, matching contributions, or grants. Healthcare systems, universities, and government
            employers commonly offer these programs.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Nonprofit Organizations</h3>
          <p>
            Local nonprofits and community development corporations provide down payment assistance to qualifying
            buyers. These organizations often focus on specific neighborhoods, income levels, or occupations like
            teachers and first responders.
          </p>

          <h2 id="choosing" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Choosing the Right Program
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-3 font-semibold">Choose This</th>
                  <th className="text-left p-3 font-semibold">If You</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-3">FHA Loan</td>
                  <td className="p-3">Have limited down payment and credit score below 680</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">VA Loan</td>
                  <td className="p-3">Qualify through military service and want zero down payment</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">USDA Loan</td>
                  <td className="p-3">Buy in eligible rural area and want zero down payment</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Conventional 97</td>
                  <td className="p-3">Have 680+ credit and want PMI that cancels automatically</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">HomeReady/Possible</td>
                  <td className="p-3">Have moderate income and need flexible income documentation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-3">Related Resources</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/calculators/mortgage" className="text-primary hover:underline flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                Mortgage Calculator
              </Link>
              <Link href="/guides/fha-vs-conventional" className="text-primary hover:underline flex items-center gap-2">
                <Home className="h-4 w-4" />
                FHA vs Conventional Loans
              </Link>
              <Link href="/guides/pmi-guide" className="text-primary hover:underline flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                PMI Guide
              </Link>
              <Link href="/guides/closing-costs" className="text-primary hover:underline flex items-center gap-2">
                <Home className="h-4 w-4" />
                Closing Costs Breakdown
              </Link>
              <Link
                href="/guides/mortgage-calculator-guide"
                className="text-primary hover:underline flex items-center gap-2"
              >
                <Calculator className="h-4 w-4" />
                How Mortgage Calculators Work
              </Link>
            </div>
          </div>

          <h2 id="faq" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Do I need perfect credit to buy a home?</h3>
              <p>
                No. FHA loans accept scores as low as 580 (or 500 with 10% down). Many first-time buyer programs work
                with credit scores in the 620-680 range. Focus on payment history and reducing debt-to-income ratio.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">How much money do I need saved?</h3>
              <p>
                Minimum requirements vary by program. FHA loans need 3.5% down plus 2-4% closing costs. Some programs
                combine zero down payment with closing cost assistance. Budget for 3-6 months reserves for maintenance
                and emergencies.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Can I use gift money for down payment?</h3>
              <p>
                Yes. Most programs accept gift funds from family members for entire down payment and closing costs.
                Donors must provide gift letter confirming funds are gift, not loan. Some programs require minimum
                borrower contribution.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">What is homebuyer education?</h3>
              <p>
                Many programs require completion of HUD-approved homebuyer education course. Classes cover budgeting,
                mortgage products, home maintenance, and avoiding foreclosure. Available online or in-person, typically
                6-8 hours, cost $50-$100.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Should I wait until I have 20% down payment?</h3>
              <p>
                Not necessarily. Waiting years to save 20% means missing homeownership benefits and potential
                appreciation. Low down payment programs allow you to build equity sooner. Compare rent costs versus
                mortgage with PMI.
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
                    name: "Do I need perfect credit to buy a home?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. FHA loans accept scores as low as 580. Many first-time buyer programs work with credit scores in the 620-680 range.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I use gift money for down payment?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Most programs accept gift funds from family members for entire down payment and closing costs with proper documentation.",
                    },
                  },
                ],
              }),
            }}
          />
        </article>

        <AdSenseAd adSlot="1234567906" format="horizontal" fullWidth={true} />
      </div>
    </div>
  )
}
