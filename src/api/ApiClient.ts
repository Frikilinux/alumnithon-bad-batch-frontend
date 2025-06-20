import axios from 'axios'
import { handleApiError } from './errorHandler'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  withCredentials: true,
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    handleApiError(error)
    return Promise.reject(error)
  }
)

export default apiClient
