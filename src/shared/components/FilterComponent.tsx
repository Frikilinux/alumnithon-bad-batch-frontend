import React, { useState } from 'react'
import SelectFilter from './SelectFilterComponent'
import CheckboxFilter from './CheckBoxFilterComponent'
import TagFilter from './TagFilterComponent'

export type FilterOption = {
  name: string
  label: string
  type: 'select' | 'checkbox' | 'tags'
  options?: string[]
}

export type UnifiedFiltersProps = {
  context: 'desafios' | 'mentorias' | 'busqueda'
  onApply: (filters: Record<string, string | boolean | string[]>) => void
}

const FILTERS_CONFIG: Record<string, FilterOption[]> = {
  desafios: [
    {
      name: 'dificultad',
      label: 'Dificultad',
      type: 'select',
      options: ['Junior', 'Media', 'Senior'],
    },
    {
      name: 'tecnologia',
      label: 'Tecnología',
      type: 'select',
      options: ['React', 'Node.js'],
    },
    {
      name: 'categoria',
      label: 'Categoría',
      type: 'select',
      options: ['Web', 'Móvil'],
    },
  ],
  mentorias: [
    {
      name: 'especialidad',
      label: 'Especialidad',
      type: 'select',
      options: ['Frontend', 'Backend'],
    },
    {
      name: 'tecnologia',
      label: 'Tecnología',
      type: 'select',
      options: ['React', 'Vue.js'],
    },
  ],
  busqueda: [
    {
      name: 'stack',
      label: 'Stack Tecnológico',
      type: 'tags',
      options: ['React', 'Node.js', 'TypeScript', 'Java'],
    },
    {
      name: 'intereses',
      label: 'Intereses',
      type: 'tags',
      options: ['Desarrollo Web', 'AI', 'Blockchain'],
    },
    {
      name: 'ubicacion',
      label: 'Ubicación',
      type: 'select',
      options: ['Cualquier ubicación', 'Remoto', 'Presencial'],
    },
    {
      name: 'experiencia',
      label: 'Experiencia',
      type: 'select',
      options: ['Junior', 'intermedio', 'Senior'],
    },
    {
      name: 'activos',
      label: 'Solo activos',
      type: 'checkbox',
    },
    {
      name: 'tienePremio',
      label: 'Tiene premio',
      type: 'checkbox',
    },
  ],
}

const UnifiedFilters: React.FC<UnifiedFiltersProps> = ({
  context,
  onApply,
}) => {
  const config = FILTERS_CONFIG[context]
  const [filters, setFilters] = useState<Record<string, any>>({})

  const handleChange = (name: string, value: any) => {
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section className='space-y-6 rounded-lg bg-white shadow-md'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {config.map((filter) => {
          switch (filter.type) {
            case 'select':
              return (
                <SelectFilter
                  key={filter.name}
                  name={filter.name}
                  label={filter.label}
                  options={filter.options || []}
                  value={filters[filter.name] || ''}
                  onChange={handleChange}
                />
              )
            case 'tags':
              return (
                <div className='col-span-full' key={filter.name}>
                  <TagFilter
                    name={filter.name}
                    label={filter.label}
                    options={filter.options || []}
                    value={filters[filter.name] || []}
                    onChange={handleChange}
                  />
                </div>
              )
            case 'checkbox':
              return (
                <div className='col-span-full' key={filter.name}>
                  <CheckboxFilter
                    name={filter.name}
                    label={filter.label}
                    value={filters[filter.name] || false}
                    onChange={handleChange}
                  />
                </div>
              )
            default:
              return null
          }
        })}
      </div>

      <div className='flex justify-end'>
        <button
          className='flex items-center gap-2 rounded bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none'
          onClick={() => onApply(filters)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
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

export default UnifiedFilters
