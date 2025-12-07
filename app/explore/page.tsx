import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart, MessageCircle, Share2, Shuffle } from "lucide-react"

export default function Explore() {
  const exploredits = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title: `Amazing Edit ${i + 1}`,
    author: `Creator ${i + 1}`,
    likes: Math.floor(Math.random() * 500) + 50,
    comments: Math.floor(Math.random() * 100) + 10,
  }))

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border py-8">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore Community Edits</h1>
            <p className="text-muted-foreground md:text-lg">
              Discover amazing edits from our creative community. Get inspired and remix!
            </p>
            <div className="flex gap-2 max-w-md">
              <Input placeholder="Search edits..." className="flex-1" />
              <Button variant="outline" size="icon">
                <Shuffle className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="border-b border-border py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="rounded-full bg-transparent">
              Trending
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              Most Liked
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              Recent
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              Photography
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              Design
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              Creative
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploredits.map((edit) => (
              <Card key={edit.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-muted to-muted-foreground"></div>
                <CardContent className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg">{edit.title}</h3>
                    <p className="text-sm text-muted-foreground">by {edit.author}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{edit.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{edit.comments}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    Remix Edit
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
