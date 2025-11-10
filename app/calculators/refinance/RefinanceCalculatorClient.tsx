"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Calculator, TrendingUp, TrendingDown, AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function RefinanceCalculatorClient() {
  // Current loan
  const [currentBalance, setCurrentBalance] = useState("250000")
  const [currentRate, setCurrentRate] = useState("6.5")
  const [currentTerm, setCurrentTerm] = useState("360")
  const [monthsPaid, setMonthsPaid] = useState("24")

  // New loan
  const [newRate, setNewRate] = useState("5.5")
  const [newTerm, setNewTerm] = useState("360")
  const [closingCosts, setClosingCosts] = useState("3500")
  const [cashOut, setCashOut] = useState("0")

  const calculateMortgagePayment = (principal: number, rate: number, months: number) => {
    if (rate === 0 || months === 0 || principal === 0) return 0
    const monthlyRate = rate / 12
    return (principal * (monthlyRate * Math.pow(1 + monthlyRate, months))) / (Math.pow(1 + monthlyRate, months) - 1)
  }

  const calculateRefinance = () => {
    const balance = Number.parseFloat(currentBalance) || 0
    const curRate = (Number.parseFloat(currentRate) || 0) / 100
    const curMonths = Number.parseFloat(currentTerm) || 0
    const paid = Number.parseFloat(monthsPaid) || 0
    const nRate = (Number.parseFloat(newRate) || 0) / 100
    const nMonths = Number.parseFloat(newTerm) || 0
    const costs = Number.parseFloat(closingCosts) || 0
    const cash = Number.parseFloat(cashOut) || 0

    // Current loan calculations
    const currentMonthly = calculateMortgagePayment(balance, curRate, curMonths - paid)
    const remainingPayments = curMonths - paid
    const currentTotalPaid = currentMonthly * remainingPayments

    // New loan calculations
    const newLoanAmount = balance + costs + cash
    const newMonthly = calculateMortgagePayment(newLoanAmount, nRate, nMonths)
    const newTotalPaid = newMonthly * nMonths

    // Savings calculations
    const monthlySavings = currentMonthly - newMonthly
    const lifetimeSavings = currentTotalPaid - newTotalPaid
    const breakEvenMonths = monthlySavings > 0 ? costs / monthlySavings : 0

    return {
      currentMonthly: isNaN(currentMonthly) ? 0 : currentMonthly,
      currentTotalPaid: isNaN(currentTotalPaid) ? 0 : currentTotalPaid,
      newMonthly: isNaN(newMonthly) ? 0 : newMonthly,
      newTotalPaid: isNaN(newTotalPaid) ? 0 : newTotalPaid,
      newLoanAmount,
      monthlySavings: isNaN(monthlySavings) ? 0 : monthlySavings,
      lifetimeSavings: isNaN(lifetimeSavings) ? 0 : lifetimeSavings,
      breakEvenMonths: isNaN(breakEvenMonths) ? 0 : breakEvenMonths,
      isWorthIt: monthlySavings > 0 && lifetimeSavings > 0,
    }
  }

  const results = calculateRefinance()

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-balance">Refinance Calculator</h1>
          <p className="text-muted-foreground leading-relaxed">
            Calculate if refinancing your mortgage will save you money and when you'll break even on closing costs.
          </p>
        </div>

        {/* Quick Recommendation */}
        {results.currentMonthly > 0 && results.newMonthly > 0 && (
          <Alert className={`mb-8 ${results.isWorthIt ? "border-secondary bg-secondary/10" : "border-muted"}`}>
            {results.isWorthIt ? (
              <CheckCircle className="h-4 w-4 text-secondary" />
            ) : (
              <AlertCircle className="h-4 w-4" />
            )}
            <AlertDescription>
              {results.isWorthIt ? (
                <span>
                  <strong className="text-secondary">Refinancing may be worth it!</strong> You'll save $
                  {Math.abs(results.monthlySavings).toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{" "}
                  per month and break even in {Math.ceil(results.breakEvenMonths)} months.
                </span>
              ) : (
                <span>
                  <strong>Refinancing may not save money.</strong> Your monthly payment would{" "}
                  {results.monthlySavings < 0 ? "increase" : "stay similar"}.
                </span>
              )}
            </AlertDescription>
          </Alert>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="space-y-6">
            {/* Current Loan */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Current Loan
              </h2>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="currentBalance">Current Loan Balance</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="currentBalance"
                      type="number"
                      value={currentBalance}
                      onChange={(e) => setCurrentBalance(e.target.value)}
                      className="pl-7"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="currentRate">Current Interest Rate (%)</Label>
                  <Input
                    id="currentRate"
                    type="number"
                    step="0.01"
                    value={currentRate}
                    onChange={(e) => setCurrentRate(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="currentTerm">Loan Term (months)</Label>
                    <Input
                      id="currentTerm"
                      type="number"
                      value={currentTerm}
                      onChange={(e) => setCurrentTerm(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="monthsPaid">Months Paid</Label>
                    <Input
                      id="monthsPaid"
                      type="number"
                      value={monthsPaid}
                      onChange={(e) => setMonthsPaid(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* New Loan */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">New Loan Terms</h2>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="newRate">New Interest Rate (%)</Label>
                  <Input
                    id="newRate"
                    type="number"
                    step="0.01"
                    value={newRate}
                    onChange={(e) => setNewRate(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="newTerm">New Loan Term (months)</Label>
                  <Input id="newTerm" type="number" value={newTerm} onChange={(e) => setNewTerm(e.target.value)} />
                  <p className="text-sm text-muted-foreground mt-1">
                    {(Number.parseFloat(newTerm) / 12).toFixed(0)} years
                  </p>
                </div>

                <div>
                  <Label htmlFor="closingCosts">Closing Costs</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="closingCosts"
                      type="number"
                      value={closingCosts}
                      onChange={(e) => setClosingCosts(e.target.value)}
                      className="pl-7"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Typically 2-5% of loan amount</p>
                </div>

                <div>
                  <Label htmlFor="cashOut">Cash-Out Amount</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="cashOut"
                      type="number"
                      value={cashOut}
                      onChange={(e) => setCashOut(e.target.value)}
                      className="pl-7"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Optional: Leave at $0 for rate & term refi</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Monthly Payment Comparison */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Monthly Payment Comparison</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-muted-foreground">Current Payment</span>
                    <span className="text-lg font-semibold">
                      $
                      {results.currentMonthly.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-muted-foreground" style={{ width: "100%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-muted-foreground">New Payment</span>
                    <span className="text-lg font-semibold">
                      $
                      {results.newMonthly.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${results.monthlySavings > 0 ? "bg-secondary" : "bg-destructive"}`}
                      style={{
                        width: `${results.currentMonthly > 0 ? (results.newMonthly / results.currentMonthly) * 100 : 0}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="pt-3 border-t flex items-center justify-between">
                  <span className="font-medium">Monthly {results.monthlySavings > 0 ? "Savings" : "Increase"}</span>
                  <div className="flex items-center gap-2">
                    {results.monthlySavings > 0 ? (
                      <TrendingDown className="w-4 h-4 text-secondary" />
                    ) : (
                      <TrendingUp className="w-4 h-4 text-destructive" />
                    )}
                    <span
                      className={`text-xl font-bold ${results.monthlySavings > 0 ? "text-secondary" : "text-destructive"}`}
                    >
                      $
                      {Math.abs(results.monthlySavings).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Break-Even Analysis */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Break-Even Analysis
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Closing Costs</span>
                  <span className="font-medium">
                    $
                    {Number.parseFloat(closingCosts).toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Monthly Savings</span>
                  <span className="font-medium">
                    $
                    {Math.abs(results.monthlySavings).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="font-medium">Break-Even Time</span>
                  <span className="text-lg font-semibold">
                    {results.breakEvenMonths > 0 ? `${Math.ceil(results.breakEvenMonths)} months` : "N/A"}
                  </span>
                </div>
              </div>
            </Card>

            {/* Lifetime Savings */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Lifetime Comparison</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Current Remaining Payments</span>
                  <span className="font-medium">
                    $
                    {results.currentTotalPaid.toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">New Total Payments</span>
                  <span className="font-medium">
                    $
                    {results.newTotalPaid.toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="font-medium">Lifetime {results.lifetimeSavings > 0 ? "Savings" : "Cost"}</span>
                  <span
                    className={`text-lg font-semibold ${results.lifetimeSavings > 0 ? "text-secondary" : "text-destructive"}`}
                  >
                    $
                    {Math.abs(results.lifetimeSavings).toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
              </div>
            </Card>

            {/* Ad Placeholder */}
            <div className="p-6 border-2 border-dashed border-border rounded-lg text-center text-sm text-muted-foreground">
              Ad Space - 300x250
            </div>
          </div>
        </div>

        {/* Informational Section */}
        <Card className="mt-12 p-8">
          <h2 className="text-2xl font-semibold mb-4">When Should You Refinance?</h2>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-medium text-foreground mb-2">Lower Interest Rates</h3>
              <p>
                If current rates are at least 0.75-1% lower than your existing rate, refinancing could save you
                significant money over the life of your loan. Even smaller rate reductions can be beneficial if you plan
                to stay in your home long enough to break even.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">Shorten Your Loan Term</h3>
              <p>
                Refinancing to a shorter term (like 30 to 15 years) helps you build equity faster and save on interest,
                though your monthly payment may increase. This works well if your income has grown since you bought your
                home.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">Cash-Out Refinance</h3>
              <p>
                If you have significant home equity, a cash-out refinance lets you borrow against it for home
                improvements, debt consolidation, or other expenses. The interest is typically lower than credit cards
                or personal loans.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">Consider Closing Costs</h3>
              <p>
                Refinancing typically costs 2-5% of your loan amount. Calculate your break-even point to ensure you'll
                save money before selling or moving. If you plan to stay less than the break-even period, refinancing
                may not be worth it.
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
