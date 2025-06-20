import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import { FormInput } from '../../components/form/FormInput'
import { Button } from '../../components/ui/Button'
import type { RegisterData } from '../../types/FormTypes'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>()

  const onSubmit: SubmitHandler<RegisterData> = async (data) => {
    try {
      console.log('Datos enviados:', data)
      await new Promise((res) => setTimeout(res, 1000)) // Simula espera
      alert('Registro exitoso')
    } catch (error) {
      console.error('Error al registrar:', error)
    }
  }

  const fields = [
    {
      label: 'Nombre',
      id: 'firstName',
      type: 'text',
      validations: {
        required: 'El nombre es obligatorio',
      },
    },
    {
      label: 'Apellido',
      id: 'lastName',
      type: 'text',
      validations: {
        required: 'El apellido es obligatorio',
      },
    },
    {
      label: 'Correo electrónico',
      id: 'email',
      type: 'email',
      validations: {
        required: 'El correo es obligatorio',
        pattern: {
          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
          message: 'Correo no válido',
        },
      },
    },
    {
      label: 'Contraseña',
      id: 'password',
      type: 'password',
      validations: {
        required: 'La contraseña es obligatoria',
        minLength: {
          value: 6,
          message: 'Debe tener al menos 6 caracteres',
        },
      },
    },
  ] as const

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
          {fields.map(({ label, id, type, validations }) => (
            <FormInput
              key={id}
              label={label}
              id={id}
              type={type}
              register={register}
              validations={validations}
              errors={errors}
            />
          ))}

          <div className='pt-2'>
            <Button type='submit' isLoading={isSubmitting}>
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
