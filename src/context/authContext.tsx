import { createContext, useContext, useEffect, useState } from 'react'
import apiClient from '../api/ApiClient'

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
  //       const res = await apiClient.get('/auth/me')
  //       setUser(res.data)
  //       console.log(`Usuario autenticado: ${res.data.email}`)
  //     } catch (err) {
  //       console.error('Error al verificar autenticación:', err)
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
        // Simula un usuario autenticado (cambia o comenta para probar sin usuario)
        const simulatedUser = {
          id: '123',
          email: 'test@example.com',
          name: 'Usuario Simulado',
        }
        setUser(simulatedUser)
      } catch {
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
