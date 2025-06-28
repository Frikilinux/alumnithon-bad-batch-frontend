import React from 'react'

const DashboardOverview: React.FC = () => {
  return (
    <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
      {/* Ranking de desafíos */}
      <div className='card p-6'>
        <div className='mb-4 flex items-center justify-between'>
          <h2 className='text-xl font-semibold text-gray-800'>
            Ranking de desafíos
          </h2>
          <button className='text-sm font-medium text-blue-600 hover:text-blue-800'>
            Ver completo
          </button>
        </div>

        <div className='overflow-hidden'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                {['Posición', 'Usuario', 'Desafíos', 'Puntos'].map(
                  (heading) => (
                    <th
                      key={heading}
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase'>
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 bg-white'>
              {[
                {
                  pos: 1,
                  name: 'Miguel Ángel',
                  avatar:
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                  challenges: 24,
                  points: '1,250',
                },
                {
                  pos: 2,
                  name: 'Laura Sánchez',
                  avatar:
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                  challenges: 22,
                  points: '1,180',
                },
                {
                  pos: 3,
                  name: 'David Ruiz',
                  avatar:
                    'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                  challenges: 19,
                  points: '980',
                },
                {
                  pos: 4,
                  name: 'Elena Torres',
                  avatar:
                    'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                  challenges: 18,
                  points: '920',
                },
                {
                  pos: 5,
                  name: 'Tú',
                  avatar:
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                  challenges: 15,
                  points: '780',
                },
              ].map(({ pos, name, avatar, challenges, points }) => (
                <tr key={pos}>
                  <td className='px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900'>
                    {pos}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='flex items-center'>
                      <img
                        className='h-8 w-8 rounded-full'
                        src={avatar}
                        alt={name}
                      />
                      <div className='ml-4 text-sm font-medium text-gray-900'>
                        {name}
                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-4 text-sm whitespace-nowrap text-gray-500'>
                    {challenges}
                  </td>
                  <td className='px-6 py-4 text-sm whitespace-nowrap text-gray-500'>
                    {points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mentorías destacadas */}
      <div className='card p-6'>
        <div className='mb-4 flex items-center justify-between'>
          <h2 className='text-xl font-semibold text-gray-800'>
            Mentorías destacadas
          </h2>
          <button className='text-sm font-medium text-blue-600 hover:text-blue-800'>
            Ver todas
          </button>
        </div>

        <div className='space-y-4'>
          {[
            {
              title: 'Arquitectura de microservicios',
              mentor: 'Carlos Mendoza',
              avatar:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              badge: 'Backend',
              sessions: '3 sesiones',
            },
            {
              title: 'React avanzado y patrones',
              mentor: 'Ana Martínez',
              avatar:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              badge: 'Frontend',
              sessions: '5 sesiones',
            },
            {
              title: 'DevOps y CI/CD',
              mentor: 'David Ruiz',
              avatar:
                'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              badge: 'DevOps',
              sessions: '4 sesiones',
            },
            {
              title: 'Algoritmos y estructuras de datos',
              mentor: 'Elena Torres',
              avatar:
                'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              badge: 'Algoritmos',
              sessions: '6 sesiones',
            },
          ].map(({ title, mentor, avatar, badge, sessions }) => (
            <div
              key={title}
              className='rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md'>
              <div className='flex justify-between'>
                <div>
                  <h3 className='font-medium'>{title}</h3>
                  <div className='mt-1 flex items-center'>
                    <img
                      className='h-6 w-6 rounded-full'
                      src={avatar}
                      alt={mentor}
                    />
                    <span className='ml-2 text-sm text-gray-600'>{mentor}</span>
                  </div>
                </div>
                <div className='text-right'>
                  <span className='badge'>{badge}</span>
                  <p className='mt-1 text-sm text-gray-600'>{sessions}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardOverview
