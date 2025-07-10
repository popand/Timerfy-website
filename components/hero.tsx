import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Timer, Users, Zap, Globe } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4 px-3 py-1">
            <Zap className="mr-1 h-3 w-3" />
            Sub-100ms Latency
          </Badge>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
            Distributed Timer System for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Real-time Sync
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            A free, open-source countdown timer system with real-time synchronization across multiple devices. Perfect
            for presentations, events, and collaborative work.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="px-8 py-3">
              <Link href="/timer">
                <Timer className="mr-2 h-4 w-4" />
                Start Timer
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              <Link href="/demo">View Demo</Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              50+ Concurrent Rooms
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Multi-device Support
            </div>
            <div className="flex items-center gap-2">
              <Timer className="h-4 w-4" />
              Auto-cleanup
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
