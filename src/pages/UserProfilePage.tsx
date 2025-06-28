import React from 'react'
import { useMeProfile } from '../hooks/profile/useProfile'
import {
  FaEdit,
  FaUserCircle,
  FaCode,
  FaGraduationCap,
  FaHeartbeat,
  FaBullseye,
} from 'react-icons/fa'

type SectionProps = {
  title: string
  icon: React.ReactElement
  children: React.ReactNode
}

const SectionCard: React.FC<SectionProps> = ({ title, icon, children }) => (
  <article className='rounded-lg border border-gray-100 bg-white p-6 shadow-sm'>
    <header className='mb-4 flex items-center gap-2 text-gray-700'>
      <span className='text-lg text-blue-600'>{icon}</span>
      <h2 className='text-lg font-semibold'>{title}</h2>
    </header>
    {children}
  </article>
)

const Pill: React.FC<{ label: string; color: string }> = ({ label, color }) => (
  <span
    className={`mr-2 mb-2 inline-block rounded-md px-3 py-1 text-xs font-medium ${color} bg-opacity-10`}>
    {label}
  </span>
)

const UserProfilePage: React.FC = () => {
  const { profile, isLoading, error } = useMeProfile()

  if (isLoading) {
    return <p className='py-10 text-center text-gray-500'>Cargando perfil...</p>
  }

  if (error) {
    return <p className='py-10 text-center text-red-500'>{error}</p>
  }

  if (!profile) {
    return (
      <p className='py-10 text-center text-gray-500'>Perfil no disponible</p>
    )
  }

  const getExperiencePercent = (level: string): number => {
    switch (level?.toUpperCase()) {
      case 'JUNIOR':
        return 33
      case 'INTERMEDIATE':
        return 66
      case 'SENIOR':
        return 100
      default:
        return 0
    }
  }

  const profileData = {
    name: `${profile.firstName} ${profile.lastName}`,
    role: profile.role || 'Desarrollador Full Stack',
    levelLabel: profile.experienceLevel,
    bio: profile.bio || 'No disponible',
    tech: profile.technologies || [],
    interests: profile.interests || [],
    objective: profile.objectives || 'No especificado',
    experiencePercent: getExperiencePercent(profile.experienceLevel),
    avatar: profile.avatarUrl || `https://robohash.org/${profile.id}?set=set5`,
  }

  return (
    <div className='mx-auto w-full max-w-xl space-y-6 px-4 py-10 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl'>
      {/* Encabezado */}
      <section className='flex flex-col items-center gap-3 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 p-8 text-white shadow-lg'>
        <img
          src={profileData.avatar}
          alt='Avatar'
          className='mx-auto mb-4 h-24 w-24 rounded-full border-4 border-white object-cover'
        />
        <h1 className='text-2xl font-extrabold'>{profileData.name}</h1>
        <p className='mb-4 text-sm font-medium opacity-90'>
          {profileData.role}
        </p>
        <span className='mx-auto mb-4 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold'>
          Nivel: {profileData.levelLabel}
        </span>
        <button
          type='button'
          className='inline-flex items-center gap-2 rounded-md bg-white/90 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-white'>
          <FaEdit />
          Editar Perfil
        </button>
      </section>

      {/* Secciones */}
      <div className='space-y-6'>
        <SectionCard title='Biografía' icon={<FaUserCircle />}>
          <p className='text-sm leading-relaxed text-gray-700'>
            {profileData.bio}
          </p>
        </SectionCard>

        <SectionCard title='Tecnologías' icon={<FaCode />}>
          {profileData.tech.map((t) => (
            <Pill
              key={t}
              label={t}
              color={
                t === 'React'
                  ? 'text-blue-800 bg-blue-200'
                  : 'text-green-800 bg-green-200'
              }
            />
          ))}
        </SectionCard>

        <SectionCard title='Nivel de Experiencia' icon={<FaGraduationCap />}>
          <div className='mb-2 text-sm font-medium text-gray-700'>
            {profileData.levelLabel}
          </div>
          <div className='h-2 w-full rounded-full bg-gray-200'>
            <div
              style={{ width: `${profileData.experiencePercent}%` }}
              className='h-full rounded-full bg-blue-500 transition-[width]'
            />
          </div>
        </SectionCard>

        <SectionCard title='Intereses' icon={<FaHeartbeat />}>
          {profileData.interests.map((int) => (
            <Pill
              key={int}
              label={int}
              color={
                int === 'Frontend'
                  ? 'text-purple-800 bg-purple-200'
                  : 'text-yellow-800 bg-yellow-200'
              }
            />
          ))}
        </SectionCard>

        <SectionCard title='Objetivo de Aprendizaje' icon={<FaBullseye />}>
          <div className='rounded-md bg-blue-50 px-4 py-3 text-sm text-blue-700'>
            {profileData.objective}
          </div>
        </SectionCard>
      </div>
    </div>
  )
}

export default UserProfilePage
