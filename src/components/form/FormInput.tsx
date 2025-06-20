import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import type { RegisterData } from '../../types/FormTypes'

type FormInputProps = {
  label: string
  id: keyof RegisterData | string
  type: string
  register: UseFormRegister<RegisterData>
  validations: any
  errors: FieldErrors<RegisterData>
}

export const FormInput = ({
  label,
  id,
  type,
  register,
  validations,
  errors,
}: FormInputProps) => {
  const fieldId = id as keyof RegisterData

  return (
    <div className='mb-4 space-y-1'>
      <label htmlFor={id} className='block text-sm font-normal text-gray-400'>
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register(fieldId, validations)}
        className={`w-full rounded-lg border border-gray-700 bg-gray-900 p-3 text-white placeholder-gray-500 transition focus:ring-1 focus:ring-blue-500 focus:outline-none ${
          errors[fieldId] ? 'border-red-500' : ''
        }`}
        placeholder={`Ingresa tu ${label.toLowerCase()}`}
      />
      <div className='h-5'>
        {errors[fieldId] && (
          <p className='animate-fadeIn text-sm text-red-400'>
            {errors[fieldId]?.message}
          </p>
        )}
      </div>
    </div>
  )
}
