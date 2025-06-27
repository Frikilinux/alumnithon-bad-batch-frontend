export interface Mentorship {
  title: string
  description: string
  status: DRAFT | PUBLISHED | ACTIVE | CLOSED
  difficulty: BEGINNER | INTERMEDIATE | ADVANCED
  requiredTechnologies: string[]
  maxParticipants: number
  startDate: Date
  endDate: Date
  type: MENTORSHIP | CHALLENGE
  durationMinutes: number
  mentorshipType: ONE_ON_ONE | GROUP | WEBINAR
  isLive: boolean
  problemStatement: any
  acceptanceCriteria: any
  allowsTeams: boolean
  challengeType: CODING | DESIGN | ARCHITECTURE
}

interface MentorshipResponse extends Mentorship {
  id: string
  creatorId: string
  creatorName: string
  createdAt: Date
  updatedAt: Date
}

export interface MentorshipFilter {
  stack?: string[]
  difficulty?: BEGINNER | INTERMEDIATE | ADVANCED
}

// export interface UserProfileFilter {
//   stack?: string[]
//   interests?: string[]
//   location?: string
//   experience?: string
// }
