import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { string, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const VALID_TECHNOLOGIES = [
  'JAVA',
  'PYTHON',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'REACT',
  'VUE',
  'ANGULAR',
  'NODEJS',
  'SPRING_BOOT',
  'DJANGO',
  'FLASK',
  'DOCKER',
  'KUBERNETES',
  'AWS',
  'AZURE',
  'GCP',
  'MYSQL',
  'POSTGRESQL',
  'MONGODB',
  'REDIS',
]

const VALID_INTERESTS = [
  'BACKEND',
  'FRONTEND',
  'FULLSTACK',
  'DEVOPS',
  'CLOUD',
  'AI_ML',
  'MOBILE',
  'GAME_DEVELOPMENT',
  'DATA_SCIENCE',
  'CYBERSECURITY',
  'UI_UX',
  'ARCHITECTURE',
  'TESTING',
]

const MAX_TECH = 10
const MAX_INT = 5

const perfilSchema = z.object({
  bio: z.string().max(500),
  location: z.string().max(100),
  githubUrl: z.string().url().nullable().optional(),
  linkedinUrl: z.string().url().nullable().optional(),
  personalWebsite: z.string().url().nullable().optional(),
  experienceLevel: z.enum(['JUNIOR', 'MID', 'SENIOR']),
  objectives: z.string().max(1000),
  technologies: z
    .array(z.enum(VALID_TECHNOLOGIES as [string, ...string[]]))
    .max(MAX_TECH),
  interests: z
    .array(z.enum(VALID_INTERESTS as [string, ...string[]]))
    .max(MAX_INT),
})

export type PerfilSchemaType = z.infer<typeof perfilSchema>

const CreatePerfil: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PerfilSchemaType>({
    resolver: zodResolver(perfilSchema),
    defaultValues: {
      bio: '',
      location: '',
      githubUrl: '',
      linkedinUrl: '',
      personalWebsite: '',
      experienceLevel: 'JUNIOR',
      objectives: '',
      technologies: [],
      interests: [],
    },
  })

  const techs = watch('technologies')
  const ints = watch('interests')

  const toggleArrayItem = (
    field: 'technologies' | 'interests',
    value: string,
    max: number
  ) => {
    const current = watch(field)
    if (current.includes(value)) {
      setValue(field, current.filter((i) => i !== value) as any)
    } else if (current.length < max) {
      setValue(field, [...current, value] as any)
    }
  }

  const onSubmit = (data: PerfilSchemaType) => {
    const PerfilData = {
      ...data,
      visibility: 'PUBLIC',
    }
    console.log('Payload:', PerfilData)
  }

  return (
    <div className='mx-auto mt-10 max-w-3xl space-y-6 rounded-md bg-white p-6 shadow'>
      <h1 className='text-2xl font-bold text-gray-800'>Crear Perfil</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <div>
          <label className='mb-1 block font-medium'>Biografía</label>
          <textarea
            {...register('bio')}
            className='w-full rounded border px-3 py-2 text-sm'
            rows={4}
          />
          {errors.bio && (
            <p className='text-sm text-red-500'>{errors.bio.message}</p>
          )}
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div>
            <label className='mb-1 block font-medium'>Ubicación</label>
            <input
              {...register('location')}
              className='w-full rounded border px-3 py-2 text-sm'
            />
            {errors.location && (
              <p className='text-sm text-red-500'>{errors.location.message}</p>
            )}
          </div>
          <div>
            <label className='mb-1 block font-medium'>
              Nivel de experiencia
            </label>
            <select
              {...register('experienceLevel')}
              className='w-full rounded border px-3 py-2 text-sm'>
              <option value='JUNIOR'>Junior</option>
              <option value='MID'>Mid</option>
              <option value='SENIOR'>Senior</option>
            </select>
          </div>
        </div>

        <div>
          <label className='mb-1 block font-medium'>Objetivos</label>
          <textarea
            {...register('objectives')}
            className='w-full rounded border px-3 py-2 text-sm'
            rows={3}
          />
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          <div>
            <label className='mb-1 block font-medium'>GitHub</label>
            <input
              {...register('githubUrl')}
              type='url'
              className='w-full rounded border px-3 py-2 text-sm'
            />
          </div>
          <div>
            <label className='mb-1 block font-medium'>LinkedIn</label>
            <input
              {...register('linkedinUrl')}
              type='url'
              className='w-full rounded border px-3 py-2 text-sm'
            />
          </div>
          <div>
            <label className='mb-1 block font-medium'>Sitio Personal</label>
            <input
              {...register('personalWebsite')}
              type='url'
              className='w-full rounded border px-3 py-2 text-sm'
            />
          </div>
        </div>

        <div>
          <label className='mb-2 block font-semibold'>
            Tecnologías (máx. {MAX_TECH})
          </label>
          <div className='flex flex-wrap gap-2'>
            {VALID_TECHNOLOGIES.map((tech) => (
              <button
                type='button'
                key={tech}
                onClick={() => toggleArrayItem('technologies', tech, MAX_TECH)}
                className={`rounded-full border px-3 py-1 text-sm ${
                  techs.includes(tech)
                    ? 'border-blue-600 bg-blue-600 text-white'
                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'
                }`}>
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className='mb-2 block font-semibold'>
            Intereses (máx. {MAX_INT})
          </label>
          <div className='flex flex-wrap gap-2'>
            {VALID_INTERESTS.map((interest) => (
              <button
                type='button'
                key={interest}
                onClick={() => toggleArrayItem('interests', interest, MAX_INT)}
                className={`rounded-full border px-3 py-1 text-sm ${
                  ints.includes(interest)
                    ? 'border-green-600 bg-green-600 text-white'
                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'
                }`}>
                {interest}
              </button>
            ))}
          </div>
        </div>

        <div className='flex justify-end gap-2 pt-4'>
          <button
            type='submit'
            className='rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700'>
            Guardar Perfil
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePerfil
