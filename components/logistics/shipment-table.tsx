"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Filter, 
  Download, 
  MoreVertical,
  CheckCircle,
  Truck,
  Package,
  AlertCircle
} from "lucide-react"
import { type Shipment } from "@/hooks/use-shipments"

interface ShipmentTableProps {
  shipments: Shipment[]
  onStatusUpdate: (id: string, status: string) => void
}

const statusColors = {
  'Delivered': 'bg-green-500/10 text-green-500',
  'In Transit': 'bg-blue-500/10 text-blue-500',
  'Pending': 'bg-yellow-500/10 text-yellow-500',
  'Exception': 'bg-red-500/10 text-red-500'
}

const statusIcons = {
  'Delivered': CheckCircle,
  'In Transit': Truck,
  'Pending': Package,
  'Exception': AlertCircle
}

export function ShipmentTable({ shipments, onStatusUpdate }: ShipmentTableProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string | null>(null)

  const filteredShipments = shipments.filter((shipment) => {
    const matchesSearch = Object.values(shipment).some((value) =>
      value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
    const matchesStatus = statusFilter ? shipment.status === statusFilter : true
    return matchesSearch && matchesStatus
  })

  const handleExport = () => {
    const csv = [
      Object.keys(shipments[0] || {}).join(','),
      ...filteredShipments.map(shipment => 
        Object.values(shipment).map(value => 
          typeof value === 'string' ? `"${value}"` : value
        ).join(',')
      )
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `shipments-${new Date().toISOString()}.csv`
    a.click()
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-lg font-semibold">Shipments</h2>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-initial">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
            <Input
              type="search"
              placeholder="Search shipments..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setStatusFilter(null)}>
                All Statuses
              </DropdownMenuItem>
              {Object.keys(statusColors).map((status) => (
                <DropdownMenuItem 
                  key={status}
                  onClick={() => setStatusFilter(status)}
                >
                  {status}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" size="icon" onClick={handleExport}>
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tracking Number</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Origin</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Est. Delivery</TableHead>
              <TableHead>Updated</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredShipments.map((shipment) => {
              const StatusIcon = statusIcons[shipment.status as keyof typeof statusIcons]
              return (
                <TableRow key={shipment.id}>
                  <TableCell className="font-medium">
                    {shipment.tracking_number}
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="secondary"
                      className={`${statusColors[shipment.status as keyof typeof statusColors]} flex w-fit items-center gap-1`}
                    >
                      {StatusIcon && <StatusIcon className="h-3 w-3" />}
                      {shipment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{shipment.customer_name}</div>
                      <div className="text-sm text-neutral-500">{shipment.customer_email}</div>
                    </div>
                  </TableCell>
                  <TableCell>{shipment.origin}</TableCell>
                  <TableCell>{shipment.destination}</TableCell>
                  <TableCell>{new Date(shipment.estimated_delivery).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(shipment.updated_at).toLocaleString()}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {Object.keys(statusColors).map((status) => (
                          <DropdownMenuItem
                            key={status}
                            onClick={() => onStatusUpdate(shipment.id, status)}
                          >
                            Mark as {status}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}