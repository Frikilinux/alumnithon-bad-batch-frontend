import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/authContext'

const ProtectedRoute = () => {
  const { user, isLoading } = useAuth()

  if (isLoading) return <p className='text-red'>Cargando...</p>
  return user ? <Outlet /> : <Navigate to='/registro' replace />
}

export default ProtectedRoute
