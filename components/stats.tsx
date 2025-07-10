export function Stats() {
  const stats = [
    { label: "Latency", value: "<100ms", description: "Real-time synchronization" },
    { label: "Concurrent Rooms", value: "50+", description: "High performance support" },
    { label: "Viewers per Room", value: "20+", description: "Scalable architecture" },
    { label: "Auto-cleanup", value: "24h", description: "Automatic room expiration" },
  ]

  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 sm:text-4xl">{stat.value}</div>
              <div className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{stat.label}</div>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
