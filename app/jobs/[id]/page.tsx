import { Suspense } from "react"
import JobDetails from "@/components/jobs/job-details"
import JobDetailsSkeleton from "@/components/jobs/job-details-skeleton"
import JobApplicationForm from "@/components/forms/job-application-form"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Bookmark, Share2 } from "lucide-react"

interface JobPageProps {
  params: {
    id: string
  }
}

export default function JobPage({ params }: JobPageProps) {
  // This would be a server component fetching data
  const jobId = params.id

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_350px]">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Job Details</h1>
              <p className="text-muted-foreground">View complete information about this job</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <Bookmark className="h-4 w-4" />
                <span className="sr-only">Save job</span>
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share job</span>
              </Button>
            </div>
          </div>
          <Separator />
          <Suspense fallback={<JobDetailsSkeleton />}>
            <JobDetails id={jobId} />
          </Suspense>
        </div>
        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <h2 className="text-xl font-semibold">Apply for this job</h2>
            <p className="text-sm text-muted-foreground">Fill out the form below to apply for this position</p>
            <Separator className="my-4" />
            <JobApplicationForm jobId={jobId} />
          </div>
        </div>
      </div>
    </div>
  )
}

