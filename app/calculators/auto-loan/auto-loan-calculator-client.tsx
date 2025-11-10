"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Calculator, TrendingUp, DollarSign } from "lucide-react"
import { AdSenseAd } from "@/components/adsense-ad"

export default function AutoLoanCalculatorClient() {
  const [vehiclePrice, setVehiclePrice] = useState("35000")
  const [downPayment, setDownPayment] = useState("7000")
  const [tradeInValue, setTradeInValue] = useState("0")
  const [loanTerm, setLoanTerm] = useState("60")
  const [interestRate, setInterestRate] = useState("5.5")
  const [salesTax, setSalesTax] = useState("7")
  const [fees, setFees] = useState("500")

  const calculateAutoLoan = () => {
    const price = Number.parseFloat(vehiclePrice) || 0
    const down = Number.parseFloat(downPayment) || 0
    const tradeIn = Number.parseFloat(tradeInValue) || 0
    const tax = ((Number.parseFloat(salesTax) || 0) / 100) * price
    const feesAmount = Number.parseFloat(fees) || 0

    const totalCost = price + tax + feesAmount
    const principal = totalCost - down - tradeIn

    const rate = (Number.parseFloat(interestRate) || 0) / 100 / 12
    const payments = Number.parseFloat(loanTerm) || 0

    let monthlyPayment = 0
    if (rate > 0 && payments > 0 && principal > 0) {
      monthlyPayment = (principal * (rate * Math.pow(1 + rate, payments))) / (Math.pow(1 + rate, payments) - 1)
    }

    const totalPaid = monthlyPayment * payments
    const totalInterest = totalPaid - principal

    return {
      monthlyPayment: isNaN(monthlyPayment) ? 0 : monthlyPayment,
      loanAmount: principal > 0 ? principal : 0,
      totalInterest: isNaN(totalInterest) ? 0 : totalInterest,
      totalPaid: isNaN(totalPaid) ? 0 : totalPaid,
      totalCost,
      salesTaxAmount: tax,
    }
  }

  const results = calculateAutoLoan()
  const downPaymentPercent = ((Number.parseFloat(downPayment) || 0) / (Number.parseFloat(vehiclePrice) || 1)) * 100

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-balance">Auto Loan Calculator</h1>
          <p className="text-muted-foreground leading-relaxed">
            Calculate your monthly car payment and see the total cost of your auto loan with interest.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div>
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Vehicle & Loan Details
              </h2>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="vehiclePrice">Vehicle Price</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="vehiclePrice"
                      type="number"
                      value={vehiclePrice}
                      onChange={(e) => setVehiclePrice(e.target.value)}
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
                  <p className="text-sm text-muted-foreground mt-1">
                    {downPaymentPercent.toFixed(1)}% of vehicle price
                  </p>
                </div>

                <div>
                  <Label htmlFor="tradeInValue">Trade-In Value</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="tradeInValue"
                      type="number"
                      value={tradeInValue}
                      onChange={(e) => setTradeInValue(e.target.value)}
                      className="pl-7"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="loanTerm">Loan Term (months)</Label>
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
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-medium mb-4">Additional Costs</h3>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="salesTax">Sales Tax Rate (%)</Label>
                      <Input
                        id="salesTax"
                        type="number"
                        step="0.1"
                        value={salesTax}
                        onChange={(e) => setSalesTax(e.target.value)}
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        Tax amount: $
                        {results.salesTaxAmount.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="fees">Title, Registration & Fees</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          id="fees"
                          type="number"
                          value={fees}
                          onChange={(e) => setFees(e.target.value)}
                          className="pl-7"
                        />
                      </div>
                    </div>
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
                {results.monthlyPayment.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Cost Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Vehicle Price</span>
                  <span className="font-medium">
                    $
                    {Number.parseFloat(vehiclePrice).toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Sales Tax</span>
                  <span className="font-medium">
                    $
                    {results.salesTaxAmount.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Fees</span>
                  <span className="font-medium">
                    $
                    {Number.parseFloat(fees).toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
                <div className="border-t pt-2 flex justify-between items-center">
                  <span className="text-sm font-medium">Total Cost</span>
                  <span className="font-semibold">
                    ${results.totalCost.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
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
                    {results.loanAmount.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Interest Paid</span>
                  <span className="font-medium">
                    $
                    {results.totalInterest.toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Amount Paid</span>
                  <span className="font-medium">
                    ${results.totalPaid.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="border-t pt-2 flex justify-between items-center">
                  <span className="text-sm font-medium">Total Out of Pocket</span>
                  <span className="font-semibold">
                    $
                    {(
                      results.totalPaid +
                      Number.parseFloat(downPayment) +
                      results.salesTaxAmount +
                      Number.parseFloat(fees)
                    ).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
            </Card>

            {/* Ad Placeholder */}
            <AdSenseAd adSlot="1234567890" format="rectangle" />
          </div>
        </div>

        {/* Informational Section */}
        <Card className="mt-12 p-8">
          <h2 className="text-2xl font-semibold mb-4">Understanding Your Auto Loan</h2>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-medium text-foreground mb-2">Down Payment Impact</h3>
              <p>
                A larger down payment reduces your loan amount and monthly payments. Most experts recommend putting down
                at least 20% for a new car and 10% for a used car to avoid being underwater on your loan.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">Loan Term Length</h3>
              <p>
                Longer loan terms (60-72 months) mean lower monthly payments but more interest paid over time. Shorter
                terms (36-48 months) have higher payments but save you money on interest.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">Interest Rates</h3>
              <p>
                Your interest rate depends on your credit score, loan term, and whether the vehicle is new or used.
                Better credit scores typically qualify for lower rates, potentially saving thousands over the loan term.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">Trade-In Value</h3>
              <p>
                Trading in your current vehicle can reduce your loan amount. Research your car's value using KBB or
                Edmunds before visiting a dealership to ensure you get a fair trade-in offer.
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
