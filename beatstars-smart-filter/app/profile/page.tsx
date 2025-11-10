import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Beat, MOCK_BEATS } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Music, FolderKanban, Settings, ArrowUpRight, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Your Profile",
  description: "Review your activity, licenses, and saved beats in the TriuneBeats hub.",
}

const profileStats = [
  { label: "Active licenses", value: "12", trend: "+3 this month" },
  { label: "Streams last 30 days", value: "1.6M", trend: "+12%" },
  { label: "Collaborators", value: "8", trend: "3 producers connected" },
]

const savedBeats: Beat[] = [MOCK_BEATS[1], MOCK_BEATS[4], MOCK_BEATS[6], MOCK_BEATS[8]]

const favoriteGenres = ["Trap", "Boom Bap", "Synthwave", "R&B"]

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 pb-20 pt-16">
      <section className="container mx-auto space-y-10 px-4">
        <header className="rounded-3xl border border-border/40 bg-background/80 p-6 shadow-sm backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16 border border-purple-400/40">
                <AvatarImage src="/placeholder-user.jpg" alt="Artist avatar" />
                <AvatarFallback>TR</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    Triune Artist Hub
                  </h1>
                  <Badge variant="secondary" className="rounded-full border border-purple-300/40 bg-purple-500/10">
                    Pro
                  </Badge>
                </div>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                  Centralize your beat licenses, stems, collaborators, and payouts. Finish setup to unlock smart release
                  reminders and split automation.
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Music className="h-4 w-4 text-purple-400" />
                    Verified artist since 2023
                  </span>
                  <span className="flex items-center gap-2">
                    <FolderKanban className="h-4 w-4 text-purple-400" />
                    58 beats organized
                  </span>
                  <span className="flex items-center gap-2">
                    <Settings className="h-4 w-4 text-purple-400" />
                    Release automation ready
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="bg-purple-500 hover:bg-purple-600" asChild>
                <Link href="/sign-in">Continue Session</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/results">Discover new beats</Link>
              </Button>
            </div>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {profileStats.map((stat) => (
            <Card key={stat.label} className="border-border/40 bg-background/70 backdrop-blur">
              <CardHeader>
                <CardDescription>{stat.label}</CardDescription>
                <CardTitle className="text-3xl">{stat.value}</CardTitle>
              </CardHeader>
              <CardFooter className="border-t border-border/30 py-4 text-xs uppercase tracking-[0.25em] text-purple-300">
                {stat.trend}
              </CardFooter>
            </Card>
          ))}
        </section>

        <Tabs defaultValue="licenses" className="space-y-6">
          <TabsList className="w-full justify-start gap-2 rounded-2xl border border-border/40 bg-background/70 p-2">
            <TabsTrigger value="licenses" className="rounded-xl px-5 py-2 text-sm">
              Licenses
            </TabsTrigger>
            <TabsTrigger value="saved" className="rounded-xl px-5 py-2 text-sm">
              Saved beats
            </TabsTrigger>
            <TabsTrigger value="collaborators" className="rounded-xl px-5 py-2 text-sm">
              Collaborators
            </TabsTrigger>
            <TabsTrigger value="billing" className="rounded-xl px-5 py-2 text-sm">
              Billing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="licenses" className="space-y-4 rounded-3xl border border-border/40 bg-background/80 p-6 shadow-sm backdrop-blur">
            <header className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold">Recently used licenses</h2>
              <p className="text-sm text-muted-foreground">
                Download stems, update ownership, or transfer rights to collaborators.
              </p>
            </header>
            <div className="space-y-4">
              {cartItemsPreview.map((item) => (
                <div key={item.beat.id} className="flex flex-col gap-4 rounded-2xl border border-border/40 bg-muted/20 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-border/40">
                      <Image src={item.beat.imageUrl} alt={item.beat.title} fill sizes="64px" className="object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.beat.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.license} • {item.beat.genre} • {item.beat.bpm} BPM
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="border-purple-300/30 text-purple-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3 sm:items-end">
                    <span className="text-sm font-semibold text-foreground">{item.status}</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/booth/${item.beat.id}`}>Open delivery</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved" className="space-y-4 rounded-3xl border border-border/40 bg-background/80 p-6 shadow-sm backdrop-blur">
            <header className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold">Saved beats</h2>
              <p className="text-sm text-muted-foreground">Keep your best finds handy to license later.</p>
            </header>
            <div className="grid gap-4 md:grid-cols-2">
              {savedBeats.map((beat) => (
                <Card key={beat.id} className="overflow-hidden border-border/40 bg-muted/10">
                  <div className="relative h-40 w-full">
                    <Image src={beat.imageUrl} alt={beat.title} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <CardContent className="space-y-3 py-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{beat.title}</CardTitle>
                        <CardDescription>{beat.genre}</CardDescription>
                      </div>
                      <Badge variant="outline" className="border-purple-400/40 text-purple-400">
                        {beat.bpm} BPM
                      </Badge>
                    </div>
                    <p className="line-clamp-2 text-sm text-muted-foreground">{beat.description}</p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t border-border/30 py-4">
                    <span className="text-sm font-semibold text-foreground">${beat.price.toFixed(2)}</span>
                    <Button size="sm" asChild>
                      <Link href={`/booth/${beat.id}`}>Preview</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="collaborators" className="space-y-4 rounded-3xl border border-border/40 bg-background/80 p-6 shadow-sm backdrop-blur">
            <header className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold">Collaborator roster</h2>
              <p className="text-sm text-muted-foreground">
                Manage split sheets and invite producers or writers to projects.
              </p>
            </header>
            <div className="grid gap-4 md:grid-cols-2">
              {collaborators.map((collaborator) => (
                <div key={collaborator.handle} className="flex items-center gap-4 rounded-2xl border border-border/40 bg-muted/20 p-4">
                  <Avatar className="h-12 w-12 border border-purple-300/30">
                    <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                    <AvatarFallback>{collaborator.fallback}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{collaborator.name}</p>
                    <p className="text-xs text-muted-foreground">{collaborator.role}</p>
                    <div className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-purple-300">
                      <Star className="h-3.5 w-3.5" />
                      {collaborator.highlight}
                    </div>
                  </div>
                  <Button size="icon" variant="ghost" asChild>
                    <Link href={`/community?with=${collaborator.handle}`} aria-label="Open collaborator profile">
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="billing" className="space-y-4 rounded-3xl border border-border/40 bg-background/80 p-6 shadow-sm backdrop-blur">
            <header className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold">Billing preferences</h2>
              <p className="text-sm text-muted-foreground">
                Update invoices, payout accounts, and tax information for your organization.
              </p>
            </header>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-border/40 bg-muted/10">
                <CardHeader>
                  <CardTitle>Default payment</CardTitle>
                  <CardDescription>Visa ending in 2345 • Renews monthly</CardDescription>
                </CardHeader>
                <CardFooter className="border-t border-border/30 py-4">
                  <Button variant="outline" size="sm">
                    Update card
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-border/40 bg-muted/10">
                <CardHeader>
                  <CardTitle>Payout account</CardTitle>
                  <CardDescription>Universal Music Distribution • Connected</CardDescription>
                </CardHeader>
                <CardFooter className="border-t border-border/30 py-4">
                  <Button variant="outline" size="sm">
                    Manage payouts
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <Separator className="bg-border/40" />
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <Badge variant="outline" className="border-purple-300/30 text-purple-300">
                Preferred genres
              </Badge>
              {favoriteGenres.map((genre) => (
                <span key={genre} className="rounded-full border border-border/40 px-3 py-1">
                  {genre}
                </span>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}

const cartItemsPreview = [
  {
    beat: { ...MOCK_BEATS[0] },
    license: "Unlimited Lease",
    tags: ["Unlimited streams", "Trackouts", "Royalty free"],
    status: "Next release scheduled • Apr 12",
  },
  {
    beat: { ...MOCK_BEATS[3] },
    license: "Exclusive License",
    tags: ["Exclusive rights", "Catalog removal"],
    status: "Awaiting mix tweaks",
  },
  {
    beat: { ...MOCK_BEATS[5] },
    license: "Performance License",
    tags: ["Live shows", "TV sync ready"],
    status: "Ready for download",
  },
]

const collaborators = [
  {
    name: "Kira Nova",
    handle: "kira-nova",
    role: "Topline vocalist",
    highlight: "Recent sync on HBO",
    avatar: "/rapper-avatar-1.jpg",
    fallback: "KN",
  },
  {
    name: "Wave Rider",
    handle: "wave-rider",
    role: "Mix engineer",
    highlight: "Dolby Atmos certified",
    avatar: "/rapper-avatar-2.jpg",
    fallback: "WR",
  },
  {
    name: "DJ Static",
    handle: "dj-static",
    role: "Tour DJ & Producer",
    highlight: "3 sold-out tours",
    avatar: "/rapper-avatar-3.jpg",
    fallback: "DS",
  },
  {
    name: "Luna Verse",
    handle: "luna-verse",
    role: "Songwriter",
    highlight: "Grammy nominated 2024",
    avatar: "/rapper-avatar-4.jpg",
    fallback: "LV",
  },
]

