import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      description: "Perfect to get started",
      price: "$0",
      period: "/month",
      cta: "Get Started",
      features: [
        { name: "Basic editing tools", included: true },
        { name: "5 exports per month", included: true },
        { name: "720p resolution", included: true },
        { name: "Community templates", included: true },
        { name: "AI tools", included: false },
        { name: "Priority support", included: false },
      ],
    },
    {
      name: "Pro",
      description: "For serious creators",
      price: "$12",
      period: "/month",
      cta: "Start Pro Trial",
      popular: true,
      features: [
        { name: "All editing tools", included: true },
        { name: "Unlimited exports", included: true },
        { name: "4K resolution", included: true },
        { name: "Premium templates", included: true },
        { name: "50 AI credits/month", included: true },
        { name: "Email support", included: true },
      ],
    },
    {
      name: "Business",
      description: "For teams & organizations",
      price: "$29",
      period: "/month",
      cta: "Contact Sales",
      features: [
        { name: "Everything in Pro", included: true },
        { name: "Team collaboration", included: true },
        { name: "Brand asset library", included: true },
        { name: "200 AI credits/month", included: true },
        { name: "Advanced analytics", included: true },
        { name: "24/7 priority support", included: true },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h1>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              Choose the perfect plan for your creative needs. All plans include a 7-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative flex flex-col ${plan.popular ? "md:scale-105 border-primary shadow-lg" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-6">
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                    <Link href="/signup">{plan.cta}</Link>
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature.name} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? "" : "text-muted-foreground"}>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="space-y-2">
              <h3 className="font-semibold">Can I upgrade or downgrade anytime?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! You can change your plan at any time. Changes take effect on your next billing cycle.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Is there a free trial?</h3>
              <p className="text-muted-foreground text-sm">
                All plans include a 7-day free trial. No credit card required to start.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">What payment methods do you accept?</h3>
              <p className="text-muted-foreground text-sm">
                We accept all major credit cards, PayPal, and Apple Pay for maximum convenience.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Can I cancel anytime?</h3>
              <p className="text-muted-foreground text-sm">
                Cancel your subscription anytime with no questions asked or hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
