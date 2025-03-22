"use client"

import { useJobStore } from "@/lib/store/job-store"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { SlidersHorizontal } from "lucide-react"

export default function JobFilters() {
  const { searchParams, setSearchParams, fetchJobs } = useJobStore()

  const handleTypeChange = (type: string) => {
    const currentTypes = searchParams.types || []
    const updatedTypes = currentTypes.includes(type) ? currentTypes.filter((t) => t !== type) : [...currentTypes, type]

    setSearchParams({ ...searchParams, types: updatedTypes })
    fetchJobs()
  }

  const handleSortChange = (sort: string) => {
    setSearchParams({ ...searchParams, sort })
    fetchJobs()
  }

  const handleRemoteChange = (checked: boolean) => {
    setSearchParams({ ...searchParams, remote: checked })
    fetchJobs()
  }

  const handleSalaryChange = (value: number[]) => {
    setSearchParams({ ...searchParams, minSalary: value[0] * 1000 })
    fetchJobs()
  }

  const handleReset = () => {
    setSearchParams({
      title: searchParams.title || "",
      location: searchParams.location || "",
      types: [],
      sort: "newest",
      remote: false,
      minSalary: 0,
    })
    fetchJobs()
  }

  // Mobile filter dialog
  const MobileFilters = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="md:hidden">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <div className="grid gap-6 py-4">
          <FiltersContent />
          <Button onClick={handleReset} variant="outline">
            Reset Filters
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )

  // Filter content shared between mobile and desktop
  const FiltersContent = () => (
    <>
      <div className="space-y-4">
        <h3 className="font-medium">Job Type</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="full-time"
              checked={searchParams.types?.includes("Full-time") || false}
              onCheckedChange={() => handleTypeChange("Full-time")}
            />
            <Label htmlFor="full-time">Full-time</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="part-time"
              checked={searchParams.types?.includes("Part-time") || false}
              onCheckedChange={() => handleTypeChange("Part-time")}
            />
            <Label htmlFor="part-time">Part-time</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="contract"
              checked={searchParams.types?.includes("Contract") || false}
              onCheckedChange={() => handleTypeChange("Contract")}
            />
            <Label htmlFor="contract">Contract</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="internship"
              checked={searchParams.types?.includes("Internship") || false}
              onCheckedChange={() => handleTypeChange("Internship")}
            />
            <Label htmlFor="internship">Internship</Label>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Remote Work</h3>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="remote"
            checked={searchParams.remote || false}
            onCheckedChange={(checked) => handleRemoteChange(checked as boolean)}
          />
          <Label htmlFor="remote">Remote Only</Label>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Minimum Salary</h3>
          <span className="text-sm text-muted-foreground">${(searchParams.minSalary || 0) / 1000}k</span>
        </div>
        <Slider
          defaultValue={[(searchParams.minSalary || 0) / 1000]}
          max={200}
          step={5}
          onValueChange={handleSalaryChange}
        />
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Sort By</h3>
        <Select value={searchParams.sort || "newest"} onValueChange={handleSortChange}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
            <SelectItem value="salary-high">Highest Salary</SelectItem>
            <SelectItem value="salary-low">Lowest Salary</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  )

  return (
    <div>
      <MobileFilters />
      <div className="hidden space-y-6 md:block">
        <FiltersContent />
        <Button onClick={handleReset} variant="outline" className="w-full">
          Reset Filters
        </Button>
      </div>
    </div>
  )
}

