import { Pill } from "./pill"
import Link from "next/link"

const insights = [
  {
    title: "The Future of AI in Enterprise",
    date: "November 2025",
    category: "Research",
    excerpt: "Exploring how AI is transforming enterprise operations and creating new investment opportunities.",
  },
  {
    title: "Market Trends: Climate Tech Acceleration",
    date: "October 2025",
    category: "Analysis",
    excerpt:
      "Climate tech companies are attracting unprecedented capital. We break down the drivers and opportunities.",
  },
  {
    title: "Navigating Market Volatility",
    date: "September 2025",
    category: "Strategy",
    excerpt: "Our investment thesis on positioning portfolios for sustainable growth in uncertain times.",
  },
]

export function Insights() {
  return (
    <section id="insights" className="py-20 md:py-32 container bg-foreground/5 -mx-container px-container">
      <div className="mb-16">
        <Pill>INSIGHTS</Pill>
      </div>
      <h2 className="text-4xl md:text-5xl font-sentient leading-tight mb-16 max-w-3xl">
        Latest investment insights and market analysis
      </h2>
      <div className="space-y-6">
        {insights.map((insight) => (
          <Link
            key={insight.title}
            href="#"
            className="group border-b border-border pb-8 hover:border-primary/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
              <h3 className="text-xl md:text-2xl font-sentient group-hover:text-primary transition-colors">
                {insight.title}
              </h3>
              <span className="text-xs font-mono text-primary uppercase whitespace-nowrap">{insight.category}</span>
            </div>
            <p className="font-mono text-sm text-foreground/70 mb-4">{insight.excerpt}</p>
            <time className="text-xs font-mono text-foreground/50">{insight.date}</time>
          </Link>
        ))}
      </div>
    </section>
  )
}
