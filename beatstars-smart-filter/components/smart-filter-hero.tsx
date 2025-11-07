"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Sparkles, TrendingUp } from "lucide-react"

export function SmartFilterHero() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [lyrics, setLyrics] = useState("")
  const [mood, setMood] = useState("")
  const [filters, setFilters] = useState({
    bpm: "",
    genre: "",
    key: "",
  })
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleFindBeats = () => {
    console.log("[v0] Finding beats with:", { lyrics, mood, filters })
    setIsAnalyzing(true)

    setTimeout(() => {
      const params = new URLSearchParams({
        lyrics: lyrics,
        mood: mood,
        ...(filters.bpm && { bpm: filters.bpm }),
        ...(filters.genre && { genre: filters.genre }),
        ...(filters.key && { key: filters.key }),
      })

      router.push(`/results?${params.toString()}`)
    }, 2000)
  }

  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-orange-500/5" />

      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400">
            <Sparkles className="h-4 w-4" />
            AI-Powered Beat Matching
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Find Your Perfect Beat
            <span className="block bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              In Seconds
            </span>
          </h1>

          <p className="mb-12 text-pretty text-lg text-muted-foreground md:text-xl">
            Stop scrolling through endless catalogs. Our smart AI matches your lyrics, mood, and style to the perfect
            beats.
          </p>

          <Card className="border-border/50 bg-card/50 p-6 backdrop-blur-sm md:p-8">
            <div className="mb-8 flex items-center justify-center gap-2">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                      step >= num ? "bg-purple-500 text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {num}
                  </div>
                  {num < 3 && (
                    <div className={`mx-2 h-0.5 w-8 transition-colors ${step > num ? "bg-purple-500" : "bg-muted"}`} />
                  )}
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <div className="text-left">
                  <label className="mb-2 block text-sm font-medium">Step 1: Paste Your Lyrics</label>
                  <Textarea
                    placeholder="Drop your bars here... The AI will analyze your flow, rhyme scheme, and energy to find matching beats."
                    value={lyrics}
                    onChange={(e) => setLyrics(e.target.value)}
                    className="min-h-[150px] resize-none"
                  />
                </div>
                <Button
                  onClick={() => setStep(2)}
                  disabled={!lyrics.trim()}
                  className="w-full bg-purple-500 hover:bg-purple-600"
                  size="lg"
                >
                  Next: Set Your Mood
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="text-left">
                  <label className="mb-2 block text-sm font-medium">Step 2: How Do You Feel?</label>
                  <Input
                    placeholder="e.g., aggressive, chill, triumphant, melancholic..."
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                    className="text-base"
                  />
                  <p className="mt-2 text-sm text-muted-foreground">
                    Describe the vibe or emotion you want your track to convey
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => setStep(1)} variant="outline" className="flex-1" size="lg">
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    disabled={!mood.trim()}
                    className="flex-1 bg-purple-500 hover:bg-purple-600"
                    size="lg"
                  >
                    Next: Fine-Tune
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && !isAnalyzing && (
              <div className="space-y-4">
                <div className="text-left">
                  <label className="mb-4 block text-sm font-medium">Step 3: Additional Filters (Optional)</label>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <label className="mb-1 block text-xs text-muted-foreground">BPM Range</label>
                      <Input
                        placeholder="e.g., 80-100"
                        value={filters.bpm}
                        onChange={(e) => setFilters({ ...filters, bpm: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs text-muted-foreground">Genre</label>
                      <Input
                        placeholder="e.g., Trap, Boom Bap"
                        value={filters.genre}
                        onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs text-muted-foreground">Key</label>
                      <Input
                        placeholder="e.g., C Minor"
                        value={filters.key}
                        onChange={(e) => setFilters({ ...filters, key: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => setStep(2)} variant="outline" className="flex-1" size="lg">
                    Back
                  </Button>
                  <Button
                    onClick={handleFindBeats}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600"
                    size="lg"
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    Find My Beats
                  </Button>
                </div>
              </div>
            )}

            {isAnalyzing && (
              <div className="space-y-4 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10">
                  <TrendingUp className="h-8 w-8 animate-pulse text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold">AI is analyzing your request...</h3>
                <p className="text-muted-foreground">Matching your lyrics and mood to our catalog</p>
                <div className="mx-auto h-1 w-48 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-1/2 animate-pulse bg-gradient-to-r from-purple-500 to-orange-500" />
                </div>
              </div>
            )}
          </Card>

          <div className="mt-12 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-400 md:text-3xl">10K+</div>
              <div className="text-sm text-muted-foreground">Premium Beats</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400 md:text-3xl">98%</div>
              <div className="text-sm text-muted-foreground">Match Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 md:text-3xl">&lt;30s</div>
              <div className="text-sm text-muted-foreground">Avg. Search</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
