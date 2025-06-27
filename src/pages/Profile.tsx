import { useState } from 'react'
import CommunityHeader from '../features/profile/ProfileBanner'
import PerfilStats from '../features/profile/ProfileStats'
import UnifiedFilters from '../shared/components/FilterComponent'
import PerfilCardList from '../features/profile/ProfileCardList'
import type { UserProfileFilter } from '../types/user'
import { useFilteredProfiles } from '../hooks/profile/useFilteredUsertest'

const PerfilPage = () => {
  console.log('object')
  const [filters, setFilters] = useState<UserProfileFilter>({})
  const { data: profiles, options, isLoading } = useFilteredProfiles(filters)

  if (isLoading) {
    return (
      <main className='flex h-screen items-center justify-center'>
        <p className='animate-pulse text-lg font-semibold'>
          Cargando perfiles...
        </p>
      </main>
    )
  }

  return (
    <main className='space-y-8'>
      <CommunityHeader />
      <PerfilStats />
      {!isLoading && (
        <UnifiedFilters
          context='busqueda'
          options={options}
          onApply={(newFilters) => setFilters(newFilters)}
        />
      )}
      <PerfilCardList profiles={profiles} isLoading={isLoading} />
    </main>
  )
}

export default PerfilPage
