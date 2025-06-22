import React from 'react'
import type { UserProfileFilter } from '../../types/user'

const techStack = [
  'JavaScript',
  'Python',
  'React',
  'Node.js',
  'TypeScript',
  'Java',
  'C#',
  'Angular',
  'Vue.js',
  'PHP',
  'Ruby',
  'Swift',
  'Kotlin',
  'Flutter',
]

const interests = [
  'Desarrollo Web',
  'Desarrollo Móvil',
  'Inteligencia Artificial',
  'Machine Learning',
  'DevOps',
  'Blockchain',
  'Ciberseguridad',
  'UX/UI',
  'Cloud Computing',
  'IoT',
  'Desarrollo de Videojuegos',
]

type SearchFiltersProps = {
  filters: UserProfileFilter
  setFilters: React.Dispatch<React.SetStateAction<UserProfileFilter>>
  onApplyFilters?: () => void
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  filters,
  setFilters,
  onApplyFilters,
}) => {
  const toggleSelection = (item: string, key: 'stack' | 'interests') => {
    const list = filters[key] ?? []
    const has = list.includes(item)
    const newList = has ? list.filter((i) => i !== item) : [...list, item]
    setFilters({ ...filters, [key]: newList })
  }

  const handleSelectChange = (
    key: 'location' | 'experience',
    value: string
  ) => {
    setFilters({ ...filters, [key]: value === '' ? undefined : value })
  }

  return (
    <section className='space-y-4 rounded-lg bg-white p-6 shadow-md'>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl font-semibold'>Filtros de Búsqueda</h2>
      </div>

      <div>
        <h3 className='mb-2 font-semibold'>Stack Tecnológico</h3>
        <div className='flex flex-wrap gap-2'>
          {techStack.map((stack) => (
            <button
              key={stack}
              className={`rounded-full border px-3 py-1 ${
                filters.stack?.includes(stack)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
              onClick={() => toggleSelection(stack, 'stack')}>
              {stack}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className='mb-2 font-semibold'>Intereses</h3>
        <div className='flex flex-wrap gap-2'>
          {interests.map((interest) => (
            <button
              key={interest}
              className={`rounded-full border px-3 py-1 ${
                filters.interests?.includes(interest)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
              onClick={() => toggleSelection(interest, 'interests')}>
              {interest}
            </button>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        <div>
          <label className='block text-sm font-medium'>Ubicación</label>
          <select
            className='w-full rounded border px-3 py-2'
            value={filters.location || ''}
            onChange={(e) => handleSelectChange('location', e.target.value)}>
            <option value=''>Cualquier ubicación</option>
            <option value='Latinoamérica'>Latinoamérica</option>
            <option value='Europa'>Europa</option>
            <option value='Asia'>Asia</option>
          </select>
        </div>
        <div>
          <label className='block text-sm font-medium'>Experiencia</label>
          <select
            className='w-full rounded border px-3 py-2'
            value={filters.experience || ''}
            onChange={(e) => handleSelectChange('experience', e.target.value)}>
            <option value=''>Cualquier nivel</option>
            <option value='Junior'>Junior</option>
            <option value='Mid'>Mid</option>
            <option value='Senior'>Senior</option>
          </select>
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
    </section>
  )
}

export default SearchFilters
