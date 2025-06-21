// src/api/user.ts
import { get, post, put } from './apiService'
import { endpoints } from './endPoints'

// Obtener perfil del usuario autenticado
export const getUserProfile = async () => {
  return await get(endpoints.user.profile)
}

// Actualizar datos del usuario
export const updateUserProfile = async (
  data: Partial<{ name: string; email: string }>
) => {
  return await put(endpoints.user.update, data)
}

// Obtener usuario por ID
export const getUserById = async (id: string) => {
  return await get(endpoints.user.getById(id))
}

// Obtener todos los usuarios
export const getAllUsers = async () => {
  return await get(endpoints.user.getAll)
}
