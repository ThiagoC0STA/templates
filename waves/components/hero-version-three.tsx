"use client"

import Link from "next/link"
import { Pill } from "./pill"
import { Button } from "./ui/button"
import { AnimatedMeshBg } from "./animated-mesh-bg"

export function HeroVersionThree() {
  return (
    <div className="flex flex-col h-svh justify-between relative">
      <AnimatedMeshBg />

      <div className="pb-16 mt-auto text-center relative z-10 container mx-auto px-4">
        <div className="inline-block mb-8">
          <Pill>MODERN VENTURE CAPITAL</Pill>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sentient text-balance leading-tight mb-6">
          Fund Your <br /> Vision
        </h1>

        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-sm sm:text-base text-foreground/70 text-balance mb-12">
            Partner with a venture capital firm that genuinely understands your mission. We bring more than capital—we
            bring expertise, connections, and a commitment to your success.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/#contact" className="contents max-sm:hidden">
            <Button>[Schedule Demo]</Button>
          </Link>
          <Link href="/#contact" className="contents sm:hidden">
            <Button size="sm">[Schedule Demo]</Button>
          </Link>
          <Link href="/#about" className="contents max-sm:hidden">
            <Button variant="outline">[Learn More]</Button>
          </Link>
          <Link href="/#about" className="contents sm:hidden">
            <Button variant="outline" size="sm">
              [Learn More]
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
