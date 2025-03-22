import * as z from "zod"

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

export const applicationSchema = z.object({
  fullName: z.string().min(2, "Full name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  resume: z
    .any()
    .refine((file) => file !== undefined, "Resume is required")
    .refine((file) => !file || file.size <= MAX_FILE_SIZE, "File size must be less than 5MB"),
  coverLetter: z.string().optional(),
  portfolioUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
  availability: z.string().min(2, "Availability information is required"),
  expectedSalary: z.string().min(2, "Expected salary information is required"),
})

export type ApplicationFormValues = z.infer<typeof applicationSchema>

