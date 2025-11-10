"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AdSenseAd } from "@/components/adsense-ad"

export default function MortgageCalculatorClient() {
  const [homePrice, setHomePrice] = useState("300000")
  const [downPayment, setDownPayment] = useState("60000")
  const [loanTerm, setLoanTerm] = useState("30")
  const [interestRate, setInterestRate] = useState("6.5")
  const [propertyTax, setPropertyTax] = useState("3000")
  const [homeInsurance, setHomeInsurance] = useState("1200")
  const [pmi, setPmi] = useState("0")

  const [showAmortization, setShowAmortization] = useState(false)

  const calculateMortgage = () => {
    const price = Number.parseFloat(homePrice) || 0
    const down = Number.parseFloat(downPayment) || 0
    const principal = price - down
    const rate = (Number.parseFloat(interestRate) || 0) / 100 / 12
    const payments = (Number.parseFloat(loanTerm) || 0) * 12
    const tax = (Number.parseFloat(propertyTax) || 0) / 12
    const insurance = (Number.parseFloat(homeInsurance) || 0) / 12
    const pmiMonthly = (Number.parseFloat(pmi) || 0) / 12

    let monthlyPayment = 0
    if (rate > 0 && payments > 0) {
      monthlyPayment = (principal * (rate * Math.pow(1 + rate, payments))) / (Math.pow(1 + rate, payments) - 1)
    }

    const totalMonthly = monthlyPayment + tax + insurance + pmiMonthly
    const totalPaid = monthlyPayment * payments + tax * payments + insurance * payments + pmiMonthly * payments
    const totalInterest = monthlyPayment * payments - principal

    return {
      monthlyPayment: isNaN(monthlyPayment) ? 0 : monthlyPayment,
      principalAndInterest: isNaN(monthlyPayment) ? 0 : monthlyPayment,
      propertyTaxMonthly: tax,
      insuranceMonthly: insurance,
      pmiMonthly,
      totalMonthly: isNaN(totalMonthly) ? 0 : totalMonthly,
      totalInterest: isNaN(totalInterest) ? 0 : totalInterest,
      totalPaid: isNaN(totalPaid) ? 0 : totalPaid,
      loanAmount: principal,
      rate,
      payments,
    }
  }

  const generateAmortizationSchedule = () => {
    const results = calculateMortgage()
    const schedule = []
    let balance = results.loanAmount
    const monthlyRate = results.rate
    const monthlyPayment = results.principalAndInterest

    for (let i = 1; i <= Math.min(results.payments, 360); i++) {
      const interestPayment = balance * monthlyRate
      const principalPayment = monthlyPayment - interestPayment
      balance -= principalPayment

      if (i % 12 === 0 || i === 1) {
        schedule.push({
          month: i,
          payment: monthlyPayment,
          principal: principalPayment,
          interest: interestPayment,
          balance: Math.max(0, balance),
        })
      }
    }

    return schedule
  }

  const results = calculateMortgage()
  const downPaymentPercent = ((Number.parseFloat(downPayment) || 0) / (Number.parseFloat(homePrice) || 1)) * 100

  const totalComponents =
    results.principalAndInterest + results.propertyTaxMonthly + results.insuranceMonthly + results.pmiMonthly
  const piPercent = totalComponents > 0 ? (results.principalAndInterest / totalComponents) * 100 : 0
  const taxPercent = totalComponents > 0 ? (results.propertyTaxMonthly / totalComponents) * 100 : 0
  const insPercent = totalComponents > 0 ? (results.insuranceMonthly / totalComponents) * 100 : 0
  const pmiPercent = totalComponents > 0 ? (results.pmiMonthly / totalComponents) * 100 : 0

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Mortgage Calculator</h1>
          <p className="text-muted-foreground">
            Calculate your monthly mortgage payment including principal, interest, taxes, insurance, and more.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Input Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Loan Details</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="homePrice">Home Price</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="homePrice"
                      type="number"
                      value={homePrice}
                      onChange={(e) => setHomePrice(e.target.value)}
                      className="pl-7"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="downPayment">Down Payment</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="downPayment"
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(e.target.value)}
                      className="pl-7"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{downPaymentPercent.toFixed(1)}% of home price</p>
                </div>

                <div>
                  <Label htmlFor="loanTerm">Loan Term (years)</Label>
                  <Input id="loanTerm" type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
                </div>

                <div>
                  <Label htmlFor="interestRate">Interest Rate (%)</Label>
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.01"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="propertyTax">Property Tax (annual)</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="propertyTax"
                      type="number"
                      value={propertyTax}
                      onChange={(e) => setPropertyTax(e.target.value)}
                      className="pl-7"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="homeInsurance">Home Insurance (annual)</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="homeInsurance"
                      type="number"
                      value={homeInsurance}
                      onChange={(e) => setHomeInsurance(e.target.value)}
                      className="pl-7"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="pmi">PMI (annual, if applicable)</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="pmi"
                      type="number"
                      value={pmi}
                      onChange={(e) => setPmi(e.target.value)}
                      className="pl-7"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 mt-6">
              <h3 className="font-semibold mb-4">Payment Breakdown</h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-primary"></div>
                    <span className="text-sm">Principal & Interest</span>
                  </div>
                  <span className="font-medium">
                    $
                    {results.principalAndInterest.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    ({piPercent.toFixed(1)}%)
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-secondary"></div>
                    <span className="text-sm">Property Tax</span>
                  </div>
                  <span className="font-medium">
                    $
                    {results.propertyTaxMonthly.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    ({taxPercent.toFixed(1)}%)
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-accent"></div>
                    <span className="text-sm">Home Insurance</span>
                  </div>
                  <span className="font-medium">
                    $
                    {results.insuranceMonthly.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    ({insPercent.toFixed(1)}%)
                  </span>
                </div>

                {results.pmiMonthly > 0 && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-muted"></div>
                      <span className="text-sm">PMI</span>
                    </div>
                    <span className="font-medium">
                      $
                      {results.pmiMonthly.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}{" "}
                      ({pmiPercent.toFixed(1)}%)
                    </span>
                  </div>
                )}
              </div>

              {/* Simple visual bar chart */}
              <div className="h-12 flex rounded overflow-hidden">
                <div
                  className="bg-primary flex items-center justify-center text-xs text-primary-foreground font-medium"
                  style={{ width: `${piPercent}%` }}
                >
                  {piPercent > 10 && `${piPercent.toFixed(0)}%`}
                </div>
                <div
                  className="bg-secondary flex items-center justify-center text-xs text-secondary-foreground font-medium"
                  style={{ width: `${taxPercent}%` }}
                >
                  {taxPercent > 10 && `${taxPercent.toFixed(0)}%`}
                </div>
                <div
                  className="bg-accent flex items-center justify-center text-xs text-accent-foreground font-medium"
                  style={{ width: `${insPercent}%` }}
                >
                  {insPercent > 10 && `${insPercent.toFixed(0)}%`}
                </div>
                {pmiPercent > 0 && (
                  <div
                    className="bg-muted flex items-center justify-center text-xs font-medium"
                    style={{ width: `${pmiPercent}%` }}
                  >
                    {pmiPercent > 10 && `${pmiPercent.toFixed(0)}%`}
                  </div>
                )}
              </div>
            </Card>

            <Card className="p-6 mt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Amortization Schedule</h3>
                <Button variant="outline" size="sm" onClick={() => setShowAmortization(!showAmortization)}>
                  {showAmortization ? "Hide" : "Show Full Amortization Table"}
                </Button>
              </div>

              {showAmortization && (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 px-3">Year</th>
                        <th className="text-right py-2 px-3">Payment</th>
                        <th className="text-right py-2 px-3">Principal</th>
                        <th className="text-right py-2 px-3">Interest</th>
                        <th className="text-right py-2 px-3">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {generateAmortizationSchedule().map((row) => (
                        <tr key={row.month} className="border-b">
                          <td className="py-2 px-3">{Math.ceil(row.month / 12)}</td>
                          <td className="text-right py-2 px-3">
                            $
                            {row.payment.toLocaleString("en-US", {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            })}
                          </td>
                          <td className="text-right py-2 px-3">
                            $
                            {row.principal.toLocaleString("en-US", {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            })}
                          </td>
                          <td className="text-right py-2 px-3">
                            $
                            {row.interest.toLocaleString("en-US", {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            })}
                          </td>
                          <td className="text-right py-2 px-3">
                            $
                            {row.balance.toLocaleString("en-US", {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Card>
          </div>

          {/* Sidebar - Results and Ads */}
          <div className="space-y-6">
            <Card className="p-6 bg-primary text-primary-foreground">
              <h2 className="text-sm font-medium mb-2">Monthly Payment</h2>
              <p className="text-4xl font-bold">
                ${results.totalMonthly.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Loan Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Loan Amount</span>
                  <span className="font-medium">
                    $
                    {results.loanAmount.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Total Interest</span>
                  <span className="font-medium">
                    $
                    {results.totalInterest.toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Total Paid</span>
                  <span className="font-medium">
                    ${results.totalPaid.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
            </Card>

            <AdSenseAd adSlot="1234567891" format="vertical" fullWidth={true} />
          </div>
        </div>

        <Card className="mt-12 p-8">
          <h2 className="text-2xl font-semibold mb-4">How This Calculator Works</h2>
          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
            <p>
              This mortgage calculator uses the standard amortization formula to calculate your monthly payment. The
              formula takes into account your loan amount (home price minus down payment), interest rate, and loan term
              to determine your principal and interest payment.
            </p>
            <p className="mt-3">
              Additional costs like property taxes, homeowners insurance, and PMI are added to give you the total
              monthly payment. These estimates are based on typical U.S. market rates and may vary by location and
              lender.
            </p>
          </div>
        </Card>

        <Card className="mt-8 p-8">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is included in my monthly mortgage payment?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Your monthly mortgage payment typically includes four components, often called PITI: Principal (the
                amount you borrowed), Interest (the cost of borrowing), Taxes (property taxes), and Insurance
                (homeowners insurance). If your down payment is less than 20%, you may also pay PMI (Private Mortgage
                Insurance).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How much should my down payment be?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                While 20% is the traditional benchmark to avoid PMI, many lenders offer loans with down payments as low
                as 3-5%. A larger down payment reduces your loan amount, monthly payments, and total interest paid over
                the life of the loan. However, it's important to balance this with maintaining emergency savings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What is PMI and when can I remove it?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                PMI (Private Mortgage Insurance) protects the lender if you default on your loan. It's typically
                required when your down payment is less than 20%. You can usually request PMI removal once you reach 20%
                equity in your home, and it must be automatically terminated at 22% equity.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Should I choose a 15-year or 30-year mortgage?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                A 15-year mortgage has higher monthly payments but you'll pay significantly less interest over the life
                of the loan and build equity faster. A 30-year mortgage has lower monthly payments, making it more
                affordable month-to-month, but you'll pay more in total interest. Consider your budget, financial goals,
                and how long you plan to stay in the home.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How accurate is this calculator?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                This calculator provides accurate estimates based on the information you provide and standard U.S.
                mortgage formulas. However, actual payments may vary based on your specific lender, location, credit
                score, and other factors. Use this as a planning tool, and consult with a mortgage lender for exact
                figures.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </main>

      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>© 2025 LoanSense. For informational purposes only. Not financial advice.</p>
        </div>
      </footer>
    </div>
  )
}
