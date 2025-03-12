"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface AddCardDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (card: any) => void
}

export function AddCardDialog({ open, onOpenChange, onSubmit }: AddCardDialogProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "low",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      id: `card-${Date.now()}`,
      ...formData,
      progress: 0
    })
    setFormData({ title: "", description: "", priority: "low" })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-neutral-900 border-neutral-800/50">
        <DialogHeader>
          <DialogTitle className="text-neutral-200">Add New Task</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-neutral-200">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="bg-neutral-800/50 border-neutral-700/50 text-neutral-200"
              placeholder="Enter task title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-neutral-200">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="bg-neutral-800/50 border-neutral-700/50 text-neutral-200"
              placeholder="Enter task description"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-neutral-200">Priority</Label>
            <RadioGroup
              value={formData.priority}
              onValueChange={(value) => setFormData(prev => ({ ...prev, priority: value }))}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="low" id="low" />
                <Label htmlFor="low" className="text-neutral-400">Low</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium" className="text-neutral-400">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high" id="high" />
                <Label htmlFor="high" className="text-neutral-400">High</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="ghost"
              onClick={() => onOpenChange(false)}
              className="text-neutral-400 hover:text-neutral-300"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Add Task
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}