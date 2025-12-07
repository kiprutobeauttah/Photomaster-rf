import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, Download, AlertCircle } from "lucide-react"

export default function Billing() {
  const billingHistory = [
    { date: "Dec 1, 2024", description: "Pro Plan - Monthly", amount: "$12.00", status: "Paid" },
    { date: "Nov 1, 2024", description: "Pro Plan - Monthly", amount: "$12.00", status: "Paid" },
    { date: "Oct 1, 2024", description: "Pro Plan - Monthly", amount: "$12.00", status: "Paid" },
    { date: "Sep 1, 2024", description: "Pro Plan - Monthly", amount: "$12.00", status: "Paid" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border py-8">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter">Billing & Subscription</h1>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 max-w-3xl">
          {/* Current Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>You are on the Pro plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <p className="font-semibold">Pro Plan</p>
                  <p className="text-sm text-muted-foreground">$12/month • Renews Dec 1, 2024</p>
                </div>
                <Button variant="outline">Change Plan</Button>
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-sm">Plan includes:</p>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• All editing tools</li>
                  <li>• Unlimited exports</li>
                  <li>• 4K resolution</li>
                  <li>• 50 AI credits/month</li>
                </ul>
              </div>
              <Button className="w-full" variant="destructive">
                Cancel Subscription
              </Button>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>Add or update your payment information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border border-border rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <p className="font-semibold text-sm">Visa ending in 4242</p>
                    <p className="text-xs text-muted-foreground">Expires 12/2025</p>
                  </div>
                </div>
                <Button variant="ghost">Edit</Button>
              </div>
              <Button className="w-full bg-transparent" variant="outline">
                Add Payment Method
              </Button>
            </CardContent>
          </Card>

          {/* Billing Address */}
          <Card>
            <CardHeader>
              <CardTitle>Billing Address</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" defaultValue="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" defaultValue="123 Main St" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="New York" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" defaultValue="10001" />
                </div>
              </div>
              <Button>Save Address</Button>
            </CardContent>
          </Card>

          {/* Billing History */}
          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>Download your invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {billingHistory.map((billing, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{billing.description}</p>
                      <p className="text-xs text-muted-foreground">{billing.date}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="font-semibold text-sm">{billing.amount}</p>
                        <p className="text-xs text-muted-foreground">{billing.status}</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Alerts */}
          <div className="flex gap-3 p-4 bg-muted rounded-lg border border-border">
            <AlertCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium">Need help with your billing?</p>
              <p>Contact our support team at billing@photomaster.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
