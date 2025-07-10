import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { Navigation } from "./components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Timerfy - Distributed Timer System",
  description:
    "A free, open-source distributed countdown timer system with real-time synchronization across multiple devices.",
  keywords: "timer, countdown, distributed, real-time, synchronization, websocket",
  authors: [{ name: "Timerfy Team" }],
  openGraph: {
    title: "Timerfy - Distributed Timer System",
    description: "Real-time synchronized countdown timers across multiple devices",
    type: "website",
  },
    generator: 'Next.js'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
