"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import { fetchJobs as fetchJobsService } from "@/lib/services/job-service"
import type { Job } from "@/types/job"

interface SearchParams {
  title?: string
  location?: string
  types?: string[]
  sort?: string
  remote?: boolean
  minSalary?: number
}

interface JobState {
  jobs: Job[]
  isLoading: boolean
  error: string | null
  currentPage: number
  totalPages: number
  searchParams: SearchParams

  fetchJobs: () => Promise<void>
  setPage: (page: number) => void
  setSearchParams: (params: SearchParams) => void
}

export const useJobStore = create<JobState>()(
  persist(
    (set, get) => ({
      jobs: [],
      isLoading: false,
      error: null,
      currentPage: 1,
      totalPages: 1,
      searchParams: {
        title: "",
        location: "",
        types: [],
        sort: "newest",
        remote: false,
        minSalary: 0,
      },

      fetchJobs: async () => {
        set({ isLoading: true, error: null })
        try {
          const { currentPage, searchParams } = get()
          const response = await fetchJobsService(currentPage, searchParams)
          set({
            jobs: response.jobs,
            totalPages: response.totalPages,
            isLoading: false,
          })
        } catch (error) {
          set({
            error: "Failed to fetch jobs",
            isLoading: false,
          })
        }
      },

      setPage: (page: number) => {
        set({ currentPage: page })
      },

      setSearchParams: (params: SearchParams) => {
        set({
          searchParams: params,
          currentPage: 1, // Reset to first page when search params change
        })
      },
    }),
    {
      name: "job-store",
      partialize: (state) => ({
        searchParams: state.searchParams,
        currentPage: state.currentPage,
      }),
    },
  ),
)

