import { Zap, Layers, Smartphone, Gauge, Trash2, Settings, Code, Wifi } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Real-time Synchronization",
      description: "Sub-100ms latency across all connected devices with WebSocket connections.",
      color: "text-yellow-500",
    },
    {
      icon: Layers,
      title: "Decoupled Architecture",
      description: "Independent client and server applications for maximum flexibility.",
      color: "text-blue-500",
    },
    {
      icon: Smartphone,
      title: "Multi-device Support",
      description: "Works seamlessly across desktop, tablet, and mobile devices.",
      color: "text-green-500",
    },
    {
      icon: Gauge,
      title: "High Performance",
      description: "Supports 50+ concurrent rooms with 20+ viewers each.",
      color: "text-purple-500",
    },
    {
      icon: Trash2,
      title: "Auto-cleanup",
      description: "Rooms automatically expire after 24 hours to maintain performance.",
      color: "text-red-500",
    },
    {
      icon: Settings,
      title: "Customizable",
      description: "Flexible timer configurations and message system.",
      color: "text-orange-500",
    },
    {
      icon: Code,
      title: "API-First",
      description: "Complete functionality accessible via REST APIs.",
      color: "text-indigo-500",
    },
    {
      icon: Wifi,
      title: "WebSocket Events",
      description: "Live updates without polling for real-time experience.",
      color: "text-teal-500",
    },
  ]

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Powerful Features
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Built with modern technology stack for optimal performance and reliability
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
