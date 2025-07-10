"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Timer, Menu, X, Github, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Timer className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">Timerfy</span>
            <Badge variant="secondary" className="hidden sm:inline-flex">
              Open Source
            </Badge>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/timer" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Timer
            </Link>
            <Link href="/demo" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Demo
            </Link>
            <Link
              href="https://github.com/popand/Timerfy"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/timer" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Timer
              </Link>
              <Link href="/demo" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Demo
              </Link>
              <Link
                href="https://github.com/popand/Timerfy"
                className="text-sm font-medium hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
