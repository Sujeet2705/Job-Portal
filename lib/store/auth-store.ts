"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import {
  login as loginService,
  register as registerService,
  logout as logoutService,
} from "@/lib/services/auth-service"
import type { User } from "@/types/user"

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null

  login: (email: string, password: string) => Promise<void>
  register: (userData: any) => Promise<void>
  logout: () => Promise<void>
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null })
        try {
          const user = await loginService(email, password)
          set({
            user,
            isAuthenticated: true,
            isLoading: false,
          })
        } catch (error) {
          set({
            error: "Invalid email or password",
            isLoading: false,
          })
          throw error
        }
      },

      register: async (userData: any) => {
        set({ isLoading: true, error: null })
        try {
          const user = await registerService(userData)
          set({
            user,
            isAuthenticated: true,
            isLoading: false,
          })
        } catch (error) {
          set({
            error: "Registration failed",
            isLoading: false,
          })
          throw error
        }
      },

      logout: async () => {
        set({ isLoading: true })
        try {
          await logoutService()
          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
          })
        } catch (error) {
          set({
            error: "Logout failed",
            isLoading: false,
          })
        }
      },
    }),
    {
      name: "auth-store",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
)

