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

  const applyFilters = (
    mentorships: MentorshipResponse[],
    filters: MentorshipFilter
  ): MentorshipResponse[] => {
    return mentorships.filter((mentorship) => {
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
  }
  
  const data = useMemo(
    () => applyFilters(mentorships, filters),
    [mentorships, filters]
  )

  const options = useMemo(() => {
    const tech = new Set<string>()

    data.forEach((mentorship) => {
      mentorship.requiredTechnologies.forEach((s) => tech.add(s))
    })

    return {
      stack: Array.from(tech).sort(),
    }
  }, [mentorships])

  console.log('options', options)

  return {
    data,
    options,
    isLoading,
    error,
  }
}
