export interface Job {
  id: string
  title: string
  company: {
    id: string
    name: string
    logo: string
    website?: string
    description?: string
  }
  location: string
  salary: string
  type: string
  postedAt: string
  skills: string[]
  isRemote: boolean
  description: string
  requirements: string[]
  benefits: string[]
  status?: string
  applications?: any[]
}

