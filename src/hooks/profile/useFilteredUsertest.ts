import { useState, useEffect, useMemo } from 'react'
import { getAllProfiles } from '../../services/profileService'
import type {
  UserProfile,
  UserProfileFilter,
  UserProfileApi,
} from '../../types/user'

function mapProfile(p: UserProfileApi): UserProfile {
  return {
    ...p,
    id: p.userId,
    stack: p.technologies,
    experience: p.experienceLevel,
    name: `${p.firstName} ${p.lastName}`,
    title: p.bio || 'Desarrollador Full Stack',
    description:
      p.bio ||
      'Apasionada por crear experiencias de usuario excepcionales. Especialista en React y TypeScript.',
  }
}

function applyFilters(
  profiles: UserProfile[],
  filters: UserProfileFilter
): UserProfile[] {
  return profiles.filter((profile) => {
    if (filters.location && profile.location !== filters.location) return false

    if (
      filters.experience &&
      profile.experience.toLowerCase() !== filters.experience.toLowerCase()
    )
      return false

    if (
      filters.stack &&
      filters.stack.length > 0 &&
      !filters.stack.some((tech) => profile.stack.includes(tech))
    )
      return false

    if (
      filters.interests &&
      filters.interests.length > 0 &&
      !filters.interests.some((interest) =>
        profile.interests.includes(interest)
      )
    )
      return false

    return true
  })
}

export const useFilteredProfiles = (filters: UserProfileFilter) => {
  const [profiles, setProfiles] = useState<UserProfile[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        setIsLoading(true)
        const result = await getAllProfiles()
        setProfiles(result.map(mapProfile))
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

  const data = useMemo(
    () => applyFilters(profiles, filters),
    [profiles, filters]
  )

  const options = useMemo(() => {
    const stacks = new Set<string>()
    const interests = new Set<string>()
    const locations = new Set<string>()
    const experiences = new Set<string>()

    profiles.forEach((profile) => {
      profile.stack.forEach((s) => stacks.add(s))
      profile.interests.forEach((i) => interests.add(i))
      locations.add(profile.location)
      experiences.add(profile.experience)
    })

    return {
      stack: Array.from(stacks).sort(),
      interests: Array.from(interests).sort(),
      location: Array.from(locations).sort(),
      experience: Array.from(experiences).sort(),
    }
  }, [profiles])

  return {
    data,
    options,
    isLoading,
    error,
  }
}
