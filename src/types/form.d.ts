import { FieldError, UseFormRegister } from 'react-hook-form'

type RegisterFormData = {
  email: string
  password: string
  firstName: string
  lastName: string
}

export type LoginFormData = RegisterData | { email: string; password: string }

export type FormFieldProps = {
  type: string
  placeholder: string
  name: ValidFieldNames
  register: UseFormRegister<RegisterFormData | LoginFormData>
  error: FieldError | undefined
  valueAsNumber?: boolean
  className?: string
}

export type ValidFieldNames = 'email' | 'password' | 'firstName' | 'lastName'
