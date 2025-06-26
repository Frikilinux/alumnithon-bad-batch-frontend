import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth/useAuth'

import FormField from './components/FormField'
import FormButton from './components/FormButton'
import { LoginSchema, type LoginSchemaType } from './schemas/loginSchema'

import type { InputTypes } from '../../types/form'

const formFields: {
  label: string
  id: keyof LoginSchemaType
  type: InputTypes
}[] = [
  { label: 'Correo electrónico', id: 'email', type: 'email' },
  { label: 'Contraseña', id: 'password', type: 'password' },
]

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  })
  const { login } = useAuth()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    console.log('Datos enviados:', data)
    const result = await login(data)

    if (result.success) {
      navigate('/')
      console.log('Login exitoso')
    } else {
      // Mostrar error, por ejemplo con un estado local
      console.error('Error en login:', result.message)
    }
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
            <FormField<LoginSchemaType>
              key={id}
              label={label}
              type={type}
              placeholder={`Ingresa tu ${label.toLowerCase()}`}
              name={id}
              register={register}
              error={errors[id]}
              className={`w-full rounded-lg border border-gray-700 bg-gray-900 p-3 text-white placeholder-gray-500 transition focus:ring-1 focus:ring-blue-500 focus:outline-none ${
                errors[id] ? 'border-red-500' : ''
              }`}
            />
          ))}

          <div className='pt-2'>
            <FormButton
              type='submit'
              isLoading={isSubmitting}
              className='w-full'>
              Iniciar sesión
            </FormButton>
          </div>
        </form>

        <div className='mt-8 flex justify-center gap-2 text-sm text-gray-500'>
          <p>¿No tienes cuenta?</p>
          <Link
            to='/registro'
            className='text-blue-400 transition hover:text-blue-300'>
            Regístrate gratis
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
