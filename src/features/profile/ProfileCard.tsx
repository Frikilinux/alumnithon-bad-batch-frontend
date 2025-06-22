// src/components/ProfileCard.tsx

import React from 'react'

type Profile = {
  id: string
  name: string
  title: string
  description: string
  stack: string[]
  interests: string[]
  avatarUrl: string
}

type Props = {
  profile: Profile
}

const tagColors: Record<string, string> = {
  React: 'bg-blue-200',
  TypeScript: 'bg-blue-300',
  JavaScript: 'bg-yellow-200',
  Node: 'bg-green-200',
  Python: 'bg-green-300',
  Swift: 'bg-yellow-300',
  Firebase: 'bg-orange-200',
  AWS: 'bg-green-200',
  default: 'bg-gray-200',
}

const ProfileCard: React.FC<Props> = ({ profile }) => {
  return (
    <div className='flex flex-col space-y-3 rounded-lg bg-white p-5 shadow-md'>
      <div className='flex items-center gap-4'>
        <img
          src={profile.avatarUrl}
          alt={profile.name}
          className='h-12 w-12 rounded-full object-cover'
        />
        <div>
          <h3 className='text-lg font-bold'>{profile.name}</h3>
          <p className='text-sm text-gray-600'>{profile.title}</p>
        </div>
      </div>

      <p className='text-sm text-gray-800'>{profile.description}</p>

      <div>
        <h4 className='mb-1 text-xs text-gray-500'>STACK TECNOLÓGICO</h4>
        <div className='flex flex-wrap gap-2'>
          {profile.stack.map((tech) => (
            <span
              key={tech}
              className={`rounded-full px-2 py-1 text-xs ${tagColors[tech] || tagColors.default}`}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className='mb-1 text-xs text-gray-500'>INTERESES</h4>
        <div className='flex flex-wrap gap-2'>
          {profile.interests.map((interest) => (
            <span
              key={interest}
              className='rounded-full bg-purple-200 px-2 py-1 text-xs'>
              {interest}
            </span>
          ))}
        </div>
      </div>

      <div className='mt-auto flex items-center justify-between pt-2'>
        <button className='flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='mr-1 inline-block h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'>
            <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
            <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
          </svg>
          Enviar Mensaje
        </button>
        <button className='text-xl text-gray-500 hover:text-gray-800'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'>
            <path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z'></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ProfileCard
