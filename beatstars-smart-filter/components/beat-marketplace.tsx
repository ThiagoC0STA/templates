"use client"

import { useState, useMemo } from "react"
import { BeatCard } from "@/components/beat-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, SlidersHorizontal, ArrowUpDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MOCK_BEATS, GENRES, type Beat } from "@/lib/mock-data"
import { motion } from "framer-motion"

export function BeatMarketplace() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedGenre, setSelectedGenre] = useState("All")
  const [sortBy, setSortBy] = useState("popular")
  const [displayCount, setDisplayCount] = useState(12)

  const filteredAndSortedBeats = useMemo(() => {
    let filtered = MOCK_BEATS.filter((beat) => {
      const matchesSearch =
        beat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        beat.producer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        beat.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesGenre = selectedGenre === "All" || beat.genre === selectedGenre
      return matchesSearch && matchesGenre
    })

    // Sort beats
    switch (sortBy) {
      case "popular":
        filtered.sort((a, b) => b.plays - a.plays)
        break
      case "likes":
        filtered.sort((a, b) => b.likes - a.likes)
        break
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "newest":
        filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id))
        break
      default:
        break
    }

    return filtered.slice(0, displayCount)
  }, [searchQuery, selectedGenre, sortBy, displayCount])

  return (
    <section id="marketplace" className="container mx-auto px-4 py-12">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold">Browse All Beats</h2>
          <p className="text-muted-foreground">
            Discover {MOCK_BEATS.length}+ premium beats from top producers worldwide
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search beats, producers, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button variant="outline" size="icon" onClick={() => setShowFilters(!showFilters)}>
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="likes">Most Liked</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-6"
        >
          <Card className="p-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Genre:</span>
                <div className="flex flex-wrap gap-2">
                  {GENRES.map((genre) => (
                    <Badge
                      key={genre}
                      variant={selectedGenre === genre ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setSelectedGenre(genre)}
                    >
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      <div className="mb-4 text-sm text-muted-foreground">
        Showing {filteredAndSortedBeats.length} of {MOCK_BEATS.length} beats
      </div>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
      >
        {filteredAndSortedBeats.map((beat, index) => (
          <motion.div
            key={beat.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            <BeatCard beat={beat} />
          </motion.div>
        ))}
      </motion.div>

      {displayCount < MOCK_BEATS.length && (
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setDisplayCount((prev) => Math.min(prev + 12, MOCK_BEATS.length))}
          >
            Load More Beats ({MOCK_BEATS.length - displayCount} remaining)
          </Button>
        </div>
      )}
    </section>
  )
}
