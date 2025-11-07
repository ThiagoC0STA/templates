import { Pill } from "./pill"

const services = [
  {
    number: "01",
    title: "Growth Capital",
    description:
      "Series A through growth stage funding for companies scaling operations and expanding markets globally.",
  },
  {
    number: "02",
    title: "Strategic Advisory",
    description: "Executive guidance and board-level strategy to accelerate growth and navigate market challenges.",
  },
  {
    number: "03",
    title: "Market Intelligence",
    description: "Deep research and competitive analysis to identify emerging opportunities and industry trends.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 container bg-foreground/5 -mx-container px-container">
      <div className="mb-16">
        <Pill>OUR SERVICES</Pill>
      </div>
      <h2 className="text-4xl md:text-5xl font-sentient leading-tight mb-16 max-w-3xl">
        Comprehensive investment solutions tailored to your needs
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {services.map((service) => (
          <div
            key={service.number}
            className="border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
          >
            <div className="text-primary font-sentient text-5xl mb-6">{service.number}</div>
            <h3 className="text-xl font-sentient mb-4">{service.title}</h3>
            <p className="font-mono text-sm text-foreground/70 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
