import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, ImageIcon, Zap, TrendingUp } from "lucide-react"

export default function Admin() {
  const stats = [
    { label: "Total Users", value: "12,453", icon: Users, change: "+12.5%" },
    { label: "Active Projects", value: "45,821", icon: ImageIcon, change: "+8.2%" },
    { label: "AI Usage", value: "2.4M credits", icon: Zap, change: "+23.1%" },
    { label: "Revenue", value: "$127,450", icon: TrendingUp, change: "+18.7%" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border py-8">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tighter">Admin Dashboard</h1>
            <div className="text-sm text-muted-foreground">Restricted Access</div>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12">
        <div className="space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm">{stat.label}</CardTitle>
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-12 bg-transparent" asChild>
                <Link href="/admin/users">Manage Users</Link>
              </Button>
              <Button variant="outline" className="h-12 bg-transparent" asChild>
                <Link href="/admin/templates">Manage Templates</Link>
              </Button>
              <Button variant="outline" className="h-12 bg-transparent" asChild>
                <Link href="/admin/usage">AI Usage Logs</Link>
              </Button>
              <Button variant="outline" className="h-12 bg-transparent" asChild>
                <Link href="/admin/revenue">Revenue</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions across the platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">User activity {index + 1}</p>
                    <p className="text-xs text-muted-foreground">Just now</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
