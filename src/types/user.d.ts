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
