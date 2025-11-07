"use client"

import Link from "next/link"
import { Pill } from "./pill"
import { Button } from "./ui/button"
import { AnimatedGradientBg } from "./animated-gradient-bg"

export function HeroVersionTwo() {
  return (
    <div className="flex flex-col h-svh justify-between relative bg-background">
      <AnimatedGradientBg />

      <div className="pb-16 mt-auto text-left relative z-10 container">
        <Pill className="mb-6">TRANSFORMING VENTURES</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient max-w-3xl">
          Strategic capital for <span className="text-primary">emerging leaders</span>
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 mt-8 max-w-[540px]">
          We identify visionary entrepreneurs and provide the strategic guidance, network, and capital they need to
          reshape industries and create lasting impact.
        </p>

        <Link className="contents max-sm:hidden" href="/#contact">
          <Button className="mt-14">[Get Started]</Button>
        </Link>
        <Link className="contents sm:hidden" href="/#contact">
          <Button size="sm" className="mt-14">
            [Get Started]
          </Button>
        </Link>
      </div>
    </div>
  )
}
