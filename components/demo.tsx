"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, RotateCcw, Users } from "lucide-react"

export function Demo() {
  const [time, setTime] = useState(300) // 5 minutes in seconds
  const [isRunning, setIsRunning] = useState(false)
  const [inputMinutes, setInputMinutes] = useState(5)
  const [connectedUsers] = useState(12)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning, time])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleStart = () => setIsRunning(!isRunning)
  const handleReset = () => {
    setIsRunning(false)
    setTime(inputMinutes * 60)
  }

  const handleSetTime = () => {
    setTime(inputMinutes * 60)
    setIsRunning(false)
  }

  return (
    <section className="bg-white dark:bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Live Demo</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Experience real-time synchronization in action
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Badge variant="secondary" className="px-2 py-1">
                  <Users className="mr-1 h-3 w-3" />
                  {connectedUsers} connected
                </Badge>
                <Badge variant="outline" className="px-2 py-1">
                  Room: demo-123
                </Badge>
              </div>
              <CardTitle className="text-2xl">Synchronized Timer</CardTitle>
              <CardDescription>This timer is synchronized across all connected devices</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="text-center">
                <div
                  className={`text-6xl font-mono font-bold ${
                    time <= 10 ? "text-red-500" : "text-blue-600 dark:text-blue-400"
                  } sm:text-8xl`}
                >
                  {formatTime(time)}
                </div>
                {time <= 10 && time > 0 && (
                  <div className="mt-2 text-red-500 font-medium animate-pulse">Time is running out!</div>
                )}
                {time === 0 && <div className="mt-2 text-red-500 font-bold text-xl animate-bounce">Time's Up! 🎉</div>}
              </div>

              <div className="flex justify-center gap-4">
                <Button onClick={handleStart} size="lg" className="px-8" disabled={time === 0}>
                  {isRunning ? (
                    <>
                      <Pause className="mr-2 h-4 w-4" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 h-4 w-4" />
                      Start
                    </>
                  )}
                </Button>
                <Button onClick={handleReset} variant="outline" size="lg" className="px-8 bg-transparent">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset
                </Button>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-end gap-4">
                  <div className="flex-1">
                    <Label htmlFor="minutes">Set Timer (minutes)</Label>
                    <Input
                      id="minutes"
                      type="number"
                      min="1"
                      max="60"
                      value={inputMinutes}
                      onChange={(e) => setInputMinutes(Number(e.target.value))}
                      className="mt-1"
                    />
                  </div>
                  <Button onClick={handleSetTime} variant="outline">
                    Set Time
                  </Button>
                </div>
              </div>

              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                Changes are synchronized in real-time across all connected devices
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
