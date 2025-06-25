import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'
import { useEffect } from 'react'

const ProtectedRoute = () => {
  const { user, isLoading, checkAuth } = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [])

  if (isLoading) return <p className='text-red'>Cargando...</p>

  return user ? <Outlet /> : <Navigate to='/login' replace />
}

export default ProtectedRoute
