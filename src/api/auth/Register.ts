import apiClient from '../ApiClient'
import type { RegisterData } from '../../types/FormTypes'

export const register = async (data: RegisterData) => {
  try {
    const response = await apiClient.post('/register', data)
    return response.data
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'Error desconocido en el registro'
    )
  }
}
