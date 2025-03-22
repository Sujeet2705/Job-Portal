import { Suspense } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import DashboardStats from "@/components/dashboard/dashboard-stats"
import DashboardJobsList from "@/components/dashboard/dashboard-jobs-list"
import DashboardApplications from "@/components/dashboard/dashboard-applications"
import DashboardJobsSkeleton from "@/components/dashboard/dashboard-jobs-skeleton"
import DashboardApplicationsSkeleton from "@/components/dashboard/dashboard-applications-skeleton"
import CreateJobDialog from "@/components/forms/create-job-dialog"

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Company Dashboard</h1>
          <p className="text-muted-foreground">Manage your job listings and view applications</p>
        </div>
        <CreateJobDialog>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Post New Job
          </Button>
        </CreateJobDialog>
      </div>

      <div className="mt-6">
        <DashboardStats />
      </div>

      <div className="mt-6">
        <Tabs defaultValue="jobs">
          <TabsList>
            <TabsTrigger value="jobs">My Job Listings</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
          </TabsList>
          <TabsContent value="jobs" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Listings</CardTitle>
                <CardDescription>View and manage all your posted job listings</CardDescription>
              </CardHeader>
              <CardContent>
                <Suspense fallback={<DashboardJobsSkeleton />}>
                  <DashboardJobsList />
                </Suspense>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="applications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Applications Received</CardTitle>
                <CardDescription>Review applications submitted to your job listings</CardDescription>
              </CardHeader>
              <CardContent>
                <Suspense fallback={<DashboardApplicationsSkeleton />}>
                  <DashboardApplications />
                </Suspense>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

