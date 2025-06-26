import { FieldError, UseFormRegister } from 'react-hook-form'
import type { Path } from 'react-router'

export type RegisterFormData = {
  email: string
  password: string
  firstName: string
  lastName: string
  role: string
}

export type LoginFormData = {
  email: string
  password: string
}

type InputTypes =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'date'
  | 'checkbox'
  | 'radio'

export type FormFieldProps<T extends RegisterFormData | LoginFormData> = {
  label: string
  type: InputTypes
  placeholder?: string
  name: Path<T>
  register: UseFormRegister<T>
  error?: FieldError
  valueAsNumber?: boolean
  className?: string
}
