import axios from 'axios'
import apiClient from './ApiClient'
import { endpoints } from './endPoints'
import type { RegisterFormData } from '../types/form'
import type { LoginFormData } from '../types/form'

export const register = async (data: RegisterFormData) => {
  try {
    const response = await apiClient.post(endpoints.auth.register, data)
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string })?.message ||
        'Error desconocido en el registro'
      throw new Error(message)
    }
    throw new Error('Error inesperado')
  }
}

export const login = async (data: LoginFormData) => {
  try {
    const response = await apiClient.post(endpoints.auth.login, data)
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string })?.message ||
        'Error desconocido en el inicio de sesión'
      throw new Error(message)
    }
    throw new Error('Error inesperado')
  }
}

export const logout = async () => {
  try {
    const response = await apiClient.post(endpoints.auth.logout)
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string })?.message ||
        'Error desconocido al cerrar sesión'
      throw new Error(message)
    }
    throw new Error('Error inesperado')
  }
}

export const getCurrentUser = async () => {
  try {
    const response = await apiClient.get(endpoints.auth.user)
    return response.data
  } catch (error) {
    throw error
  }
}
