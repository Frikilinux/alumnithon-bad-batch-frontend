import MainLayout from '../layouts/MainLyout'
import ProtectedRoute from './ProtecterdRoute'
import Error from '../pages/NotFound'
import Home from '../pages/Home'
import About from '../pages/About'
import Register from '../pages/Register'

export const Routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
  { path: '/registro', element: <Register /> },

  //RUTAS PROTEGIDAS
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [{ path: 'dashboard', element: <MainLayout /> }],
  },

  { path: '*', element: <Error /> },
]
