import Link from "next/link"
import { Calculator, Home, TrendingUp, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AdSenseAd } from "@/components/adsense-ad"

export const metadata = {
  title: "30-Year vs 15-Year Mortgage: Cost, Risk, and Financial Flexibility Analysis | LoanSense",
  description:
    "Compare 15-year and 30-year mortgage terms with payment examples and estimation formulas. Understand total interest costs and which term fits your financial goals.",
}

export default function MortgageTermComparisonPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="ad-slot ad-top bg-muted/30 h-24 flex items-center justify-center text-muted-foreground text-sm mb-8 rounded">
          Ad Space - Top Banner
        </div>

        <AdSenseAd adSlot="1234567894" format="horizontal" fullWidth={true} />

        <article className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            30-Year vs 15-Year Mortgage: Cost, Risk, and Financial Flexibility Analysis
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            Choosing between 15-year and 30-year mortgage terms affects monthly payments, total interest paid, and
            equity building. The right term depends on budget, financial goals, and long-term plans.
          </p>

          <Card className="my-8 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Calculator className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold m-0">Compare Loan Terms</h3>
              </div>
              <p className="mb-4 text-muted-foreground">
                See how different mortgage terms affect your monthly payments and total costs.
              </p>
              <Link href="/calculators/mortgage">
                <Button size="lg" className="w-full sm:w-auto">
                  Calculate Your Options
                </Button>
              </Link>
            </CardContent>
          </Card>

          <nav className="bg-muted/50 p-6 rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-3">Table of Contents</h2>
            <ul className="space-y-2 list-none pl-0">
              <li>
                <a href="#overview" className="text-primary hover:underline">
                  Key Differences Overview
                </a>
              </li>
              <li>
                <a href="#payment-comparison" className="text-primary hover:underline">
                  Payment Comparison
                </a>
              </li>
              <li>
                <a href="#interest-costs" className="text-primary hover:underline">
                  Total Interest Costs
                </a>
              </li>
              <li>
                <a href="#advantages" className="text-primary hover:underline">
                  Advantages of Each Term
                </a>
              </li>
              <li>
                <a href="#choose" className="text-primary hover:underline">
                  How to Choose
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
            Key Differences Overview
          </h2>

          <p>
            The mortgage term determines how long you take to repay the loan. 30-year mortgages spread payments over 360
            months, while 15-year terms require repayment in 180 months.
          </p>

          <p>
            Shorter terms have higher monthly payments but significantly lower total interest costs. Longer terms offer
            lower payments with more interest paid over the life of the loan.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-3 font-semibold">Factor</th>
                  <th className="text-left p-3 font-semibold">30-Year</th>
                  <th className="text-left p-3 font-semibold">15-Year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-3">Monthly Payment</td>
                  <td className="p-3">Lower</td>
                  <td className="p-3">Higher</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Interest Rate</td>
                  <td className="p-3">Typically 0.25-0.5% higher</td>
                  <td className="p-3">Lower</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Total Interest Paid</td>
                  <td className="p-3">Much higher</td>
                  <td className="p-3">Significantly lower</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Equity Building</td>
                  <td className="p-3">Slower</td>
                  <td className="p-3">Faster</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Payment Flexibility</td>
                  <td className="p-3">More budget room</td>
                  <td className="p-3">Less flexibility</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ad-slot ad-inline bg-muted/30 h-32 flex items-center justify-center text-muted-foreground text-sm my-8 rounded">
            Ad Space - Inline Content
          </div>

          <AdSenseAd adSlot="1234567895" format="rectangle" />

          <h2 id="payment-comparison" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Payment Comparison
          </h2>

          <p>
            Monthly payments differ substantially between loan terms. The following examples show payment differences
            for common loan amounts:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-3 font-semibold">Loan Amount</th>
                  <th className="text-left p-3 font-semibold">30-Year Payment</th>
                  <th className="text-left p-3 font-semibold">15-Year Payment</th>
                  <th className="text-left p-3 font-semibold">Difference</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-3">$200,000</td>
                  <td className="p-3">$1,264 (6.5%)</td>
                  <td className="p-3">$1,742 (6.0%)</td>
                  <td className="p-3">+$478</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">$300,000</td>
                  <td className="p-3">$1,896 (6.5%)</td>
                  <td className="p-3">$2,613 (6.0%)</td>
                  <td className="p-3">+$717</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">$400,000</td>
                  <td className="p-3">$2,528 (6.5%)</td>
                  <td className="p-3">$3,484 (6.0%)</td>
                  <td className="p-3">+$956</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">$500,000</td>
                  <td className="p-3">$3,160 (6.5%)</td>
                  <td className="p-3">$4,355 (6.0%)</td>
                  <td className="p-3">+$1,195</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Note: Interest rates shown are examples. 15-year mortgages typically have rates 0.25% to 0.5% lower than
            30-year terms.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground">Quick Estimation Rules</h3>

          <p>
            Financial professionals use simplified estimation formulas to quickly calculate approximate monthly
            payments. These rules provide estimates within 5-10% of actual payments.
          </p>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3">30-Year Mortgage Estimation</h4>
            <p className="mb-2">Monthly Payment ≈ (179 + 71 × i) × P</p>
            <p className="text-sm text-muted-foreground">
              Where i = interest rate (as percentage, e.g., 6.5) and P = loan amount in units of $100,000
            </p>
            <p className="mt-3 text-sm">
              <strong>Example:</strong> $300,000 loan at 6.5% → (179 + 71 × 6.5) × 3 = (179 + 461.5) × 3 = $1,921
              (actual: $1,896)
            </p>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3">15-Year Mortgage Estimation</h4>
            <p className="mb-2">Monthly Payment ≈ (492 + 59 × i) × P</p>
            <p className="text-sm text-muted-foreground">
              Where i = interest rate (as percentage, e.g., 6.0) and P = loan amount in units of $100,000
            </p>
            <p className="mt-3 text-sm">
              <strong>Example:</strong> $300,000 loan at 6.0% → (492 + 59 × 6.0) × 3 = (492 + 354) × 3 = $2,538 (actual:
              $2,532)
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            These estimation rules are derived from simplified amortization formulas and provide quick calculations
            without a calculator. Accuracy improves with rates between 4-8%.
          </p>

          <Card className="my-8 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold m-0">Unlock Your Full Amortization Schedule</h3>
              </div>
              <p className="mb-4 text-muted-foreground">
                Enter your email to receive detailed PDF comparisons showing exact principal paydown rates, interest
                savings, and month-by-month breakdowns for both 15-year and 30-year terms.
              </p>
            </CardContent>
          </Card>

          <h2 id="interest-costs" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Total Interest Costs
          </h2>

          <p>The difference in total interest paid between terms is substantial. Consider a $300,000 loan:</p>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-3">30-Year Mortgage at 6.5%</h3>
            <ul className="space-y-2 list-none pl-0">
              <li>Monthly payment: $1,896</li>
              <li>Total paid over 30 years: $682,632</li>
              <li>Total interest paid: $382,632</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-3">15-Year Mortgage at 6.0%</h3>
            <ul className="space-y-2 list-none pl-0">
              <li>Monthly payment: $2,532</li>
              <li>Total paid over 15 years: $455,751</li>
              <li>Total interest paid: $155,751</li>
            </ul>
          </div>

          <p className="font-semibold">Interest savings with 15-year term: $226,881</p>

          <p>
            The 15-year mortgage saves over $226,000 in interest despite higher monthly payments. This represents a 59%
            reduction in total interest costs.
          </p>

          <h2 id="advantages" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Advantages of Each Term
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">30-Year Mortgage Benefits</h3>
          <ul className="space-y-2 my-4">
            <li>Lower monthly payments increase budget flexibility</li>
            <li>More cash available for investments, savings, or emergencies</li>
            <li>Easier qualification with lower payment requirements</li>
            <li>Option to pay extra principal when finances allow</li>
            <li>Better suited for first-time buyers or tight budgets</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">15-Year Mortgage Benefits</h3>
          <ul className="space-y-2 my-4">
            <li>Massive interest savings over loan term</li>
            <li>Build equity twice as fast</li>
            <li>Lower interest rates than 30-year terms</li>
            <li>Mortgage-free in half the time</li>
            <li>Forced savings through principal paydown</li>
          </ul>

          <h2 id="choose" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            How to Choose
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Choose 30-Year If:</h3>
          <ul className="space-y-2 my-4">
            <li>You are buying your first home with limited budget</li>
            <li>You want maximum payment flexibility</li>
            <li>Other financial goals compete for resources</li>
            <li>You plan to invest the payment difference</li>
            <li>Job stability or income is uncertain</li>
            <li>You may move before loan maturity</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Choose 15-Year If:</h3>
          <ul className="space-y-2 my-4">
            <li>Higher payment fits comfortably in your budget</li>
            <li>You want to minimize interest costs</li>
            <li>You prioritize debt elimination</li>
            <li>You are approaching retirement age</li>
            <li>You have stable, high income</li>
            <li>Emergency fund and retirement savings are solid</li>
          </ul>

          <div className="bg-muted/50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-3">Related Tools</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/calculators/mortgage" className="text-primary hover:underline flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                Mortgage Calculator
              </Link>
              <Link href="/calculators/refinance" className="text-primary hover:underline flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Refinance Calculator
              </Link>
              <Link
                href="/guides/mortgage-calculator-guide"
                className="text-primary hover:underline flex items-center gap-2"
              >
                <Home className="h-4 w-4" />
                How Mortgage Calculators Work
              </Link>
              <Link href="/guides/fha-vs-conventional" className="text-primary hover:underline flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                FHA vs Conventional Loans
              </Link>
              <Link href="/guides/amortization" className="text-primary hover:underline flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                Amortization Schedule Guide
              </Link>
            </div>
          </div>

          <h2 id="faq" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I pay off a 30-year mortgage early?</h3>
              <p>
                Yes. Most mortgages have no prepayment penalty. Making extra principal payments on a 30-year loan can
                significantly reduce interest costs and loan term.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Is a 15-year mortgage harder to qualify for?</h3>
              <p>
                Qualification is based on debt-to-income ratio. Higher 15-year payments may reduce buying power or
                require higher income to meet lender requirements.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Can I refinance from 30-year to 15-year later?</h3>
              <p>
                Yes. Refinancing to a shorter term is common once income increases or budget allows. This reduces
                remaining interest costs significantly.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Which term do most people choose?</h3>
              <p>
                Approximately 90% of borrowers choose 30-year mortgages for lower payments and flexibility. 15-year
                terms are more popular among refinancers and high-income buyers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Should I invest the difference or pay off mortgage faster?</h3>
              <p>
                This depends on investment returns versus mortgage rate, risk tolerance, and financial goals. Guaranteed
                savings from early payoff compete with potential higher investment returns.
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
                    name: "Can I pay off a 30-year mortgage early?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Most mortgages have no prepayment penalty. Making extra principal payments can significantly reduce interest costs.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is a 15-year mortgage harder to qualify for?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Qualification is based on debt-to-income ratio. Higher payments may reduce buying power or require higher income.",
                    },
                  },
                ],
              }),
            }}
          />
        </article>

        <AdSenseAd adSlot="1234567896" format="horizontal" fullWidth={true} />

        <div className="ad-slot ad-bottom bg-muted/30 h-24 flex items-center justify-center text-muted-foreground text-sm mt-12 rounded">
          Ad Space - Bottom Banner
        </div>
      </div>
    </div>
  )
}
