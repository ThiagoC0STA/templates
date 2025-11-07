"use client"

export function AnimatedGradientBg() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/15" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-2000" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/25 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-4000" />
    </div>
  )
}
