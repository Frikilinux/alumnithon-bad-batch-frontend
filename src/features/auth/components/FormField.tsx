import type {
  FormFieldProps,
  RegisterFormData,
  LoginFormData,
} from '../../../types/form'

const FormField = <T extends RegisterFormData | LoginFormData>({
  label,
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  className = '',
}: FormFieldProps<T>) => {
  const id = String(name)

  return (
    <div className='mb-4 space-y-1'>
      <label htmlFor={id} className='block text-sm font-normal text-gray-400'>
        {label}
      </label>
      <input
        id={id}
        className={className}
        type={type}
        placeholder={placeholder ?? `Ingresa tu ${label.toLowerCase()}`}
        {...register(name, { valueAsNumber })}
      />
      <span className='animate-fadeIn block h-5 text-sm text-red-400'>
        {error ? error.message : '\u00A0'}
      </span>
    </div>
  )
}

export default FormField
