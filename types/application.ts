export interface Application {
  id: string
  jobId: string
  fullName: string
  email: string
  phone: string
  resumeUrl: string
  coverLetter?: string
  portfolioUrl?: string
  availability: string
  expectedSalary: string
  appliedAt: string
  status: "Pending" | "Approved" | "Rejected"
  job: {
    id: string
    title: string
    company: {
      id: string
      name: string
      logo: string
    }
  }
}

