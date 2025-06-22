import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import Pagination from './ProfilePagination'
import { useFilteredProfiles } from '../../hooks/profile/useFilteredUsertest'
import type { UserProfile, UserProfileFilter } from '../../types/user'

type Props = {
  filters: UserProfileFilter
}

const PerfilCardList: React.FC<Props> = ({ filters }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const profilesPerPage = 8

  const { data: profiles = [], isLoading, error } = useFilteredProfiles(filters)

  const totalPages = Math.ceil(profiles.length / profilesPerPage)
  const paginatedProfiles = profiles.slice(
    (currentPage - 1) * profilesPerPage,
    currentPage * profilesPerPage
  )

  if (isLoading) return <p>Cargando perfiles...</p>
  if (error) return <p>Error al cargar perfiles</p>

  return (
    <section className='my-6'>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-2xl font-semibold'>
          Comunidad ({profiles.length} resultados)
        </h2>
      </div>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {paginatedProfiles.map((profile: UserProfile) => (
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
