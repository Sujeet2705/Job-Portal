"use client"

import type React from "react"

import { useState } from "react"
import { useJobStore } from "@/lib/store/job-store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"

export default function JobSearch() {
  const { searchParams, setSearchParams, fetchJobs } = useJobStore()
  const [title, setTitle] = useState(searchParams.title || "")
  const [location, setLocation] = useState(searchParams.location || "")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchParams({ ...searchParams, title, location })
    fetchJobs()
  }

  return (
    <form onSubmit={handleSearch} className="rounded-lg border bg-card shadow-sm">
      <div className="grid grid-cols-1 gap-2 p-4 md:grid-cols-[1fr_1fr_auto] md:gap-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Job title or keyword"
            className="pl-8"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="relative">
          <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Location"
            className="pl-8"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full md:w-auto">
          Search Jobs
        </Button>
      </div>
    </form>
  )
}

