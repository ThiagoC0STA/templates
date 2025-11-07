"use client"

import { useState } from "react"
import { BeatCard } from "@/components/beat-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, SlidersHorizontal } from "lucide-react"

// Mock beat data - in production this would come from your database
const MOCK_BEATS = [
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
  },
]

export function BeatMarketplace() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  return (
    <section id="marketplace" className="container mx-auto px-4 py-12">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold">Browse All Beats</h2>
          <p className="text-muted-foreground">Or use Smart Filter above for AI-powered recommendations</p>
        </div>

        <div className="flex gap-2">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search beats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button variant="outline" size="icon" onClick={() => setShowFilters(!showFilters)}>
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_BEATS.map((beat) => (
          <BeatCard key={beat.id} beat={beat} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" size="lg">
          Load More Beats
        </Button>
      </div>
    </section>
  )
}
