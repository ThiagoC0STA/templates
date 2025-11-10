import Link from "next/link"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Music, ArrowRight, Mail, MonitorSmartphone, Globe, Apple, Waves } from "lucide-react"

export const metadata: Metadata = {
  title: "Sign In",
  description: "Access TriuneBeats to manage licenses, stems, and personalized releases.",
}

const socialProviders: { label: string; icon: ReactNode }[] = [
  { label: "Continue with Google", icon: <Globe className="h-4 w-4" /> },
  { label: "Continue with Apple", icon: <Apple className="h-4 w-4" /> },
  { label: "Continue with Spotify", icon: <Waves className="h-4 w-4" /> },
]

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 pb-20 pt-24">
      <section className="container mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <Card className="border-border/40 bg-background/80 p-1 shadow-md backdrop-blur">
          <CardHeader className="space-y-3 mt-4">
            <Badge
              variant="secondary"
              className="w-fit rounded-full border border-purple-300/40 bg-purple-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-purple-200"
            >
              TriuneBeats login
            </Badge>
            <CardTitle className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Welcome back to your artist hub
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Sign in to access your cart, saved filters, exclusive drops, and AI-backed beat suggestions that match
              your range.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 py-8">
            <div className="space-y-4">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input id="email" type="email" placeholder="you@label.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" required />
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4 rounded border-border/60" />
                    Stay signed in on this device
                  </label>
                  <Link href="#" className="text-purple-300 hover:text-purple-200">
                    Forgot password?
                  </Link>
                </div>
                <Button size="lg" className="w-full bg-purple-500 hover:bg-purple-600">
                  Sign in securely
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By continuing, you agree to the TriuneBeats Terms and confirm you have read our Privacy Policy.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                <Separator className="flex-1 bg-border/40" />
                <span>Or continue with</span>
                <Separator className="flex-1 bg-border/40" />
              </div>
              <div className="grid gap-2">
                {socialProviders.map(({ label, icon }) => (
                  <Button key={label} variant="outline" className="w-full justify-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      {icon}
                    </span>
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/40 bg-gradient-to-br from-purple-600/10 via-background to-purple-900/10 p-8 shadow-lg backdrop-blur">
          <div className="flex flex-col gap-8">
            <div className="space-y-3">
              <Badge variant="outline" className="border-purple-200/50 text-purple-200">
                Why sign in
              </Badge>
              <h2 className="text-2xl font-semibold text-foreground">Stay synced with every release window</h2>
              <p className="text-sm text-purple-100/90">
                TriuneBeats keeps your licenses, stems, collaborators, and split sheets aligned while recommending beats
                that fit your style.
              </p>
            </div>

            <div className="space-y-4">
              <Benefit
                icon={<Music className="h-5 w-5 text-purple-200" />}
                title="Personalized beat radar"
                description="Get automatic alerts when producers drop new beats that match your saved filters."
              />
              <Benefit
                icon={<MonitorSmartphone className="h-5 w-5 text-purple-200" />}
                title="Seamless mobile checkout"
                description="License beats on the go with one-tap checkout and instant delivery to all devices."
              />
              <Benefit
                icon={<Mail className="h-5 w-5 text-purple-200" />}
                title="Release-ready assets"
                description="Receive stems, contracts, and split sheets neatly packaged after every purchase."
              />
            </div>

            <div className="rounded-2xl border border-purple-200/30 bg-purple-500/10 p-6 text-sm text-purple-100">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-200">New? start here</p>
              <p className="mt-3">
                Create a free account to unlock unlimited smart filters, collaborative playlists, and invites to
                exclusive auctions.
              </p>
              <Button
                variant="outline"
                className="mt-4 w-fit border-purple-200/40 text-purple-100 hover:bg-purple-500/20"
                asChild
              >
                <Link href="#" className="flex items-center gap-2">
                  Create artist profile <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </main>
  )
}

function Benefit({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-purple-200/20 bg-purple-500/10 p-4">
      <span className="mt-0.5 text-purple-200">{icon}</span>
      <div className="space-y-1">
        <p className="text-sm font-semibold text-purple-100">{title}</p>
        <p className="text-xs text-purple-200/80">{description}</p>
      </div>
    </div>
  )
}

