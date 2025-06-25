import React from 'react'

const CommunityBanner: React.FC = () => {
  return (
    <section className='flex w-full flex-col items-center bg-gradient-to-r from-blue-600 to-blue-800 py-12 text-white'>
      <div className='flex flex-col-reverse items-center px-4 md:flex-row'>
        {/* Texto */}
        <div className='mb-8 md:mb-0 md:w-1/2'>
          <h1 className='mb-4 text-center text-3xl font-bold md:text-left md:text-5xl'>
            Conecta con la
            <br />
            Comunidad Tech
          </h1>
          <p className='mb-6 text-center text-xl md:text-left'>
            Encuentra desarrolladores con intereses similares, amplía tu red
            profesional y colabora en proyectos innovadores.
          </p>
          <div className='flex gap-4'>
            <button className='rounded bg-white px-4 py-2 font-semibold text-sky-700 transition hover:bg-gray-100'>
              Explorar Perfiles
            </button>
          </div>
        </div>

        {/* Ícono */}
        <div className='flex justify-center md:w-1/2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-64 w-64'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default CommunityBanner
