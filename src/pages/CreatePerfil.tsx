import React from 'react'
import {
  FaUser,
  FaTools,
  FaBriefcase,
  FaUsers,
  FaLock,
  FaCamera,
} from 'react-icons/fa'

// Componente reutilizable para campos de texto
type InputProps = {
  label: string
  placeholder?: string
}

function Input({ label, placeholder = '' }: InputProps) {
  return (
    <div>
      <label className='mb-1 block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <input
        type='text'
        placeholder={placeholder}
        className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm'
      />
    </div>
  )
}

// Componente para ítems del menú lateral
function SidebarItem({
  text,
  icon,
  active = false,
}: {
  text: string
  icon: React.ReactNode
  active?: boolean
}) {
  return (
    <div
      className={`flex cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-sm transition ${
        active
          ? 'bg-blue-100 font-semibold text-blue-700'
          : 'text-gray-700 hover:bg-gray-100'
      }`}>
      <span
        className={`text-base ${active ? 'text-blue-600' : 'text-gray-500'}`}>
        {icon}
      </span>
      {text}
    </div>
  )
}

const CreatePerfil: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <div className='mx-auto max-w-7xl space-y-6'>
        {/* Encabezado general */}
        <div className='flex items-start justify-between'>
          <div>
            <h1 className='text-2xl font-bold text-gray-800'>Crear Perfil</h1>
            <p className='text-sm text-gray-500'>
              Completa tu información para que otros desarrolladores puedan
              conocerte
            </p>
          </div>
          <div className='space-x-2'>
            <button className='rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700'>
              ✓ Guardar Perfil
            </button>
            <button className='rounded border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
              ✕ Cancelar
            </button>
          </div>
        </div>

        {/* Contenido principal con sidebar y formulario */}
        <div className='flex flex-col gap-6 md:flex-row'>
          {/* Sidebar */}
          <aside className='flex w-full flex-col items-center md:w-1/4'>
            {/* Cabecera azul */}
            <div className='flex w-full flex-col items-center rounded-t-lg bg-[#0E73A7] py-6'>
              <div className='relative'>
                <div className='flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-gray-300'>
                  <img
                    src='https://via.placeholder.com/80'
                    alt='perfil'
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='absolute right-0 bottom-0 rounded-full border bg-white p-1 shadow'>
                  <FaCamera className='text-xs text-blue-600' />
                </div>
              </div>
              <h2 className='mt-3 text-base font-semibold text-white'>
                Tu Nombre
              </h2>
              <p className='text-sm text-white/90'>Tu Título Profesional</p>
            </div>

            {/* Menú blanco */}
            <div className='w-full'>
              <div className='space-y-2 rounded-b-lg bg-white p-4 shadow'>
                <SidebarItem
                  text='Información Personal'
                  icon={<FaUser />}
                  active
                />
                <SidebarItem
                  text='Habilidades y Tecnologías'
                  icon={<FaTools />}
                />
                <SidebarItem
                  text='Experiencia y Objetivos'
                  icon={<FaBriefcase />}
                />
                <SidebarItem text='Redes Sociales' icon={<FaUsers />} />
                <SidebarItem text='Privacidad y Seguridad' icon={<FaLock />} />
              </div>
            </div>
          </aside>

          {/* Formulario */}
          <main className='w-full md:w-3/4'>
            <div className='rounded-lg bg-white p-6 shadow'>
              <h2 className='mb-4 text-lg font-semibold text-gray-800'>
                Información Personal
              </h2>
              <form className='space-y-5'>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <Input label='Nombre' placeholder='Tu nombre' />
                  <Input label='Apellidos' placeholder='Tus apellidos' />
                  <Input
                    label='Título Profesional'
                    placeholder='Ej: Frontend Developer'
                  />
                  <Input
                    label='Correo Electrónico'
                    placeholder='tu@email.com'
                  />
                  <Input label='Ubicación' placeholder='Ciudad, País' />
                  <Input label='Idiomas' placeholder='Español, Inglés, etc.' />
                </div>

                <div>
                  <label className='mb-1 block text-sm font-medium text-gray-700'>
                    Biografía
                  </label>
                  <textarea
                    rows={4}
                    maxLength={300}
                    placeholder='Cuéntanos sobre ti, tu experiencia y tus intereses profesionales...'
                    className='w-full rounded-md border border-gray-300 p-2 text-sm'
                  />
                  <p className='mt-1 text-right text-sm text-gray-400'>
                    Máximo 300 caracteres
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default CreatePerfil
