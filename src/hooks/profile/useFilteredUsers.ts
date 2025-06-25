import { useQuery, keepPreviousData } from '@tanstack/react-query' // Importa keepPreviousData
import { getAllProfiles } from '../../services/profileService'
import type { UserProfile, UserProfileFilter } from '../../types/user'

export const useFilteredProfiles = (filters: UserProfileFilter) => {
  return useQuery<UserProfile[]>({
    queryKey: ['profiles', filters],
    queryFn: () => getAllProfiles(filters),
    placeholderData: keepPreviousData,
  })
}
