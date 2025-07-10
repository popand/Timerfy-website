"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Timer,
  Users,
  Share2,
  Play,
  Pause,
  RotateCcw,
  Plus,
  Settings,
  Bell,
  Zap,
  Globe,
  ArrowRight,
  Check,
  QrCode,
} from "lucide-react"

export function MobileScreens() {
  return (
    <div className="max-w-6xl mx-auto">
      <Tabs defaultValue="onboarding" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
          <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="timer">Timer</TabsTrigger>
          <TabsTrigger value="join">Join Room</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="onboarding">
          <OnboardingScreens />
        </TabsContent>

        <TabsContent value="home">
          <HomeScreens />
        </TabsContent>

        <TabsContent value="timer">
          <TimerScreens />
        </TabsContent>

        <TabsContent value="join">
          <JoinRoomScreens />
        </TabsContent>

        <TabsContent value="settings">
          <SettingsScreens />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function OnboardingScreens() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Welcome Screen */}
      <MobileFrame title="Welcome Screen">
        <div className="flex flex-col h-full bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6">
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Timer className="w-10 h-10" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Welcome to Timerfy</h1>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Synchronized countdown timers across all your devices with real-time updates
            </p>
            <div className="space-y-3 w-full">
              <div className="flex items-center gap-3 text-sm">
                <Zap className="w-4 h-4 text-yellow-300" />
                <span>Sub-100ms synchronization</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Users className="w-4 h-4 text-green-300" />
                <span>Multi-device support</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Globe className="w-4 h-4 text-blue-300" />
                <span>Works everywhere</span>
              </div>
            </div>
          </div>
          <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </MobileFrame>

      {/* Features Screen */}
      <MobileFrame title="Features Overview">
        <div className="flex flex-col h-full bg-white dark:bg-gray-900 p-6">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Powerful Features</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Everything you need for synchronized timing</p>
          </div>

          <div className="flex-1 space-y-4">
            <FeatureCard
              icon={<Zap className="w-5 h-5 text-yellow-500" />}
              title="Real-time Sync"
              description="Sub-100ms latency across devices"
            />
            <FeatureCard
              icon={<Users className="w-5 h-5 text-blue-500" />}
              title="Multi-device"
              description="Works on phone, tablet, desktop"
            />
            <FeatureCard
              icon={<Share2 className="w-5 h-5 text-green-500" />}
              title="Easy Sharing"
              description="Share rooms with QR codes"
            />
            <FeatureCard
              icon={<Bell className="w-5 h-5 text-purple-500" />}
              title="Smart Alerts"
              description="Customizable notifications"
            />
          </div>

          <Button className="w-full">Continue</Button>
        </div>
      </MobileFrame>

      {/* Permission Screen */}
      <MobileFrame title="Permissions">
        <div className="flex flex-col h-full bg-white dark:bg-gray-900 p-6">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Enable Notifications</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Get notified when timers complete or when you're invited to rooms
            </p>
          </div>

          <div className="flex-1 space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Check className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-blue-900 dark:text-blue-100">Timer Alerts</span>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-300">Get notified when countdown timers reach zero</p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Check className="w-4 h-4 text-green-600" />
                <span className="font-medium text-green-900 dark:text-green-100">Room Invites</span>
              </div>
              <p className="text-sm text-green-700 dark:text-green-300">Receive invitations to join timer rooms</p>
            </div>
          </div>

          <div className="space-y-3">
            <Button className="w-full">Enable Notifications</Button>
            <Button variant="ghost" className="w-full">
              Skip for Now
            </Button>
          </div>
        </div>
      </MobileFrame>
    </div>
  )
}

function HomeScreens() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Main Home Screen */}
      <MobileFrame title="Home Dashboard">
        <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900">
          {/* Header */}
          <div className="bg-white dark:bg-gray-800 p-4 border-b">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">Timerfy</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Ready to sync</p>
              </div>
              <Button size="sm" variant="ghost">
                <Settings className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex gap-2">
              <Badge variant="secondary" className="text-xs">
                <Users className="w-3 h-3 mr-1" />3 active rooms
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Zap className="w-3 h-3 mr-1" />
                Connected
              </Badge>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-4">
            <div className="grid grid-cols-2 gap-3 mb-6">
              <Button className="h-20 flex-col gap-2 bg-gradient-to-br from-blue-500 to-blue-600">
                <Plus className="w-6 h-6" />
                <span className="text-sm">New Timer</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2 bg-white dark:bg-gray-800">
                <QrCode className="w-6 h-6" />
                <span className="text-sm">Join Room</span>
              </Button>
            </div>

            {/* Recent Rooms */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Recent Rooms</h3>
              <div className="space-y-3">
                <RoomCard name="Team Meeting" time="05:30" users={4} status="active" />
                <RoomCard name="Presentation Timer" time="Completed" users={12} status="completed" />
                <RoomCard name="Study Session" time="25:00" users={1} status="paused" />
              </div>
            </div>
          </div>
        </div>
      </MobileFrame>

      {/* Create Timer Screen */}
      <MobileFrame title="Create New Timer">
        <div className="flex flex-col h-full bg-white dark:bg-gray-900 p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">New Timer</h2>
            <Button variant="ghost" size="sm">
              Cancel
            </Button>
          </div>

          <div className="flex-1 space-y-6">
            {/* Timer Display */}
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
              <div className="text-4xl font-mono font-bold text-blue-600 dark:text-blue-400 mb-2">25:00</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Pomodoro Timer</p>
            </div>

            {/* Quick Presets */}
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Quick Presets</h3>
              <div className="grid grid-cols-3 gap-2">
                <PresetButton time="5:00" label="Break" />
                <PresetButton time="15:00" label="Short" />
                <PresetButton time="25:00" label="Pomodoro" active />
                <PresetButton time="30:00" label="Meeting" />
                <PresetButton time="45:00" label="Focus" />
                <PresetButton time="60:00" label="Hour" />
              </div>
            </div>

            {/* Custom Time */}
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Custom Time</h3>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="text-xs text-gray-600 dark:text-gray-300">Minutes</label>
                  <div className="mt-1 p-3 border rounded-lg text-center font-mono">25</div>
                </div>
                <div className="flex-1">
                  <label className="text-xs text-gray-600 dark:text-gray-300">Seconds</label>
                  <div className="mt-1 p-3 border rounded-lg text-center font-mono">00</div>
                </div>
              </div>
            </div>
          </div>

          <Button className="w-full h-12">Create Timer Room</Button>
        </div>
      </MobileFrame>

      {/* Room Options */}
      <MobileFrame title="Room Settings">
        <div className="flex flex-col h-full bg-white dark:bg-gray-900 p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Room Settings</h2>
          </div>

          <div className="flex-1 space-y-4">
            <div className="p-4 border rounded-lg">
              <label className="font-medium text-gray-900 dark:text-white">Room Name</label>
              <input
                className="w-full mt-2 p-2 border rounded text-sm"
                placeholder="Enter room name..."
                defaultValue="Team Meeting Timer"
              />
            </div>

            <div className="p-4 border rounded-lg">
              <label className="font-medium text-gray-900 dark:text-white">Message</label>
              <textarea
                className="w-full mt-2 p-2 border rounded text-sm h-20 resize-none"
                placeholder="Optional message to display..."
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Auto-start</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Start when first user joins</div>
                </div>
                <div className="w-10 h-6 bg-blue-500 rounded-full"></div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Sound alerts</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Play sound when timer ends</div>
                </div>
                <div className="w-10 h-6 bg-gray-300 rounded-full"></div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Public room</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Allow anyone to join</div>
                </div>
                <div className="w-10 h-6 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>

          <Button className="w-full h-12">Create Room</Button>
        </div>
      </MobileFrame>
    </div>
  )
}

function TimerScreens() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Active Timer */}
      <MobileFrame title="Active Timer">
        <div className="flex flex-col h-full bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          {/* Header */}
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                <Users className="w-3 h-3 mr-1" />4 users
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                Room: ABC123
              </Badge>
            </div>
            <Button variant="ghost" size="sm" className="text-white">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>

          {/* Timer Display */}
          <div className="flex-1 flex flex-col justify-center items-center px-4">
            <div className="text-center mb-8">
              <h2 className="text-lg font-medium mb-2 text-blue-100">Team Meeting</h2>
              <div className="text-6xl font-mono font-bold mb-4">15:42</div>
              <p className="text-blue-100">Time remaining</p>
            </div>

            <div className="w-full max-w-xs">
              <div className="w-full bg-white/20 rounded-full h-2 mb-6">
                <div className="bg-white h-2 rounded-full" style={{ width: "65%" }}></div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="p-6">
            <div className="flex justify-center gap-4 mb-4">
              <Button size="lg" className="bg-white/20 hover:bg-white/30 border-0 px-8">
                <Pause className="w-5 h-5 mr-2" />
                Pause
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 px-6"
              >
                <RotateCcw className="w-5 h-5" />
              </Button>
            </div>

            <div className="text-center text-sm text-blue-100">Synchronized across all devices</div>
          </div>
        </div>
      </MobileFrame>

      {/* Timer Completed */}
      <MobileFrame title="Timer Complete">
        <div className="flex flex-col h-full bg-white dark:bg-gray-900">
          <div className="flex-1 flex flex-col justify-center items-center p-6 text-center">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
              <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Time's Up! 🎉</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6">Your team meeting timer has completed</p>

            <div className="w-full max-w-sm space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Duration</span>
                  <span className="font-mono font-bold">30:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Participants</span>
                  <span className="font-medium">4 users</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-3">
            <Button className="w-full">Start New Timer</Button>
            <Button variant="outline" className="w-full bg-transparent">
              Share Results
            </Button>
          </div>
        </div>
      </MobileFrame>

      {/* Timer Paused */}
      <MobileFrame title="Timer Paused">
        <div className="flex flex-col h-full bg-white dark:bg-gray-900">
          {/* Header */}
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                >
                  Paused
                </Badge>
                <Badge variant="outline">
                  <Users className="w-3 h-3 mr-1" />4 users
                </Badge>
              </div>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Timer Display */}
          <div className="flex-1 flex flex-col justify-center items-center px-4">
            <div className="text-center mb-8">
              <h2 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Study Session</h2>
              <div className="text-5xl font-mono font-bold mb-4 text-gray-400 dark:text-gray-500">12:34</div>
              <p className="text-gray-500 dark:text-gray-400">Timer paused</p>
            </div>

            <div className="w-full max-w-xs mb-8">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-orange-400 h-2 rounded-full" style={{ width: "45%" }}></div>
              </div>
            </div>

            <div className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              Waiting for host to resume...
            </div>
          </div>

          {/* Controls */}
          <div className="p-6">
            <div className="flex justify-center gap-4">
              <Button size="lg" className="px-8">
                <Play className="w-5 h-5 mr-2" />
                Resume
              </Button>
              <Button size="lg" variant="outline" className="px-6 bg-transparent">
                <RotateCcw className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </MobileFrame>
    </div>
  )
}

function JoinRoomScreens() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Join by Code */}
      <MobileFrame title="Join Room">
        <div className="flex flex-col h-full bg-white dark:bg-gray-900 p-4">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Join Timer Room</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Enter the room code to join a synchronized timer</p>
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Room Code</label>
              <input
                className="w-full p-4 text-center text-2xl font-mono border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:bg-gray-800"
                placeholder="ABC123"
                maxLength={6}
              />
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Or</p>
              <Button variant="outline" className="bg-transparent">
                <QrCode className="w-4 h-4 mr-2" />
                Scan QR Code
              </Button>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Recent Rooms</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 hover:bg-blue-100 dark:hover:bg-blue-800/30 rounded cursor-pointer">
                  <div>
                    <div className="font-medium text-sm">Team Meeting</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">ABC123 • 4 users</div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-blue-100 dark:hover:bg-blue-800/30 rounded cursor-pointer">
                  <div>
                    <div className="font-medium text-sm">Study Session</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">XYZ789 • 1 user</div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Paused
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <Button className="w-full h-12">Join Room</Button>
        </div>
      </MobileFrame>

      {/* QR Scanner */}
      <MobileFrame title="QR Scanner">
        <div className="flex flex-col h-full bg-black">
          {/* Camera View */}
          <div className="flex-1 relative bg-gray-800 flex items-center justify-center">
            <div className="text-center text-white">
              <QrCode className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-sm opacity-75">Point camera at QR code</p>
            </div>

            {/* Scanning Frame */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-2 border-white rounded-lg relative">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-blue-400 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-blue-400 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-blue-400 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-blue-400 rounded-br-lg"></div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="p-6 bg-black">
            <div className="flex justify-center gap-4">
              <Button variant="ghost" className="text-white">
                Cancel
              </Button>
              <Button variant="ghost" className="text-white">
                Enter Code Instead
              </Button>
            </div>
          </div>
        </div>
      </MobileFrame>

      {/* Room Preview */}
      <MobileFrame title="Room Preview">
        <div className="flex flex-col h-full bg-white dark:bg-gray-900 p-4">
          <div className="text-center mb-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Team Meeting Timer</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">Room ABC123 • Hosted by John</p>
          </div>

          <div className="flex-1 space-y-6">
            {/* Timer Preview */}
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
              <div className="text-3xl font-mono font-bold text-blue-600 dark:text-blue-400 mb-2">25:00</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Ready to start</p>
            </div>

            {/* Room Info */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-300">Status</span>
                <Badge variant="secondary">Waiting to start</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-300">Connected users</span>
                <span className="font-medium">4 users</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-300">Auto-cleanup</span>
                <span className="text-sm">24 hours</span>
              </div>
            </div>

            {/* Connected Users */}
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Connected Users</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    J
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">John (Host)</div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Host
                  </Badge>
                </div>
                <div className="flex items-center gap-3 p-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    S
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">Sarah</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    M
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">Mike</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button className="w-full h-12">Join Room</Button>
        </div>
      </MobileFrame>
    </div>
  )
}

function SettingsScreens() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Main Settings */}
      <MobileFrame title="Settings">
        <div className="flex flex-col h-full bg-white dark:bg-gray-900">
          <div className="p-4 border-b">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Settings</h2>
          </div>

          <div className="flex-1 p-4 space-y-1">
            <SettingsItem icon={<Bell className="w-5 h-5" />} title="Notifications" />
            <SettingsItem icon={<Users className="w-5 h-5" />} title="Account" />
            <SettingsItem icon={<Timer className="w-5 h-5" />} title="Timer Defaults" />
            <SettingsItem icon={<Share2 className="w-5 h-5" />} title="Sharing" />

            <div className="py-2">
              <div className="border-t"></div>
            </div>

            <SettingsItem title="Help & Support" />
            <SettingsItem title="Privacy Policy" />
            <SettingsItem title="Terms of Service" />
            <SettingsItem title="About" />
          </div>

          <div className="p-4 border-t">
            <div className="text-center text-sm text-gray-500 dark:text-gray-400">Version 1.0.0</div>
          </div>
        </div>
      </MobileFrame>

      {/* Notifications Settings */}
      <MobileFrame title="Notifications">
        <div className="flex flex-col h-full bg-white dark:bg-gray-900">
          <div className="p-4 border-b">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Notifications</h2>
          </div>

          <div className="flex-1 p-4 space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Timer Alerts</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Get notified when timers complete</div>
                </div>
                <div className="w-10 h-6 bg-blue-500 rounded-full"></div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Room Invites</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Receive room invitations</div>
                </div>
                <div className="w-10 h-6 bg-blue-500 rounded-full"></div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Sound Alerts</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Play sound when timer ends</div>
                </div>
                <div className="w-10 h-6 bg-gray-300 rounded-full"></div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Vibration</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Vibrate on timer completion</div>
                </div>
                <div className="w-10 h-6 bg-blue-500 rounded-full"></div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Quiet Hours</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Enable Quiet Hours</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      Reduce notifications during set hours
                    </div>
                  </div>
                  <div className="w-10 h-6 bg-gray-300 rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 border rounded-lg">
                    <div className="text-xs text-gray-600 dark:text-gray-300 mb-1">From</div>
                    <div className="font-mono">22:00</div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="text-xs text-gray-600 dark:text-gray-300 mb-1">To</div>
                    <div className="font-mono">08:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MobileFrame>

      {/* Timer Defaults */}
      <MobileFrame title="Timer Defaults">
        <div className="flex flex-col h-full bg-white dark:bg-gray-900">
          <div className="p-4 border-b">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Timer Defaults</h2>
          </div>

          <div className="flex-1 p-4 space-y-6">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Default Timer Length</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-600 dark:text-gray-300">Minutes</label>
                  <input className="w-full mt-1 p-2 border rounded text-center font-mono" defaultValue="25" />
                </div>
                <div>
                  <label className="text-xs text-gray-600 dark:text-gray-300">Seconds</label>
                  <input className="w-full mt-1 p-2 border rounded text-center font-mono" defaultValue="00" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Quick Presets</h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="p-3 border rounded-lg text-center">
                  <div className="font-mono font-bold">5:00</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Break</div>
                </div>
                <div className="p-3 border-2 border-blue-500 rounded-lg text-center">
                  <div className="font-mono font-bold text-blue-600">25:00</div>
                  <div className="text-xs text-blue-600">Pomodoro</div>
                </div>
                <div className="p-3 border rounded-lg text-center">
                  <div className="font-mono font-bold">60:00</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Hour</div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-3 bg-transparent">
                Customize Presets
              </Button>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Room Settings</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Auto-start timers</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Start when first user joins</div>
                  </div>
                  <div className="w-10 h-6 bg-blue-500 rounded-full"></div>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Public rooms by default</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Allow anyone to join new rooms</div>
                  </div>
                  <div className="w-10 h-6 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MobileFrame>
    </div>
  )
}

// Helper Components
function MobileFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto">
      <div className="text-center mb-4">
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</h3>
      </div>
      <div className="w-80 h-[640px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden relative">
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-[2rem] flex items-center justify-center">
            <div className="w-20 h-1 bg-gray-800 rounded-full"></div>
          </div>
          <div className="pt-6 h-full">{children}</div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <div className="font-medium text-gray-900 dark:text-white text-sm">{title}</div>
        <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">{description}</div>
      </div>
    </div>
  )
}

function RoomCard({ name, time, users, status }: { name: string; time: string; users: number; status: string }) {
  const statusColors = {
    active: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    completed: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
    paused: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  }

  return (
    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border hover:shadow-sm transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-gray-900 dark:text-white text-sm">{name}</h4>
        <Badge variant="secondary" className={`text-xs ${statusColors[status as keyof typeof statusColors]}`}>
          {status}
        </Badge>
      </div>
      <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-300">
        <span className="font-mono">{time}</span>
        <span className="flex items-center gap-1">
          <Users className="w-3 h-3" />
          {users}
        </span>
      </div>
    </div>
  )
}

function PresetButton({ time, label, active = false }: { time: string; label: string; active?: boolean }) {
  return (
    <button
      className={`p-3 rounded-lg text-center transition-colors ${
        active ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
      }`}
    >
      <div className="font-mono font-bold text-sm">{time}</div>
      <div className="text-xs mt-1">{label}</div>
    </button>
  )
}

function SettingsItem({ icon, title }: { icon?: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
      {icon && <div className="text-gray-600 dark:text-gray-400">{icon}</div>}
      <div className="flex-1 font-medium text-gray-900 dark:text-white">{title}</div>
      <ArrowRight className="w-4 h-4 text-gray-400" />
    </div>
  )
}
