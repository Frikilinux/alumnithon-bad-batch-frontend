import React, { useState, useEffect } from 'react'
import SelectFilter from './SelectFilterComponent'
import CheckboxFilter from './CheckBoxFilterComponent'
import TagFilter from './TagFilterComponent'

type FilterOption = {
  name: string
  label: string
  type: 'select' | 'checkbox' | 'tags'
  options?: string[]
}

type OptionsType = {
  stack: string[]
  interests: string[]
  location: string[]
  experience: string[]
}

type UnifiedFiltersProps = {
  context: 'busqueda' | 'desafios' | 'mentorias'
  options: OptionsType
  onApply: (filters: Record<string, string | boolean | string[]>) => void
}

const FILTERS_CONFIG: Record<string, FilterOption[]> = {
  busqueda: [
    {
      name: 'stack',
      label: 'Stack Tecnológico',
      type: 'tags',
    },
    {
      name: 'interests',
      label: 'Intereses',
      type: 'tags',
    },
    {
      name: 'location',
      label: 'Ubicación',
      type: 'select',
    },
    {
      name: 'experience',
      label: 'Experiencia',
      type: 'select',
    },
  ],
  desafios: [
    {
      name: 'dificultad',
      label: 'Dificultad',
      type: 'select',
    },
    {
      name: 'tecnologia',
      label: 'Tecnología',
      type: 'select',
    },
    {
      name: 'categoria',
      label: 'Categoría',
      type: 'select',
    },
  ],
  mentorias: [
    {
      name: 'especialidad',
      label: 'Especialidad',
      type: 'select',
    },
    {
      name: 'tecnologia',
      label: 'Tecnología',
      type: 'select',
    },
  ],
}

const UnifiedFilters: React.FC<UnifiedFiltersProps> = ({
  context,
  options,
  onApply,
}) => {
  const config = FILTERS_CONFIG[context]
  const [filters, setFilters] = useState<Record<string, any>>({})

  useEffect(() => {
    setFilters({})
  }, [options])

  const handleChange = (name: string, value: any) => {
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section className='space-y-6 rounded-lg bg-white p-4 shadow-md'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {config.map((filter) => {
          const opts = options[filter.name as keyof OptionsType] || []
          if (filter.type === 'select') {
            return (
              <div key={filter.name} className='w-full'>
                <SelectFilter
                  name={filter.name}
                  label={filter.label}
                  options={opts}
                  value={
                    typeof filters[filter.name] === 'string'
                      ? filters[filter.name]
                      : ''
                  }
                  onChange={handleChange}
                />
              </div>
            )
          }
          if (filter.type === 'tags') {
            return (
              <div key={filter.name} className='col-span-full'>
                <TagFilter
                  name={filter.name}
                  label={filter.label}
                  options={opts}
                  value={
                    Array.isArray(filters[filter.name])
                      ? filters[filter.name]
                      : []
                  }
                  onChange={handleChange}
                />
              </div>
            )
          }
          if (filter.type === 'checkbox') {
            return (
              <div key={filter.name} className='col-span-full'>
                <CheckboxFilter
                  name={filter.name}
                  label={filter.label}
                  value={
                    typeof filters[filter.name] === 'boolean'
                      ? filters[filter.name]
                      : false
                  }
                  onChange={handleChange}
                />
              </div>
            )
          }
          return null
        })}
      </div>
      <div className='flex justify-end pt-2'>
        <button
          className='flex items-center gap-2 rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none'
          onClick={() => onApply(filters)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='currentColor'
            viewBox='0 0 20 20'>
            <path d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' />
          </svg>
          Aplicar Filtros
        </button>
      </div>
    </section>
  )
}

export default UnifiedFilters
