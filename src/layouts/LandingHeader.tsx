import { useState } from 'react'

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='bg-primary-background sticky top-0 z-50 shadow-md'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 justify-between'>
          <div className='flex'>
            <div className='flex flex-shrink-0 items-center'>
              <span className='text-primary-foreground text-xl font-bold'>
                SkillLink
              </span>
            </div>
            <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
              {[
                { label: 'Inicio', href: '#inicio' },
                { label: 'Características', href: '#caracteristicas' },
                { label: 'Cómo funciona', href: '#como-funciona' },
                { label: 'Desafíos', href: '#desafios' },
                { label: 'Mentorias', href: '#mentorias' },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className='text-primary-foreground inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:border-gray-300 hover:text-white'>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Auth buttons */}
          <div className='hidden space-x-4 sm:ml-6 sm:flex sm:items-center'>
            <a
              href='/login'
              className='rounded-md bg-white px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-700'>
              Iniciar sesión
            </a>
            <a
              href='/registro'
              className='rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700'>
              Registrarse
            </a>
          </div>

          {/* Mobile menu button */}
          <div className='-mr-2 flex items-center sm:hidden'>
            <button
              type='button'
              className='text-primary-foreground inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-inset'
              onClick={() => setMenuOpen(!menuOpen)}
              aria-controls='mobile-menu'
              aria-expanded={menuOpen}>
              <span className='sr-only'>Abrir menú principal</span>
              <svg
                className='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='bg-primary-background sm:hidden' id='mobile-menu'>
          <div className='space-y-1 pt-2 pb-3'>
            {[
              { label: 'Inicio', href: '#inicio' },
              { label: 'Características', href: '#caracteristicas' },
              { label: 'Cómo funciona', href: '#como-funciona' },
              { label: 'Desafíos', href: '#desafios' },
              { label: 'Testimonios', href: '#testimonios' },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className='text-primary-foreground block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium hover:border-blue-500 hover:bg-blue-700 hover:text-white'>
                {link.label}
              </a>
            ))}
            <hr className='my-2 border-gray-600' />
            <div className='space-y-2 px-4'>
              <a
                href='#'
                className='text-primary-foreground block font-medium hover:text-white'>
                Iniciar sesión
              </a>
              <a
                href='#'
                className='block w-full rounded-md bg-blue-600 px-4 py-2 text-center font-medium text-white transition hover:bg-blue-700'>
                Registrarse
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
