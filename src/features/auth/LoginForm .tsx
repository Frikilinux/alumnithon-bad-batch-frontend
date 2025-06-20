import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import FormField from './components/FormField'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema, type LoginSchemaType } from './schemas/loginSchema'
import { Link } from 'react-router'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  })

  const formFields = [
    {
      label: 'Correo electrónico',
      id: 'email',
      type: 'email',
    },
    {
      label: 'Contraseña',
      id: 'password',
      type: 'password',
    },
  ]

  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
    console.log('Datos enviados:', data)
  }

  return (
    <div className='flex min-h-screen w-full items-center justify-center bg-gray-900 p-4'>
      <div className='w-full max-w-md rounded-xl border border-gray-700 bg-gray-800 p-8 shadow-xl'>
        <div className='mb-10 text-center'>
          <h1 className='text-3xl font-light tracking-tight text-white'>
            Iniciar sesión
          </h1>
          <p className='mt-2 text-sm text-gray-400'>
            Ingresa a nuestra plataforma
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {formFields.map(({ label, id, type }) => (
            <div key={id} className='space-y-1 py-2'>
              <label
                htmlFor={id}
                className='block text-sm font-normal text-gray-400'>
                {label}
              </label>
              <FormField
                type={type}
                placeholder={`Ingresa tu ${label.toLowerCase()}`}
                name={id as keyof LoginSchemaType}
                register={register}
                error={errors[id as keyof LoginSchemaType]}
                className={`w-full rounded-lg border border-gray-700 bg-gray-900 p-3 text-white placeholder-gray-500 transition focus:ring-1 focus:ring-blue-500 focus:outline-none ${
                  errors[id as keyof LoginSchemaType] ? 'border-red-500' : ''
                }`}
              />
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
              {isSubmitting ? 'Iniciado sesión...' : 'Inicia sesión'}
            </button>
          </div>
        </form>

        <div className='mt-8 flex justify-center gap-2 text-sm text-gray-500'>
          <p>¿No tienes cuenta?</p>
          <Link
            to='/registro'
            className='text-blue-400 transition hover:text-blue-300'>
            Registrate gratis
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
