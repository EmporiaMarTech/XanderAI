"use client"

import { useState, useCallback } from 'react'

export interface Shipment {
  id: string
  tracking_number: string
  status: string
  origin: string
  destination: string
  carrier: string
  estimated_delivery: string
  customer_name: string
  customer_email: string
  created_at: string
  updated_at: string
  weight?: string
  dimensions?: string
  service_level?: string
  signature_required?: boolean
  notes?: string
}

export function useShipments() {
  const [shipments, setShipments] = useState<Shipment[]>([])

  const addShipments = useCallback((newShipments: any[]) => {
    const enrichedShipments = newShipments.map(shipment => ({
      ...shipment,
      id: `SHIP-${Math.random().toString(36).substr(2, 9)}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      status: shipment.status || 'Pending'
    }))

    setShipments(prev => [...prev, ...enrichedShipments])
  }, [])

  const updateShipmentStatus = useCallback((id: string, status: string) => {
    setShipments(prev => 
      prev.map(shipment => 
        shipment.id === id 
          ? { 
              ...shipment, 
              status, 
              updated_at: new Date().toISOString() 
            } 
          : shipment
      )
    )
  }, [])

  const getShipmentByTracking = useCallback((trackingNumber: string) => {
    return shipments.find(s => 
      s.tracking_number.toLowerCase() === trackingNumber.toLowerCase()
    )
  }, [shipments])

  return {
    shipments,
    addShipments,
    updateShipmentStatus,
    getShipmentByTracking
  }
}