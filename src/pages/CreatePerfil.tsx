import React from "react";
import {
  FaUser,
  FaTools,
  FaBriefcase,
  FaUsers,
  FaLock,
  FaCamera,
} from "react-icons/fa";

// Componente reutilizable para campos de texto
type InputProps = {
  label: string;
  placeholder?: string;
};

function Input({ label, placeholder = "" }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
      />
    </div>
  );
}

// Componente para ítems del menú lateral
function SidebarItem({
  text,
  icon,
  active = false,
}: {
  text: string;
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm cursor-pointer transition ${
        active
          ? "bg-blue-100 text-blue-700 font-semibold"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <span className={`text-base ${active ? "text-blue-600" : "text-gray-500"}`}>{icon}</span>
      {text}
    </div>
  );
}

const CreatePerfil: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Encabezado general */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Crear Perfil</h1>
            <p className="text-gray-500 text-sm">
              Completa tu información para que otros desarrolladores puedan conocerte
            </p>
          </div>
          <div className="space-x-2">
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
              ✓ Guardar Perfil
            </button>
            <button className="px-4 py-2 text-sm border bg-white border-gray-300 rounded hover:bg-gray-100 text-gray-700">
              ✕ Cancelar
            </button>
            
          </div>
        </div>

        {/* Contenido principal con sidebar y formulario */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4 flex flex-col items-center">
  {/* Cabecera azul */}
  <div className="w-full bg-[#0E73A7] flex flex-col items-center py-6 rounded-t-lg">
    <div className="relative">
      <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
        <img
          src="https://via.placeholder.com/80"
          alt="perfil"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full border shadow">
        <FaCamera className="text-blue-600 text-xs" />
      </div>
    </div>
    <h2 className="text-white font-semibold mt-3 text-base">Tu Nombre</h2>
    <p className="text-white/90 text-sm">Tu Título Profesional</p>
  </div>

  {/* Menú blanco */}
  <div className="w-full">
    <div className="bg-white rounded-b-lg shadow p-4 space-y-2">
      <SidebarItem text="Información Personal" icon={<FaUser />} active />
      <SidebarItem text="Habilidades y Tecnologías" icon={<FaTools />} />
      <SidebarItem text="Experiencia y Objetivos" icon={<FaBriefcase />} />
      <SidebarItem text="Redes Sociales" icon={<FaUsers />} />
      <SidebarItem text="Privacidad y Seguridad" icon={<FaLock />} />
    </div>
  </div>
</aside>


          {/* Formulario */}
          <main className="w-full md:w-3/4">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Información Personal</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Nombre" placeholder="Tu nombre" />
                  <Input label="Apellidos" placeholder="Tus apellidos" />
                  <Input label="Título Profesional" placeholder="Ej: Frontend Developer" />
                  <Input label="Correo Electrónico" placeholder="tu@email.com" />
                  <Input label="Ubicación" placeholder="Ciudad, País" />
                  <Input label="Idiomas" placeholder="Español, Inglés, etc." />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Biografía</label>
                  <textarea
                    rows={4}
                    maxLength={300}
                    placeholder="Cuéntanos sobre ti, tu experiencia y tus intereses profesionales..."
                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  />
                  <p className="text-right text-sm text-gray-400 mt-1">Máximo 300 caracteres</p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CreatePerfil;
