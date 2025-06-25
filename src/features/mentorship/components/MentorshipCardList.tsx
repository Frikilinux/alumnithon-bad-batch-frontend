import { useState } from 'react'
import { mentorships, type Mentorship } from '../constants/mentorships'
import MentorshipCard from './mentorshipCard'
import MentorshipPagination from './MentorshipPagination'
import type { MentorshipFilter } from '../../../pages/Mentorship'

type Props = {
  filters: MentorshipFilter
}

const MentorshipCardList: React.FC<Props> = ({ filters }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const mentorshipsPerPage = 8

  console.log('Filters applied:', filters.tag)

  const filterByTags = (): Mentorship[] => {
    if (!filters.tag || filters.tag.length === 0) return mentorships

    const filterTagsLower = filters.tag.map((tag) => tag.toLowerCase())

    return mentorships.filter((mentorship) =>
      mentorship.tags.some((tag) => filterTagsLower.includes(tag.toLowerCase()))
    )
  }

  const totalPages = Math.ceil(filterByTags().length / mentorshipsPerPage)
  const paginatedMentorship = filterByTags().slice(
    (currentPage - 1) * mentorshipsPerPage,
    currentPage * mentorshipsPerPage
  )

  return (
    <section className='m-2 md:m-8'>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-2xl font-semibold'>
          Mentorías ({mentorships.length} resultados)
        </h2>
      </div>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {paginatedMentorship.map((mentorship: Mentorship) => (
          <MentorshipCard key={mentorship.id} mentorship={mentorship} />
        ))}
      </div>

      <MentorshipPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  )
}

export default MentorshipCardList
