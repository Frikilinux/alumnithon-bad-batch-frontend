import { useState } from 'react'
import MentorshipCardList from '../features/mentorship/components/MentorshipCardList'
import SearchFilters from '../features/mentorship/components/SearchFilter'
import PageBanner from '../components/ui/PageBanner'
import { IconUsersGroup } from '@tabler/icons-react'
import PageStats from '../components/ui/PageStats'
import UnifiedFilters from '../shared/components/FilterComponent'
import { useFilteredMentorship } from '../hooks/mentorship/useFilteredMentorship'
import type { MentorshipFilter } from '../types/mentorship'

// export interface MentorshipFilter {
//   tag?: string[]
// }

const stats = [
  { label: 'Mentores Activos', value: '1,245' },
  { label: 'Aprendices', value: '1,392' },
  { label: 'Sesiones Realizadas', value: '13,245' },
  { label: 'Valoración Media', value: '4.9/5' },
]

const bannerProps = {
  type: 'mentorship',
  title: 'Mentorías Públicas para Desarrolladores',
  description:
    'Aprende en grupo con expertos de la industria y acelera tu crecimiento profesional. ¡Todas nuestras mentorías son gratuitas!',
  icon: IconUsersGroup, // Iconos de tabler icons ya instalados
  primaryBtn: {
    text: 'Explorar Mentorías',
    href: '/mentorship',
  },
  secondaryButton: {
    text: 'Ofrecer Mentoría',
    href: '/mentorship/offer',
  },
}

const Mentorship = () => {
  const [filters, setFilters] = useState<MentorshipFilter>({})

  const {
    data: mentorships,
    options,
    isLoading,
  } = useFilteredMentorship(filters)

  console.log(options)

  return (
    <div className='bg-[#F8FAFC]'>
      <PageBanner {...bannerProps} />
      {/* <MentorshipHeader /> */}
      <PageStats stats={stats} />
      {!isLoading && (
        <UnifiedFilters
          context='mentorship'
          options={options}
          onApply={(newFilters) => setFilters(newFilters)}
        />
      )}

      <MentorshipCardList mentorships={mentorships} isLoading={isLoading} />
    </div>
  )
}
export default Mentorship
