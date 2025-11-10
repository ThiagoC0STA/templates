import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Beat, MOCK_BEATS } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ShoppingCart, ShieldCheck, Zap, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review your licenses, stems, and add-ons before checking out.",
}

type CartItem = {
  beat: Beat
  license: string
  rights: string[]
  delivery: string[]
  basePrice: number
  addOns?: {
    label: string
    price: number
  }[]
}

const cartItems: CartItem[] = [
  {
    beat: { ...MOCK_BEATS[0] },
    license: "Unlimited Lease",
    rights: [
      "Unlimited streams and monetized audio releases",
      "Upload to Spotify, Apple Music, YouTube, TikTok",
      "Keep 100% of publishing and royalties",
    ],
    delivery: ["Untagged WAV + MP3", "Trackout stems", "Instant HQ download"],
    basePrice: 49,
    addOns: [
      { label: "Exclusive tag removal", price: 10 },
      { label: "Performance-ready mixdown", price: 15 },
    ],
  },
  {
    beat: { ...MOCK_BEATS[3] },
    license: "Exclusive License",
    rights: [
      "Full ownership transfer at checkout",
      "Immediate catalog removal after purchase",
      "Unlimited monetized streams, performances, sync",
    ],
    delivery: ["44.1k WAV + 24-bit stems", "Producer contract PDF", "Royalty split template"],
    basePrice: 249,
    addOns: [{ label: "Live show stems pack", price: 25 }],
  },
]

const suggestedBeats = MOCK_BEATS.filter((beat) => !cartItems.some((item) => item.beat.id === beat.id)).slice(0, 4)

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value)

export default function CartPage() {
  const subtotal = cartItems.reduce((total, item) => {
    const addOnTotal = item.addOns?.reduce((sum, addOn) => sum + addOn.price, 0) ?? 0
    return total + item.basePrice + addOnTotal
  }, 0)
  const serviceFee = subtotal * 0.04
  const total = subtotal + serviceFee

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 pb-20 pt-16">
      <section className="container mx-auto grid gap-8 px-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="space-y-6">
          <header className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-purple-400">
              <ShoppingCart className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
                Checkout summary
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Review your cart</h1>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Secure your licenses now and download the untagged files instantly. You can edit add-ons or swap
              licenses before proceeding to payment.
            </p>
          </header>

          <div className="space-y-6">
            {cartItems.map((item) => {
              const addOnTotal = item.addOns?.reduce((sum, addOn) => sum + addOn.price, 0) ?? 0
              const lineTotal = item.basePrice + addOnTotal

              return (
                <Card key={item.beat.id} className="overflow-hidden border-border/50 bg-background/80 backdrop-blur">
                  <CardHeader className="gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="relative h-20 w-20 overflow-hidden rounded-xl border border-border/40">
                        <Image
                          src={item.beat.imageUrl}
                          alt={item.beat.title}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-2">
                        <CardTitle className="text-xl">{item.beat.title}</CardTitle>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                          <span>Prod. {item.beat.producer}</span>
                          <span className="size-1.5 rounded-full bg-purple-400" aria-hidden />
                          <span>{item.beat.bpm} BPM</span>
                          <span className="size-1.5 rounded-full bg-purple-400" aria-hidden />
                          <span>{item.beat.genre}</span>
                        </div>
                        <Badge variant="secondary" className="rounded-full border border-purple-400/30 bg-purple-500/10">
                          {item.license}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-destructive">
                      Remove
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6 pb-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-3 rounded-2xl border border-border/40 bg-muted/20 p-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                          Usage rights
                        </h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {item.rights.map((right) => (
                            <li key={right} className="flex gap-2">
                              <span className="mt-1 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                              <span>{right}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3 rounded-2xl border border-border/40 bg-muted/20 p-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                          Delivery bundle
                        </h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {item.delivery.map((deliverable) => (
                            <li key={deliverable} className="flex gap-2">
                              <Download className="mt-0.5 h-4 w-4 text-purple-400" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {item.addOns?.length ? (
                      <div className="rounded-2xl border border-border/40 bg-muted/20 p-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                          Add-ons
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                          {item.addOns.map((addOn) => (
                            <li key={addOn.label} className="flex items-center justify-between">
                              <span>{addOn.label}</span>
                              <span className="font-semibold text-foreground">{formatCurrency(addOn.price)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4 border-t border-border/30 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <ShieldCheck className="h-5 w-5 text-purple-400" />
                      <span>Commercial clearance included. Stems delivered instantly after payment.</span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">Line total</p>
                      <p className="text-xl font-semibold text-foreground">{formatCurrency(lineTotal)}</p>
                    </div>
                  </CardFooter>
                </Card>
              )
            })}
          </div>

          <Card className="border-border/50 bg-background/80">
            <CardHeader>
              <CardTitle>Order notes</CardTitle>
              <CardDescription>Drop instructions for mix tweaks, tags, or shout-outs you want in the files.</CardDescription>
            </CardHeader>
            <CardContent>
              <textarea
                placeholder="Example: deliver stems at -6dB, include custom DJ drop 'TriuneBeats exclusive'."
                className="h-28 w-full rounded-2xl border border-border/40 bg-muted/20 px-4 py-3 text-sm text-foreground outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-300/40"
              />
            </CardContent>
          </Card>
        </div>

        <aside className="space-y-6">
          <Card className="border-border/50 bg-background/70">
            <CardHeader>
              <CardTitle>Similar beats you might like</CardTitle>
              <CardDescription>Continue the vibe with curated picks based on your current cart.</CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              <ScrollArea className="h-64">
                <div className="space-y-4 px-6">
                  {suggestedBeats.map((beat) => (
                    <div key={beat.id} className="flex items-center justify-between gap-4 rounded-2xl border border-border/30 bg-muted/20 p-4">
                      <div className="flex items-center gap-3">
                        <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-border/30">
                          <Image src={beat.imageUrl} alt={beat.title} fill sizes="56px" className="object-cover" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{beat.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {beat.genre} • {beat.bpm} BPM
                          </p>
                        </div>
                      </div>
                      <Button asChild size="sm" variant="outline" className="border-purple-400/40 text-purple-400 hover:bg-purple-500/10">
                        <Link href={`/booth/${beat.id}`}>Preview</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="sticky top-24 border-border/50 bg-background/80 backdrop-blur">
            <CardHeader className="border-b border-border/30 pb-5">
              <CardTitle>Payment summary</CardTitle>
              <CardDescription>You are minutes away from getting the untagged files in your inbox.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 py-5">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-foreground">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Platform service fee</span>
                  <span className="font-semibold text-foreground">{formatCurrency(serviceFee)}</span>
                </div>
              </div>
              <Separator className="bg-border/50" />
              <div className="flex items-center justify-between text-base font-semibold text-foreground">
                <span>Total (USD)</span>
                <span>{formatCurrency(total)}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Taxes will be calculated at checkout based on your billing country. Exclusive licenses trigger producer
                notifications automatically.
              </p>
              <Button className="w-full bg-purple-500 hover:bg-purple-600" size="lg">
                Secure checkout
              </Button>
              <Button variant="outline" className="w-full" size="lg" asChild>
                <Link href="/results">Keep browsing</Link>
              </Button>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 border-t border-border/30 py-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <Zap className="h-4 w-4 text-purple-400" />
                <span>Instant delivery guaranteed</span>
              </div>
              <p className="text-xs text-muted-foreground">
                You will receive a download link, licensing agreement, and invoice immediately after payment clears.
              </p>
            </CardFooter>
          </Card>
        </aside>
      </section>
    </main>
  )
}

