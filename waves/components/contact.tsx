import { Pill } from "./pill"
import { Button } from "./ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 container">
      <div className="max-w-2xl">
        <div className="mb-12">
          <Pill>GET IN TOUCH</Pill>
        </div>
        <h2 className="text-4xl md:text-5xl font-sentient leading-tight mb-8">
          Ready to explore investment opportunities?
        </h2>
        <p className="font-mono text-base md:text-lg text-foreground/70 mb-12 leading-relaxed">
          Whether you're an entrepreneur seeking growth capital, a founder building the next unicorn, or an investor
          looking for exceptional opportunities, we'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="sm:w-auto">[Schedule a Call]</Button>
          <button className="border border-foreground/20 text-foreground hover:border-foreground/50 transition-colors rounded-full px-8 py-3 font-mono text-sm">
            [Send an Email]
          </button>
        </div>
        <div className="mt-16 pt-16 border-t border-border grid md:grid-cols-3 gap-12">
          <div>
            <p className="text-xs font-mono text-foreground/50 uppercase mb-2">Email</p>
            <p className="font-sentient text-lg">team@skal.ventures</p>
          </div>
          <div>
            <p className="text-xs font-mono text-foreground/50 uppercase mb-2">Phone</p>
            <p className="font-sentient text-lg">+1 (555) 123-4567</p>
          </div>
          <div>
            <p className="text-xs font-mono text-foreground/50 uppercase mb-2">Address</p>
            <p className="font-sentient text-lg">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </section>
  )
}
