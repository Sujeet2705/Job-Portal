import { Suspense } from "react"
import JobSearch from "@/components/jobs/job-search"
import JobFilters from "@/components/jobs/job-filters"
import JobListings from "@/components/jobs/job-listings"
import JobListingsSkeleton from "@/components/jobs/job-listings-skeleton"
import { Separator } from "@/components/ui/separator"

export default function HomePage() {
  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Find Your Dream Job</h1>
          <p className="text-muted-foreground">Browse thousands of job listings from top companies around the world.</p>
        </div>

        <JobSearch />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[240px_1fr]">
          <div className="hidden md:block">
            <JobFilters />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <p className="text-sm text-muted-foreground">Showing 1-10 of 156 jobs</p>
              </div>
              <div className="md:hidden">
                <JobFilters />
              </div>
            </div>
            <Separator />
            <Suspense fallback={<JobListingsSkeleton />}>
              <JobListings />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

