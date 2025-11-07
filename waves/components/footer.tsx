import Link from "next/link"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border mt-20">
      <div className="container py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Logo className="w-24 mb-4" />
            <p className="font-mono text-sm text-foreground/60">Investment strategies that outperform the market.</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase text-foreground/50 mb-6">Company</p>
            <div className="space-y-3">
              {["About", "Portfolio", "Insights", "Team"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block font-mono text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs uppercase text-foreground/50 mb-6">Resources</p>
            <div className="space-y-3">
              {["Blog", "Reports", "Research", "FAQ"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block font-mono text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs uppercase text-foreground/50 mb-6">Social</p>
            <div className="space-y-3">
              {["LinkedIn", "Twitter", "Crunchbase"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block font-mono text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-foreground/50">© 2025 Skal Ventures. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="font-mono text-xs text-foreground/50 hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="font-mono text-xs text-foreground/50 hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
