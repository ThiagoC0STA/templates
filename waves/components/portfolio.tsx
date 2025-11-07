import { Pill } from "./pill"
import Link from "next/link"

const companies = [
  {
    name: "TechFlow",
    industry: "AI / ML",
    description: "Enterprise AI platform automating complex workflows",
  },
  {
    name: "DataVault",
    industry: "Cybersecurity",
    description: "Zero-trust data protection for distributed teams",
  },
  {
    name: "CloudScale",
    industry: "Infrastructure",
    description: "Next-gen cloud infrastructure for startups",
  },
  {
    name: "FinanceX",
    industry: "Fintech",
    description: "Digital banking platform for emerging markets",
  },
  {
    name: "BioSync",
    industry: "Healthcare",
    description: "Precision medicine powered by genomics",
  },
  {
    name: "EnergyHub",
    industry: "Climate Tech",
    description: "Smart grid optimization for renewable energy",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 container">
      <div className="mb-16">
        <Pill>PORTFOLIO</Pill>
      </div>
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-sentient leading-tight">Companies we've backed</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <Link
            key={company.name}
            href="#"
            className="group border border-border rounded-lg p-8 hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-sentient">{company.name}</h3>
              <span className="text-xs font-mono text-primary uppercase">{company.industry}</span>
            </div>
            <p className="font-mono text-sm text-foreground/70 mb-4">{company.description}</p>
            <div className="text-primary text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              Learn more →
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
