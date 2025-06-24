// import type { Mentorship } from '../constants/mentorships'
// import { category } from '../constants/mentorships'
// import { IconAlarm, IconCalendar, IconUsers } from '@tabler/icons-react'

import { IconStarFilled } from '@tabler/icons-react'
import type { Challenge } from './constants/challenges'
import { dificulty } from './constants/challenges'

const ChallengeCard = ({ challenge }: { challenge: Challenge }) => {
  return (
    <div className='challenge-card overflow-hidden rounded-xl bg-white shadow-md transition duration-300'>
      <div className={`${dificulty[challenge.dificulty].color} h-3`}></div>
      <div className='p-6'>
        <div className='mb-4 flex items-start justify-between'>
          <h3 className='text-xl font-bold'>{challenge.title}</h3>
          <span className='rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 capitalize'>
            {challenge.dificulty}
          </span>
        </div>
        <p className='mb-4 text-gray-600'>{challenge.description}</p>
        <div className='mb-4 flex flex-wrap gap-2'>
          {challenge.stacks.map((stack, index) => {
            return (
              <span
                key={`${stack}-${index}`}
                className='rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800'>
                {stack}
              </span>
            )
          })}
        </div>
        <div className='mb-4 flex items-center'>
          <div className='flex -space-x-2'>
            <img
              className='h-6 w-6 rounded-full border border-white'
              src='https://randomuser.me/api/portraits/men/22.jpg'
              alt='Participante'
            />
            <img
              className='h-6 w-6 rounded-full border border-white'
              src='https://randomuser.me/api/portraits/women/14.jpg'
              alt='Participante'
            />
            <img
              className='h-6 w-6 rounded-full border border-white'
              src='https://randomuser.me/api/portraits/men/35.jpg'
              alt='Participante'
            />
          </div>
          <span className='ml-2 text-xs text-gray-500'>
            {challenge.participants} participantes
          </span>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <IconStarFilled className='size-5 text-amber-400' />
            <span className='ml-1 text-gray-600'>{challenge.value}/5</span>
          </div>
          <button className='bg-primary-600 hover:bg-primary-700 rounded-lg px-4 py-2 font-medium text-white transition'>
            Ver Desafío
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChallengeCard
