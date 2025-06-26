import {
  login as loginService,
  register as registerService,
} from '../../services/authService'
import type { LoginFormData, RegisterFormData } from '../../types/form'
import Cookies from 'js-cookie'

export const useAuth = () => {
  const login = async (credentials: LoginFormData) => {
    try {
      const response = (await loginService(credentials)) as {
        accessToken: string
      }
      const { accessToken } = response
      Cookies.set('token', accessToken, {
        expires: 7,
        secure: true,
        sameSite: 'Strict',
      })
      return { success: true }
    } catch (error) {
      let message = 'Error al iniciar sesión'
      if (error && typeof error === 'object' && 'response' in error) {
        const err = error as { response?: { data?: { message?: string } } }
        message = err.response?.data?.message || message
      }
      console.log('error', error)
      return { success: false, message }
    }
  }

  const registerApi = async (data: RegisterFormData) => {
    try {
      await registerService(data)
      return { success: true }
    } catch (error) {
      let message = 'Error al registrar el usuario'
      if (error && typeof error === 'object' && 'response' in error) {
        const err = error as { response?: { data?: { message?: string } } }
        message = err.response?.data?.message || message
      }
      console.log('error', error)
      return { success: false, message }
    }
  }

  return { login, registerApi }
}
