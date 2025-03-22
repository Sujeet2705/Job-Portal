"use client"

import { useEffect, useState } from "react"
import { formatDistanceToNow } from "date-fns"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { getApplications } from "@/lib/services/application-service"
import type { Application } from "@/types/application"
import { MoreHorizontal, Eye, Check, X, Download } from "lucide-react"

export default function DashboardApplications() {
  const [applications, setApplications] = useState<Application[]>([])

  useEffect(() => {
    const fetchApplications = async () => {
      const data = await getApplications()
      setApplications(data)
    }

    fetchApplications()
  }, [])

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Applicant</TableHead>
            <TableHead>Job</TableHead>
            <TableHead>Applied</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[80px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center">
                No applications received yet.
              </TableCell>
            </TableRow>
          ) : (
            applications.map((application) => (
              <TableRow key={application.id}>
                <TableCell>
                  <div className="font-medium">{application.fullName}</div>
                  <div className="text-sm text-muted-foreground">{application.email}</div>
                </TableCell>
                <TableCell>{application.job.title}</TableCell>
                <TableCell>{formatDistanceToNow(new Date(application.appliedAt), { addSuffix: true })}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      application.status === "Pending"
                        ? "outline"
                        : application.status === "Approved"
                          ? "default"
                          : "secondary"
                    }
                  >
                    {application.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        <span>View Details</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        <span>Download Resume</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Check className="mr-2 h-4 w-4" />
                        <span>Approve</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <X className="mr-2 h-4 w-4" />
                        <span>Reject</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

