"use client"

import { useState } from "react"
import { DndContext, closestCenter } from "@dnd-kit/core"
import { BoardColumn } from "@/components/projects/board-column"
import { AddCardDialog } from "@/components/projects/add-card-dialog"

const initialColumns = [
  {
    id: "backlog",
    title: "Backlog",
    color: "bg-neutral-100 dark:bg-neutral-800",
    cards: [
      {
        id: "1",
        title: "Implement authentication flow",
        priority: "high",
        assignees: [
          { name: "John Doe", initials: "JD" }
        ],
        labels: ["Authentication", "Security"],
        comments: 5,
        attachments: 2,
        progress: 25
      }
    ]
  },
  {
    id: "todo",
    title: "To Do",
    color: "bg-blue-100 dark:bg-blue-500/20",
    cards: [
      {
        id: "2",
        title: "Design system improvements",
        description: "Update color palette and typography",
        priority: "medium",
        assignees: [
          { name: "Jane Smith", initials: "JS" }
        ],
        labels: ["Design", "UI/UX"],
        progress: 60
      }
    ]
  },
  {
    id: "in-progress",
    title: "In Progress",
    color: "bg-yellow-100 dark:bg-yellow-500/20",
    cards: []
  },
  {
    id: "review",
    title: "Review",
    color: "bg-purple-100 dark:bg-purple-500/20",
    cards: []
  },
  {
    id: "done",
    title: "Done",
    color: "bg-green-100 dark:bg-green-500/20",
    cards: []
  }
]

export default function ProjectsPage() {
  const [columns, setColumns] = useState(initialColumns)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [activeColumn, setActiveColumn] = useState<string | null>(null)

  const handleDragEnd = (event: any) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      setColumns(prev => {
        const activeCard = prev
          .flatMap(col => col.cards)
          .find(card => card.id === active.id)

        const newColumns = prev.map(col => ({
          ...col,
          cards: col.cards.filter(card => card.id !== active.id)
        }))

        const targetColumn = newColumns.find(col => col.id === over.id)
        if (targetColumn && activeCard) {
          targetColumn.cards = [...targetColumn.cards, activeCard]
        }

        return newColumns
      })
    }
  }

  const handleAddCard = (columnId: string) => {
    setActiveColumn(columnId)
    setDialogOpen(true)
  }

  const handleCardSubmit = (card: any) => {
    if (!activeColumn) return

    setColumns(prev => prev.map(col => {
      if (col.id === activeColumn) {
        return {
          ...col,
          cards: [...col.cards, card]
        }
      }
      return col
    }))
  }

  return (
    <div className="h-full overflow-x-auto">
      <div className="inline-flex pb-20">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          {columns.map(column => (
            <BoardColumn
              key={column.id}
              id={column.id}
              title={column.title}
              color={column.color}
              count={column.cards.length}
              cards={column.cards}
              onAddCard={() => handleAddCard(column.id)}
            />
          ))}
        </DndContext>
      </div>

      <AddCardDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSubmit={handleCardSubmit}
      />
    </div>
  )
}