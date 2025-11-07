"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroVersionOne } from "@/components/hero-version-one"
import { HeroVersionTwo } from "@/components/hero-version-two"
import { HeroVersionThree } from "@/components/hero-version-three"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Insights } from "@/components/insights"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Leva } from "leva"

export default function Home() {
  const [version, setVersion] = useState<1 | 2 | 3>(1)

  return (
    <>
      <Header onVersionChange={setVersion} />

      {version === 1 && <HeroVersionOne />}
      {version === 2 && <HeroVersionTwo />}
      {version === 3 && <HeroVersionThree />}

      <About />
      <Services />
      <Portfolio />
      <Insights />
      <Contact />
      <Footer />
      <Leva hidden />
    </>
  )
}
