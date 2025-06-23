import React from 'react'
import { mentorships } from '../constants/mentorships'
import type { MentorshipFilter } from '../../../pages/Mentorship'

const tags = Array.from(new Set(mentorships.flatMap((m) => m.tags)))

type SearchFiltersProps = {
  filters: MentorshipFilter
  setFilters: React.Dispatch<React.SetStateAction<MentorshipFilter>>
  onApplyFilters?: () => void
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  filters,
  setFilters,
  onApplyFilters,
}) => {
  const toggleSelection = (item: string, key: 'tag') => {
    const list = filters[key] ?? []
    const has = list.includes(item)
    const newList = has ? list.filter((i) => i !== item) : [...list, item]
    setFilters({ ...filters, [key]: newList })
  }

  return (
    <section className='w-full py-12'>
      <div className='container mx-auto rounded-lg bg-white p-6 shadow-md'>
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-semibold'>Filtros de Búsqueda</h2>
        </div>
        <div>
          <h3 className='mb-2 font-semibold'>Stack Tecnológico</h3>
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <button
                key={tag}
                className={`rounded-full border px-3 py-1 ${
                  filters.tag?.includes(tag)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => toggleSelection(tag, 'tag')}>
                {tag}
              </button>
            ))}
          </div>
        </div>
        {/* Botón Aplicar Filtros */}
        <div className='flex justify-end'>
          <button
            className='flex items-center gap-2 rounded bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700'
            onClick={onApplyFilters}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='mr-2 h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              />
            </svg>
            Aplicar Filtros
          </button>
        </div>
      </div>
    </section>
  )
}

export default SearchFilters
