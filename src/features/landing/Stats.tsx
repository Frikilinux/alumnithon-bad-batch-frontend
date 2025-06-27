const StatsSection = () => {
  return (
    <section className='border-t border-gray-200 bg-white py-12'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 gap-8 text-center md:grid-cols-4'>
          <div className='count-animation'>
            <div
              className='text-3xl font-bold text-blue-600 md:text-4xl'
              id='mentors-count'>
              1000
            </div>
            <p className='mt-2 text-gray-600'>Mentores expertos</p>
          </div>
          <div className='count-animation' style={{ animationDelay: '0.2s' }}>
            <div
              className='text-3xl font-bold text-blue-600 md:text-4xl'
              id='students-count'>
              1500
            </div>
            <p className='mt-2 text-gray-600'>Estudiantes activos</p>
          </div>
          <div className='count-animation' style={{ animationDelay: '0.4s' }}>
            <div
              className='text-3xl font-bold text-blue-600 md:text-4xl'
              id='projects-count'>
              800
            </div>
            <p className='mt-2 text-gray-600'>Proyectos completados</p>
          </div>
          <div className='count-animation' style={{ animationDelay: '0.6s' }}>
            <div
              className='text-3xl font-bold text-blue-600 md:text-4xl'
              id='challenges-count'>
              300
            </div>
            <p className='mt-2 text-gray-600'>Desafíos superados</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
