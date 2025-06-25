import { Outlet } from 'react-router'
import Header from './Header'

const MainLayout = () => {
  return (
    <div className='relative flex min-h-screen w-full flex-col'>
      <Header />
      <main className='flex grow flex-col'>
        <Outlet />
      </main>
      <footer className='bg-gray-800 py-4 text-center text-white'>
        <p className='text-sm'>
          © 2025 SkillLink. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  )
}

export default MainLayout
