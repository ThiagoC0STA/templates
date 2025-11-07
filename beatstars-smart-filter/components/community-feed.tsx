"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Share2, Play, Pause, MoreHorizontal, Send } from "lucide-react"
import Image from "next/image"

// Mock feed data
const MOCK_POSTS = [
  {
    id: "1",
    user: {
      name: "MC Flow",
      username: "@mcflow",
      avatar: "/rapper-avatar-1.jpg",
      verified: true,
    },
    content: "Just dropped some fire bars over this beat! What y'all think? 🔥",
    beat: {
      title: "Midnight Hustle",
      producer: "TriuneBeats",
    },
    media: {
      type: "audio" as const,
      thumbnail: "/dark-trap-beat-cover.jpg",
      duration: "2:34",
    },
    likes: 234,
    comments: 45,
    shares: 12,
    timestamp: "2 hours ago",
    isLiked: false,
  },
  {
    id: "2",
    user: {
      name: "Lyric Queen",
      username: "@lyricqueen",
      avatar: "/rapper-avatar-2.jpg",
      verified: false,
    },
    content: "New freestyle session in the booth. Still working on the hook but the verses are tight!",
    beat: {
      title: "Golden Hour",
      producer: "TriuneBeats",
    },
    media: {
      type: "video" as const,
      thumbnail: "/golden-sunset-hip-hop.jpg",
      duration: "3:12",
    },
    likes: 567,
    comments: 89,
    shares: 34,
    timestamp: "5 hours ago",
    isLiked: true,
  },
  {
    id: "3",
    user: {
      name: "Beat Seeker",
      username: "@beatseeker",
      avatar: "/rapper-avatar-3.jpg",
      verified: false,
    },
    content: "The AI filter found me the PERFECT beat for my new track. This platform is a game changer!",
    beat: {
      title: "Victory Lap",
      producer: "TriuneBeats",
    },
    media: {
      type: "audio" as const,
      thumbnail: "/victory-championship-energy.jpg",
      duration: "2:58",
    },
    likes: 189,
    comments: 23,
    shares: 8,
    timestamp: "1 day ago",
    isLiked: false,
  },
]

export function CommunityFeed() {
  const [posts, setPosts] = useState(MOCK_POSTS)
  const [newPost, setNewPost] = useState("")
  const [playingId, setPlayingId] = useState<string | null>(null)

  const handleLike = (postId: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    )
  }

  const handlePlay = (postId: string) => {
    setPlayingId(playingId === postId ? null : postId)
    console.log("[v0] Playing post:", postId)
  }

  return (
    <div className="space-y-6">
      {/* Create Post */}
      <Card className="p-6">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>You</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="Share your latest track or thoughts with the community..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="mb-3 min-h-[100px] resize-none"
            />
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Play className="mr-2 h-4 w-4" />
                  Attach Recording
                </Button>
              </div>
              <Button disabled={!newPost.trim()} className="bg-purple-500 hover:bg-purple-600">
                <Send className="mr-2 h-4 w-4" />
                Post
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Feed Posts */}
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <div className="p-6">
            {/* Post Header */}
            <div className="mb-4 flex items-start justify-between">
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src={post.user.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{post.user.name}</span>
                    {post.user.verified && (
                      <Badge variant="secondary" className="h-5 bg-purple-500/10 px-1.5 text-xs text-purple-400">
                        ✓
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{post.user.username}</p>
                  <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>

            {/* Post Content */}
            <p className="mb-4 text-pretty">{post.content}</p>

            {/* Media */}
            <div className="relative mb-4 overflow-hidden rounded-lg">
              <div className="relative aspect-video">
                <Image
                  src={post.media.thumbnail || "/placeholder.svg"}
                  alt={post.beat.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Play button */}
                <button
                  onClick={() => handlePlay(post.id)}
                  className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-purple-500 text-white transition-transform hover:scale-110 hover:bg-purple-600"
                >
                  {playingId === post.id ? (
                    <Pause className="h-6 w-6" fill="currentColor" />
                  ) : (
                    <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
                  )}
                </button>

                {/* Beat info */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="rounded-lg bg-black/50 p-2 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-white">{post.beat.title}</p>
                    <p className="text-xs text-white/70">
                      by {post.beat.producer} • {post.media.duration}
                    </p>
                  </div>
                </div>

                {/* Media type badge */}
                <Badge className="absolute right-3 top-3 bg-black/50 backdrop-blur-sm">
                  {post.media.type === "video" ? "Video" : "Audio"}
                </Badge>
              </div>
            </div>

            {/* Engagement Stats */}
            <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
              <span>{post.likes} likes</span>
              <span>{post.comments} comments</span>
              <span>{post.shares} shares</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 border-t border-border pt-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleLike(post.id)}
                className={`flex-1 ${post.isLiked ? "text-red-500" : ""}`}
              >
                <Heart className={`mr-2 h-4 w-4 ${post.isLiked ? "fill-current" : ""}`} />
                Like
              </Button>
              <Button variant="ghost" size="sm" className="flex-1">
                <MessageCircle className="mr-2 h-4 w-4" />
                Comment
              </Button>
              <Button variant="ghost" size="sm" className="flex-1">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </Card>
      ))}

      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Posts
        </Button>
      </div>
    </div>
  )
}
