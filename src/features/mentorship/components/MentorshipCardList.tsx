import { useState } from 'react'
// import { mentorships, type Mentorship } from '../constants/mentorships'
import MentorshipCard from './mentorshipCard'
// import type { MentorshipFilter } from '../../../pages/Mentorship'
import PagePagination from '../../../components/ui/PagePagination'
import type { MentorshipResponse } from '../../../types/mentorship'

type Props = {
  isLoading: boolean
  mentorships: MentorshipResponse[]
}

const MentorshipCardList: React.FC<Props> = ({ isLoading, mentorships }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const mentorshipsPerPage = 8

  const totalPages = Math.ceil(mentorships.length / mentorshipsPerPage)
  const paginatedMentorship = mentorships.slice(
    (currentPage - 1) * mentorshipsPerPage,
    currentPage * mentorshipsPerPage
  )

  if (isLoading) return <p>Cargando mentorías...</p>
  if (!isLoading && mentorships.length === 0)
    return (
      <div className='flex h-96 items-center justify-center'>
        <p className='text-2xl'>
          No se encontraron mentorías que coincidan. :(
        </p>
      </div>
    )

  return (
    <section className='m-2 md:m-8'>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-2xl font-semibold'>
          Mentorías ({mentorships.length} resultados)
        </h2>
      </div>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {paginatedMentorship.map((mentorship) => (
          <MentorshipCard key={mentorship.id} mentorship={mentorship} />
        ))}
      </div>

      <PagePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  )
}

export default MentorshipCardList
