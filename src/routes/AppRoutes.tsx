import MainLayout from '../layouts/MainLyout'
import ProtectedRoute from './ProtecterdRoute'
import Error from '../pages/NotFound'
import Home from '../pages/Home'
import About from '../pages/About'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Mentorship from '../pages/Mentorship'
import Perfil from '../pages/Profile'
import CreatePerfil from '../pages/CreatePerfil'
import UserProfilePage from '../pages/UserProfilePage'
import Challenge from '../pages/Challenge'
import Landing from '../pages/LandingPage'
import LandingLayout from '../layouts/LandingLayout'

export const Routes = [
  // Rutas públicas sin protección
  {
    path: '/',
    element: <LandingLayout />,
    children: [{ index: true, element: <Landing /> }],
  },
  { path: '/registro', element: <Register /> },
  { path: '/login', element: <Login /> },

  // Rutas protegidas (requieren login)
  {
    path: '/dashboard',
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'about', element: <About /> },
          { path: 'mentorship', element: <Mentorship /> },
          { path: 'perfil', element: <Perfil /> },
          { path: 'crear-perfil', element: <CreatePerfil /> },
          { path: 'userperfil', element: <UserProfilePage /> },
          { path: 'challenge', element: <Challenge /> },
        ],
      },
    ],
  },

  // Página no encontrada
  { path: '*', element: <Error /> },
]
