import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [deliveryDate, setDeliveryDate] = useState('')

  const addItem = useCallback((product, quantity) => {
    setItems(prev => {
      const existing = prev.find(item => item.product.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { product, quantity }]
    })
  }, [])

  const removeItem = useCallback((productId) => {
    setItems(prev => prev.filter(item => item.product.id !== productId))
  }, [])

  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(item => item.product.id !== productId))
    } else {
      setItems(prev =>
        prev.map(item =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      )
    }
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
    setDeliveryDate('')
  }, [])

  const total = items.reduce((sum, item) => sum + item.product.wholesalePrice * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{
      items, deliveryDate, setDeliveryDate,
      addItem, removeItem, updateQuantity, clearCart,
      total, itemCount
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
