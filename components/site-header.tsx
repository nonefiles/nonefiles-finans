import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl hover:text-primary transition-colors">
          LoanSense
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/calculators/mortgage" className="text-sm font-medium hover:text-primary transition-colors">
            Mortgage Calculator
          </Link>
          <Link href="/calculators/auto-loan" className="text-sm font-medium hover:text-primary transition-colors">
            Auto Loan
          </Link>
          <Link href="/calculators/refinance" className="text-sm font-medium hover:text-primary transition-colors">
            Refinance
          </Link>
          <Link href="/guides" className="text-sm font-medium hover:text-primary transition-colors">
            Guides
          </Link>
        </nav>
      </div>
    </header>
  )
}
