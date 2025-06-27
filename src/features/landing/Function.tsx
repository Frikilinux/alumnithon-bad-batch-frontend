import React from 'react'

const steps = [
  {
    title: 'Crea tu perfil',
    description:
      'Regístrate y completa tu perfil con tus habilidades, intereses y objetivos de aprendizaje para que podamos recomendarte las mentorías más adecuadas.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='mx-auto h-16 w-16 text-blue-600'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
        />
      </svg>
    ),
  },
  {
    title: 'Explora mentorías disponibles',
    description:
      'Navega por las mentorías publicadas por expertos, filtra por tecnología, nivel de experiencia o temática específica que te interese aprender.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='mx-auto h-16 w-16 text-blue-600'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        />
      </svg>
    ),
  },
  {
    title: 'Inscríbete en una mentoría',
    description:
      'Selecciona la mentoría que mejor se adapte a tus necesidades, revisa los detalles, horarios y temario, y reserva tu plaza para comenzar tu aprendizaje.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='mx-auto h-16 w-16 text-blue-600'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
        />
      </svg>
    ),
  },
  {
    title: 'Participa en sesiones',
    description:
      'Conéctate con tu mentor a través de nuestra plataforma de videoconferencia integrada, comparte código en tiempo real y recibe retroalimentación personalizada.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='mx-auto h-16 w-16 text-blue-600'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
        />
      </svg>
    ),
  },
  {
    title: 'Supera desafíos',
    description:
      'Pon a prueba tus conocimientos con desafíos técnicos diseñados por mentores, recibe retroalimentación y mejora tus habilidades de resolución de problemas.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='mx-auto h-16 w-16 text-blue-600'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
        />
      </svg>
    ),
  },
]

const FunctionSection: React.FC = () => {
  return (
    <section id='como-funciona' className='py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-gray-900 md:text-4xl'>
            ¿Cómo funciona?
          </h2>
          <p className='mx-auto max-w-3xl text-xl text-gray-600'>
            Conecta con mentores expertos y mejora tus habilidades de desarrollo
            en pocos pasos.
          </p>
        </div>

        <div className='relative'>
          <div className='absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-blue-200 md:block'></div>

          {steps.map((step, index) => {
            const isEven = index % 2 === 0
            return (
              <div key={index} className='relative mb-16'>
                <div className='flex flex-col items-center md:flex-row'>
                  <div
                    className={`mb-8 md:mb-0 md:w-1/2 md:pr-8 ${isEven ? 'md:text-right' : 'order-1 md:order-2'}`}>
                    {isEven ? (
                      <>
                        <h3 className='mb-2 text-2xl font-bold text-gray-900'>
                          {step.title}
                        </h3>
                        <p className='text-gray-600'>{step.description}</p>
                      </>
                    ) : (
                      <div className='rounded-lg bg-blue-50 p-4'>
                        {step.icon}
                      </div>
                    )}
                  </div>

                  <div className='relative z-10 order-2 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white'>
                      <span className='font-bold'>{index + 1}</span>
                    </div>
                  </div>

                  <div
                    className={`md:w-1/2 md:pl-8 ${isEven ? '' : 'order-3'}`}>
                    {isEven ? (
                      <div className='rounded-lg bg-blue-50 p-4'>
                        {step.icon}
                      </div>
                    ) : (
                      <>
                        <h3 className='mb-2 text-2xl font-bold text-gray-900'>
                          {step.title}
                        </h3>
                        <p className='text-gray-600'>{step.description}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FunctionSection
