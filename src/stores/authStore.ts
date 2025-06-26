import { create } from 'zustand'
import { getCurrentUser } from '../services/authService'

type User = {
  id: number
  firstName: string
  lastName: string
  role: string
  email?: string
  isActive: boolean
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
      console.log('Error checking authStore:', err)
      set({ user: null, isLoading: false })
    }
  },
}))
