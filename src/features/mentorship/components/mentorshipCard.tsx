import { useEffect, useState } from 'react'

const MentorshipCard = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        setUser(data.results[0])
      } catch (error) {
        console.error('Error fetching user:', error)
      }
    }
    fetchUser()
  }, [])

  return (
    <div className='mentorship-card overflow-hidden rounded-xl bg-white shadow-md'>
      <div className='category-frontend h-3'></div>
      <div className='p-6'>
        <div className='mb-4 flex items-center'>
          <img
            src='https://randomuser.me/api/portraits/men/32.jpg'
            alt='Mentor'
            className='border-primary-100 mr-4 h-12 w-12 rounded-full border-2'
          />
          <div>
            <h3 className='text-lg font-bold'>Carlos Rodríguez</h3>
            <p className='text-sm text-gray-600'>
              Frontend Developer en Google
            </p>
          </div>
        </div>
        <h4 className='mb-2 text-xl font-semibold'>
          Introducción a React Hooks
        </h4>
        <p className='mb-4 text-gray-600'>
          Aprende a utilizar los hooks más importantes de React y cómo
          implementarlos en tus proyectos.
        </p>

        <div className='mb-4 flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='mr-2 h-5 w-5 text-gray-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'></path>
          </svg>
          <span className='text-gray-600'>15 de Junio, 2023</span>
        </div>

        <div className='mb-4 flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='mr-2 h-5 w-5 text-gray-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'></path>
          </svg>
          <span className='text-gray-600'>18:00 - 19:30 (GMT+2)</span>
        </div>

        <div className='mb-4 flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='mr-2 h-5 w-5 text-gray-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z'></path>
          </svg>
          <span className='text-gray-600'>3/10 plazas disponibles</span>
        </div>

        <div className='mb-4 h-2.5 w-full rounded-full bg-gray-200'>
          <div
            className='bg-primary-600 h-2.5 rounded-full'
            style='width: 70%'></div>
        </div>

        <div className='mb-4 flex flex-wrap gap-2'>
          <span className='rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800'>
            React
          </span>
          <span className='rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800'>
            JavaScript
          </span>
          <span className='rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800'>
            Principiantes
          </span>
        </div>

        <button className='bg-primary-600 hover:bg-primary-700 w-full rounded-lg py-2 font-medium text-white transition'>
          Inscribirse
        </button>
      </div>
    </div>
  )
}
