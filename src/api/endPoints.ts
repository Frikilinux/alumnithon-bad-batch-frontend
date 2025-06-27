export const endpoints = {
  auth: {
    register: '/auth/register',
    login: '/auth/login',
    logout: '/auth/logout',
    user: '/auth',
  },
  profile: {
    getMe: '/profiles/me',
    update: '/profile/me',
    getById: (id: string) => `/profile/${id}`,
    getAll: '/profiles/search',
    create: '/profiles',
  },
}
