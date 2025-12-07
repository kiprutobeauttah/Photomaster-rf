import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, Mail, BookOpen, AlertCircle } from "lucide-react"

export default function Help() {
  const faqs = [
    {
      question: "How do I upload an image to the editor?",
      answer:
        "Click the 'Upload' button on the editor homepage or drag and drop an image directly onto the canvas. Supported formats include JPG, PNG, GIF, and WebP.",
    },
    {
      question: "What is the maximum file size I can upload?",
      answer: "Free users can upload files up to 10MB. Pro and Business users can upload up to 100MB.",
    },
    {
      question: "How do AI credits work?",
      answer:
        "Each AI-powered feature (background removal, object removal, upscaler, etc.) uses a certain number of credits. Pro users get 50 credits/month and Business users get 200 credits/month.",
    },
    {
      question: "Can I export my edits in different formats?",
      answer:
        "Yes! We support export in JPG, PNG, WebP, and GIF formats. You can also adjust the quality and compression settings before exporting.",
    },
    {
      question: "Is there a limit to how many projects I can create?",
      answer:
        "No limit! You can create as many projects as you want. Free users can save up to 5 projects, while Pro and Business users have unlimited storage.",
    },
    {
      question: "How do I collaborate with my team on a project?",
      answer:
        "Team collaboration is available on our Business plan. You can invite team members, assign roles, and work on projects together in real-time.",
    },
  ]

  const resources = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn the basics of our photo editor",
      link: "#",
    },
    {
      icon: AlertCircle,
      title: "Troubleshooting",
      description: "Common issues and solutions",
      link: "#",
    },
    {
      icon: MessageCircle,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      link: "#",
    },
    {
      icon: Mail,
      title: "Contact Support",
      description: "Get help from our support team",
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border bg-muted">
        <div className="container px-4 md:px-6">
          <div className="space-y-6 max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Help & Support</h1>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions and get support from our team.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Search for help..." className="flex-1 bg-background" />
              <Button>Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 space-y-3">
                    <div className="p-2 w-fit rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 border-t border-border">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 border-t border-border bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold">Didn't find what you're looking for?</h2>
            <p className="text-muted-foreground">
              Our support team is here to help. Get in touch with us and we'll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="mailto:support@photomaster.com">Send Email</Link>
              </Button>
              <Button variant="outline">Start Live Chat</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
