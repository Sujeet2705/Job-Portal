// Function to get dashboard statistics
export const getDashboardStats = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real app, this would fetch actual statistics from the database
  return {
    activeJobs: 5,
    totalApplications: 24,
    newApplications: 8,
    viewRate: 76,
  }
}

