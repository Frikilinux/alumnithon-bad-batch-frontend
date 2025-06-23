import MentorshipStats from '../features/mentorship/components/MentorshipStats'
import MentorshipHeader from '../features/mentorship/components/MentorShipHeader'
import MentorshipCardList from '../features/mentorship/components/MentorshipCardList'
import { useState } from 'react'
// import type { UserProfileFilter } from '../types/user'
import SearchFilters from '../features/mentorship/components/SearchFilter'

export interface MentorshipFilter {
  tag?: string[]
}

const Mentorship = () => {
  const [localFilters, setLocalFilters] = useState<MentorshipFilter>({})
  const [appliedFilters, setAppliedFilters] = useState<MentorshipFilter>({})

  const handleApplyFilters = () => {
    setAppliedFilters(localFilters)
  }
  return (
    <div className='bg-[#F8FAFC]'>
      <MentorshipHeader />
      <MentorshipStats />
      <SearchFilters
        filters={localFilters}
        setFilters={setLocalFilters}
        onApplyFilters={handleApplyFilters}
      />
      <MentorshipCardList filters={appliedFilters} />
    </div>
  )
}
export default Mentorship
