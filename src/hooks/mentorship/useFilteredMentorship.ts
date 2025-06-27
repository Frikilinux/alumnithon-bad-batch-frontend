// import { useQuery, keepPreviousData } from '@tanstack/react-query' // Importa keepPreviousData
import type {
  // Mentorship,
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

const backMentorship: MentorshipResponse[] = await getAllMentorships()

export const useFilteredMentorship = (filters: MentorshipFilter) => {
  const filtered = (filters: MentorshipFilter) => {
    const mentorshipFilters = backMentorship.filter((mentorship) => {
      if (
        filters.requiredTechnologies &&
        filters.requiredTechnologies.length > 0 &&
        !filters.requiredTechnologies.some((tech) =>
          mentorship.requiredTechnologies.includes(tech)
        )
      )
        return false

      return true
    })

    return mentorshipFilters.map(({ ...profile }) => profile)
  }
  // const data = useMemo(() => mockBackendFetch(filters), [filters])
  // const data = useMemo(() => useFilteredMentorship(filters), [filters])

  const data = filtered(filters)

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
