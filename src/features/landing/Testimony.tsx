const testimonios = [
  {
    nombre: 'Ana Martínez',
    rol: 'Frontend Developer',
    imagen: 'https://randomuser.me/api/portraits/women/32.jpg',
    texto:
      'Gracias a mi mentor en SkillLink, pude mejorar mis habilidades en React y conseguir un trabajo en una startup tecnológica. Las sesiones personalizadas hicieron toda la diferencia.',
    tiempo: 'Miembro desde hace 8 meses',
    estrellas: 5,
  },
  {
    nombre: 'Carlos Gómez',
    rol: 'Full Stack Developer',
    imagen: 'https://randomuser.me/api/portraits/men/45.jpg',
    texto:
      'Los proyectos prácticos que desarrollé con la guía de mi mentor me ayudaron a construir un portafolio sólido. Ahora trabajo como desarrollador full stack en una empresa internacional.',
    tiempo: 'Miembro desde hace 1 año',
    estrellas: 5,
  },
  {
    nombre: 'Laura Sánchez',
    rol: 'Backend Developer',
    imagen: 'https://randomuser.me/api/portraits/women/68.jpg',
    texto:
      'Como mujer en tecnología, encontrar un mentor que me guiara fue fundamental. En SkillLink encontré una comunidad inclusiva y mentores que realmente se preocupan por mi crecimiento profesional.',
    tiempo: 'Miembro desde hace 6 meses',
    estrellas: 4,
  },
]

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={`h-5 w-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    viewBox='0 0 20 20'
    fill='currentColor'>
    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
  </svg>
)

const TestimonySection = () => {
  return (
    <section id='testimonios' className='bg-gray-50 py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-gray-900 md:text-4xl'>
            Lo que dicen nuestros usuarios
          </h2>
          <p className='mx-auto max-w-3xl text-xl text-gray-600'>
            Historias reales de desarrolladores que han transformado su carrera
            con DevMentor.
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {testimonios.map((t, idx) => (
            <div
              key={idx}
              className='rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg'>
              <div className='mb-4 flex items-center'>
                <img
                  src={t.imagen}
                  alt={t.nombre}
                  className='mr-4 h-12 w-12 rounded-full'
                />
                <div>
                  <h4 className='font-semibold text-gray-900'>{t.nombre}</h4>
                  <p className='text-sm text-gray-600'>{t.rol}</p>
                </div>
              </div>
              <div className='mb-4 flex'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} filled={i < t.estrellas} />
                ))}
              </div>
              <p className='mb-4 text-gray-600'>"{t.texto}"</p>
              <p className='text-sm text-gray-500'>{t.tiempo}</p>
            </div>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <a
            href='#'
            className='flex items-center justify-center font-medium text-blue-600 transition hover:text-blue-800'>
            Ver más testimonios
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='ml-1 h-5 w-5'
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
    </section>
  )
}

export default TestimonySection
