import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MapPin, Building, DollarSign, Clock, Globe, Calendar } from "lucide-react"
import { getJobById } from "@/lib/services/job-service"

interface JobDetailsProps {
  id: string
}

export default async function JobDetails({ id }: JobDetailsProps) {
  const job = await getJobById(id)

  if (!job) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
        <h3 className="mt-2 text-lg font-semibold">Job not found</h3>
        <p className="mb-4 mt-1 text-sm text-muted-foreground">
          The job you're looking for doesn't exist or has been removed
        </p>
        <Button asChild>
          <a href="/">Browse Jobs</a>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-4 md:flex-row md:items-start md:justify-between md:space-y-0">
        <div className="flex items-start space-x-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-md">
            <Image
              src={job.company.logo || "/placeholder.svg?height=64&width=64"}
              alt={job.company.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Building className="h-4 w-4" />
              <span>{job.company.name}</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {job.isRemote ? "Remote" : job.location}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <DollarSign className="h-3 w-3" />
                {job.salary}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {job.type}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                Posted {formatDistanceToNow(new Date(job.postedAt), { addSuffix: true })}
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <Button asChild>
            <a href="#apply">Apply Now</a>
          </Button>
          <Button variant="outline" asChild>
            <a href={job.company.website} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Globe className="mr-2 h-4 w-4" />
              Company Website
            </a>
          </Button>
        </div>
      </div>

      <Separator />

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">About the Company</h2>
          <p className="mt-2 text-muted-foreground">{job.company.description}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Job Description</h2>
          <div className="mt-2 space-y-4 text-muted-foreground" dangerouslySetInnerHTML={{ __html: job.description }} />
        </div>

        <div>
          <h2 className="text-xl font-semibold">Requirements</h2>
          <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Benefits</h2>
          <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
            {job.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Required Skills</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {job.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

