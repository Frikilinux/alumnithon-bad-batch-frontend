import { Outlet } from 'react-router'
import Header from './Header'

const MainLayout = () => {
  return (
    <div className='relative flex min-h-screen w-full flex-col'>
      <div className='absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
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
