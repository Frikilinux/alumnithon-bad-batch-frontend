interface Mentorship {
  title: string
  description: string
  badge: string
  badgeColor: string
  difficulty: string
  stars: number
  sessions: string
  mentor: string
  avatar: string
  color: string
}

const mentorships: Mentorship[] = [
  {
    title: 'Desarrollo web con React desde cero',
    description:
      'Aprende a construir aplicaciones web modernas con React, Redux y las mejores prácticas de la industria.',
    badge: 'Frontend',
    badgeColor: 'blue',
    difficulty: 'Intermedio',
    stars: 5,
    sessions: '8 sesiones de 2 horas',
    mentor: 'Carlos Rodríguez - Senior Frontend Developer',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    color: 'blue',
  },
  {
    title: 'Arquitectura de microservicios con Node.js',
    description:
      'Diseña y desarrolla sistemas escalables basados en microservicios utilizando Node.js, Docker y Kubernetes.',
    badge: 'Backend',
    badgeColor: 'green',
    difficulty: 'Avanzado',
    stars: 4,
    sessions: '6 sesiones de 3 horas',
    mentor: 'Laura Martínez - DevOps Engineer',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    color: 'green',
  },
]

const MentorshipSection: React.FC = () => {
  return (
    <section id='mentorias' className='bg-gray-50 py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-gray-900 md:text-4xl'>
            Mentorías destacadas
          </h2>
          <p className='mx-auto max-w-3xl text-xl text-gray-600'>
            Explora algunas de las mentorías más populares impartidas por
            nuestros expertos.
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {mentorships.map((item, idx) => (
            <div
              key={idx}
              className='feature-card overflow-hidden rounded-xl bg-white shadow-md'>
              <div className={`h-2 bg-${item.color}-600`} />
              <div className='p-6'>
                <div className='mb-4 flex items-start justify-between'>
                  <span
                    className={`rounded bg-${item.badgeColor}-100 px-2.5 py-0.5 text-xs font-semibold text-${item.badgeColor}-800`}>
                    {item.badge}
                  </span>
                  <div className='flex items-center'>
                    {Array.from({ length: item.stars }).map((_, i) => (
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
                      {item.difficulty}
                    </span>
                  </div>
                </div>

                <h3 className='mb-2 text-xl font-bold text-gray-900'>
                  {item.title}
                </h3>
                <p className='mb-4 text-gray-600'>{item.description}</p>

                <div className='mb-2 text-sm text-gray-500'>
                  <span className='block'>🕒 {item.sessions}</span>
                  <span className='block'>👨‍🏫 {item.mentor}</span>
                </div>

                <div className='mt-4 flex items-center justify-between'>
                  <div className='flex items-center'>
                    <img
                      src={item.avatar}
                      alt={item.mentor}
                      className='mr-3 h-10 w-10 rounded-full'
                    />
                    <span className='text-sm font-medium text-gray-700'>
                      Mentor
                    </span>
                  </div>
                  <a
                    href='#'
                    className='text-sm font-medium text-blue-600 hover:text-blue-800'>
                    Ver mentoría →
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

export default MentorshipSection
