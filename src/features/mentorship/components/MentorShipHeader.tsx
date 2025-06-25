import { IconUsersGroup } from '@tabler/icons-react'

const MentorshipHeader = () => {
  return (
    <section className='flex w-full flex-col items-center bg-gradient-to-r from-blue-600 to-blue-800 py-12 text-white'>
      <div className='flex flex-col-reverse items-center px-4 md:flex-row'>
        <div className='mb-8 md:mb-0 md:w-1/2'>
          <h1 className='mb-4 text-center text-3xl font-bold md:text-left md:text-5xl'>
            Mentorías Públicas para Desarrolladores
          </h1>
          <p className='mb-6 text-center text-xl md:text-left'>
            Aprende en grupo con expertos de la industria y acelera tu
            crecimiento profesional. ¡Todas nuestras mentorías son gratuitas!
          </p>
          <div className='flex flex-wrap justify-center gap-6 md:justify-start'>
            <button className='hover:bg-primary-50 rounded-lg bg-white px-6 py-3 font-medium text-blue-700 transition'>
              Explorar Mentorías
            </button>
            <button className='hover:bg-primary-700 rounded-lg border-2 border-white bg-transparent px-6 py-3 font-medium text-white transition'>
              Ofrecer Mentoría
            </button>
          </div>
        </div>
        <div className='flex justify-center md:w-1/2'>
          <IconUsersGroup className='size-48 md:size-64' />
        </div>
      </div>
    </section>
  )
}

export default MentorshipHeader
