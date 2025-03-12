"use client"

import { cn } from "@/lib/utils"

interface CalendarGridProps {
  days: Date[]
  currentMonth: Date
  selectedDate: Date
  onSelectDate: (date: Date) => void
}

export function CalendarGrid({ 
  days, 
  currentMonth, 
  selectedDate,
  onSelectDate 
}: CalendarGridProps) {
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <div className="mt-3">
      <div className="grid grid-cols-7 gap-px">
        {weekDays.map((day) => (
          <div key={day} className="h-8 flex justify-center items-center">
            <span className="text-xs text-neutral-500">{day}</span>
          </div>
        ))}

        {days.map((date, idx) => {
          const isCurrentMonth = date.getMonth() === currentMonth.getMonth()
          const isToday = date.toDateString() === new Date().toDateString()
          const isSelected = date.toDateString() === selectedDate?.toDateString()

          return (
            <button
              key={idx}
              onClick={() => onSelectDate(date)}
              className={cn(
                "h-10 flex justify-center items-center rounded-md transition-colors",
                isCurrentMonth ? "text-neutral-200" : "text-neutral-600",
                isSelected && "bg-blue-600 text-white",
                !isSelected && isToday && "bg-blue-600/20 text-blue-400",
                !isSelected && "hover:bg-neutral-800"
              )}
            >
              <time dateTime={date.toISOString()} className="text-sm">
                {date.getDate()}
              </time>
            </button>
          )
        })}
      </div>
    </div>
  )
}