import React from 'react'

const stats = [
  { label: 'Miembros Activos', value: '12,458' },
  { label: 'Grupos de Interés', value: '876' },
  { label: 'Proyectos Colaborativos', value: '3,245' },
  { label: 'Países Representados', value: '42' },
]

const CommunityStats: React.FC = () => {
  return (
    <section className='flex justify-around rounded-md bg-white py-6 text-center shadow-sm'>
      {stats.map((stat, index) => (
        <div key={index}>
          <div className='text-3xl font-bold text-blue-600'>{stat.value}</div>
          <div className='text-sm text-gray-700'>{stat.label}</div>
        </div>
      ))}
    </section>
  )
}

export default CommunityStats
