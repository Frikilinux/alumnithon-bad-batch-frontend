import axios, { AxiosHeaders } from 'axios'
import Cookies from 'js-cookie'
import { handleApiError } from './errorHandler'
import type { CustomAxiosRequestConfig } from '../types/auth'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use((config) => {
  const customConfig = config as CustomAxiosRequestConfig
  const useAuth = customConfig.useAuth ?? true

  if (useAuth) {
    const token = Cookies.get('token')
    if (token) {
      config.headers = AxiosHeaders.from({
        ...config.headers,
        Authorization: `Bearer ${token}`,
      })
    }
  }

  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    handleApiError(error)
    console.log('Error in API response: apiclient')
    return Promise.reject(error)
  }
)

export default apiClient
