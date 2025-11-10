import Link from "next/link"
import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface CalculatorCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export function CalculatorCard({ title, description, icon: Icon, href }: CalculatorCardProps) {
  return (
    <Link href={href} className="group">
      <Card className="p-6 h-full hover:shadow-lg transition-all hover:border-primary/50 hover:-translate-y-1">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Icon className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </Card>
    </Link>
  )
}
