import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import Pagination from './ProfilePagination'
import type { UserProfile } from '../../hooks/profile/useFilteredUsertest'

type Props = {
  profiles: UserProfile[]
  isLoading: boolean
}

const PerfilCardList: React.FC<Props> = ({ profiles, isLoading }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const profilesPerPage = 8

  const totalPages = Math.ceil(profiles.length / profilesPerPage)
  const paginatedProfiles = profiles.slice(
    (currentPage - 1) * profilesPerPage,
    currentPage * profilesPerPage
  )

  if (isLoading) return <p>Cargando perfiles...</p>
  if (!isLoading && profiles.length === 0)
    return <p>No se encontraron perfiles que coincidan.</p>

  return (
    <section className='my-6'>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-2xl font-semibold'>
          Comunidad ({profiles.length} resultados)
        </h2>
      </div>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {paginatedProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  )
}

export default PerfilCardList
