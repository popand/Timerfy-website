import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Demo } from "@/components/demo"
import { Stats } from "@/components/stats"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Features />
      <Demo />
    </main>
  )
}
