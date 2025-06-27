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

  // console.log('Filters applied:', filters.tag)

  // const filterByTags = (): Mentorship[] => {
  //   if (!filters.tag || filters.tag.length === 0) return mentorships

  //   const filterTagsLower = filters.tag.map((tag) => tag.toLowerCase())

  //   return mentorships.filter((mentorship) =>
  //     mentorship.tags.some((tag) => filterTagsLower.includes(tag.toLowerCase()))
  //   )
  // }

  const totalPages = Math.ceil(mentorships.length / mentorshipsPerPage)
  const paginatedMentorship = mentorships.slice(
    (currentPage - 1) * mentorshipsPerPage,
    currentPage * mentorshipsPerPage
  )

  if (isLoading) return <p>Cargando perfiles...</p>
  if (!isLoading && mentorships.length === 0)
    return <p>No se encontraron perfiles que coincidan.</p>

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
