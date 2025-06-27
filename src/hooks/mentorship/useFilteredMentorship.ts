import { useQuery, keepPreviousData } from '@tanstack/react-query' // Importa keepPreviousData
import type {
  MentorshipFilter,
  MentorshipResponse,
} from '../../types/mentorship'
import { getAllMentorships } from '../../services/mentorshipService'
import { useMemo } from 'react'

// export const useFilteredMentorship = (filters: MentorshipFilter) => {
//   return useQuery<MentorshipResponse[]>({
//     queryKey: ['mentorship', filters],
//     queryFn: () => getAllMentorships(filters),
//     placeholderData: keepPreviousData,
//   })
// }

export const useFilteredMentorship = async (filters: MentorshipFilter) => {
  // const data = useMemo(() => mockBackendFetch(filters), [filters])
  // const data = useMemo(() => useFilteredMentorship(filters), [filters])

  const data = await getAllMentorships(filters)

  const options = useMemo(() => {
    const tech = new Set<string>()

    data.forEach((mentorship) => {
      mentorship.requiredTechnologies.forEach((s) => tech.add(s))
    })

    return {
      stack: Array.from(tech).sort(),
    }
  }, [])

  return {
    data,
    options,
    isLoading: false,
    error: false,
  }
}
