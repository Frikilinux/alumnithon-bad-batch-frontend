import type { AxiosRequestConfig } from 'axios'

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  useAuth?: boolean
}
export type { CustomAxiosRequestConfig }
