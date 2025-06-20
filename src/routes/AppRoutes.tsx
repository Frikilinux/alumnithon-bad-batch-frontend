import MainLayout from '../layouts/MainLyout'
import Error from '../pages/NotFound'
import Home from '../pages/Home'
import About from '../pages/About'
import Register from '../pages/Register'
import Login from '../pages/Login'
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
  { path: '/login', element: <Login /> },

  { path: '*', element: <Error /> },
]
