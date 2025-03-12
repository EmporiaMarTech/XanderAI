"use client"

import { useState } from "react"
import { CSVUploader } from "@/components/logistics/csv-uploader"
import { TrackingSearch } from "@/components/logistics/tracking-search"
import { ShipmentTable } from "@/components/logistics/shipment-table"
import { ShipmentAnalytics } from "@/components/logistics/shipment-analytics"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useShipments } from "@/hooks/use-shipments"

export default function LogisticsPage() {
  const { shipments, addShipments, updateShipmentStatus } = useShipments()
  const [activeTab, setActiveTab] = useState("upload")

  return (
    <div className="space-y-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList>
          <TabsTrigger value="upload">Orders & Shipments</TabsTrigger>
          <TabsTrigger value="track">Track Order</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="space-y-4">
          <Card className="p-6">
            <CSVUploader onUpload={addShipments} />
          </Card>
          
          {shipments.length > 0 && (
            <Card className="p-6">
              <ShipmentTable 
                shipments={shipments} 
                onStatusUpdate={updateShipmentStatus}
              />
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="track">
          <Card className="p-6">
            <TrackingSearch shipments={shipments} />
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card className="p-6">
            <ShipmentAnalytics shipments={shipments} />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}