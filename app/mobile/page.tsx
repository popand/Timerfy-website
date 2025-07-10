import { MobileScreens } from "@/components/mobile-screens"

export default function MobilePage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Timerfy Mobile App Designs</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Mobile-first design options for the distributed timer system
          </p>
        </div>
        <MobileScreens />
      </div>
    </div>
  )
}
