"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Pause, RotateCcw, Users, Plus, Trash2, Clock, CheckCircle } from "lucide-react"

interface Timer {
  id: string
  name: string
  duration: number
  remaining: number
  isRunning: boolean
  isCompleted: boolean
  color: string
}

export function IOSTimerApp() {
  const [timers, setTimers] = useState<Timer[]>([
    {
      id: "1",
      name: "Main Presentation",
      duration: 300,
      remaining: 300,
      isRunning: false,
      isCompleted: false,
      color: "bg-blue-500",
    },
    {
      id: "2",
      name: "Q&A Session",
      duration: 600,
      remaining: 600,
      isRunning: false,
      isCompleted: false,
      color: "bg-green-500",
    },
    {
      id: "3",
      name: "Break Time",
      duration: 900,
      remaining: 450,
      isRunning: true,
      isCompleted: false,
      color: "bg-purple-500",
    },
  ])

  const [connectedUsers] = useState(12)
  const [roomId] = useState("demo-123")
  const [newTimerName, setNewTimerName] = useState("")
  const [newTimerMinutes, setNewTimerMinutes] = useState(5)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prev) =>
        prev.map((timer) => {
          if (timer.isRunning && timer.remaining > 0) {
            const newRemaining = timer.remaining - 1
            return {
              ...timer,
              remaining: newRemaining,
              isCompleted: newRemaining === 0,
              isRunning: newRemaining > 0,
            }
          }
          return timer
        }),
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const toggleTimer = (id: string) => {
    setTimers((prev) => prev.map((timer) => (timer.id === id ? { ...timer, isRunning: !timer.isRunning } : timer)))
  }

  const resetTimer = (id: string) => {
    setTimers((prev) =>
      prev.map((timer) =>
        timer.id === id
          ? {
              ...timer,
              remaining: timer.duration,
              isRunning: false,
              isCompleted: false,
            }
          : timer,
      ),
    )
  }

  const deleteTimer = (id: string) => {
    setTimers((prev) => prev.filter((timer) => timer.id !== id))
  }

  const addTimer = () => {
    if (newTimerName.trim()) {
      const colors = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-orange-500", "bg-red-500", "bg-indigo-500"]
      const newTimer: Timer = {
        id: Date.now().toString(),
        name: newTimerName,
        duration: newTimerMinutes * 60,
        remaining: newTimerMinutes * 60,
        isRunning: false,
        isCompleted: false,
        color: colors[timers.length % colors.length],
      }
      setTimers((prev) => [...prev, newTimer])
      setNewTimerName("")
      setNewTimerMinutes(5)
    }
  }

  const runningTimers = timers.filter((t) => t.isRunning).length
  const completedTimers = timers.filter((t) => t.isCompleted).length

  return (
    <div className="max-w-md mx-auto">
      <div className="w-full bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden">
        {/* iOS Status Bar */}
        <div className="bg-white dark:bg-gray-900 px-6 py-2 flex justify-between items-center text-sm font-medium">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-black dark:bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-black dark:bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-black dark:bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
            </div>
            <div className="w-6 h-3 border border-black dark:border-white rounded-sm">
              <div className="w-4 h-2 bg-green-500 rounded-sm m-0.5"></div>
            </div>
          </div>
        </div>

        {/* App Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs">
                <Users className="w-3 h-3 mr-1" />
                {connectedUsers} connected
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs">
                Room: {roomId}
              </Badge>
            </div>
          </div>
          <h1 className="text-xl font-bold">Multiple Timers</h1>
          <div className="flex items-center gap-4 mt-2 text-sm">
            <div className="flex items-center gap-1">
              <Play className="w-3 h-3" />
              <span>{runningTimers} running</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              <span>{completedTimers} completed</span>
            </div>
          </div>
        </div>

        <div className="h-[600px] overflow-y-auto">
          <Tabs defaultValue="timers" className="w-full">
            <TabsList className="grid w-full grid-cols-2 m-4 mb-0">
              <TabsTrigger value="timers" className="text-sm">
                Active Timers
              </TabsTrigger>
              <TabsTrigger value="add" className="text-sm">
                Add Timer
              </TabsTrigger>
            </TabsList>

            <TabsContent value="timers" className="p-4 space-y-3">
              {timers.length === 0 ? (
                <div className="text-center py-12">
                  <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">No timers yet</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500">Add your first timer to get started</p>
                </div>
              ) : (
                timers.map((timer) => (
                  <TimerCard
                    key={timer.id}
                    timer={timer}
                    onToggle={() => toggleTimer(timer.id)}
                    onReset={() => resetTimer(timer.id)}
                    onDelete={() => deleteTimer(timer.id)}
                    formatTime={formatTime}
                  />
                ))
              )}
            </TabsContent>

            <TabsContent value="add" className="p-4 space-y-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Timer Name</label>
                  <Input
                    value={newTimerName}
                    onChange={(e) => setNewTimerName(e.target.value)}
                    placeholder="Enter timer name..."
                    className="text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Duration (minutes)
                  </label>
                  <Input
                    type="number"
                    value={newTimerMinutes}
                    onChange={(e) => setNewTimerMinutes(Number(e.target.value))}
                    min="1"
                    max="120"
                    className="text-base"
                  />
                </div>

                <Button onClick={addTimer} className="w-full h-12 text-base" disabled={!newTimerName.trim()}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Timer
                </Button>

                {/* Quick Presets */}
                <div className="pt-4 border-t">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Quick Add</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setNewTimerName("Pomodoro")
                        setNewTimerMinutes(25)
                      }}
                      className="bg-transparent"
                    >
                      25min Pomodoro
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setNewTimerName("Short Break")
                        setNewTimerMinutes(5)
                      }}
                      className="bg-transparent"
                    >
                      5min Break
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setNewTimerName("Long Break")
                        setNewTimerMinutes(15)
                      }}
                      className="bg-transparent"
                    >
                      15min Break
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setNewTimerName("Meeting")
                        setNewTimerMinutes(30)
                      }}
                      className="bg-transparent"
                    >
                      30min Meeting
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* iOS Home Indicator */}
        <div className="flex justify-center py-2">
          <div className="w-32 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

function TimerCard({
  timer,
  onToggle,
  onReset,
  onDelete,
  formatTime,
}: {
  timer: Timer
  onToggle: () => void
  onReset: () => void
  onDelete: () => void
  formatTime: (seconds: number) => string
}) {
  const progress = ((timer.duration - timer.remaining) / timer.duration) * 100

  return (
    <Card className="overflow-hidden border-0 shadow-sm bg-white dark:bg-gray-800">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${timer.color}`}></div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{timer.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{formatTime(timer.duration)} total</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {timer.isCompleted && <CheckCircle className="w-4 h-4 text-green-500" />}
            {timer.isRunning && <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>}
            <Button
              variant="ghost"
              size="sm"
              onClick={onDelete}
              className="h-6 w-6 p-0 text-gray-400 hover:text-red-500"
            >
              <Trash2 className="w-3 h-3" />
            </Button>
          </div>
        </div>

        <div className="text-center mb-4">
          <div
            className={`text-3xl font-mono font-bold ${
              timer.isCompleted
                ? "text-green-600 dark:text-green-400"
                : timer.remaining <= 10 && timer.remaining > 0
                  ? "text-red-500 animate-pulse"
                  : "text-gray-900 dark:text-white"
            }`}
          >
            {formatTime(timer.remaining)}
          </div>
          {timer.isCompleted && (
            <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-1">Completed! 🎉</p>
          )}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-4">
          <div
            className={`h-1.5 rounded-full transition-all duration-1000 ${timer.color}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex justify-center gap-3">
          <Button onClick={onToggle} size="sm" className="px-6 h-8 text-sm" disabled={timer.isCompleted}>
            {timer.isRunning ? (
              <>
                <Pause className="w-3 h-3 mr-1" />
                Pause
              </>
            ) : (
              <>
                <Play className="w-3 h-3 mr-1" />
                Start
              </>
            )}
          </Button>
          <Button onClick={onReset} variant="outline" size="sm" className="px-4 h-8 text-sm bg-transparent">
            <RotateCcw className="w-3 h-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
