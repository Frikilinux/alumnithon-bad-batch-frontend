import { IconBell, IconCode, IconMessage, IconUser } from '@tabler/icons-react'
// import { useState } from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <nav className='hidden items-center justify-between gap-4 justify-self-center md:flex'>
      <ul className='flex space-x-8'>
        <li>
          <NavLink to='/' className='[.active]:border-b-2'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/registro' className='[.active]:border-b-2'>
            Registro
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className='[.active]:border-b-2'>
            About
          </NavLink>
        </li>
        <li>

          <NavLink to='/crear-perfil' className='[.active]:border-b-2'>
            Crear Perfil
            
          </NavLink>

          <NavLink to='/mentorship' className='[.active]:border-b-2'>
            Mentorías

          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

// const Search = () => {
//   return (
//     <div className='flex items-center'>
//       <input
//         type='text'
//         placeholder='Search...'
//         className='rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
//       />
//     </div>
//   )
// }

const Logo = () => {
  return (
    <div className='flex items-center gap-2 text-2xl font-bold'>
      <IconCode className='size-8' />
      <span className='hidden tracking-wide md:block'>SkillLink</span>
    </div>
  )
}

const UserButton = () => {
  return (
    <div className='flex items-center gap-4 justify-self-end'>
      <button type='button'>
        <IconMessage className='size-7 hover:cursor-pointer' />
      </button>
      <button type='button'>
        <IconBell className='size-7 hover:cursor-pointer' />
      </button>

      <NavLink to='/registro'>
        <button
          data-tooltip-id='user-tooltip'
          type='button'
          className='bg-card-background flex aspect-square h-9 w-auto items-center justify-center rounded-full border-2'>
          <IconUser />
        </button>
      </NavLink>
    </div>
  )
}

const Header = () => {
  // const [isloggedIn, setIsLoggedIn] = useState(false)
  return (
    <header className='text-primary-foreground bg-primary-background sticky top-0 z-1 grid w-full grid-cols-2 items-center p-4 shadow-md shadow-slate-950/50 md:grid-cols-3'>
      <Logo />
      <NavBar />
      <UserButton />
    </header>
  )
}

export default Header
