import type { User } from "@/types/user"

// Mock user data
const mockUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "employer",
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "jobSeeker",
    image: "/placeholder.svg?height=32&width=32",
  },
]

// Function to simulate login
export const login = async (email: string, password: string) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real app, this would validate credentials against a backend
  const user = mockUsers.find((user) => user.email === email)

  if (!user) {
    throw new Error("Invalid email or password")
  }

  return user
}

// Function to simulate registration
export const register = async (userData: any) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // In a real app, this would create a new user in the database
  const newUser: User = {
    id: (mockUsers.length + 1).toString(),
    name: userData.name,
    email: userData.email,
    role: userData.role,
    image: "/placeholder.svg?height=32&width=32",
  }

  mockUsers.push(newUser)

  return newUser
}

// Function to simulate logout
export const logout = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // In a real app, this would invalidate the session
  return true
}

