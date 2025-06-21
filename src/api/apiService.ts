import apiClient from './ApiClient'
import { handleApiError } from './errorHandler'
import type { CustomAxiosRequestConfig } from '../types/auth'

// GET
export const get = async <T>(
  url: string,
  config?: CustomAxiosRequestConfig
): Promise<T> => {
  try {
    const response = await apiClient.get<T>(url, config)
    return response.data
  } catch (error) {
    handleApiError(error)
    throw error
  }
}

// POST
export const post = async <T, D = unknown>(
  url: string,
  data?: D,
  config?: CustomAxiosRequestConfig
): Promise<T> => {
  try {
    const response = await apiClient.post<T>(url, data, config)
    return response.data
  } catch (error) {
    handleApiError(error)
    throw error
  }
}

// PUT
export const put = async <T, D = unknown>(
  url: string,
  data?: D,
  config?: CustomAxiosRequestConfig
): Promise<T> => {
  try {
    const response = await apiClient.put<T>(url, data, config)
    return response.data
  } catch (error) {
    handleApiError(error)
    throw error
  }
}

// DELETE
export const del = async <T>(
  url: string,
  config?: CustomAxiosRequestConfig
): Promise<T> => {
  try {
    const response = await apiClient.delete<T>(url, config)
    return response.data
  } catch (error) {
    handleApiError(error)
    throw error
  }
}
