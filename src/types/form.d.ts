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

export type CreateUserProfileData = {
  bio: string
  location: string
  githubUrl: string | null
  linkedinUrl: string | null
  personalWebsite: string | null
  experienceLevel: 'JUNIOR' | 'INTERMEDIATE' | 'SENIOR' // puedes ajustar los valores válidos
  visibility: 'PUBLIC' | 'PRIVATE'
  technologies: string[]
  interests: string[]
  objectives: string
}
