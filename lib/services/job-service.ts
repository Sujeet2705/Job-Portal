import type { Job } from "@/types/job"

// Mock data for jobs
const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: {
      id: "1",
      name: "TechCorp",
      logo: "/placeholder.svg?height=48&width=48",
      website: "https://example.com",
      description: "TechCorp is a leading technology company specializing in innovative software solutions.",
    },
    location: "New York, NY",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    postedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    isRemote: true,
    description: `
      <p>We are looking for a Senior Frontend Developer to join our team. You will be responsible for building and maintaining our web applications.</p>
      <p>As a Senior Frontend Developer, you will work closely with our design and backend teams to create seamless user experiences.</p>
    `,
    requirements: [
      "5+ years of experience with React",
      "Strong knowledge of TypeScript",
      "Experience with Next.js",
      "Familiarity with Tailwind CSS",
      "Good understanding of web accessibility",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "401(k) matching",
      "Flexible work hours",
      "Remote work options",
    ],
    status: "Active",
    applications: [],
  },
  {
    id: "2",
    title: "Backend Developer",
    company: {
      id: "2",
      name: "DataSystems",
      logo: "/placeholder.svg?height=48&width=48",
      website: "https://example.com",
      description: "DataSystems specializes in building robust backend systems for enterprise clients.",
    },
    location: "San Francisco, CA",
    salary: "$130,000 - $160,000",
    type: "Full-time",
    postedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    skills: ["Node.js", "Express", "MongoDB", "AWS"],
    isRemote: false,
    description: `
      <p>We are seeking a Backend Developer to join our engineering team. You will be responsible for developing and maintaining our server-side applications.</p>
      <p>The ideal candidate has experience with Node.js, Express, and MongoDB.</p>
    `,
    requirements: [
      "3+ years of experience with Node.js",
      "Experience with Express framework",
      "Knowledge of MongoDB or similar NoSQL databases",
      "Familiarity with AWS services",
      "Understanding of RESTful API design",
    ],
    benefits: [
      "Competitive salary",
      "Health and dental insurance",
      "Unlimited PTO",
      "Professional development budget",
      "Company events and team building",
    ],
    status: "Active",
    applications: [],
  },
  {
    id: "3",
    title: "UX/UI Designer",
    company: {
      id: "3",
      name: "CreativeMinds",
      logo: "/placeholder.svg?height=48&width=48",
      website: "https://example.com",
      description: "CreativeMinds is a design agency focused on creating beautiful and functional user interfaces.",
    },
    location: "Austin, TX",
    salary: "$90,000 - $120,000",
    type: "Full-time",
    postedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    isRemote: true,
    description: `
      <p>We are looking for a talented UX/UI Designer to join our creative team. You will be responsible for designing intuitive and engaging user interfaces for our clients.</p>
      <p>The ideal candidate has a strong portfolio showcasing their design skills and user-centered approach.</p>
    `,
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency with Figma and Adobe XD",
      "Experience conducting user research",
      "Strong portfolio showcasing previous work",
      "Excellent communication skills",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Flexible work schedule",
      "Remote work options",
      "Creative environment",
    ],
    status: "Active",
    applications: [],
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: {
      id: "1",
      name: "TechCorp",
      logo: "/placeholder.svg?height=48&width=48",
      website: "https://example.com",
      description: "TechCorp is a leading technology company specializing in innovative software solutions.",
    },
    location: "Chicago, IL",
    salary: "$110,000 - $140,000",
    type: "Full-time",
    postedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
    isRemote: false,
    description: `
      <p>We are seeking a DevOps Engineer to join our infrastructure team. You will be responsible for building and maintaining our cloud infrastructure and CI/CD pipelines.</p>
      <p>The ideal candidate has experience with containerization, orchestration, and cloud platforms.</p>
    `,
    requirements: [
      "3+ years of experience in DevOps",
      "Experience with Docker and Kubernetes",
      "Knowledge of AWS or other cloud platforms",
      "Experience with CI/CD pipelines",
      "Familiarity with Infrastructure as Code tools like Terraform",
    ],
    benefits: [
      "Competitive salary",
      "Health and dental insurance",
      "401(k) matching",
      "Professional development opportunities",
      "Flexible work arrangements",
    ],
    status: "Active",
    applications: [],
  },
  {
    id: "5",
    title: "Product Manager",
    company: {
      id: "2",
      name: "DataSystems",
      logo: "/placeholder.svg?height=48&width=48",
      website: "https://example.com",
      description: "DataSystems specializes in building robust backend systems for enterprise clients.",
    },
    location: "Boston, MA",
    salary: "$130,000 - $160,000",
    type: "Full-time",
    postedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days ago
    skills: ["Product Strategy", "Agile", "User Research", "Roadmapping"],
    isRemote: true,
    description: `
      <p>We are looking for a Product Manager to lead our product development efforts. You will be responsible for defining product strategy, roadmapping, and working with cross-functional teams to deliver successful products.</p>
      <p>The ideal candidate has experience managing software products and a track record of successful product launches.</p>
    `,
    requirements: [
      "5+ years of experience in product management",
      "Experience with Agile methodologies",
      "Strong analytical and problem-solving skills",
      "Excellent communication and leadership abilities",
      "Technical background preferred",
    ],
    benefits: [
      "Competitive salary",
      "Health and dental insurance",
      "401(k) with company match",
      "Unlimited PTO",
      "Remote work options",
    ],
    status: "Active",
    applications: [],
  },
]

// Function to fetch jobs with filtering and pagination
export const fetchJobs = async (page = 1, searchParams: any = {}) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const { title, location, types, sort, remote, minSalary } = searchParams

  // Filter jobs based on search parameters
  let filteredJobs = [...mockJobs]

  if (title) {
    filteredJobs = filteredJobs.filter((job) => job.title.toLowerCase().includes(title.toLowerCase()))
  }

  if (location) {
    filteredJobs = filteredJobs.filter((job) => job.location.toLowerCase().includes(location.toLowerCase()))
  }

  if (types && types.length > 0) {
    filteredJobs = filteredJobs.filter((job) => types.includes(job.type))
  }

  if (remote) {
    filteredJobs = filteredJobs.filter((job) => job.isRemote)
  }

  if (minSalary) {
    filteredJobs = filteredJobs.filter((job) => {
      const salaryMatch = job.salary.match(/\$(\d+),000/g)
      if (salaryMatch && salaryMatch.length > 0) {
        const minJobSalary = Number.parseInt(salaryMatch[0].replace(/\$|,/g, "")) * 1000
        return minJobSalary >= minSalary
      }
      return true
    })
  }

  // Sort jobs
  if (sort) {
    switch (sort) {
      case "newest":
        filteredJobs.sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime())
        break
      case "oldest":
        filteredJobs.sort((a, b) => new Date(a.postedAt).getTime() - new Date(b.postedAt).getTime())
        break
      case "salary-high":
        filteredJobs.sort((a, b) => {
          const aSalary = Number.parseInt(a.salary.match(/\$(\d+),000/)?.[0].replace(/\$|,/g, "") || "0")
          const bSalary = Number.parseInt(b.salary.match(/\$(\d+),000/)?.[0].replace(/\$|,/g, "") || "0")
          return bSalary - aSalary
        })
        break
      case "salary-low":
        filteredJobs.sort((a, b) => {
          const aSalary = Number.parseInt(a.salary.match(/\$(\d+),000/)?.[0].replace(/\$|,/g, "") || "0")
          const bSalary = Number.parseInt(b.salary.match(/\$(\d+),000/)?.[0].replace(/\$|,/g, "") || "0")
          return aSalary - bSalary
        })
        break
    }
  }

  // Pagination
  const pageSize = 10
  const totalPages = Math.ceil(filteredJobs.length / pageSize)
  const startIndex = (page - 1) * pageSize
  const paginatedJobs = filteredJobs.slice(startIndex, startIndex + pageSize)

  return {
    jobs: paginatedJobs,
    totalPages,
    currentPage: page,
    totalJobs: filteredJobs.length,
  }
}

// Function to get a job by ID
export const getJobById = async (id: string) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return mockJobs.find((job) => job.id === id) || null
}

// Function to get jobs posted by the current company
export const getCompanyJobs = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real app, this would filter by the current user's company ID
  return mockJobs
}

// Function to create a new job
export const createJob = async (jobData: any) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const newJob: Job = {
    id: (mockJobs.length + 1).toString(),
    title: jobData.title,
    company: {
      id: "1", // In a real app, this would be the current user's company ID
      name: "TechCorp",
      logo: "/placeholder.svg?height=48&width=48",
      website: "https://example.com",
      description: "TechCorp is a leading technology company specializing in innovative software solutions.",
    },
    location: jobData.location,
    salary: jobData.salary,
    type: jobData.type,
    postedAt: new Date().toISOString(),
    skills: jobData.skills,
    isRemote: jobData.isRemote,
    description: jobData.description,
    requirements: jobData.requirements,
    benefits: jobData.benefits,
    status: "Active",
    applications: [],
  }

  mockJobs.unshift(newJob)

  return newJob
}

