import React from 'react'

type CaracteristicaList = {
  title: string
  description: string
  icon: React.ReactNode
}

const caracteristicas: CaracteristicaList[] = [
  {
    title: 'Mentores verificados',
    description:
      'Todos nuestros mentores pasan por un riguroso proceso de selección para garantizar la calidad de las mentorías que publican.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 text-blue-600'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
        />
      </svg>
    ),
  },
  {
    title: 'Proyectos prácticos',
    description:
      'Aprende construyendo proyectos reales que puedes añadir a tu portafolio profesional con la guía de tu mentor.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 text-blue-600'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
        />
      </svg>
    ),
  },
  {
    title: 'Horarios flexibles',
    description:
      'Inscríbete en las mentorías que mejor se adapten a tu agenda y zona horaria, con opciones para todos los horarios.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 text-blue-600'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
  },
  {
    title: 'Comunidad activa',
    description:
      'Forma parte de una comunidad de desarrolladores donde puedes compartir conocimientos y resolver dudas.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 text-blue-600'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
        />
      </svg>
    ),
  },
  {
    title: 'Desafíos técnicos',
    description:
      'Pon a prueba tus habilidades con desafíos de programación que te ayudarán a mejorar tu lógica y resolución de problemas.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 text-blue-600'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
        />
      </svg>
    ),
  },
  {
    title: 'Seguimiento de progreso',
    description:
      'Monitorea tu avance con métricas claras y recibe retroalimentación constante de tus mentores para mejorar.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 text-blue-600'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
        />
      </svg>
    ),
  },
]

const CaracteristicaSection: React.FC = () => {
  return (
    <section id='caracteristicas' className='bg-gray-50 py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-gray-900 md:text-4xl'>
            ¿Por qué elegir SkillLink?
          </h2>
          <p className='mx-auto max-w-3xl text-xl text-gray-600'>
            Nuestra plataforma está diseñada para ayudarte a crecer como
            desarrollador con todas las herramientas que necesitas.
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {caracteristicas.map((feature, index) => (
            <div
              key={index}
              className='feature-card rounded-xl bg-white p-6 shadow-md'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100'>
                {feature.icon}
              </div>
              <h3 className='mb-2 text-xl font-semibold text-gray-900'>
                {feature.title}
              </h3>
              <p className='text-gray-600'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaracteristicaSection
