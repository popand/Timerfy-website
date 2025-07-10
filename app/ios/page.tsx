import { IOSTimerApp } from "@/components/ios-timer-app"

export default function IOSPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Timerfy iOS App</h1>
          <p className="text-gray-600 dark:text-gray-300">Multiple synchronized timers for iOS</p>
        </div>
        <IOSTimerApp />
      </div>
    </div>
  )
}
