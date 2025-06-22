import { useState } from 'react'
import { mentorships, type Mentorship } from '../constants/mentorships'
import MentorshipCard from './mentorshipCard'
import MentorshipPagination from './MentorshipPagination'

const MentorshipCardList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const mentorshipsPerPage = 8

  const totalPages = Math.ceil(mentorships.length / mentorshipsPerPage)
  const paginatedMentorship = mentorships.slice(
    (currentPage - 1) * mentorshipsPerPage,
    currentPage * mentorshipsPerPage
  )

  return (
    <section className='my-6'>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-2xl font-semibold'>
          Mentorías ({mentorships.length} resultados)
        </h2>
      </div>

      <div className='grid gap-6 px-6 md:grid-cols-2 lg:grid-cols-3'>
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
