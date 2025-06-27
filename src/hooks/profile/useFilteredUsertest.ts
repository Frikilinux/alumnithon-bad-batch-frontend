import { useMemo } from 'react'
import { getAllProfiles } from '../../services/profileService'
import type { UserProfile, UserProfileFilter } from '../../types/user'

const backendProfiles: UserProfile[] = (await getAllProfiles()).map((p) => ({
  ...p,
  stack: p.technologies,
  experience: p.experienceLevel,
  name: `${p.firstName} ${p.lastName}`,
  title: p.bio || 'Desarrollador Full Stack',
  description:
    p.bio ||
    'Apasionada por crear experiencias de usuario excepcionales. Especialista en React y TypeScript.',
}))

function mockBackendFetch(filters: UserProfileFilter): UserProfile[] {
  const filtered = backendProfiles.filter((profile) => {
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

  return filtered.map(({ ...profile }) => profile)
}

export const useFilteredProfiles = (filters: UserProfileFilter) => {
  const data = useMemo(() => mockBackendFetch(filters), [filters])

  const options = useMemo(() => {
    const stacks = new Set<string>()
    const interests = new Set<string>()
    const locations = new Set<string>()
    const experiences = new Set<string>()

    backendProfiles.forEach((profile) => {
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
  }, [])

  return {
    data,
    options,
    isLoading: false,
    error: false,
  }
}
