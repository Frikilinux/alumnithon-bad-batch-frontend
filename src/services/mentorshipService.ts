// src/api/user.ts
import { get } from '../api/apiService'
import { endpoints } from '../api/endPoints'
// import type { MentorshipFilter } from '../pages/Mentorship'
import type { MentorshipFilter, MentorshipResponse } from '../types/mentorship'
// import type { UserProfile, UserProfileFilter } from '../types/user'

// Obtener perfil del usuario autenticado
// export const getUserProfile = async (): Promise<UserProfile> => {
//   return await get<UserProfile>(endpoints.profile.getMe)
// }

// // Actualizar datos del perfil del usuario
// export const updateUserProfile = async (
//   data: Partial<UserProfile>
// ): Promise<UserProfile> => {
//   return await put<UserProfile, Partial<UserProfile>>(
//     endpoints.profile.update,
//     data
//   )
// }

// Obtener perfil de usuario por ID
// export const getUserById = async (id: string): Promise<UserProfile> => {
//   return await get<UserProfile>(endpoints.profile.getById(id))
// }

// Obtener todos los perfiles de usuario con filtros opcionales
export const getAllMentorships = async (
  filters: MentorshipFilter = {}
): Promise<MentorshipResponse[]> => {
  const queryParams = new URLSearchParams()

  // if (filters.location) queryParams.append('location', filters.location)
  // if (filters.experience) queryParams.append('experience', filters.experience)

  if (filters.requiredTechnologies?.length) {
    filters.requiredTechnologies.forEach((tech) =>
      queryParams.append('tech', tech)
    )
  }

  // if (filters.interests?.length) {
  //   filters.interests.forEach((interest) =>
  //     queryParams.append('interests', interest)
  //   )
  // }

  const queryString = queryParams.toString()
  const url = queryString
    ? `${endpoints.mentorship.getAll}?${queryString}`
    : endpoints.mentorship.getAll

  // Poner paginación en el back
  return await get<MentorshipResponse[]>(url)
}

// const JoinToContent = async ({
//   contentId,
//   userId,
// }: {
//   contentId: string
//   userId: string
// }) => {
//   return await post(`${endpoints.mentorship.join(contentId)}?userId=${userId}`)
// }
