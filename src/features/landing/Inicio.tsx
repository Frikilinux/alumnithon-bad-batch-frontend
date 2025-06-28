import React from 'react'

type InicioProps = {}

const Inicio: React.FC<InicioProps> = () => {
  return (
    <section id='inicio' className='hero-pattern py-16 md:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-12'>
          {/* Columna izquierda */}
          <div className='mb-10 w-full lg:mb-0 lg:flex-1'>
            <h1 className='animate-fadeInUp mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl'>
              Conectamos <span className='gradient-text'>desarrolladores</span>{' '}
              con <span className='gradient-text'>mentores</span> expertos
            </h1>
            <p className='animate-fadeInUp mb-8 text-xl text-gray-600 delay-100'>
              Acelera tu carrera en desarrollo de software con mentorías
              personalizadas, proyectos prácticos, desafíos y una comunidad de
              apoyo.
            </p>
            <div className='animate-fadeInUp flex flex-col gap-4 delay-200 sm:flex-row'>
              <a
                href='#'
                className='btn-primary pulse-animation rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700'>
                Comienza gratis
              </a>
              <a
                href='#como-funciona'
                className='btn-primary rounded-lg border border-blue-600 bg-white px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-50'>
                Cómo funciona
              </a>
            </div>
            <div className='animate-fadeInUp mt-8 flex items-center delay-300'>
              <div className='flex -space-x-2'>
                <img
                  src='https://randomuser.me/api/portraits/men/32.jpg'
                  className='h-10 w-10 rounded-full border-2 border-white'
                  alt='Usuario'
                />
                <img
                  src='https://randomuser.me/api/portraits/women/44.jpg'
                  className='h-10 w-10 rounded-full border-2 border-white'
                  alt='Usuario'
                />
                <img
                  src='https://randomuser.me/api/portraits/men/51.jpg'
                  className='h-10 w-10 rounded-full border-2 border-white'
                  alt='Usuario'
                />
                <img
                  src='https://randomuser.me/api/portraits/women/68.jpg'
                  className='h-10 w-10 rounded-full border-2 border-white'
                  alt='Usuario'
                />
              </div>
              <span className='ml-4 text-sm text-gray-600'>
                Más de 5,000 desarrolladores ya confían en nosotros
              </span>
            </div>
          </div>

          {/* Columna derecha */}
          <div className='animate-fadeInUp w-full delay-400 lg:flex-1'>
            <div className='relative'>
              <div className='animate-blob absolute -top-4 -left-4 h-72 w-72 rounded-full bg-blue-200 opacity-70 mix-blend-multiply blur-2xl filter'></div>
              <div className='animate-blob animation-delay-4000 absolute right-4 -bottom-8 h-72 w-72 rounded-full bg-purple-200 opacity-70 mix-blend-multiply blur-2xl filter'></div>
              <div className='relative'>
                <svg
                  className='h-auto w-full'
                  viewBox='0 0 500 400'
                  xmlns='http://www.w3.org/2000/svg'>
                  <defs>
                    <linearGradient
                      id='grad1'
                      x1='0%'
                      y1='0%'
                      x2='100%'
                      y2='0%'>
                      <stop
                        offset='0%'
                        style={{ stopColor: '#1e40af', stopOpacity: 1 }}
                      />
                      <stop
                        offset='100%'
                        style={{ stopColor: '#3b82f6', stopOpacity: 1 }}
                      />
                    </linearGradient>
                  </defs>
                  <rect
                    x='50'
                    y='20'
                    rx='20'
                    ry='20'
                    width='400'
                    height='360'
                    style={{ fill: 'white', stroke: '#e5e7eb', strokeWidth: 2 }}
                  />
                  <rect
                    x='50'
                    y='20'
                    rx='20'
                    ry='20'
                    width='400'
                    height='60'
                    style={{ fill: 'url(#grad1)' }}
                  />
                  <circle cx='85' cy='50' r='10' fill='#ff5c5c' />
                  <circle cx='115' cy='50' r='10' fill='#ffbd2e' />
                  <circle cx='145' cy='50' r='10' fill='#28c941' />
                  <rect
                    x='70'
                    y='100'
                    rx='10'
                    ry='10'
                    width='170'
                    height='100'
                    style={{ fill: '#f3f4f6' }}
                  />
                  <rect
                    x='260'
                    y='100'
                    rx='10'
                    ry='10'
                    width='170'
                    height='100'
                    style={{ fill: '#f3f4f6' }}
                  />
                  <rect
                    x='70'
                    y='220'
                    rx='10'
                    ry='10'
                    width='360'
                    height='140'
                    style={{ fill: '#f3f4f6' }}
                  />
                  <line
                    x1='70'
                    y1='250'
                    x2='430'
                    y2='250'
                    style={{ stroke: '#e5e7eb', strokeWidth: 2 }}
                  />
                  <line
                    x1='70'
                    y1='280'
                    x2='430'
                    y2='280'
                    style={{ stroke: '#e5e7eb', strokeWidth: 2 }}
                  />
                  <line
                    x1='70'
                    y1='310'
                    x2='430'
                    y2='310'
                    style={{ stroke: '#e5e7eb', strokeWidth: 2 }}
                  />
                  <line
                    x1='70'
                    y1='340'
                    x2='430'
                    y2='340'
                    style={{ stroke: '#e5e7eb', strokeWidth: 2 }}
                  />
                  <circle cx='90' cy='150' r='30' fill='#3b82f6' />
                  <circle cx='280' cy='150' r='30' fill='#3b82f6' />
                  <text
                    x='140'
                    y='145'
                    fontFamily='Arial'
                    fontSize='14'
                    fill='#4b5563'>
                    Mentor
                  </text>
                  <text
                    x='140'
                    y='165'
                    fontFamily='Arial'
                    fontSize='12'
                    fill='#6b7280'>
                    React Expert
                  </text>
                  <text
                    x='350'
                    y='145'
                    fontFamily='Arial'
                    fontSize='14'
                    fill='#4b5563'>
                    Estudiante
                  </text>
                  <text
                    x='350'
                    y='165'
                    fontFamily='Arial'
                    fontSize='12'
                    fill='#6b7280'>
                    Frontend Dev
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inicio
