import { useState } from 'react'
import CommunityHeader from '../features/profile/ProfileBanner'
import PerfilStats from '../features/profile/ProfileStats'
import SearchFilters from '../features/profile/SearchFilter'
import PerfilCardList from '../features/profile/ProfileCardList'
import type { UserProfileFilter } from '../types/user'

const PerfilPage = () => {
  const [localFilters, setLocalFilters] = useState<UserProfileFilter>({})
  const [appliedFilters, setAppliedFilters] = useState<UserProfileFilter>({})

  const handleApplyFilters = () => {
    setAppliedFilters(localFilters)
  }

  return (
    <main className='space-y-8'>
      <CommunityHeader />
      <PerfilStats />
      <SearchFilters
        filters={localFilters}
        setFilters={setLocalFilters}
        onApplyFilters={handleApplyFilters}
      />
      <PerfilCardList filters={appliedFilters} />
    </main>
  )
}

export default PerfilPage
