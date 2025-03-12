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
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-neutral-500 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">Content</th>
            <th scope="col" className="px-6 py-3">Views</th>
            <th scope="col" className="px-6 py-3">Engagement</th>
            <th scope="col" className="px-6 py-3">Type</th>
          </tr>
        </thead>
        <tbody>
          {content.map((item) => (
            <tr key={item.title} className="border-t border-neutral-800">
              <td className="px-6 py-4 font-medium">{item.title}</td>
              <td className="px-6 py-4">{item.views}</td>
              <td className="px-6 py-4">{item.engagement}</td>
              <td className="px-6 py-4">{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}