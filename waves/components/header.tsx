"use client"

import Link from "next/link"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"
import { useState } from "react"

export const Header = ({ onVersionChange }: { onVersionChange: (version: 1 | 2 | 3) => void }) => {
  const [version, setVersion] = useState<1 | 2 | 3>(1)

  const handleVersionChange = (newVersion: 1 | 2 | 3) => {
    setVersion(newVersion)
    onVersionChange(newVersion)
  }

  return (
    <div className="absolute z-50 pt-8 md:pt-14 top-0 left-0 w-full">
      <header className="flex items-center justify-between container">
        <Link href="/">
          <Logo className="w-[100px] md:w-[120px]" />
        </Link>
        <nav className="flex max-lg:hidden items-center justify-center gap-x-10">
          {["About", "Portfolio", "Insights", "Contact"].map((item) => (
            <Link
              className="uppercase inline-block font-mono text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out"
              href={`#${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          {[1, 2, 3].map((versionNum) => (
            <button
              key={versionNum}
              onClick={() => handleVersionChange(versionNum as 1 | 2 | 3)}
              className={`w-8 h-8 rounded-full font-mono text-xs font-bold transition-all duration-150 ${
                version === versionNum
                  ? "bg-primary text-black"
                  : "bg-foreground/10 text-foreground/60 hover:bg-foreground/20"
              }`}
            >
              {versionNum}
            </button>
          ))}
        </div>

        <MobileMenu />
      </header>
    </div>
  )
}
