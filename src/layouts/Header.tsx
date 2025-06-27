import {
  IconCode,
  IconUser,
  IconSettings,
  IconLogout,
  IconId,
} from '@tabler/icons-react'
import { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ChatSidebar from '../features/menssage/ChatSidebar'

const Logo = () => (
  <div className='flex items-center gap-2 text-2xl font-bold'>
    <IconCode className='size-8' />
    <span className='hidden tracking-wide md:block'>SkillLink</span>
  </div>
)

const NavBar = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex h-full items-center px-2 transition-all ${
      isActive
        ? 'border-b-2 border-white text-white'
        : 'text-gray-300 hover:text-white'
    }`

  return (
    <nav className='hidden h-full items-center justify-center md:flex'>
      <ul className='flex h-full space-x-8'>
        <li>
          <NavLink to='/dashboard' end className={navLinkClass}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to='/dashboard/challenge' className={navLinkClass}>
            Desafíos
          </NavLink>
        </li>
        <li>
          <NavLink to='/dashboard/mentorship' className={navLinkClass}>
            Mentorías
          </NavLink>
        </li>
        <li>
          <NavLink to='/dashboard/perfil' className={navLinkClass}>
            Comunidad
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

const UserMenu = ({ onLogout }: { onLogout: () => void }) => (
  <div className='absolute top-12 right-0 z-50 w-48 rounded-md border border-gray-200 bg-white shadow-lg'>
    <ul className='flex flex-col p-2 text-sm text-gray-800'>
      <li>
        <NavLink
          to='/dashboard/userperfil'
          className='flex items-center gap-2 rounded-md px-4 py-2 hover:bg-gray-100'>
          <IconId size={16} /> Ver Perfil
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/dashboard/configuracion'
          className='flex items-center gap-2 rounded-md px-4 py-2 hover:bg-gray-100'>
          <IconSettings size={16} /> Configuración
        </NavLink>
      </li>
      <li>
        <button
          onClick={onLogout}
          className='flex w-full items-center gap-2 rounded-md px-4 py-2 text-left hover:bg-gray-100'>
          <IconLogout size={16} className='text-red-500' />
          <span className='text-red-500'>Cerrar Sesión</span>
        </button>
      </li>
    </ul>
  </div>
)

const UserButton = ({ onChatClick }: { onChatClick: () => void }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      className='relative flex items-center gap-4 justify-self-end'
      ref={menuRef}>
      <button type='button'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8 hover:cursor-pointer'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'></path>
        </svg>
      </button>
      <button type='button' onClick={onChatClick}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8 hover:cursor-pointer'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'></path>
        </svg>
      </button>
      <button
        onClick={() => setOpenMenu((prev) => !prev)}
        className='bg-card-background flex aspect-square h-9 w-auto items-center justify-center rounded-full border-2'>
        <IconUser />
      </button>
      {openMenu && <UserMenu onLogout={() => alert('Cerrar sesión')} />}
    </div>
  )
}

const Header = () => {
  const [showChat, setShowChat] = useState(false)

  return (
    <header className='text-primary-foreground bg-primary-background sticky top-0 z-50 grid h-16 w-full grid-cols-2 items-center px-4 shadow-md shadow-slate-950/50 md:grid-cols-3'>
      <Logo />
      <NavBar />
      <UserButton onChatClick={() => setShowChat(true)} />

      {/* Chat lateral */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[350px] border-l border-blue-300 bg-blue-50 shadow-xl transition-transform duration-300 ${
          showChat ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <ChatSidebar
          currentUser={{ id: 'yo', name: 'Mi Usuario' }}
          onClose={() => setShowChat(false)}
        />
      </div>
    </header>
  )
}

export default Header
