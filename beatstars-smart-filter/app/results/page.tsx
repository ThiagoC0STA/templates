"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { BeatCard } from "@/components/beat-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ArrowLeft } from "lucide-react"
import { Suspense } from "react"

// Mock beat data - same as marketplace
const ALL_BEATS = [
  {
    id: "1",
    title: "Midnight Hustle",
    producer: "TriuneBeats",
    bpm: 140,
    key: "C Minor",
    genre: "Trap",
    price: 29.99,
    imageUrl: "/dark-trap-beat-cover.jpg",
    audioUrl: "/beats/midnight-hustle.mp3",
    tags: ["Dark", "Aggressive", "Hard"],
    likes: 234,
    plays: 1523,
    matchScore: 0,
  },
  {
    id: "2",
    title: "Golden Hour",
    producer: "TriuneBeats",
    bpm: 85,
    key: "G Major",
    genre: "Boom Bap",
    price: 24.99,
    imageUrl: "/golden-sunset-hip-hop.jpg",
    audioUrl: "/beats/golden-hour.mp3",
    tags: ["Chill", "Smooth", "Jazzy"],
    likes: 456,
    plays: 2891,
    matchScore: 0,
  },
  {
    id: "3",
    title: "Street Dreams",
    producer: "TriuneBeats",
    bpm: 95,
    key: "D Minor",
    genre: "Lo-Fi",
    price: 19.99,
    imageUrl: "/urban-street-night-lofi.jpg",
    audioUrl: "/beats/street-dreams.mp3",
    tags: ["Melancholic", "Atmospheric", "Deep"],
    likes: 189,
    plays: 987,
    matchScore: 0,
  },
  {
    id: "4",
    title: "Victory Lap",
    producer: "TriuneBeats",
    bpm: 150,
    key: "E Minor",
    genre: "Trap",
    price: 34.99,
    imageUrl: "/victory-championship-energy.jpg",
    audioUrl: "/beats/victory-lap.mp3",
    tags: ["Triumphant", "Energetic", "Hype"],
    likes: 678,
    plays: 4521,
    matchScore: 0,
  },
  {
    id: "5",
    title: "Late Night Thoughts",
    producer: "TriuneBeats",
    bpm: 70,
    key: "A Minor",
    genre: "R&B",
    price: 27.99,
    imageUrl: "/late-night-city-lights-rnb.jpg",
    audioUrl: "/beats/late-night.mp3",
    tags: ["Emotional", "Slow", "Soulful"],
    likes: 312,
    plays: 1876,
    matchScore: 0,
  },
  {
    id: "6",
    title: "Flex Mode",
    producer: "TriuneBeats",
    bpm: 130,
    key: "F# Minor",
    genre: "Trap",
    price: 29.99,
    imageUrl: "/luxury-flex-trap-beat.jpg",
    audioUrl: "/beats/flex-mode.mp3",
    tags: ["Bouncy", "Club", "Catchy"],
    likes: 523,
    plays: 3214,
    matchScore: 0,
  },
]

function ResultsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const mood = searchParams.get("mood") || ""
  const lyrics = searchParams.get("lyrics") || ""
  const bpm = searchParams.get("bpm") || ""
  const genre = searchParams.get("genre") || ""

  const matchBeats = () => {
    const beatsWithScores = ALL_BEATS.map((beat) => {
      let score = 0

      // Match mood to tags (case insensitive)
      const moodLower = mood.toLowerCase()
      beat.tags.forEach((tag) => {
        if (tag.toLowerCase().includes(moodLower) || moodLower.includes(tag.toLowerCase())) {
          score += 30
        }
      })

      // Match genre
      if (genre && beat.genre.toLowerCase().includes(genre.toLowerCase())) {
        score += 25
      }

      // Match BPM range
      if (bpm) {
        const bpmRange = bpm.split("-").map((n) => Number.parseInt(n.trim()))
        if (bpmRange.length === 2) {
          const [min, max] = bpmRange
          if (beat.bpm >= min && beat.bpm <= max) {
            score += 20
          }
        }
      }

      // Analyze lyrics for energy/vibe keywords
      const lyricsLower = lyrics.toLowerCase()
      const energyKeywords = ["aggressive", "hard", "fast", "hype", "energy"]
      const chillKeywords = ["chill", "smooth", "slow", "relax", "calm"]
      const emotionalKeywords = ["sad", "emotional", "deep", "feel", "heart"]

      if (energyKeywords.some((kw) => lyricsLower.includes(kw))) {
        if (beat.bpm > 120) score += 15
        if (beat.tags.some((tag) => ["Aggressive", "Energetic", "Hype", "Hard"].includes(tag))) score += 15
      }

      if (chillKeywords.some((kw) => lyricsLower.includes(kw))) {
        if (beat.bpm < 100) score += 15
        if (beat.tags.some((tag) => ["Chill", "Smooth", "Slow"].includes(tag))) score += 15
      }

      if (emotionalKeywords.some((kw) => lyricsLower.includes(kw))) {
        if (beat.tags.some((tag) => ["Emotional", "Melancholic", "Deep", "Soulful"].includes(tag))) score += 15
      }

      // Add some randomness for variety (5-10 points)
      score += Math.floor(Math.random() * 6) + 5

      return { ...beat, matchScore: score }
    })

    // Sort by score and return top 3
    return beatsWithScores.sort((a, b) => b.matchScore - a.matchScore).slice(0, 3)
  }

  const topBeats = matchBeats()

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <Button variant="ghost" onClick={() => router.push("/")} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          New Search
        </Button>

        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400">
            <Sparkles className="h-4 w-4" />
            AI Match Complete
          </div>

          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Your Top 3 Beats
            <span className="block bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              Perfectly Matched
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Based on your lyrics, mood, and preferences, our AI selected these beats with the highest compatibility
            scores.
          </p>

          {/* Show user's inputs */}
          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2">
            {mood && (
              <Badge variant="secondary" className="bg-purple-500/10 text-purple-400">
                Mood: {mood}
              </Badge>
            )}
            {genre && (
              <Badge variant="secondary" className="bg-orange-500/10 text-orange-400">
                Genre: {genre}
              </Badge>
            )}
            {bpm && (
              <Badge variant="secondary" className="bg-purple-500/10 text-purple-400">
                BPM: {bpm}
              </Badge>
            )}
          </div>
        </div>

        {/* Top 3 Beats Grid */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {topBeats.map((beat, index) => (
            <div key={beat.id} className="relative">
              {/* Ranking badge */}
              <div className="absolute -left-3 -top-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-orange-500 text-lg font-bold text-white shadow-lg">
                #{index + 1}
              </div>
              <BeatCard beat={beat} />
              {/* Match score */}
              <div className="mt-2 text-center">
                <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                  {beat.matchScore}% Match
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-muted-foreground">Not quite right?</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button onClick={() => router.push("/")} variant="outline" size="lg">
              Try Another Search
            </Button>
            <Button
              onClick={() => router.push("/#marketplace")}
              size="lg"
              className="bg-purple-500 hover:bg-purple-600"
            >
              Browse All Beats
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading results...</div>}>
      <ResultsContent />
    </Suspense>
  )
}
