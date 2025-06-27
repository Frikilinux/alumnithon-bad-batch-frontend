export interface UserProfile {
  id: string
  name: string
  title: string
  description: string
  stack: string[]
  interests: string[]
  avatarUrl: string
  location: string
  experience: string
}

export interface UserProfileFilter {
  stack?: string[]
  interests?: string[]
  location?: string
  experience?: string
}

export interface UserProfileApi {
  id: number
  userId: number
  avatarUrl: string
  firstName: string
  lastName: string
  bio: string | null
  location: string
  githubUrl: string | null
  linkedinUrl: string | null
  personalWebsite: string | null
  experienceLevel: string
  technologies: string[]
  interests: string[]
}
