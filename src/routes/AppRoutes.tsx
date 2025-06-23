import MainLayout from '../layouts/MainLyout'
import ProtectedRoute from './ProtecterdRoute'
import Error from '../pages/NotFound'
import Home from '../pages/Home'
import About from '../pages/About'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Perfil from '../pages/Profile'
import DesafiosPage from '../pages/test'

export const Routes = [
  // Rutas públicas
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'perfil', element: <Perfil /> },
      { path: 'test', element: <DesafiosPage /> },
    ],
  },
  { path: '/registro', element: <Register /> },
  { path: '/login', element: <Login /> },

  // Rutas protegidas
  {
    path: '/dashboard',
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <Register />,
      },
    ],
  },

  // Página no encontrada
  { path: '*', element: <Error /> },
]
