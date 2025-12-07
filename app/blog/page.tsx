import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowUpRight } from "lucide-react"

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "10 Essential Photo Editing Tips for Beginners",
      excerpt: "Learn the fundamentals of photo editing with these essential tips and techniques.",
      category: "Tutorial",
      date: "Dec 5, 2024",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "How to Use AI Background Removal Effectively",
      excerpt: "Discover how to get perfect results with our AI-powered background removal tool.",
      category: "Guide",
      date: "Dec 3, 2024",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Portrait Editing Workflow for Professional Results",
      excerpt: "Master the art of portrait editing with our step-by-step professional workflow.",
      category: "Tutorial",
      date: "Dec 1, 2024",
      readTime: "12 min read",
    },
    {
      id: 4,
      title: "The Best Photo Editing Presets for Social Media",
      excerpt: "Explore our curated collection of presets designed for Instagram, TikTok, and more.",
      category: "Case Study",
      date: "Nov 28, 2024",
      readTime: "6 min read",
    },
    {
      id: 5,
      title: "Batch Editing: Save Hours on Repetitive Tasks",
      excerpt: "Learn how to batch process multiple images and save precious editing time.",
      category: "Tutorial",
      date: "Nov 25, 2024",
      readTime: "7 min read",
    },
    {
      id: 6,
      title: "Color Grading Masterclass: From Basics to Advanced",
      excerpt: "Dive deep into color grading techniques that will elevate your photo editing.",
      category: "Tutorial",
      date: "Nov 22, 2024",
      readTime: "15 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border py-12">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">PhotoMaster Blog</h1>
            <p className="text-muted-foreground md:text-lg max-w-2xl">
              Tutorials, tips, and inspiring stories from our community of creators.
            </p>
            <div className="flex gap-2 max-w-md">
              <Input placeholder="Search articles..." className="flex-1" />
              <Button>Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-border py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="rounded-full bg-transparent">
              All
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              Tutorials
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              Tips & Tricks
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              AI Features
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="flex flex-col hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted-foreground"></div>
                <CardHeader className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-primary">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-2 mt-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    <Button variant="ghost" size="icon">
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
