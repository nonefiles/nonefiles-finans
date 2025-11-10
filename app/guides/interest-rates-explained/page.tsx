import Link from "next/link"
import { Calculator, Home, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AdSenseAd } from "@/components/adsense-ad"

export const metadata = {
  title: "Mortgage Interest Rates Explained (With Chart) | LoanSense",
  description:
    "Understand how mortgage interest rates work, what factors affect rates, and how to get the best rate for your home loan in 2025.",
}

export default function InterestRatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <AdSenseAd adSlot="1234567907" format="horizontal" fullWidth={true} />

        <article className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Mortgage Interest Rates Explained (With Chart)</h1>

          <p className="text-lg text-muted-foreground mb-8">
            Mortgage interest rates determine the cost of borrowing money to purchase a home. Understanding rate
            factors, types, and timing helps borrowers secure favorable terms and save thousands over the loan term.
          </p>

          <Card className="my-8 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Calculator className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold m-0">Try Our Free Mortgage Calculator</h3>
              </div>
              <p className="mb-4 text-muted-foreground">
                See how different interest rates affect your monthly payment and total cost.
              </p>
              <Link href="/calculators/mortgage">
                <Button size="lg" className="w-full sm:w-auto">
                  Calculate Payment Impact
                </Button>
              </Link>
            </CardContent>
          </Card>

          <nav className="bg-muted/50 p-6 rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-3">Table of Contents</h2>
            <ul className="space-y-2 list-none pl-0">
              <li>
                <a href="#what-are" className="text-primary hover:underline">
                  What Are Mortgage Rates
                </a>
              </li>
              <li>
                <a href="#how-determined" className="text-primary hover:underline">
                  How Rates Are Determined
                </a>
              </li>
              <li>
                <a href="#types" className="text-primary hover:underline">
                  Types of Interest Rates
                </a>
              </li>
              <li>
                <a href="#factors" className="text-primary hover:underline">
                  Factors Affecting Your Rate
                </a>
              </li>
              <li>
                <a href="#getting-best" className="text-primary hover:underline">
                  Getting the Best Rate
                </a>
              </li>
              <li>
                <a href="#apr-vs-rate" className="text-primary hover:underline">
                  APR vs Interest Rate
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </nav>

          <h2 id="what-are" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            What Are Mortgage Rates
          </h2>

          <p>
            Mortgage interest rate represents the annual cost of borrowing expressed as a percentage of the loan amount.
            Lenders charge interest as compensation for lending money and assuming risk that borrowers may default.
          </p>

          <p>
            Rates directly impact monthly payments and total interest paid over the loan term. A difference of just 0.5%
            on a $300,000 loan costs approximately $35,000 more in interest over 30 years.
          </p>

          <AdSenseAd adSlot="1234567908" format="rectangle" />

          <h2 id="how-determined" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            How Rates Are Determined
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Federal Reserve Policy</h3>
          <p>
            The Federal Reserve sets the federal funds rate, which influences short-term interest rates throughout the
            economy. While the Fed does not directly set mortgage rates, its policy decisions significantly impact them.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">10-Year Treasury Yield</h3>
          <p>
            Mortgage rates closely track the 10-year Treasury bond yield. When Treasury yields rise, mortgage rates
            typically follow. Investors compare mortgage-backed securities returns to Treasury bonds when deciding where
            to invest.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Economic Conditions</h3>
          <p>
            Inflation expectations, employment data, GDP growth, and economic uncertainty all affect mortgage rates.
            Strong economic growth typically leads to higher rates as demand for credit increases.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Housing Market Conditions</h3>
          <p>
            Supply and demand in the housing market, foreclosure rates, and mortgage delinquency levels influence lender
            risk assessment and rate pricing.
          </p>

          <h2 id="types" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Types of Interest Rates
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Fixed-Rate Mortgages</h3>
          <p>
            Fixed rates remain constant throughout the entire loan term. Borrowers have predictable payments unaffected
            by market fluctuations. Most popular terms are 15-year and 30-year fixed mortgages.
          </p>

          <p>
            Fixed rates provide stability and protection against rising rates. The tradeoff is slightly higher initial
            rates compared to adjustable-rate mortgages.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Adjustable-Rate Mortgages (ARMs)</h3>
          <p>
            ARM rates start lower than fixed rates but adjust periodically based on market indexes. Common structures
            include 5/1, 7/1, and 10/1 ARMs where the first number represents years of fixed rate before adjustments
            begin.
          </p>

          <p>
            ARMs include rate caps limiting how much rates can increase per adjustment period and over the loan life.
            Suitable for borrowers planning to move or refinance before adjustment period begins.
          </p>

          <h2 id="factors" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Factors Affecting Your Rate
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-3 font-semibold">Factor</th>
                  <th className="text-left p-3 font-semibold">Impact on Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-3">Credit Score</td>
                  <td className="p-3">Higher scores receive lower rates. 740+ gets best pricing.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Down Payment</td>
                  <td className="p-3">20%+ down typically qualifies for better rates.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Loan Type</td>
                  <td className="p-3">Conventional often better than FHA for strong credit.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Loan Term</td>
                  <td className="p-3">15-year rates typically 0.25-0.5% lower than 30-year.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Loan Amount</td>
                  <td className="p-3">Jumbo loans may have higher rates due to increased risk.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Property Type</td>
                  <td className="p-3">Primary residences get best rates; investment properties higher.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Debt-to-Income Ratio</td>
                  <td className="p-3">Lower DTI demonstrates stronger repayment ability.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="getting-best" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Getting the Best Rate
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Improve Credit Score</h3>
          <p>
            Focus on timely payments, reducing credit utilization below 30%, and avoiding new credit inquiries before
            applying. Even a 20-point score increase can improve rate pricing.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Increase Down Payment</h3>
          <p>
            Larger down payments reduce lender risk and often qualify for better rates. The 20% threshold eliminates PMI
            requirement and typically unlocks better pricing tiers.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Shop Multiple Lenders</h3>
          <p>
            Rates vary significantly between lenders. Obtain loan estimates from at least 3-5 lenders within a 14-day
            period to compare without damaging credit. Include banks, credit unions, and online lenders.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Consider Discount Points</h3>
          <p>
            Paying points upfront (1 point = 1% of loan amount) reduces interest rate by approximately 0.25% per point.
            Calculate break-even period to determine if buying points makes sense.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Lock Rate at Right Time</h3>
          <p>
            Rate locks guarantee rate for 30-60 days. Lock when comfortable with rate and ready to close within lock
            period. Extended locks may cost extra.
          </p>

          <h2 id="apr-vs-rate" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            APR vs Interest Rate
          </h2>

          <p>
            Interest rate represents the cost of borrowing the principal. Annual Percentage Rate (APR) includes interest
            rate plus lender fees, points, and other loan costs expressed as annual rate.
          </p>

          <p>
            APR provides more complete cost picture when comparing loans. A loan with lower interest rate but high fees
            may have higher APR than loan with slightly higher rate and lower fees.
          </p>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3">Example Comparison</h4>
            <p className="mb-2">
              <strong>Loan A:</strong> 6.5% interest rate, 6.75% APR
            </p>
            <p>
              <strong>Loan B:</strong> 6.625% interest rate, 6.70% APR
            </p>
            <p className="mt-3">
              Loan B has higher interest rate but lower APR, indicating lower overall costs due to reduced fees.
            </p>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-3">Related Resources</h3>
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
              <Link href="/guides/15-year-vs-30-year" className="text-primary hover:underline flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                15-Year vs 30-Year Mortgage
              </Link>
              <Link href="/guides/refinance-guide" className="text-primary hover:underline flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Refinance Guide
              </Link>
            </div>
          </div>

          <h2 id="faq" className="text-2xl font-bold mt-12 mb-4 text-foreground">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">What is a good mortgage rate right now?</h3>
              <p>
                Rates fluctuate daily based on economic conditions. Check current averages and compare to rates quoted
                by lenders. Focus on getting the best rate for your specific credit and financial situation rather than
                absolute number.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">How much does credit score affect mortgage rate?</h3>
              <p>
                Credit score significantly impacts rates. Difference between 760+ score and 620 score can be 1.5% to
                2.0%, costing tens of thousands in extra interest over 30 years.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Should I wait for rates to drop?</h3>
              <p>
                Timing the market is difficult. If rates are expected to decline significantly, consider adjustable-rate
                mortgage or shorter fixed period. However, delaying home purchase means missing appreciation and
                continuing rent payments.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Can I negotiate mortgage rates?</h3>
              <p>
                Yes. Lenders have some flexibility, especially if you have competing offers. Strong credit, large down
                payment, and existing banking relationships provide leverage. Focus on overall costs, not just rate.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">How often do mortgage rates change?</h3>
              <p>
                Rates change daily, sometimes multiple times per day. Significant economic news or Federal Reserve
                announcements can cause immediate rate movements. Lock rate once you find acceptable terms.
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
                    name: "What is a good mortgage rate right now?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Rates fluctuate daily based on economic conditions. Focus on getting the best rate for your specific credit and financial situation.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How much does credit score affect mortgage rate?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Credit score significantly impacts rates. Difference between 760+ and 620 can be 1.5% to 2.0%.",
                    },
                  },
                ],
              }),
            }}
          />
        </article>

        <AdSenseAd adSlot="1234567909" format="horizontal" fullWidth={true} />
      </div>
    </div>
  )
}
