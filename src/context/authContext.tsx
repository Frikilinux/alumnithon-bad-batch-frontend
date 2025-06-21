import { createContext, useContext, useEffect, useState } from 'react'
import { getCurrentUser } from '../api/auth'
import { handleApiError } from '../api/errorHandler'

type User = {
  id: string
  email: string
  name: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       const user = await getCurrentUser()
  //       setUser(user)
  //     } catch (err) {
  //       handleApiError(err)
  //       setUser(null)
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }

  //   checkAuth()
  // }, [])
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const simulatedUser = {
          id: '123',
          email: 'test@example.com',
          name: 'Usuario Simulado',
        }
        setUser(simulatedUser)
      } catch (err: any) {
        handleApiError(err)
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
