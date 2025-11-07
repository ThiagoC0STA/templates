import { CommunityFeed } from "@/components/community-feed"
import { TrendingCreators } from "@/components/trending-creators"

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Community</h1>
          <p className="text-muted-foreground">Discover what artists are creating and share your own work</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CommunityFeed />
          </div>
          <div>
            <TrendingCreators />
          </div>
        </div>
      </div>
    </main>
  )
}
