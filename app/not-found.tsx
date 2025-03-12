import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black">
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none" />
      
      <main className="lg:pl-64 min-h-screen flex flex-col justify-center">
        <div className="p-6 space-y-5 text-center">
          <div className="max-w-md mx-auto space-y-6">
            <h1 className="text-8xl font-bold bg-gradient-to-br from-white via-white to-neutral-400 bg-clip-text text-transparent">
              404
            </h1>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-neutral-200">
                Page not found
              </h2>
              <p className="text-neutral-500">
                Sorry, the page you&apos;re looking for cannot be found.
              </p>
            </div>

            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 19-7-7 7-7"/>
                <path d="M19 12H5"/>
              </svg>
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}