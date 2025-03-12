"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CalendarHeaderProps {
  currentDate: Date
  onPrevMonth: () => void
  onNextMonth: () => void
  onToday: () => void
}

export function CalendarHeader({ 
  currentDate, 
  onPrevMonth, 
  onNextMonth,
  onToday 
}: CalendarHeaderProps) {
  return (
    <div className="flex flex-wrap justify-between items-center gap-2">
      <div className="lg:ps-1.5">
        <h1 className="text-lg sm:text-2xl text-neutral-200">
          <span className="font-semibold">
            {currentDate.toLocaleString('default', { month: 'long' })}
          </span>{' '}
          {currentDate.getFullYear()}
        </h1>
      </div>

      <div className="flex -space-x-px">
        <Button
          variant="outline"
          size="icon"
          className="h-[30px] w-[30px] rounded-s-md rounded-e-none border-neutral-700 bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
          onClick={onPrevMonth}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          className="h-[30px] px-2 rounded-none border-neutral-700 bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
          onClick={onToday}
        >
          Today
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="h-[30px] w-[30px] rounded-e-md rounded-s-none border-neutral-700 bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
          onClick={onNextMonth}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}