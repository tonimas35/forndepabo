// Abstract API layer - currently uses localStorage, ready to swap with REST API

const STORAGE_KEYS = {
  USERS: 'forn-users',
  ORDERS: 'forn-orders',
  WHOLESALE_CATALOG: 'forn-wholesale-catalog',
}

function getFromStorage(key) {
  try {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  } catch {
    return null
  }
}

function setToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

// Simulate async API calls
function delay(ms = 200) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const api = {
  // Users
  async getUsers() {
    await delay(100)
    return getFromStorage(STORAGE_KEYS.USERS) || []
  },

  async createUser(user) {
    await delay(100)
    const users = await this.getUsers()
    const newUser = { ...user, id: Date.now().toString(), createdAt: new Date().toISOString() }
    users.push(newUser)
    setToStorage(STORAGE_KEYS.USERS, users)
    return newUser
  },

  async updateUser(id, updates) {
    await delay(100)
    const users = await this.getUsers()
    const index = users.findIndex(u => u.id === id)
    if (index === -1) throw new Error('User not found')
    users[index] = { ...users[index], ...updates }
    setToStorage(STORAGE_KEYS.USERS, users)
    return users[index]
  },

  // Orders
  async getOrders() {
    await delay(100)
    return getFromStorage(STORAGE_KEYS.ORDERS) || []
  },

  async getOrdersByUser(userId) {
    const orders = await this.getOrders()
    return orders.filter(o => o.userId === userId)
  },

  async createOrder(order) {
    await delay(100)
    const orders = await this.getOrders()
    const newOrder = {
      ...order,
      id: Date.now().toString(),
      status: 'pending',
      createdAt: new Date().toISOString(),
      notes: [],
    }
    orders.push(newOrder)
    setToStorage(STORAGE_KEYS.ORDERS, orders)
    return newOrder
  },

  async updateOrder(id, updates) {
    await delay(100)
    const orders = await this.getOrders()
    const index = orders.findIndex(o => o.id === id)
    if (index === -1) throw new Error('Order not found')
    orders[index] = { ...orders[index], ...updates }
    setToStorage(STORAGE_KEYS.ORDERS, orders)
    return orders[index]
  },

  async addOrderNote(orderId, note) {
    const orders = await this.getOrders()
    const index = orders.findIndex(o => o.id === orderId)
    if (index === -1) throw new Error('Order not found')
    orders[index].notes = [...(orders[index].notes || []), { text: note, date: new Date().toISOString() }]
    setToStorage(STORAGE_KEYS.ORDERS, orders)
    return orders[index]
  },
}

export default api
