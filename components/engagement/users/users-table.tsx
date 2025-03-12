"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar } from "@/components/ui/avatar"
import { useUsers } from "@/hooks/use-users"

export function UsersTable() {
  const { users } = useUsers()

  return (
    <div className="relative overflow-x-auto mt-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Active</TableHead>
            <TableHead>Sessions</TableHead>
            <TableHead>Engagement</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <img src={user.avatar} alt={user.name} />
                  </Avatar>
                  <div>
                    <div className="font-medium text-neutral-200">{user.name}</div>
                    <div className="text-sm text-neutral-500">{user.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge 
                  variant="secondary"
                  className={
                    user.status === "Active" 
                      ? "bg-green-500/10 text-green-400"
                      : "bg-neutral-500/10 text-neutral-400"
                  }
                >
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell>{user.lastActive}</TableCell>
              <TableCell>{user.sessions}</TableCell>
              <TableCell>{user.engagement}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}