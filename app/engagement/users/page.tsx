"use client"

import { UsersTable } from "@/components/engagement/users/users-table"
import { UsersFilter } from "@/components/engagement/users/users-filter"
import { Card } from "@/components/ui/card"

export default function UsersPage() {
  return (
    <Card className="p-6">
      <UsersFilter />
      <UsersTable />
    </Card>
  )
}