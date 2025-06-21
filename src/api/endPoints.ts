export const endpoints = {
  auth: {
    register: '/auth/register',
    login: '/auth/login',
    logout: '/auth/logout',
    user: '/auth/user',
  },
  user: {
    profile: '/user/profile',
    update: '/user/update',
    getById: (id: string) => `/users/${id}`,
    getAll: '/user/all',
  },
}
