import apiClient from './apiClient'
import axios from 'axios'
import { endpoints } from './endPoints'

export const getUserProfile = async () => {
  try {
    const response = await apiClient.get(endpoints.user.profile)
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string })?.message ||
        'Error desconocido al obtener perfil'
      throw new Error(message)
    }
    throw new Error('Error inesperado')
  }
}

export const updateUserProfile = async (
  data: Partial<{ name: string; email: string }>
) => {
  try {
    const response = await apiClient.put(endpoints.user.update, data)
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string })?.message ||
        'Error desconocido al actualizar perfil'
      throw new Error(message)
    }
    throw new Error('Error inesperado')
  }
}

export const getUserById = async (id: string) => {
  try {
    const response = await apiClient.get(endpoints.user.getById(id))
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string })?.message ||
        'Error al obtener usuario'
      throw new Error(message)
    }
    throw new Error('Error inesperado')
  }
}

export const getAllUsers = async () => {
  try {
    const response = await apiClient.get(endpoints.user.getAll)
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string })?.message ||
        'Error al obtener la lista de usuarios'
      throw new Error(message)
    }
    throw new Error('Error inesperado')
  }
}
