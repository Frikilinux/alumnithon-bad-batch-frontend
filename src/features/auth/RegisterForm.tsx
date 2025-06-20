import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { InputTypes } from '../../types/form'

import FormField from './components/FormField'
import {
  RegisterSchema,
  type RegisterSchemaType,
} from './schemas/registerSchema'
import { Button } from '../../components/ui/Button'
import { Link } from 'react-router-dom'

const formFields: {
  label: string
  id: keyof RegisterSchemaType
  type: InputTypes
}[] = [
  { label: 'Nombre', id: 'firstName', type: 'text' },
  { label: 'Apellido', id: 'lastName', type: 'text' },
  { label: 'Correo electrónico', id: 'email', type: 'email' },
  { label: 'Contraseña', id: 'password', type: 'password' },
]

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
  })

  const onSubmit: SubmitHandler<RegisterSchemaType> = async (data) => {
    try {
      console.log('Datos enviados:', data)
      await new Promise((res) => setTimeout(res, 1000)) // Simula espera
      alert('Registro exitoso')
    } catch (error) {
      console.error('Error al registrar:', error)
    }
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
          {formFields.map(({ label, id, type }) => (
            <FormField<RegisterSchemaType>
              key={id}
              label={label}
              name={id}
              type={type}
              register={register}
              error={errors[id]}
              className={`w-full rounded-lg border border-gray-700 bg-gray-900 p-3 text-white placeholder-gray-500 transition focus:ring-1 focus:ring-blue-500 focus:outline-none ${
                errors[id] ? 'border-red-500' : ''
              }`}
            />
          ))}

          <div className='pt-2'>
            <Button type='submit' isLoading={isSubmitting} className='w-full'>
              Registrarse
            </Button>
          </div>
        </form>

        <div className='mt-8 flex justify-center gap-2 text-sm text-gray-500'>
          <p>¿Ya tienes cuenta?</p>
          <Link
            to='/login'
            className='text-blue-400 transition hover:text-blue-300'>
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
