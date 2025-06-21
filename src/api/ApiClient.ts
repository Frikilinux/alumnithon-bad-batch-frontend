import axios from 'axios'
import Cookies from 'js-cookie'
import { handleApiError } from './errorHandler'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use((config) => {
  if ((config as any).useAuth) {
    const token = Cookies.get('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    handleApiError(error)
    return Promise.reject(error)
  }
)

export default apiClient
