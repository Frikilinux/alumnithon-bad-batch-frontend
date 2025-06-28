# ⚛️ SkillLink Frontend 

<div align="center">

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![WebSocket](https://img.shields.io/badge/WebSocket-Real--time-4B8BBE?style=for-the-badge&logo=websocket&logoColor=white)

[![Deploy Status](https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://skilllink-frontend.netlify.app)
[![API Backend](https://img.shields.io/badge/API%20REST-SkillLink%20Backend-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)](https://alumnithon-bad-batch-backend.onrender.com)

</div>

---

## 📖 Descripción del Proyecto

**SkillLink Frontend** es una aplicación web desarrollada con **React** y **TypeScript** que complementa la plataforma SkillLink, conectando a desarrolladores mediante mentorías y desafíos colaborativos. Ofrece una interfaz amigable, moderna y completamente integrada con el backend en Spring Boot.

---

## ✨ Características Destacadas

### 🔐 Autenticación
- Registro, inicio de sesión y logout con JWT
- Control de sesión con expiración y rutas protegidas

### 👤 Gestión de Perfiles
- Creación y edición de perfil técnico
- Tecnologías, intereses y experiencia profesional
- Control de visibilidad público/privado

### 🎓 Mentorías y Desafíos
- Listado con filtros avanzados
- Participación en sesiones y challenges
- Sistema de cupos y estado de participación

### 💬 Chat en Tiempo Real
- Chats directos entre usuarios
- Chats grupales para desafíos y mentorías
- WebSocket integrado con reconexión automática

### 🔍 Búsqueda y Filtros
- Filtro por tipo de contenido, tecnologías, nivel de dificultad
- Búsqueda por nombre, rol o descripción

### 📊 Dashboard Personal
- Actividad reciente del usuario
- Sesiones activas y desafíos en curso

---

## 🛠️ Tecnologías Utilizadas

| Categoría | Herramienta | Versión | Propósito |
|----------|-------------|---------|-----------|
| Framework | React | 18.x | UI SPA |
| Lenguaje | TypeScript | 5.x | Tipado estático |
| Build Tool | Vite | 5.x | Bundling y desarrollo |
| Estilos | TailwindCSS | 3.x | Utilidades CSS |
| Estado | Zustand / Context API | - | Manejo de estado global |
| Formularios | React Hook Form + Zod | - | Validaciones |
| API | Axios | - | Peticiones HTTP |
| WebSocket | STOMP.js + SockJS | - | Comunicación en tiempo real |

---

## 📁 Estructura del Proyecto

```
📁 src/
├── api/               # Servicios HTTP
├── auth/              # Autenticación y sesión
├── components/        # Componentes reutilizables
├── features/          # Funcionalidades: chat, perfiles, etc.
├── hooks/             # Hooks personalizados
├── pages/             # Vistas principales
├── routes/            # Ruteo público y privado
├── types/             # Tipos y enums globales
├── utils/             # Utilidades varias
└── App.tsx            # Aplicación principal
```

---

## ⚙️ Instalación y Configuración

### 🔧 Prerrequisitos

- Node.js 18+
- npm o pnpm
- Vite (opcional)

### 🚀 Instalación

```bash
git clone https://github.com/R-Mutt22/skilllink-frontend.git
cd skilllink-frontend
npm install
```

### 🔐 Variables de Entorno

Crear un archivo `.env` en la raíz:

```env
VITE_API_URL=https://alumnithon-bad-batch-backend.onrender.com
VITE_WEBSOCKET_URL=wss://alumnithon-bad-batch-backend.onrender.com/ws
```

### 🧪 Ejecutar en modo desarrollo

```bash
npm run dev
```

Abrir en navegador: [http://localhost:5173](http://localhost:5173)

---

## 🔐 Manejo de Sesión (JWT)

- Token guardado en `Cookies`
- Axios intercepta y adjunta el token en cada request
- Rutas protegidas con `PrivateRoute`
- Logout automático al expirar el token

---

## 🌐 Comunicación con el Backend

```ts
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

API.get('/api/profiles/me').then(response => {
  console.log(response.data);
});
```

---

## 💬 WebSocket y Chat

- Conexión usando `STOMP.js`
- Soporte para mensajes directos
- Hook personalizado: `useChatSocket()`

---


## 📦 Build y Despliegue

### 🛠️ Build local

```bash
npm run build
```

### ☁️ Deploy en Netlify

1. Conectar el repositorio a Netlify
2. Variables de entorno:
   - `VITE_API_URL`
   - `VITE_WEBSOCKET_URL`
3. Build command: `npm run build`
4. Publish directory: `dist`

---

## 👨‍💻 Equipo de Desarrollo

| Desarrollador |
|---------------
| **Leodan** | 
| **Zotta** | 
| **Monik** |

---

## 📄 Licencia

```
MIT License

Copyright (c) 2025
SkillLink Frontend - Bad Batch Team
```

---

<div align="center">

### 🚀 Hecho con ❤️ para la comunidad de desarrolladores

[![Made for Alumnithon](https://img.shields.io/badge/Made%20for-Alumnithon%202025-FF6B6B?style=for-the-badge&logo=graduation-cap&logoColor=white)](https://www.alura.com.br/)

</div>
