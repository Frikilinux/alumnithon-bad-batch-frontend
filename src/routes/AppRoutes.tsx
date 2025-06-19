import MainLayout from '../layouts/MainLyout'
import Error from '../pages/NotFound'
import Home from '../pages/Home'
import About from '../pages/About'

export const Routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
  { path: '*', element: <Error /> },
]
