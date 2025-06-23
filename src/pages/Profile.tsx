import { useState } from 'react'
import CommunityHeader from '../features/profile/ProfileBanner'
import PerfilStats from '../features/profile/ProfileStats'
import UnifiedFilters from '../shared/components/FilterComponent'
import PerfilCardList from '../features/profile/ProfileCardList'
import type { UserProfileFilter } from '../types/user'
import { useFilteredProfiles } from '../hooks/profile/useFilteredUsertest'

const PerfilPage = () => {
  const [filters, setFilters] = useState<UserProfileFilter>({})
  const { data: profiles, options, isLoading } = useFilteredProfiles(filters)

  return (
    <main className='space-y-8'>
      <CommunityHeader />
      <PerfilStats />
      <UnifiedFilters
        context='busqueda'
        options={options}
        onApply={(newFilters) => setFilters(newFilters)}
      />
      <PerfilCardList profiles={profiles} isLoading={isLoading} />
    </main>
  )
}

export default PerfilPage
