import type { MentorshipResponse } from '../../../types/mentorship'
// import type { Mentorship } from '../constants/mentorships'
// import { category } from '../constants/mentorships'
import { IconAlarm, IconCalendar, IconUsers } from '@tabler/icons-react'

const DIFFICULTY = {
  INTERMEDIATE: {
    color: 'bg-orange-400',
  },
  BEGINNER: {
    color: 'bg-green-400',
  },
  ADVANCED: {
    color: 'bg-red-400',
  },
} as const

const MentorshipCard = ({ mentorship }: { mentorship: MentorshipResponse }) => {
  const getParticipantsPercentage = (): number => {
    if (mentorship.maxParticipants === 0) return 0
    const percentage = (10 / mentorship.maxParticipants) * 100
    return Math.min(100, Math.max(0, Math.round(percentage)))
  }

  const date = new Date(mentorship.startDate).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className='mentorship-card overflow-hidden rounded-xl bg-white shadow-md'>
      <div
        className={`${DIFFICULTY[mentorship.difficulty as keyof typeof DIFFICULTY]?.color ?? 'bg-gray-400'} h-3`}></div>
      <div className='p-6'>
        <div className='mb-4 flex items-center'>
          <img
            src='https://randomuser.me/api/portraits/women/1.jpg'
            alt='Mentor'
            className='border-primary-100 mr-4 h-12 w-12 rounded-full border-2'
          />
          <div>
            <h3 className='text-lg font-bold'>{mentorship.creatorName}</h3>
            {/* Consulta la profile */}
            <p className='text-sm text-gray-600'>Data science HARCODED</p>
          </div>
        </div>
        <h4 className='mb-2 text-xl font-semibold'>{mentorship.title}</h4>
        <p className='mb-4 text-gray-600'>{mentorship.description}</p>

        <div className='mb-4 flex items-center gap-1'>
          <IconCalendar />
          <span className='text-gray-600'>{date}</span>
        </div>

        <div className='mb-4 flex items-center gap-1 text-gray-600'>
          <IconAlarm />
          <span>{mentorship.durationMinutes}</span>
        </div>

        <div className='mb-4 flex items-center gap-1 text-gray-600'>
          <IconUsers />
          <span>
            {mentorship.maxParticipants - 10}/{mentorship.maxParticipants}{' '}
            plazas disponibles
          </span>
        </div>

        <div className='mb-4 h-2.5 w-full rounded-full bg-gray-200'>
          <div
            style={{
              width: `${getParticipantsPercentage()}%`,
            }}
            className={`h-2.5 rounded-full bg-blue-600`}></div>
        </div>

        <div className='mb-4 flex flex-wrap gap-2'>
          {mentorship.requiredTechnologies.map((tag, index) => {
            return (
              <span
                key={`${tag}-${index}}`}
                className='rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800'>
                {tag}
              </span>
            )
          })}
        </div>

        <button className='hover:bg-primary-700 w-full rounded-lg bg-blue-600 py-2 font-medium text-white transition'>
          Inscribirse
        </button>
      </div>
    </div>
  )
}

export default MentorshipCard
