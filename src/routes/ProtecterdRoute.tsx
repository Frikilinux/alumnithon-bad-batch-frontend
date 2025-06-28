import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'
import { useEffect } from 'react'

const ProtectedRoute = () => {
  const { user, isLoading, checkAuth } = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (isLoading) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <p className='animate-pulse text-gray-600'>Verificando sesión...</p>
      </div>
    )
  }

  return user ? <Outlet /> : <Navigate to='/login' replace />
}

export default ProtectedRoute
