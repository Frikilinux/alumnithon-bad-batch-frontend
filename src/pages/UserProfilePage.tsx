/* src/pages/UserProfilePage.tsx */
import React from "react";
import {
  FaEdit,
  FaUserCircle,
  FaCode,
  FaGraduationCap,
  FaHeartbeat,
  FaBullseye,
} from "react-icons/fa";

/* Re‐utilidades  -------------------------------------------------- */
type SectionProps = {
  title: string;
  icon: React.ReactElement;
  children: React.ReactNode;
};

const SectionCard: React.FC<SectionProps> = ({ title, icon, children }) => (
  <article className="mb-6 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
    <header className="mb-4 flex items-center gap-2 text-gray-700">
      <span className="text-lg text-blue-600">{icon}</span>
      <h2 className="text-lg font-semibold">{title}</h2>
    </header>
    {children}
  </article>
);

const Pill: React.FC<{ label: string; color: string }> = ({ label, color }) => (
  <span
    className={`mr-2 mb-2 inline-block rounded-md px-3 py-1 text-xs font-medium
                ${color} bg-opacity-10`}
  >
    {label}
  </span>
);

/* Página  --------------------------------------------------------- */
const UserProfilePage: React.FC = () => {
  /* Data de ejemplo – cámbiala a tu conveniencia */
  const profile = {
    name: "Juan Pérez",
    role: "Desarrollador Full Stack",
    levelLabel: "Intermedio",
    bio: "Desarrollador Full Stack con experiencia en tecnologías web modernas. Me apasiona crear soluciones eficientes y escalables. Actualmente enfocado en mejorar mis habilidades de backend.",
    tech: ["React", "Node.js"],
    interests: ["Frontend", "Mentorías"],
    objective: "Mejorar backend",
    experiencePercent: 60,
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=256&q=80",
  };

  return (
    <div className="mx-auto max-w-xl px-4 py-10">
      {/* Encabezado -------------------------------------------------- */}
<section className="flex flex-col items-center gap-3 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 p-8 text-white shadow-lg">

        <img
          src={profile.avatar}
          alt="Avatar"
          className="mx-auto mb-4 h-24 w-24 rounded-full border-4 border-white object-cover"
        />

        <h1 className="text-2xl font-extrabold">{profile.name}</h1>
        <p className="mb-4 text-sm font-medium opacity-90">{profile.role}</p>

        {/* Nivel ---------------------------------------------------- */}
        <span className="mx-auto mb-4 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
          Nivel: {profile.levelLabel}
        </span>

        {/* Botón editar -------------------------------------------- */}
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md bg-white/90 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-white"
        >
          <FaEdit />
          Editar Perfil
        </button>
      </section>

      {/* Secciones -------------------------------------------------- */}
      {/* Biografía */}
      <SectionCard title="Biografía" icon={<FaUserCircle />}>
        <p className="text-sm text-gray-700 leading-relaxed">{profile.bio}</p>
      </SectionCard>

      {/* Tecnologías */}
      <SectionCard title="Tecnologías" icon={<FaCode />}>
        {profile.tech.map((t) => (
          <Pill
            key={t}
            label={t}
            color={
              t === "React"
                ? "text-blue-800 bg-blue-200"
                : "text-green-800 bg-green-200"
            }
          />
        ))}
      </SectionCard>

      {/* Nivel de experiencia */}
      <SectionCard title="Nivel de Experiencia" icon={<FaGraduationCap />}>
        <div className="mb-2 text-sm font-medium text-gray-700">
          {profile.levelLabel}
        </div>
        <div className="h-2 w-full rounded-full bg-gray-200">
          <div
            style={{ width: `${profile.experiencePercent}%` }}
            className="h-full rounded-full bg-blue-500 transition-[width]"
          />
        </div>
      </SectionCard>

      {/* Intereses */}
      <SectionCard title="Intereses" icon={<FaHeartbeat />}>
        {profile.interests.map((int) => (
          <Pill
            key={int}
            label={int}
            color={
              int === "Frontend"
                ? "text-purple-800 bg-purple-200"
                : "text-yellow-800 bg-yellow-200"
            }
          />
        ))}
      </SectionCard>

      {/* Objetivo de aprendizaje */}
      <SectionCard title="Objetivo de Aprendizaje" icon={<FaBullseye />}>
        <div className="rounded-md bg-blue-50 px-4 py-3 text-sm text-blue-700">
          {profile.objective}
        </div>
      </SectionCard>
    </div>
  );
};

export default UserProfilePage;
