// src/api/user.ts
import { get, put } from '../api/apiService'
import { endpoints } from '../api/endPoints'
import type { UserProfile, UserProfileFilter } from '../types/user'

// Obtener perfil del usuario autenticado
export const getUserProfile = async (): Promise<UserProfile> => {
  return await get<UserProfile>(endpoints.profile.getMe)
}

// Actualizar datos del perfil del usuario
export const updateUserProfile = async (
  data: Partial<UserProfile>
): Promise<UserProfile> => {
  return await put<UserProfile, Partial<UserProfile>>(
    endpoints.profile.update,
    data
  )
}

// Obtener perfil de usuario por ID
export const getUserById = async (id: string): Promise<UserProfile> => {
  return await get<UserProfile>(endpoints.profile.getById(id))
}

// Obtener todos los perfiles de usuario con filtros opcionales
export const getAllProfiles = async (
  filters: UserProfileFilter = {}
): Promise<UserProfile[]> => {
  const queryParams = new URLSearchParams()

  if (filters.location) queryParams.append('location', filters.location)
  if (filters.experience) queryParams.append('experience', filters.experience)

  if (filters.stack?.length) {
    filters.stack.forEach((tech) => queryParams.append('stack', tech))
  }

  if (filters.interests?.length) {
    filters.interests.forEach((interest) =>
      queryParams.append('interests', interest)
    )
  }

  const queryString = queryParams.toString()
  const url = queryString
    ? `${endpoints.profile.getAll}?${queryString}`
    : endpoints.profile.getAll

  return await get<UserProfile[]>(url)
}
