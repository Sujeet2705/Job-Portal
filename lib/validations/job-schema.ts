import * as z from "zod"

export const jobSchema = z.object({
  title: z.string().min(5, "Job title must be at least 5 characters"),
  description: z.string().min(50, "Job description must be at least 50 characters"),
  location: z.string().min(2, "Location is required"),
  salary: z.string().min(1, "Salary information is required"),
  type: z.enum(["Full-time", "Part-time", "Contract", "Internship"]),
  skills: z.string().min(3, "At least one skill is required"),
  requirements: z.string().min(10, "Requirements are required"),
  benefits: z.string().min(10, "Benefits are required"),
  isRemote: z.boolean().default(false),
})

export type JobFormValues = z.infer<typeof jobSchema>

