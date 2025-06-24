import React from 'react'

const stats = [
  { label: 'Mentores Activos', value: '1,245' },
  { label: 'Aprendices', value: '1,392' },
  { label: 'Sesiones Realizadas', value: '13,245' },
  { label: 'Valoración Media', value: '4.9/5' },
]

const MentorshipStats: React.FC = () => {
  return (
    <section className='my-2 grid grid-cols-2 gap-4 rounded-md bg-white p-4 text-center shadow-sm md:grid-cols-4'>
      {stats.map((stat, index) => (
        <div key={index}>
          <div className='text-3xl font-bold text-blue-600'>{stat.value}</div>
          <div className='text-sm text-gray-700'>{stat.label}</div>
        </div>
      ))}
    </section>
  )
}

export default MentorshipStats
