// import { useQuery, keepPreviousData } from '@tanstack/react-query' // Importa keepPreviousData
import type {
  // Mentorship,
  MentorshipFilter,
  MentorshipResponse,
} from '../../types/mentorship'
import { getAllMentorships } from '../../services/mentorshipService'
import { useEffect, useMemo, useState } from 'react'

// export const useFilteredMentorship = (filters: MentorshipFilter) => {
//   return useQuery<MentorshipResponse[]>({
//     queryKey: ['mentorship', filters],
//     queryFn: () => getAllMentorships(filters),
//     placeholderData: keepPreviousData,
//   })
// }

// const backMentorship: MentorshipResponse[] = await getAllMentorships()

export const useFilteredMentorship = (filters: MentorshipFilter) => {
  const [mentorships, setMentorShips] = useState<MentorshipResponse[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        setIsLoading(true)
        // const result = await getAllMentorships()
        setMentorShips(await getAllMentorships())
        setError(false)
      } catch (err) {
        console.error('Error loading profiles', err)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProfiles()
  }, [])

  const filtered = (filters: MentorshipFilter) => {
    const mentorshipFilters = mentorships.filter((mentorship) => {
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
    isLoading,
    error,
  }
}
