import { SiteHeader } from "@/components/site-header"
import { CalculatorCard } from "@/components/calculator-card"
import { AdSenseAd } from "@/components/adsense-ad"
import { Home, Car, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  const calculators = [
    {
      title: "Mortgage Calculator",
      description: "Estimate your monthly mortgage payments with taxes, insurance, and PMI.",
      icon: Home,
      href: "/calculators/mortgage",
    },
    {
      title: "Auto Loan Calculator",
      description: "Calculate car loan payments and see how interest affects your total cost.",
      icon: Car,
      href: "/calculators/auto-loan",
    },
    {
      title: "Refinance Calculator",
      description: "Find out if refinancing will save you money with break-even analysis.",
      icon: RefreshCw,
      href: "/calculators/refinance",
    },
  ]

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <AdSenseAd adSlot="1234567920" format="horizontal" fullWidth={true} />
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Mortgage Calculator — Estimate Monthly Payments
          </h1>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Fast, accurate, no signup, U.S. market formulas.
          </p>
          <Button size="lg" asChild>
            <Link href="/calculators/mortgage">Start Calculating</Link>
          </Button>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Calculator Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {calculators.map((calc) => (
              <CalculatorCard key={calc.href} {...calc} />
            ))}
          </div>

          <div className="mb-12">
            <AdSenseAd adSlot="1234567921" format="rectangle" />
          </div>

          {/* Info Section */}
          <div className="bg-background border rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Why Use Our Calculators?</h2>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="font-medium text-foreground mb-2">Always Free</h3>
                <p>All calculators are 100% free to use with no hidden fees or registration required.</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Instant Results</h3>
                <p>Get accurate calculations in seconds. No waiting, no complicated formulas to figure out.</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Easy to Understand</h3>
                <p>Simple explanations and breakdowns help you understand where your money goes.</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Mobile Friendly</h3>
                <p>Calculate on any device with the same great experience.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>© 2025 LoanSense. For informational purposes only. Not financial advice.</p>
        </div>
      </footer>

      <div className="ad-slot ad-sticky-mobile fixed bottom-0 left-0 right-0 bg-background border-t md:hidden z-40">
        <AdSenseAd adSlot="1234567922" format="horizontal" fullWidth={true} />
      </div>
    </div>
  )
}
