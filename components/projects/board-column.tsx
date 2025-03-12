"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { ProjectCard } from "./project-card"
import { ProjectColumnHeader } from "./project-column-header"
import { useDroppable } from "@dnd-kit/core"

interface BoardColumnProps {
  id: string
  title: string
  color: string
  count: number
  cards: any[]
  onAddCard: () => void
}

export function BoardColumn({ id, title, color, count, cards, onAddCard }: BoardColumnProps) {
  const { setNodeRef } = useDroppable({ id })

  return (
    <div className="w-80 h-full shrink-0">
      <ProjectColumnHeader 
        title={title}
        color={color}
        count={count}
        onAdd={onAddCard}
      />

      <div 
        ref={setNodeRef}
        className="flex flex-col gap-y-2 mt-3 me-7 min-h-[200px]"
      >
        {cards.map((card) => (
          <ProjectCard key={card.id} {...card} />
        ))}
      </div>

      <div className="mt-2 me-7">
        <Button
          variant="ghost"
          className="w-full justify-start text-neutral-400 hover:text-neutral-200"
          onClick={onAddCard}
        >
          <Plus className="h-4 w-4 mr-2" />
          New
        </Button>
      </div>
    </div>
  )
}