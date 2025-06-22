import { get, post } from '../api//apiService'
import { endpoints } from '../api/endPoints'
import type { RegisterFormData, LoginFormData } from '../types/form'

// registrar un nuevo usuario
export const register = async (data: RegisterFormData) => {
  return await post(endpoints.auth.register, data, { useAuth: false })
}

// iniciar sesión con un usuario existente
export const login = async (data: LoginFormData) => {
  return await post(endpoints.auth.login, data, { useAuth: false })
}

// cerrar sesión del usuario actual
export const logout = async () => {
  return await post(endpoints.auth.logout, undefined)
}

// obtener los datos del usuario actual
export const getCurrentUser = async () => {
  return await get(endpoints.auth.user)
}
