import React from 'react'

const challenges = [
  {
    title: 'Construye una aplicación de tareas con React',
    description:
      'Desarrolla una aplicación de gestión de tareas con React que incluya filtros, búsqueda y persistencia de datos.',
    badge: 'Frontend',
    badgeColor: 'blue',
    difficulty: 'Intermedio',
    stars: 1,
    time: '5 horas',
    color: 'blue',
  },
  {
    title: 'API RESTful con Node.js y Express',
    description:
      'Crea una API completa con autenticación, autorización, validación de datos y documentación usando Swagger.',
    badge: 'Backend',
    badgeColor: 'green',
    difficulty: 'Avanzado',
    stars: 2,
    time: '8 horas',
    color: 'green',
  },
  {
    title: 'Aplicación de blog con MERN Stack',
    description:
      'Desarrolla un blog completo con MongoDB, Express, React y Node.js que incluya autenticación y gestión de contenidos.',
    badge: 'Full Stack',
    badgeColor: 'purple',
    difficulty: 'Principiante',
    stars: 1,
    time: '10 horas',
    color: 'purple',
  },
]

const ChallengeSection: React.FC = () => {
  return (
    <section id='desafios' className='bg-gray-50 py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-gray-900 md:text-4xl'>
            Desafíos técnicos
          </h2>
          <p className='mx-auto max-w-3xl text-xl text-gray-600'>
            Mejora tus habilidades resolviendo problemas reales y recibiendo
            retroalimentación de expertos.
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {challenges.map((challenge, idx) => (
            <div
              key={idx}
              className='feature-card overflow-hidden rounded-xl bg-white shadow-md'>
              <div className={`h-2 bg-${challenge.color}-600`} />
              <div className='p-6'>
                <div className='mb-4 flex items-start justify-between'>
                  <span
                    className={`rounded bg-${challenge.badgeColor}-100 px-2.5 py-0.5 text-xs font-semibold text-${challenge.badgeColor}-800`}>
                    {challenge.badge}
                  </span>
                  <div className='flex items-center'>
                    {Array.from({ length: challenge.stars }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 text-yellow-400'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                      </svg>
                    ))}
                    <span className='ml-1 text-sm text-gray-600'>
                      {challenge.difficulty}
                    </span>
                  </div>
                </div>

                <h3 className='mb-2 text-xl font-bold text-gray-900'>
                  {challenge.title}
                </h3>
                <p className='mb-4 text-gray-600'>{challenge.description}</p>

                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-500'>
                    Tiempo estimado: {challenge.time}
                  </span>
                  <a
                    href='#'
                    className='flex items-center text-sm font-medium text-blue-600 hover:text-blue-800'>
                    Ver desafío
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='ml-1 h-4 w-4'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path
                        fillRule='evenodd'
                        d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChallengeSection
