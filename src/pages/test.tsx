import React, { useState, useEffect } from 'react'
import UnifiedFilters from '../shared/components/FilterComponent'

type Desafio = {
  id: string
  titulo: string
  dificultad: string
  tecnologia: string
  categoria: string
  activo: boolean
  tienePremio: boolean
}

const DesafiosPage: React.FC = () => {
  const [desafios, setDesafios] = useState<Desafio[]>([])
  const [filtros, setFiltros] = useState<Record<string, any>>({})

  useEffect(() => {
    // Simulación de fetch con filtros
    const data: Desafio[] = [
      {
        id: '1',
        titulo: 'Desafío React',
        dificultad: 'Fácil',
        tecnologia: 'React',
        categoria: 'Web',
        activo: true,
        tienePremio: true,
      },
      {
        id: '2',
        titulo: 'Desafío Node',
        dificultad: 'Media',
        tecnologia: 'Node.js',
        categoria: 'Backend',
        activo: false,
        tienePremio: false,
      },
      // ...otros desafíos
    ]

    // Aplicar filtros
    const filtrados = data.filter((d) => {
      if (
        filtros.dificultad &&
        filtros.dificultad !== 'Todas las dificultades' &&
        d.dificultad !== filtros.dificultad
      )
        return false
      if (
        filtros.tecnologia &&
        filtros.tecnologia !== 'Todas las tecnologías' &&
        d.tecnologia !== filtros.tecnologia
      )
        return false
      if (
        filtros.categoria &&
        filtros.categoria !== 'Todas las categorías' &&
        d.categoria !== filtros.categoria
      )
        return false
      if (filtros.activos && !d.activo) return false
      if (filtros.premios && !d.tienePremio) return false
      return true
    })

    setDesafios(filtrados)
  }, [filtros])

  return (
    <div className='p-6'>
      <h1 className='mb-4 text-2xl font-bold'>Listado de Desafíos</h1>

      <UnifiedFilters
        context='busqueda'
        onApply={(filtrosAplicados: Record<string, any>): void => {
          setFiltros(filtrosAplicados)
        }}
      />

      <div className='mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {desafios.map((d) => (
          <div key={d.id} className='rounded border p-4 shadow-sm'>
            <h2 className='text-lg font-semibold'>{d.titulo}</h2>
            <p>Dificultad: {d.dificultad}</p>
            <p>Tecnología: {d.tecnologia}</p>
            <p>Categoría: {d.categoria}</p>
            {d.activo && <span className='text-green-600'>Activo</span>}
            {d.tienePremio && (
              <span className='ml-2 text-yellow-600'>🏆 Premio</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DesafiosPage
