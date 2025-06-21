import apiClient from './ApiClient'
import type { CustomAxiosRequestConfig } from '../types/auth'

// GET
export const get = async <T>(
  url: string,
  config?: CustomAxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.get<T>(url, config)
  return response.data
}

// POST
export const post = async <T, D = unknown>(
  url: string,
  data?: D,
  config?: CustomAxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.post<T>(url, data, config)
  return response.data
}

// PUT
export const put = async <T, D = unknown>(
  url: string,
  data?: D,
  config?: CustomAxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.put<T>(url, data, config)
  return response.data
}

// DELETE
export const del = async <T>(
  url: string,
  config?: CustomAxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.delete<T>(url, config)
  return response.data
}
