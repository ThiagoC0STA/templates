"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, Heart, ShoppingCart, Mic, Share2, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Beat {
  id: string
  title: string
  producer: string
  bpm: number
  key: string
  genre: string
  price: number
  imageUrl: string
  audioUrl: string
  tags: string[]
  likes: number
  plays: number
}

interface BeatCardProps {
  beat: Beat
}

export function BeatCard({ beat }: BeatCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    // In production, this would control actual audio playback
    console.log("[v0] Playing beat:", beat.title)
  }

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={beat.imageUrl || "/placeholder.svg"}
          alt={beat.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Play button overlay */}
        <button
          onClick={handlePlayPause}
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-purple-500 text-white opacity-0 transition-opacity hover:bg-purple-600 group-hover:opacity-100"
        >
          {isPlaying ? (
            <Pause className="h-6 w-6" fill="currentColor" />
          ) : (
            <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
          )}
        </button>

        {/* Tags */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1">
          {beat.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-black/50 text-xs text-white backdrop-blur-sm">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Like button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute right-3 top-3 rounded-full bg-black/50 p-2 backdrop-blur-sm transition-colors hover:bg-black/70"
        >
          <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : "text-white"}`} />
        </button>
      </div>

      <div className="p-4">
        <div className="mb-3">
          <h3 className="mb-1 text-lg font-semibold leading-tight">{beat.title}</h3>
          <p className="text-sm text-muted-foreground">by {beat.producer}</p>
        </div>

        <div className="mb-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
          <span className="rounded bg-muted px-2 py-1">{beat.bpm} BPM</span>
          <span className="rounded bg-muted px-2 py-1">{beat.key}</span>
          <span className="rounded bg-muted px-2 py-1">{beat.genre}</span>
        </div>

        <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Heart className="h-3.5 w-3.5" />
              {beat.likes}
            </span>
            <span className="flex items-center gap-1">
              <Play className="h-3.5 w-3.5" />
              {beat.plays}
            </span>
          </div>
          <div className="text-lg font-bold text-foreground">${beat.price}</div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button className="bg-purple-500 hover:bg-purple-600">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Buy
          </Button>
          <Link href={`/booth/${beat.id}`}>
            <Button variant="outline" className="w-full bg-transparent">
              <Mic className="mr-2 h-4 w-4" />
              Try It
            </Button>
          </Link>
        </div>

        <div className="mt-2 flex gap-2">
          <Button variant="ghost" size="sm" className="flex-1">
            <Share2 className="mr-1 h-3.5 w-3.5" />
            Share
          </Button>
          <Button variant="ghost" size="sm" className="flex-1">
            <MessageCircle className="mr-1 h-3.5 w-3.5" />
            Comment
          </Button>
        </div>
      </div>
    </Card>
  )
}
