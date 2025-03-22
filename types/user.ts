export interface User {
  id: string
  name: string
  email: string
  role: "jobSeeker" | "employer"
  image?: string
}

