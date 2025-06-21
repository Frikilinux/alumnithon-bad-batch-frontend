import { create } from 'zustand'
import { getCurrentUser } from '../api/auth'
import { handleApiError } from '../api/errorHandler'

type User = {
  id: string
  email: string
  name: string
}

type AuthState = {
  user: User | null
  isLoading: boolean
  checkAuth: () => Promise<void>
  setUser: (user: User | null) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,

  setUser: (user) => set({ user }),

  checkAuth: async () => {
    set({ isLoading: true })
    try {
      const user = (await getCurrentUser()) as User
      set({ user, isLoading: false })
    } catch (err) {
      handleApiError(err)
      set({ user: null, isLoading: false })
    }
  },
}))
