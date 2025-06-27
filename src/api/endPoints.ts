export const endpoints = {
  auth: {
    register: '/auth/register',
    login: '/auth/login',
    logout: '/auth/logout',
    user: '/auth',
  },
  profile: {
    getMe: '/profile/me',
    update: '/profile/update',
    getById: (id: string) => `/profile/${id}`,
    getAll: '/profiles/search',
    create: '/profiles',
  },
  mentorship: {
    getAll: '/contents/search?type=MENTORSHIP',
    join: (id: string) => `/contents/${id}/join`,
  },
  challenge: {
    getAll: '/contents/search?type=CHALLENGE',
  },
}
