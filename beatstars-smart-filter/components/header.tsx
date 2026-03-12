"use client"

import Link from "next/link"
import { Music, User, ShoppingCart, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTemplate } from "@/components/template-provider"

export function Header() {
  const { template, buildPath } = useTemplate()

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href={buildPath(template.homePath ?? "/")} className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-orange-500">
            <Music className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold">{template.label}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href={buildPath("/")} className="text-sm font-medium transition-colors hover:text-purple-400">
            Browse Beats
          </Link>
          <Link href={buildPath("/community")} className="text-sm font-medium transition-colors hover:text-purple-400">
            Community
          </Link>
          <Link href={buildPath("/booth")} className="text-sm font-medium transition-colors hover:text-purple-400">
            Recording Booth
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/?view=gallery" aria-label="Open template gallery">
              <LayoutGrid className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={buildPath("/cart")} aria-label="Open cart">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={buildPath("/profile")} aria-label="Open profile">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          <Button className="hidden bg-purple-500 hover:bg-purple-600 md:inline-flex" asChild>
            <Link href={buildPath("/sign-in")}>Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
