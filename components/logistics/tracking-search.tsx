"use client"

import { useState } from "react"
import { Search, Package, Truck, MapPin, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { type Shipment } from "@/hooks/use-shipments"

interface TrackingSearchProps {
  shipments: Shipment[]
}

const statusColors = {
  'Delivered': 'bg-green-500/10 text-green-500',
  'In Transit': 'bg-blue-500/10 text-blue-500',
  'Pending': 'bg-yellow-500/10 text-yellow-500',
  'Exception': 'bg-red-500/10 text-red-500'
}

export function TrackingSearch({ shipments }: TrackingSearchProps) {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [shipment, setShipment] = useState<Shipment | null>(null)
  const [error, setError] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const found = shipments.find(s => 
      s.tracking_number.toLowerCase() === trackingNumber.toLowerCase()
    )
    
    if (found) {
      setShipment(found)
      setError("")
    } else {
      setShipment(null)
      setError("No shipment found with this tracking number")
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSearch} className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter tracking number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          className="flex-1"
        />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Track
        </Button>
      </form>

      {error && (
        <Card className="p-6 border-red-500/50">
          <div className="flex items-center gap-2 text-red-500">
            <AlertCircle className="h-5 w-5" />
            <p>{error}</p>
          </div>
        </Card>
      )}

      {shipment && (
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <Badge 
                  variant="secondary"
                  className={`${statusColors[shipment.status as keyof typeof statusColors]} mb-2`}
                >
                  {shipment.status}
                </Badge>
                <h3 className="text-lg font-semibold">Tracking #{shipment.tracking_number}</h3>
                <p className="text-sm text-neutral-500">
                  Last updated: {new Date(shipment.updated_at).toLocaleString()}
                </p>
              </div>
              <Package className="h-8 w-8 text-blue-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1">
                <p className="text-sm text-neutral-500">From</p>
                <p className="font-medium">{shipment.origin}</p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-neutral-500">To</p>
                <p className="font-medium">{shipment.destination}</p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-neutral-500">Estimated Delivery</p>
                <p className="font-medium">
                  {new Date(shipment.estimated_delivery).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Shipment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-neutral-500">Customer</p>
                  <p className="font-medium">{shipment.customer_name}</p>
                  <p className="text-sm text-neutral-500">{shipment.customer_email}</p>
                </div>

                <div>
                  <p className="text-sm text-neutral-500">Carrier</p>
                  <p className="font-medium">{shipment.carrier}</p>
                </div>
              </div>

              <div className="space-y-4">
                {shipment.weight && (
                  <div>
                    <p className="text-sm text-neutral-500">Weight</p>
                    <p className="font-medium">{shipment.weight}</p>
                  </div>
                )}

                {shipment.dimensions && (
                  <div>
                    <p className="text-sm text-neutral-500">Dimensions</p>
                    <p className="font-medium">{shipment.dimensions}</p>
                  </div>
                )}

                {shipment.service_level && (
                  <div>
                    <p className="text-sm text-neutral-500">Service Level</p>
                    <p className="font-medium">{shipment.service_level}</p>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}