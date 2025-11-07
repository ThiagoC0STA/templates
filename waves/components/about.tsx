import { Pill } from "./pill"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 container">
      <div className="mb-16">
        <Pill>WHO WE ARE</Pill>
      </div>
      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-sentient leading-tight mb-8">
            Pioneering investment strategies for the modern era
          </h2>
          <p className="font-mono text-sm md:text-base text-foreground/70 leading-relaxed mb-6">
            Skal Ventures is a research-driven investment firm that identifies and partners with transformative
            companies. We combine data analytics, market intelligence, and strategic foresight to deliver exceptional
            returns.
          </p>
          <p className="font-mono text-sm md:text-base text-foreground/70 leading-relaxed">
            Our team of experienced investors and analysts work collaboratively to evaluate opportunities, mitigate
            risks, and build enduring value for our portfolio companies and stakeholders.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-2xl font-sentient mb-3">Expertise</h3>
            <p className="font-mono text-sm text-foreground/60">
              With over 50 years of combined experience across venture capital, private equity, and strategic
              investments.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-sentient mb-3">Network</h3>
            <p className="font-mono text-sm text-foreground/60">
              Connected with industry leaders, entrepreneurs, and emerging innovators across global markets.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-sentient mb-3">Performance</h3>
            <p className="font-mono text-sm text-foreground/60">
              Consistent track record of outperforming market benchmarks with strategic diversification.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
