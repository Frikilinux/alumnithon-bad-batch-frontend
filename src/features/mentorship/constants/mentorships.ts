export const dificulty = {
  intermedio: {
    color: 'bg-orange-400',
  },
  principiante: {
    color: 'bg-green-400',
  },
  avanzado: {
    color: 'bg-red-400',
  },
}

// export const mentorships: Mentorship[] = [
//   {
//     id: '1',
//     username: 'Erica García',
//     avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
//     expertise: 'Web Development',
//     title: 'Introducción a React Hooks',
//     category: 'frontend',
//     description:
//       'Aprende a utilizar los hooks más importantes de React y cómo implementarlos en tus proyectos.',
//     date: '2023-06-15',
//     time: '18:00 - 19:30 (GMT+2)',
//     participants: 5,
//     maxParticipants: 20,
//     tags: ['React', 'Hooks', 'Frontend'],
//     location: 'Online',
//     availability: 'Weekdays',
//     contact: 'ddd@gmail.com',
//   },
//   {
//     id: '2',
//     username: 'Maria Smith',
//     avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
//     expertise: 'Data Science',
//     title: 'Machine Learning Básico',
//     category: 'dataScience',
//     description:
//       'Descubre los fundamentos del Machine Learning y cómo aplicarlos en proyectos reales.',
//     date: '2023-07-10',
//     time: '17:00 - 18:30 (GMT+2)',
//     participants: 8,
//     maxParticipants: 25,
//     tags: ['Machine Learning', 'Python', 'Data Science'],
//     location: 'Online',
//     availability: 'Weekends',
//     contact: 'maria.smith@example.com',
//   },
//   {
//     id: '3',
//     username: 'Carlos Ruiz',
//     avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
//     expertise: 'Mobile Development',
//     title: 'Flutter para Principiantes',
//     category: 'mobile',
//     description:
//       'Aprende a crear aplicaciones móviles multiplataforma usando Flutter y Dart.',
//     date: '2023-08-05',
//     time: '19:00 - 20:30 (GMT+2)',
//     participants: 27,
//     maxParticipants: 30,
//     tags: ['Flutter', 'Mobile', 'Dart'],
//     location: 'Online',
//     availability: 'Evenings',
//     contact: 'carlos.ruiz@example.com',
//   },
//   {
//     id: '4',
//     username: 'Lucía Fernández',
//     avatarUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
//     expertise: 'UI/UX Design',
//     title: 'Diseño de Interfaces Modernas',
//     category: 'frontend',
//     description:
//       'Explora los principios clave del diseño de interfaces y mejora la experiencia de usuario.',
//     date: '2023-09-12',
//     time: '16:00 - 17:30 (GMT+2)',
//     participants: 10,
//     maxParticipants: 20,
//     tags: ['UI', 'UX', 'Design'],
//     location: 'Online',
//     availability: 'Weekdays',
//     contact: 'lucia.fernandez@example.com',
//   },
//   {
//     id: '5',
//     username: 'Pedro Gómez',
//     avatarUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
//     expertise: 'Backend Development',
//     title: 'APIs REST con Node.js',
//     category: 'backend',
//     description:
//       'Aprende a construir APIs RESTful eficientes y seguras usando Node.js y Express.',
//     date: '2023-10-20',
//     time: '15:00 - 16:30 (GMT+2)',
//     participants: 7,
//     maxParticipants: 15,
//     tags: ['Node.js', 'API', 'Backend'],
//     location: 'Online',
//     availability: 'Weekends',
//     contact: 'pedro.gomez@example.com',
//   },
//   {
//     id: '6',
//     username: 'Ana Torres',
//     avatarUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
//     expertise: 'Cloud Computing',
//     title: 'Introducción a AWS',
//     category: 'devOps',
//     description:
//       'Conoce los servicios principales de AWS y cómo desplegar tu primera aplicación en la nube.',
//     date: '2023-11-05',
//     time: '18:00 - 19:00 (GMT+2)',
//     participants: 12,
//     maxParticipants: 25,
//     tags: ['AWS', 'Cloud', 'DevOps'],
//     location: 'Online',
//     availability: 'Weekdays',
//     contact: 'ana.torres@example.com',
//   },
//   {
//     id: '7',
//     username: 'Javier López',
//     avatarUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
//     expertise: 'Cybersecurity',
//     title: 'Fundamentos de Ciberseguridad',
//     category: 'backend',
//     description:
//       'Aprende los conceptos básicos de ciberseguridad y cómo proteger tus aplicaciones.',
//     date: '2023-12-01',
//     time: '20:00 - 21:30 (GMT+2)',
//     participants: 9,
//     maxParticipants: 20,
//     tags: ['Cybersecurity', 'Security', 'Networking'],
//     location: 'Online',
//     availability: 'Evenings',
//     contact: 'javier.lopez@example.com',
//   },
//   {
//     id: '8',
//     username: 'Sofía Martínez',
//     avatarUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
//     expertise: 'Project Management',
//     title: 'Scrum y Metodologías Ágiles',
//     category: 'backend',
//     description:
//       'Descubre cómo implementar Scrum y otras metodologías ágiles en tus proyectos de software.',
//     date: '2024-01-15',
//     time: '17:00 - 18:30 (GMT+2)',
//     participants: 14,
//     maxParticipants: 30,
//     tags: ['Scrum', 'Agile', 'Project Management'],
//     location: 'Online',
//     availability: 'Weekdays',
//     contact: 'sofia.martinez@example.com',
//   },
//   {
//     id: '9',
//     username: 'Miguel Ángel',
//     avatarUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
//     expertise: 'Artificial Intelligence',
//     title: 'Introducción a la IA Generativa',
//     category: 'dataScience',
//     description:
//       'Aprende los conceptos básicos de la inteligencia artificial generativa y sus aplicaciones.',
//     date: '2024-02-10',
//     time: '16:00 - 17:30 (GMT+2)',
//     participants: 11,
//     maxParticipants: 20,
//     tags: ['AI', 'Generative', 'Machine Learning'],
//     location: 'Online',
//     availability: 'Weekends',
//     contact: 'miguel.angel@example.com',
//   },
//   {
//     id: '10',
//     username: 'Elena Castro',
//     avatarUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
//     expertise: 'DevOps',
//     title: 'CI/CD con GitHub Actions',
//     category: 'devOps',
//     description:
//       'Automatiza tus despliegues y pruebas usando GitHub Actions en tus proyectos.',
//     date: '2024-03-05',
//     time: '19:00 - 20:00 (GMT+2)',
//     participants: 6,
//     maxParticipants: 15,
//     tags: ['DevOps', 'CI/CD', 'GitHub'],
//     location: 'Online',
//     availability: 'Evenings',
//     contact: 'elena.castro@example.com',
//   },
// ]

// export interface Mentorship {
//   id: string
//   username: string
//   avatarUrl: string
//   expertise: string
//   title: string
//   description: string
//   category: keyof typeof category
//   date: string // Podrías usar Date si parseás el string
//   time: string
//   participants: number
//   maxParticipants: number
//   tags: string[]
//   location: string
//   availability: string
//   contact: string
// }
