import type { Application } from "@/types/application"

// Mock applications data
const mockApplications: Application[] = [
  {
    id: "1",
    jobId: "1",
    fullName: "Michael Johnson",
    email: "michael@example.com",
    phone: "+1 (555) 123-4567",
    resumeUrl: "/resume.pdf",
    coverLetter: "I am excited to apply for this position...",
    portfolioUrl: "https://michaeljohnson.com",
    availability: "Immediately",
    expectedSalary: "$130,000",
    appliedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    status: "Pending",
    job: {
      id: "1",
      title: "Senior Frontend Developer",
      company: {
        id: "1",
        name: "TechCorp",
        logo: "/placeholder.svg?height=48&width=48",
      },
    },
  },
  {
    id: "2",
    jobId: "2",
    fullName: "Sarah Williams",
    email: "sarah@example.com",
    phone: "+1 (555) 987-6543",
    resumeUrl: "/resume.pdf",
    coverLetter: "I believe my skills in backend development...",
    portfolioUrl: "https://sarahwilliams.dev",
    availability: "2 weeks notice",
    expectedSalary: "$140,000",
    appliedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
    status: "Approved",
    job: {
      id: "2",
      title: "Backend Developer",
      company: {
        id: "2",
        name: "DataSystems",
        logo: "/placeholder.svg?height=48&width=48",
      },
    },
  },
  {
    id: "3",
    jobId: "3",
    fullName: "David Brown",
    email: "david@example.com",
    phone: "+1 (555) 456-7890",
    resumeUrl: "/resume.pdf",
    coverLetter: "As a UX/UI designer with 5 years of experience...",
    portfolioUrl: "https://davidbrown.design",
    availability: "1 month notice",
    expectedSalary: "$110,000",
    appliedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    status: "Rejected",
    job: {
      id: "3",
      title: "UX/UI Designer",
      company: {
        id: "3",
        name: "CreativeMinds",
        logo: "/placeholder.svg?height=48&width=48",
      },
    },
  },
]

// Function to get all applications for the current company
export const getApplications = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real app, this would filter by the current user's company ID
  return mockApplications
}

// Function to apply to a job
export const applyToJob = async (jobId: string, applicationData: any) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // In a real app, this would create a new application in the database
  const newApplication: Application = {
    id: (mockApplications.length + 1).toString(),
    jobId,
    fullName: applicationData.fullName,
    email: applicationData.email,
    phone: applicationData.phone,
    resumeUrl: "/resume.pdf", // In a real app, this would be the uploaded file URL
    coverLetter: applicationData.coverLetter || "",
    portfolioUrl: applicationData.portfolioUrl || "",
    availability: applicationData.availability,
    expectedSalary: applicationData.expectedSalary,
    appliedAt: new Date().toISOString(),
    status: "Pending",
    job: {
      id: jobId,
      title: "Job Title", // In a real app, this would be fetched from the job data
      company: {
        id: "1",
        name: "Company Name", // In a real app, this would be fetched from the job data
        logo: "/placeholder.svg?height=48&width=48",
      },
    },
  }

  mockApplications.push(newApplication)

  return newApplication
}

