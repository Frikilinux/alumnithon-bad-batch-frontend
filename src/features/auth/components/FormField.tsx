import type { FormFieldProps } from '../../../types/form'

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  className = '',
}) => (
  <>
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
    />
    {error && (
      <span className='error-message animate-fadeIn text-sm text-red-400'>
        {error.message}
      </span>
    )}
  </>
)
export default FormField
