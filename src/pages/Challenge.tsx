import { useState } from 'react'
import PageBanner from '../components/ui/PageBanner'
import { IconCode } from '@tabler/icons-react'
import PageStats from '../components/ui/PageStats'
import SearchFilters from '../features/challenge/SearchFilter'
import ChallengeCardList from '../features/challenge/ChallengeCardList'

export interface ChallengeFilter {
  stacks?: string[]
}

const bannerProps = {
  type: 'mentorship',
  title: 'MeDesafíos de Programación',
  description:
    'Pon a prueba tus habilidades, compite con otros desarrolladores y mejora tu ranking en la comunidad.',
  icon: IconCode, // Iconos de tabler icons ya instalados
  primaryBtn: {
    text: 'Crear Desafío',
    href: '/challenge',
  },
  secondaryButton: {
    text: 'Ver mi progreso',
    href: '/challenge/progress',
  },
}

const stats = [
  { label: 'Desafíos Activos', value: '1,245' },
  { label: 'Desarrolladores', value: '8,932' },
  { label: 'Soluciones enviadas', value: '15,678' },
  { label: 'Valoración Media', value: '4.8/5' },
]

const Challenge = () => {
  const [localFilters, setLocalFilters] = useState<ChallengeFilter>({})
  const [appliedFilters, setAppliedFilters] = useState<ChallengeFilter>({})

  const handleApplyFilters = () => {
    setAppliedFilters(localFilters)
  }
  return (
    <div className='bg-[#F8FAFC]'>
      <PageBanner {...bannerProps} />
      <PageStats stats={stats} />
      <SearchFilters
        filters={localFilters}
        setFilters={setLocalFilters}
        onApplyFilters={handleApplyFilters}
      />
      <ChallengeCardList filters={appliedFilters} />
    </div>
  )
}
export default Challenge
