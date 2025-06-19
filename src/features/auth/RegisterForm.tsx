import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'

type FormData = {
  email: string
  password: string
  firstName: string
  lastName: string
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Datos enviados:', data)
  }

  return (
    <div className='flex min-h-screen w-full items-center justify-center bg-gray-900 p-4'>
      <div className='w-full max-w-md rounded-xl border border-gray-700 bg-gray-800 p-8 shadow-xl'>
        <div className='mb-10 text-center'>
          <h1 className='text-3xl font-light tracking-tight text-white'>
            Registrarse
          </h1>
          <p className='mt-2 text-sm text-gray-400'>
            Únete a nuestra plataforma
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {[
            {
              label: 'Nombre',
              id: 'firstName',
              type: 'text',
              required: 'El nombre es obligatorio',
            },
            {
              label: 'Apellido',
              id: 'lastName',
              type: 'text',
              required: 'El apellido es obligatorio',
            },
            {
              label: 'Correo electrónico',
              id: 'email',
              type: 'email',
              required: 'El correo es obligatorio',
            },
            {
              label: 'Contraseña',
              id: 'password',
              type: 'password',
              required: 'La contraseña es obligatoria',
            },
          ].map(({ label, id, type, required }) => (
            <div key={id} className='space-y-1'>
              <label
                htmlFor={id}
                className='block text-sm font-normal text-gray-400'>
                {label}
              </label>
              <input
                id={id}
                type={type}
                {...register(id as keyof FormData, { required })}
                className={`w-full rounded-lg border border-gray-700 bg-gray-900 p-3 text-white placeholder-gray-500 transition focus:ring-1 focus:ring-blue-500 focus:outline-none ${
                  errors[id as keyof FormData] ? 'border-red-500' : ''
                }`}
                placeholder={`Ingresa tu ${label.toLowerCase()}`}
              />

              {/* Contenedor de altura fija para mensajes de error */}
              <div className='h-5'>
                {errors[id as keyof FormData] && (
                  <p className='animate-fadeIn text-sm text-red-400'>
                    {errors[id as keyof FormData]?.message}
                  </p>
                )}
              </div>
            </div>
          ))}

          <div className='pt-2'>
            <button
              type='submit'
              disabled={isSubmitting}
              className={`w-full rounded-lg px-4 py-3 font-medium text-white transition ${
                isSubmitting
                  ? 'cursor-not-allowed bg-gray-700'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}>
              {isSubmitting ? 'Creando cuenta...' : 'Registrarse'}
            </button>
          </div>
        </form>

        <div className='mt-8 text-center text-sm text-gray-500'>
          <p>
            ¿Ya tienes cuenta?{' '}
            <a
              href='#'
              className='text-blue-400 transition hover:text-blue-300'>
              Inicia sesión
            </a>{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
