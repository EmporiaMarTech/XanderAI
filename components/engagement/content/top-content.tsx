"use client"

const content = [
  {
    title: "Getting Started Guide",
    views: "12.5K",
    engagement: "85%",
    type: "Documentation",
  },
  {
    title: "API Integration Tutorial",
    views: "8.2K",
    engagement: "78%",
    type: "Tutorial",
  },
  {
    title: "Best Practices",
    views: "6.8K",
    engagement: "72%",
    type: "Guide",
  },
  {
    title: "Advanced Features",
    views: "5.4K",
    engagement: "68%",
    type: "Documentation",
  },
]

export function TopContent() {
  return (
    <div className="mt-6">
      <div className="space-y-4">
        {content.map((item) => (
          <div 
            key={item.title}
            className="p-4 rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800/50 hover:border-neutral-700/50 transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-neutral-200 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">
                {item.type}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-400">
                {item.views} views
              </span>
              <span className="text-green-400">
                {item.engagement} engagement
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}