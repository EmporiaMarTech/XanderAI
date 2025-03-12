"use client"

import Image from "next/image"
import Link from "next/link"
import { Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export function UpgradePrompt() {
  return (
    <div className="h-[calc(100vh-160px)] flex items-center p-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-violet-500/5 backdrop-blur-sm" />
      <div className="max-w-6xl mx-auto flex items-center gap-14 relative z-10">
        <div className="relative w-[440px] h-[440px] flex-shrink-0">
          <Image
            src="https://preline.co/assets/svg/pro/authentication-charts-dark.svg"
            alt="Analytics illustration"
            fill
            className="object-contain"
          />
        </div>

        <div className="flex-1 space-y-7">
          <div className="inline-flex items-center gap-x-2 py-2 px-4 rounded-full text-sm font-medium bg-gradient-to-tl from-blue-900 to-violet-950 text-blue-500">
            <Rocket className="h-4 w-4" />
            Under Development
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-200">
              Thank you for being a Beta Tester!
            </h1>

            <p className="text-base text-neutral-500 max-w-lg backdrop-blur-sm bg-black/20 p-4 rounded-lg">
              This section is reserved for an upcoming feature. Check back soon - we're building something special for our beta community.
            </p>
          </div>

          <div className="flex items-center gap-x-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/">
                Back to Dashboard
              </Link>
            </Button>
            <Button variant="link" size="lg" className="text-blue-500">
              Learn more
              <svg className="h-5 w-5 ml-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}