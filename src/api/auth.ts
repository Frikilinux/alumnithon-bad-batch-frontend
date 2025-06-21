import { get, post } from './apiService'
import { endpoints } from './endPoints'
import type { RegisterFormData, LoginFormData } from '../types/form'

export const register = async (data: RegisterFormData) => {
  return await post(endpoints.auth.register, data, { useAuth: false })
}

export const login = async (data: LoginFormData) => {
  return await post(endpoints.auth.login, data, { useAuth: false })
}

export const logout = async () => {
  return await post(endpoints.auth.logout, undefined)
}

export const getCurrentUser = async () => {
  return await get(endpoints.auth.user)
}
