import { api } from './api'

const ADMIN_USER = {
  id: 'admin',
  email: 'admin@forndepabo.cat',
  businessName: 'Forn de Pa Bo',
  role: 'admin',
}

const ADMIN_PASSWORD = 'admin123'

export const authService = {
  async login(email, password) {
    // Check admin
    if (email === ADMIN_USER.email && password === ADMIN_PASSWORD) {
      localStorage.setItem('forn-current-user', JSON.stringify(ADMIN_USER))
      return { success: true, user: ADMIN_USER }
    }

    // Check registered users
    const users = await api.getUsers()
    const user = users.find(u => u.email === email && u.password === password)
    if (user) {
      const { password: _, ...safeUser } = user
      localStorage.setItem('forn-current-user', JSON.stringify(safeUser))
      return { success: true, user: safeUser }
    }

    return { success: false, error: 'Credencials incorrectes' }
  },

  async register(userData) {
    const users = await api.getUsers()
    if (users.find(u => u.email === userData.email)) {
      return { success: false, error: 'Aquest email ja està registrat' }
    }

    const newUser = await api.createUser({
      ...userData,
      role: 'client',
    })
    const { password: _, ...safeUser } = newUser
    localStorage.setItem('forn-current-user', JSON.stringify(safeUser))
    return { success: true, user: safeUser }
  },

  logout() {
    localStorage.removeItem('forn-current-user')
  },

  getCurrentUser() {
    try {
      const data = localStorage.getItem('forn-current-user')
      return data ? JSON.parse(data) : null
    } catch {
      return null
    }
  },
}
