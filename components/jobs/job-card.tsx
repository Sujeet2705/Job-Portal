import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Bookmark, MapPin, Building, DollarSign, Clock } from "lucide-react"
import type { Job } from "@/types/job"

interface JobCardProps {
  job: Job
}

export default function JobCard({ job }: JobCardProps) {
  const { id, title, company, location, salary, type, postedAt, skills, isRemote } = job

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col space-y-4 p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-md">
                <Image
                  src={company.logo || "/placeholder.svg?height=48&width=48"}
                  alt={company.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">
                  <Link href={`/jobs/${id}`} className="hover:underline">
                    {title}
                  </Link>
                </h3>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Building className="h-3.5 w-3.5" />
                  <span>{company.name}</span>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Bookmark className="h-4 w-4" />
              <span className="sr-only">Save job</span>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-3">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              <span>{isRemote ? "Remote" : location}</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <DollarSign className="h-3.5 w-3.5" />
              <span>{salary}</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>{type}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          Posted {formatDistanceToNow(new Date(postedAt), { addSuffix: true })}
        </div>
        <Button asChild size="sm">
          <Link href={`/jobs/${id}`}>Apply Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

