import { createContext, useContext, useState, useCallback } from 'react'
import { authService } from '../services/auth'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => authService.getCurrentUser())

  const login = useCallback(async (email, password) => {
    const result = await authService.login(email, password)
    if (result.success) {
      setUser(result.user)
    }
    return result
  }, [])

  const register = useCallback(async (userData) => {
    const result = await authService.register(userData)
    if (result.success) {
      setUser(result.user)
    }
    return result
  }, [])

  const logout = useCallback(() => {
    authService.logout()
    setUser(null)
  }, [])

  const isAdmin = user?.role === 'admin'
  const isClient = user?.role === 'client'

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAdmin, isClient }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
