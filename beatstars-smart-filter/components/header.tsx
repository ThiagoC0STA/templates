"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Music, User, ShoppingCart } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-orange-500">
            <Music className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold">TriuneBeats</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-purple-400">
            Browse Beats
          </Link>
          <Link href="/community" className="text-sm font-medium transition-colors hover:text-purple-400">
            Community
          </Link>
          <Link href="/booth" className="text-sm font-medium transition-colors hover:text-purple-400">
            Recording Booth
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button className="hidden bg-purple-500 hover:bg-purple-600 md:inline-flex">Sign In</Button>
        </div>
      </div>
    </header>
  )
}
