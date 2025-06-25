export const endpoints = {
  auth: {
    register: '/auth/register',
    login: '/auth/login',
    logout: '/auth/logout',
    user: '/auth/user',
  },
  profile: {
    getMe: '/profile/me',
    update: '/profile/update',
    getById: (id: string) => `/profile/${id}`,
    getAll: '/profile/all',
  },
}
