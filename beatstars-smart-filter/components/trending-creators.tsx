"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users } from "lucide-react"

const TRENDING_CREATORS = [
  {
    id: "1",
    name: "MC Flow",
    username: "@mcflow",
    avatar: "/rapper-avatar-1.jpg",
    followers: "12.3K",
    tracks: 45,
    verified: true,
    isFollowing: false,
  },
  {
    id: "2",
    name: "Lyric Queen",
    username: "@lyricqueen",
    avatar: "/rapper-avatar-2.jpg",
    followers: "8.7K",
    tracks: 32,
    verified: false,
    isFollowing: true,
  },
  {
    id: "3",
    name: "Beat Seeker",
    username: "@beatseeker",
    avatar: "/rapper-avatar-3.jpg",
    followers: "5.2K",
    tracks: 28,
    verified: false,
    isFollowing: false,
  },
  {
    id: "4",
    name: "Rhyme Master",
    username: "@rhymemaster",
    avatar: "/rapper-avatar-4.jpg",
    followers: "15.8K",
    tracks: 67,
    verified: true,
    isFollowing: false,
  },
  {
    id: "5",
    name: "Flow State",
    username: "@flowstate",
    avatar: "/rapper-avatar-5.jpg",
    followers: "9.1K",
    tracks: 41,
    verified: false,
    isFollowing: false,
  },
]

export function TrendingCreators() {
  const [creators, setCreators] = useState(TRENDING_CREATORS)

  const handleFollow = (creatorId: string) => {
    setCreators(
      creators.map((creator) =>
        creator.id === creatorId ? { ...creator, isFollowing: !creator.isFollowing } : creator,
      ),
    )
  }

  return (
    <div className="space-y-6">
      {/* Trending Creators */}
      <Card className="p-6">
        <div className="mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-purple-400" />
          <h2 className="text-lg font-semibold">Trending Creators</h2>
        </div>

        <div className="space-y-4">
          {creators.map((creator) => (
            <div key={creator.id} className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={creator.avatar || "/placeholder.svg"} />
                <AvatarFallback>{creator.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center gap-1">
                  <p className="truncate font-semibold text-sm">{creator.name}</p>
                  {creator.verified && (
                    <Badge variant="secondary" className="h-4 bg-purple-500/10 px-1 text-xs text-purple-400">
                      ✓
                    </Badge>
                  )}
                </div>
                <p className="truncate text-xs text-muted-foreground">{creator.username}</p>
                <p className="text-xs text-muted-foreground">
                  {creator.followers} followers • {creator.tracks} tracks
                </p>
              </div>
              <Button
                size="sm"
                variant={creator.isFollowing ? "outline" : "default"}
                onClick={() => handleFollow(creator.id)}
                className={creator.isFollowing ? "bg-transparent" : "bg-purple-500 hover:bg-purple-600"}
              >
                {creator.isFollowing ? "Following" : "Follow"}
              </Button>
            </div>
          ))}
        </div>

        <Button variant="outline" className="mt-4 w-full bg-transparent">
          View All Creators
        </Button>
      </Card>

      {/* Community Stats */}
      <Card className="bg-gradient-to-br from-purple-500/10 to-orange-500/10 p-6">
        <div className="mb-4 flex items-center gap-2">
          <Users className="h-5 w-5 text-purple-400" />
          <h2 className="text-lg font-semibold">Community Stats</h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Active Artists</span>
            <span className="text-lg font-bold text-purple-400">24.5K</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Tracks Shared</span>
            <span className="text-lg font-bold text-orange-400">156K</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Beats Purchased</span>
            <span className="text-lg font-bold text-purple-400">89K</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Hours Recorded</span>
            <span className="text-lg font-bold text-orange-400">12.3K</span>
          </div>
        </div>
      </Card>

      {/* Suggested Tags */}
      <Card className="p-6">
        <h2 className="mb-4 text-lg font-semibold">Trending Tags</h2>
        <div className="flex flex-wrap gap-2">
          {["#Trap", "#BoomBap", "#Freestyle", "#NewMusic", "#HipHop", "#Bars", "#Studio", "#Collab"].map((tag) => (
            <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-purple-500/20">
              {tag}
            </Badge>
          ))}
        </div>
      </Card>
    </div>
  )
}
