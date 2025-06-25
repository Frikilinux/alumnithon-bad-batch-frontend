const Home = () => {
  return (
    <section
      id='hero'
      className='flex size-full grow flex-col items-center justify-center bg-gray-100 p-6'>
      <h1 className='mt-10 text-center text-7xl font-bold'>
        Bienvenido a <span className='text-blue-700'>SkillLink</span>
      </h1>
      <p className='mt-4 text-center text-gray-600'>
        Explora nuestras características y comienza a conectar con otros
        usuarios.
      </p>
      <div className='mt-8 flex justify-center'>
        <button
          type='button'
          className='rounded-lg bg-blue-500 px-6 py-2 text-white transition hover:cursor-pointer hover:bg-blue-600'>
          Comenzar
        </button>
      </div>
    </section>
  )
}

export default Home
