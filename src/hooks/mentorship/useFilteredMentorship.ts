import { useQuery, keepPreviousData } from '@tanstack/react-query' // Importa keepPreviousData
import type { MentorshipFilter, MentorshipResponse } from '../../types/mentorship'
import { getAllMentorships } from '../../services/mentorshipService'

export const useFilteredProfiles = (filters: MentorshipFilter) => {
  return useQuery<MentorshipResponse[]>({
    queryKey: ['profiles', filters],
    queryFn: () => getAllMentorships(filters),
    placeholderData: keepPreviousData,
  })
}
