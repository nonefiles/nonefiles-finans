"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, TrendingUp, DollarSign } from "lucide-react"
import { AdSenseAd } from "@/components/adsense-ad"

export default function PersonalLoanCalculatorClientPage() {
  const [loanAmount, setLoanAmount] = useState("15000")
  const [interestRate, setInterestRate] = useState("8.5")
  const [loanTerm, setLoanTerm] = useState("36")

  // For reverse calculator
  const [monthlyPayment, setMonthlyPayment] = useState("472")
  const [reverseRate, setReverseRate] = useState("8.5")
  const [reverseTerm, setReverseTerm] = useState("36")

  const calculateLoan = () => {
    const principal = Number.parseFloat(loanAmount) || 0
    const rate = (Number.parseFloat(interestRate) || 0) / 100 / 12
    const payments = Number.parseFloat(loanTerm) || 0

    let monthly = 0
    if (rate > 0 && payments > 0 && principal > 0) {
      monthly = (principal * (rate * Math.pow(1 + rate, payments))) / (Math.pow(1 + rate, payments) - 1)
    }

    const totalPaid = monthly * payments
    const totalInterest = totalPaid - principal

    return {
      monthlyPayment: isNaN(monthly) ? 0 : monthly,
      totalInterest: isNaN(totalInterest) ? 0 : totalInterest,
      totalPaid: isNaN(totalPaid) ? 0 : totalPaid,
      loanAmount: principal,
    }
  }

  const calculateReverseLoan = () => {
    const payment = Number.parseFloat(monthlyPayment) || 0
    const rate = (Number.parseFloat(reverseRate) || 0) / 100 / 12
    const payments = Number.parseFloat(reverseTerm) || 0

    let principal = 0
    if (rate > 0 && payments > 0 && payment > 0) {
      principal = (payment * (Math.pow(1 + rate, payments) - 1)) / (rate * Math.pow(1 + rate, payments))
    }

    const totalPaid = payment * payments
    const totalInterest = totalPaid - principal

    return {
      loanAmount: isNaN(principal) ? 0 : principal,
      totalInterest: isNaN(totalInterest) ? 0 : totalInterest,
      totalPaid: isNaN(totalPaid) ? 0 : totalPaid,
      monthlyPayment: payment,
    }
  }

  const forwardResults = calculateLoan()
  const reverseResults = calculateReverseLoan()

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-balance">Personal Loan Calculator</h1>
          <p className="text-muted-foreground leading-relaxed">
            Calculate monthly payments for personal loans or determine how much you can borrow based on your budget.
          </p>
        </div>

        <Tabs defaultValue="standard" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="standard">Calculate Payment</TabsTrigger>
            <TabsTrigger value="reverse">Calculate Loan Amount</TabsTrigger>
          </TabsList>

          {/* Standard Calculator */}
          <TabsContent value="standard">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <div>
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Loan Details
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="loanAmount">Loan Amount</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          id="loanAmount"
                          type="number"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(e.target.value)}
                          className="pl-7"
                        />
                      </div>
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
                      <Label htmlFor="loanTerm">Loan Term (months)</Label>
                      <Input
                        id="loanTerm"
                        type="number"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(e.target.value)}
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        {(Number.parseFloat(loanTerm) / 12).toFixed(1)} years
                      </p>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="text-sm font-medium mb-3 text-muted-foreground">Common Loan Terms</h3>
                      <div className="flex flex-wrap gap-2">
                        {[24, 36, 48, 60, 72].map((term) => (
                          <button
                            key={term}
                            onClick={() => setLoanTerm(term.toString())}
                            className="px-3 py-1 text-sm rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            {term} months
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <Card className="p-6 bg-primary text-primary-foreground">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5" />
                    <h2 className="text-lg font-medium">Monthly Payment</h2>
                  </div>
                  <p className="text-4xl font-bold">
                    $
                    {forwardResults.monthlyPayment.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Loan Summary
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Loan Amount</span>
                      <span className="font-medium">
                        $
                        {forwardResults.loanAmount.toLocaleString("en-US", {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Total Interest Paid</span>
                      <span className="font-medium">
                        $
                        {forwardResults.totalInterest.toLocaleString("en-US", {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Total Amount Paid</span>
                      <span className="font-medium">
                        $
                        {forwardResults.totalPaid.toLocaleString("en-US", {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </span>
                    </div>
                  </div>
                </Card>

                {/* Ad Placeholder */}
                <AdSenseAd adSlot="1234567892" format="rectangle" />
              </div>
            </div>
          </TabsContent>

          {/* Reverse Calculator */}
          <TabsContent value="reverse">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <div>
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Payment Details
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="monthlyPayment">Monthly Payment Budget</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          id="monthlyPayment"
                          type="number"
                          value={monthlyPayment}
                          onChange={(e) => setMonthlyPayment(e.target.value)}
                          className="pl-7"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="reverseRate">Interest Rate (%)</Label>
                      <Input
                        id="reverseRate"
                        type="number"
                        step="0.01"
                        value={reverseRate}
                        onChange={(e) => setReverseRate(e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="reverseTerm">Loan Term (months)</Label>
                      <Input
                        id="reverseTerm"
                        type="number"
                        value={reverseTerm}
                        onChange={(e) => setReverseTerm(e.target.value)}
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        {(Number.parseFloat(reverseTerm) / 12).toFixed(1)} years
                      </p>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="text-sm font-medium mb-3 text-muted-foreground">Common Loan Terms</h3>
                      <div className="flex flex-wrap gap-2">
                        {[24, 36, 48, 60, 72].map((term) => (
                          <button
                            key={term}
                            onClick={() => setReverseTerm(term.toString())}
                            className="px-3 py-1 text-sm rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            {term} months
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <Card className="p-6 bg-secondary text-secondary-foreground">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5" />
                    <h2 className="text-lg font-medium">Maximum Loan Amount</h2>
                  </div>
                  <p className="text-4xl font-bold">
                    $
                    {reverseResults.loanAmount.toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Loan Summary
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">You Can Borrow</span>
                      <span className="font-medium">
                        $
                        {reverseResults.loanAmount.toLocaleString("en-US", {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Total Interest Paid</span>
                      <span className="font-medium">
                        $
                        {reverseResults.totalInterest.toLocaleString("en-US", {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Total Amount Paid</span>
                      <span className="font-medium">
                        $
                        {reverseResults.totalPaid.toLocaleString("en-US", {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </span>
                    </div>
                  </div>
                </Card>

                {/* Ad Placeholder */}
                <AdSenseAd adSlot="1234567892" format="rectangle" />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Informational Section */}
        <Card className="mt-12 p-8">
          <h2 className="text-2xl font-semibold mb-4">Personal Loan Basics</h2>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-medium text-foreground mb-2">What Is a Personal Loan?</h3>
              <p>
                A personal loan is an unsecured loan that can be used for various purposes like debt consolidation, home
                improvements, or major purchases. Unlike mortgages or auto loans, they're not tied to a specific asset.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">Interest Rates</h3>
              <p>
                Personal loan rates typically range from 6% to 36%, depending on your credit score and lender. Better
                credit scores qualify for lower rates. Some lenders offer discounts for autopay or existing customers.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">Loan Terms</h3>
              <p>
                Most personal loans have terms between 2-7 years. Shorter terms mean higher monthly payments but less
                interest paid overall. Longer terms reduce monthly payments but increase total interest costs.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">When to Use</h3>
              <p>
                Personal loans work well for consolidating high-interest debt, financing home improvements, or covering
                major expenses. Avoid using them for discretionary spending or purchases you can't afford.
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
