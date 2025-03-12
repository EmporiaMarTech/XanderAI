"use client"

import { Card } from "@/components/ui/card"
import { ModelAccuracy } from "@/components/knowledge/model-accuracy"
import { TrainingProgress } from "@/components/knowledge/training-progress"
import { DatasetStats } from "@/components/knowledge/dataset-stats"
import { ModelPerformance } from "@/components/knowledge/model-performance"

export default function KnowledgePage() {
  return (
    <div className="space-y-4">
      <DatasetStats />
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <Card className="xl:col-span-2 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Model Accuracy</h3>
              <p className="text-sm text-neutral-500">Training vs Validation</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-1))]" />
                <span className="text-sm text-neutral-500">Training</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-2))]" />
                <span className="text-sm text-neutral-500">Validation</span>
              </div>
            </div>
          </div>
          <ModelAccuracy />
        </Card>

        <Card className="p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Training Progress</h3>
            <p className="text-sm text-neutral-500">Current training phase</p>
          </div>
          <TrainingProgress />
        </Card>
      </div>

      <Card className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Model Performance</h3>
          <p className="text-sm text-neutral-500">Real-time metrics</p>
        </div>
        <ModelPerformance />
      </Card>
    </div>
  )
}