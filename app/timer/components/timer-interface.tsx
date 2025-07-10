"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Pause, RotateCcw, Users, Share2, Settings, Check } from "lucide-react"
import { toast } from "sonner"

export function TimerInterface() {
  const [time, setTime] = useState(300)
  const [isRunning, setIsRunning] = useState(false)
  const [inputMinutes, setInputMinutes] = useState(5)
  const [inputSeconds, setInputSeconds] = useState(0)
  const [message, setMessage] = useState("")
  const [roomId] = useState("room-" + Math.random().toString(36).substr(2, 9))
  const [connectedUsers] = useState(1)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    } else if (time === 0 && isRunning) {
      setIsRunning(false)
      toast.success("Timer completed!", {
        description: message || "Time is up!",
      })
    }
    return () => clearInterval(interval)
  }, [isRunning, time, message])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    }
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleStart = () => setIsRunning(!isRunning)

  const handleReset = () => {
    setIsRunning(false)
    setTime(inputMinutes * 60 + inputSeconds)
  }

  const handleSetTime = () => {
    const newTime = inputMinutes * 60 + inputSeconds
    setTime(newTime)
    setIsRunning(false)
  }

  const shareRoom = async () => {
    const url = `${window.location.origin}/timer/${roomId}`
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      toast.success("Room link copied to clipboard!")
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast.error("Failed to copy link")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Timerfy - Distributed Timer</h1>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Badge variant="secondary" className="px-3 py-1">
            <Users className="mr-1 h-3 w-3" />
            {connectedUsers} connected
          </Badge>
          <Badge variant="outline" className="px-3 py-1">
            Room: {roomId}
          </Badge>
          <Button variant="ghost" size="sm" onClick={shareRoom} className="px-3 py-1">
            {copied ? <Check className="mr-1 h-3 w-3" /> : <Share2 className="mr-1 h-3 w-3" />}
            Share Room
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Timer Display</CardTitle>
              <CardDescription>Synchronized across all connected devices</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="text-center">
                <div
                  className={`text-6xl font-mono font-bold transition-colors ${
                    time <= 10 && time > 0
                      ? "text-red-500 animate-pulse"
                      : time === 0
                        ? "text-red-600"
                        : "text-blue-600 dark:text-blue-400"
                  } sm:text-8xl`}
                >
                  {formatTime(time)}
                </div>

                {message && (
                  <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-blue-800 dark:text-blue-200 font-medium">{message}</p>
                  </div>
                )}

                {time === 0 && <div className="mt-4 text-red-500 font-bold text-xl animate-bounce">Time's Up! 🎉</div>}
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
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Timer Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="time" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="time">Time</TabsTrigger>
                  <TabsTrigger value="message">Message</TabsTrigger>
                </TabsList>

                <TabsContent value="time" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="minutes">Minutes</Label>
                      <Input
                        id="minutes"
                        type="number"
                        min="0"
                        max="59"
                        value={inputMinutes}
                        onChange={(e) => setInputMinutes(Number(e.target.value))}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="seconds">Seconds</Label>
                      <Input
                        id="seconds"
                        type="number"
                        min="0"
                        max="59"
                        value={inputSeconds}
                        onChange={(e) => setInputSeconds(Number(e.target.value))}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <Button onClick={handleSetTime} className="w-full">
                    Set Timer
                  </Button>
                </TabsContent>

                <TabsContent value="message" className="space-y-4">
                  <div>
                    <Label htmlFor="message">Timer Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Enter a message to display with the timer..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Room Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Status</span>
                <Badge variant="secondary">Active</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Connected</span>
                <span className="font-medium">
                  {connectedUsers} user{connectedUsers !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Auto-cleanup</span>
                <span className="text-sm">24 hours</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
