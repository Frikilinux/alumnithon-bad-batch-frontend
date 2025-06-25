import { useState } from 'react'
import ChallengeCard from './challengeCard'
import type { ChallengeFilter } from '../../pages/Challenge'
import { challenges, type Challenge } from './constants/challenges'
import PagePagination from '../../components/ui/PagePagination'

type Props = {
  filters: ChallengeFilter
}

const ChallengeCardList: React.FC<Props> = ({ filters }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const challengesPerPage = 8

  console.log('Filters applied:', filters.stacks)

  const filterByTags = (): Challenge[] => {
    if (!filters.stacks || filters.stacks.length === 0) return challenges

    const filterTagsLower = filters.stacks.map((tag) => tag.toLowerCase())

    return challenges.filter((mentorship) =>
      mentorship.stacks.some((stack) =>
        filterTagsLower.includes(stack.toLowerCase())
      )
    )
  }

  const totalPages = Math.ceil(filterByTags().length / challengesPerPage)
  const paginatedChallenge = filterByTags().slice(
    (currentPage - 1) * challengesPerPage,
    currentPage * challengesPerPage
  )

  return (
    <section className='m-2 md:m-8'>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-2xl font-semibold'>
          Desafíos ({challenges.length} resultados)
        </h2>
      </div>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {paginatedChallenge.map((challenge: Challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
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

export default ChallengeCardList
