import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const FormButton = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = 'rounded-lg font-medium transition focus:outline-none'

  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-700',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white disabled:bg-gray-700',
    danger: 'bg-red-600 hover:bg-red-700 text-white disabled:bg-red-400',
  }

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        disabled || isLoading ? 'cursor-not-allowed opacity-70' : ''
      } ${className}`}
      disabled={disabled || isLoading}
      {...props}>
      {isLoading ? 'Cargando...' : children}
    </button>
  )
}

export default FormButton
