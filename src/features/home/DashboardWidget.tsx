import React from 'react'

const DashboardWidget: React.FC = () => {
  return (
    <div className='mb-8 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3'>
      {/* Progreso */}
      <div className='card flex h-full flex-col p-6'>
        <h2 className='mb-4 text-xl font-semibold text-gray-800'>
          Tu progreso
        </h2>
        <div className='space-y-4'>
          {[
            { label: 'Desafíos completados', value: '8/12', percent: 66 },
            { label: 'Sesiones de mentoría', value: '3/5', percent: 60 },
            { label: 'Puntos de habilidad', value: '450/1000', percent: 45 },
          ].map(({ label, value, percent }) => (
            <div key={label}>
              <div className='mb-1 flex justify-between'>
                <span className='text-sm font-medium'>{label}</span>
                <span className='text-sm font-medium'>{value}</span>
              </div>
              <div className='h-2 w-full overflow-hidden rounded bg-gray-200'>
                <div
                  className='h-full rounded bg-blue-600 transition-all'
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className='mt-auto'>
          <button className='btn-outline mt-4 w-full' id='view-progress-btn'>
            Ver detalles
          </button>
        </div>
      </div>

      {/* Desafíos activos */}
      <div className='card flex h-full flex-col p-6'>
        <h2 className='mb-4 text-xl font-semibold text-gray-800'>
          Desafíos activos
        </h2>
        <div className='space-y-4'>
          {[
            {
              title: 'API REST con Node.js',
              due: 'Vence en 3 días',
              tags: ['Backend', 'Node.js'],
            },
            {
              title: 'Dashboard con React',
              due: 'Vence en 5 días',
              tags: ['Frontend', 'React'],
            },
          ].map(({ title, due, tags }) => (
            <div key={title} className='border-l-4 border-blue-500 pl-3'>
              <h3 className='font-medium'>{title}</h3>
              <p className='text-sm text-gray-600'>{due}</p>
              <div className='mt-2 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                  <span key={tag} className='badge'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='mt-auto'>
          <button className='btn-outline mt-4 w-full' id='view-challenges-btn'>
            Ver todos
          </button>
        </div>
      </div>

      {/* Mensajes recientes */}
      <div className='card flex h-full flex-col p-6'>
        <h2 className='mb-4 text-xl font-semibold text-gray-800'>
          Mensajes recientes
        </h2>
        <div className='space-y-4'>
          {[
            {
              name: 'Ana Martínez',
              message: 'Hola! Te quería consultar sobre el desafío de React...',
              time: 'Hace 2 horas',
              img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
              name: 'Carlos López',
              message: 'Gracias por tu ayuda con el problema de Docker...',
              time: 'Ayer',
              img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
          ].map(({ name, message, time, img }) => (
            <div key={name} className='flex items-start'>
              <img
                src={img}
                alt={name}
                className='mr-3 h-10 w-10 rounded-full object-cover'
              />
              <div>
                <p className='font-medium'>{name}</p>
                <p className='text-sm text-gray-600'>{message}</p>
                <p className='mt-1 text-xs text-gray-500'>{time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-auto'>
          <button className='btn-outline mt-4 w-full' id='view-messages-btn'>
            Ver todos
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardWidget
