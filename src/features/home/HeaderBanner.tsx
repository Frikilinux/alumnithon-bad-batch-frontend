import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderBanner: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className='mx-16 my-8 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-lg'>
      <div className='max-w-3xl'>
        <h1 className='mb-4 text-3xl font-bold'>
          Bienvenido a SkillLink for Developers
        </h1>
        <p className='mb-6 text-lg'>
          Conecta, aprende y crece junto a otros desarrolladores. Participa en
          desafíos, encuentra mentores y comparte tus conocimientos.
        </p>
        <div className='flex flex-wrap gap-4'>
          <button
            onClick={() => navigate('/dashboard/challenge')}
            className='rounded-md bg-white px-6 py-2 font-medium text-blue-700 transition-colors hover:bg-blue-50'>
            Explorar desafíos
          </button>
          <button
            onClick={() => navigate('/dashboard/mentorship')}
            className='rounded-md bg-blue-500 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-600'>
            Buscar mentores
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeaderBanner
