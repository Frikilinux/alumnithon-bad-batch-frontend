import { useMemo } from 'react'

export interface UserProfile {
  id: string
  name: string
  title: string
  description: string
  stack: string[]
  interests: string[]
  avatarUrl: string
}

export interface UserProfileFilter {
  stack?: string[]
  interests?: string[]
  location?: string
  experience?: string
}

const backendProfiles: (UserProfile & {
  location: string
  experience: string
})[] = [
  {
    id: '1',
    name: 'Laura Martínez',
    title: 'Senior Frontend Developer',
    description: 'Apasionada por crear experiencias de usuario excepcionales.',
    stack: ['React', 'TypeScript', 'JavaScript'],
    interests: ['Desarrollo Web', 'UX/UI'],
    avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    location: 'Latinoamérica',
    experience: 'Senior',
  },
  {
    id: '2',
    name: 'Carlos Rodríguez',
    title: 'Backend Developer',
    description: 'Especialista en arquitecturas escalables.',
    stack: ['Node.js', 'Python', 'AWS'],
    interests: ['Cloud Computing', 'DevOps'],
    avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    location: 'Europa',
    experience: 'Mid',
  },
  {
    id: '3',
    name: 'Ana Gómez',
    title: 'Mobile Developer',
    description:
      'Desarrolladora de aplicaciones móviles con experiencia en iOS y React Native.',
    stack: ['Swift', 'React Native', 'JavaScript'],
    interests: ['Desarrollo Móvil', 'UX/UI'],
    avatarUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
    location: 'Latinoamérica',
    experience: 'Junior',
  },
  {
    id: '4',
    name: 'David Pérez',
    title: 'Full Stack Developer',
    description: 'Desarrollador full stack con pasión por el código limpio.',
    stack: ['JavaScript', 'Node.js', 'React', 'Firebase'],
    interests: ['Desarrollo Web', 'Ciberseguridad'],
    avatarUrl: 'https://randomuser.me/api/portraits',
    location: 'Asia',
    experience: 'Senior',
  },
  {
    id: '5',
    name: 'Sofía Torres',
    title: 'Data Scientist',
    description:
      'Apasionada por el análisis de datos y la inteligencia artificial.',
    stack: ['Python', 'Machine Learning', 'Data Analysis'],
    interests: ['Inteligencia Artificial', 'Machine Learning'],
    avatarUrl: 'https://randomuser.me',
    location: 'Europa',
    experience: 'Mid',
  },
]

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

  return filtered.map(({ location, experience, ...profile }) => profile)
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

// import { useEffect, useMemo, useState } from 'react'

// export interface UserProfile {
//   id: string
//   name: string
//   title: string
//   description: string
//   stack: string[]
//   interests: string[]
//   avatarUrl: string
//   location: string
//   experience: string
// }

// export interface UserProfileFilter {
//   stack?: string[]
//   interests?: string[]
//   location?: string
//   experience?: string
// }

// export interface FilterOptions {
//   stack: string[]
//   interests: string[]
//   location: string[]
//   experience: string[]
// }

// export const useFilteredProfiles = (filters: UserProfileFilter) => {
//   const [allProfiles, setAllProfiles] = useState<UserProfile[]>([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [error, setError] = useState(false)

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true)
//       setError(false)

//       try {
//         const response = await fetch('/api/profiles')
//         const result = await response.json()
//         setAllProfiles(result)
//       } catch (err) {
//         console.error('Error fetching profiles:', err)
//         setError(true)
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     fetchData()
//   }, [])

//   // 🔍 Opciones de filtros extraídas de todos los perfiles (únicas y ordenadas)
//   const options = useMemo(() => {
//     const stacks = new Set<string>()
//     const interests = new Set<string>()
//     const locations = new Set<string>()
//     const experiences = new Set<string>()

//     allProfiles.forEach((profile) => {
//       profile.stack.forEach((s) => stacks.add(s))
//       profile.interests.forEach((i) => interests.add(i))
//       locations.add(profile.location)
//       experiences.add(profile.experience)
//     })

//     return {
//       stack: Array.from(stacks).sort(),
//       interests: Array.from(interests).sort(),
//       location: Array.from(locations).sort(),
//       experience: Array.from(experiences).sort(),
//     }
//   }, [allProfiles])

//   // ✅ Aplicar filtros en el frontend
//   const filteredData = useMemo(() => {
//     return allProfiles.filter((profile) => {
//       if (filters.location && profile.location !== filters.location) return false
//       if (filters.experience && profile.experience !== filters.experience) return false
//       if (filters.stack && filters.stack.length > 0 &&
//           !filters.stack.some((s) => profile.stack.includes(s))) return false
//       if (filters.interests && filters.interests.length > 0 &&
//           !filters.interests.some((i) => profile.interests.includes(i))) return false
//       return true
//     })
//   }, [filters, allProfiles])

//   return {
//     data: filteredData,
//     options,
//     isLoading,
//     error,
//   }
// }
