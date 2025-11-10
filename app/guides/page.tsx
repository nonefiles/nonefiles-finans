import { SiteHeader } from "@/components/site-header"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { BookOpen, TrendingUp, Home, Car, CreditCard, DollarSign } from "lucide-react"

export const metadata = {
  title: "Financial Guides & Resources - Loan Calculator Hub",
  description:
    "Learn about mortgages, auto loans, personal loans, and refinancing with our comprehensive financial guides.",
}

export default function GuidesPage() {
  const guides = [
    {
      title: "Mortgage Guide",
      description:
        "Everything you need to know about mortgages, from first-time homebuying to understanding different loan types.",
      href: "/guides/mortgage-guide",
      icon: Home,
      topics: ["First-Time Homebuyer Tips", "Fixed vs. ARM Loans", "Understanding PMI", "Improving Your Credit Score"],
    },
    {
      title: "Auto Loan Guide",
      description: "Navigate the car buying process and learn how to get the best auto loan rates and terms.",
      href: "/guides/auto-loan-guide",
      icon: Car,
      topics: ["New vs. Used Car Financing", "Trade-In Strategies", "Dealer Financing vs. Banks", "Leasing vs. Buying"],
    },
    {
      title: "Personal Loan Guide",
      description: "Understand when to use personal loans and how to find the best rates for your situation.",
      href: "/guides/personal-loan-guide",
      icon: CreditCard,
      topics: ["Debt Consolidation", "Credit Score Impact", "Secured vs. Unsecured", "Comparing Lenders"],
    },
    {
      title: "Refinancing Guide",
      description: "Learn when refinancing makes sense and how to maximize your savings.",
      href: "/guides/refinance-guide",
      icon: TrendingUp,
      topics: ["When to Refinance", "Rate & Term vs. Cash-Out", "Closing Costs Breakdown", "Break-Even Analysis"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Financial Guides</h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Learn everything you need to make informed financial decisions. Our comprehensive guides cover mortgages,
            auto loans, personal loans, and refinancing strategies.
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          {guides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="group">
              <Card className="p-8 hover:shadow-lg transition-all hover:border-primary/50 hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <guide.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {guide.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{guide.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {guide.topics.map((topic) => (
                        <span key={topic} className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Tips Section */}
        <Card className="p-8 bg-muted/50">
          <div className="flex items-center gap-2 mb-6">
            <DollarSign className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-semibold">Quick Financial Tips</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-medium text-foreground mb-2">Check Your Credit Score</h3>
              <p>
                Your credit score significantly impacts your interest rates. Check it regularly and work to improve it
                before applying for major loans.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">Compare Multiple Offers</h3>
              <p>
                Don't accept the first loan offer. Shop around with at least 3-5 lenders to find the best rates and
                terms for your situation.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">Understand Total Cost</h3>
              <p>
                Look beyond monthly payments. Consider the total amount you'll pay over the life of the loan, including
                interest and fees.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">Build an Emergency Fund</h3>
              <p>
                Before taking on new debt, ensure you have 3-6 months of expenses saved. This prevents missed payments
                during financial emergencies.
              </p>
            </div>
          </div>
        </Card>

        {/* Ad Placeholder */}
        <div className="mt-12 p-6 border-2 border-dashed border-border rounded-lg text-center text-muted-foreground">
          Ad Space - 728x90 / Responsive
        </div>
      </main>
    </div>
  )
}
