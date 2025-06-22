// src/components/CommunityBanner.tsx

import React from 'react'
// import { FaUsers } from 'react-icons/fa'; // ícono similar al del banner

const CommunityBanner: React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-between bg-gradient-to-r from-sky-600 to-sky-700 p-10 text-white shadow-lg md:flex-row'>
      {/* Texto */}
      <div className='mb-6 flex-1 md:mb-0'>
        <h1 className='mb-4 text-3xl font-bold md:text-4xl'>
          Conecta con la
          <br />
          Comunidad Tech
        </h1>
        <p className='mb-6 text-lg'>
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
      <div className='text-9xl text-white'>
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
    </section>
  )
}

export default CommunityBanner
