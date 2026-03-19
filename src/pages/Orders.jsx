import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'
import { api } from '../services/api'

function LoginForm() {
  const { t } = useLanguage()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showRegister, setShowRegister] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    const result = await login(email, password)
    if (!result.success) setError(result.error)
  }

  if (showRegister) return <RegisterForm onBack={() => setShowRegister(false)} />

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-dark/30">
        <h2 className="font-serif text-2xl font-bold text-brown-dark mb-6">{t('orders.loginTitle')}</h2>
        {error && <div className="mb-4 bg-red-50 text-red-600 px-4 py-2 rounded-xl text-sm">{error}</div>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-brown-dark mb-1.5">{t('contact.email')}</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 border border-cream-dark/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta bg-warm-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-brown-dark mb-1.5">{t('orders.password')}</label>
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 border border-cream-dark/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta bg-warm-white" />
          </div>
          <button type="submit" className="w-full bg-terracotta hover:bg-terracotta-dark text-cream py-3 rounded-xl font-medium transition-colors cursor-pointer border-none">
            {t('nav.login')}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button onClick={() => setShowRegister(true)} className="text-terracotta hover:text-terracotta-dark text-sm font-medium cursor-pointer bg-transparent border-none">
            {t('nav.register')}
          </button>
        </div>
        <div className="mt-4 p-3 bg-cream/50 rounded-xl text-xs text-warm-gray">
          <strong>Demo admin:</strong> admin@forndepabo.cat / admin123
        </div>
      </div>
    </div>
  )
}

function RegisterForm({ onBack }) {
  const { t } = useLanguage()
  const { register } = useAuth()
  const [form, setForm] = useState({
    businessName: '', businessType: 'restaurant', cif: '',
    contactPerson: '', email: '', phone: '', deliveryAddress: '', password: '', confirmPassword: ''
  })
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (form.password !== form.confirmPassword) {
      setError('Les contrasenyes no coincideixen')
      return
    }
    const result = await register(form)
    if (!result.success) setError(result.error)
  }

  const update = (field, value) => setForm({ ...form, [field]: value })

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-dark/30">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={onBack} className="text-brown hover:text-terracotta cursor-pointer bg-transparent border-none">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="font-serif text-2xl font-bold text-brown-dark">{t('orders.registerTitle')}</h2>
        </div>
        {error && <div className="mb-4 bg-red-50 text-red-600 px-4 py-2 rounded-xl text-sm">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-brown-dark mb-1.5">{t('orders.businessName')}</label>
              <input type="text" required value={form.businessName} onChange={e => update('businessName', e.target.value)}
                className="w-full px-4 py-2.5 border border-cream-dark/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta/30 bg-warm-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brown-dark mb-1.5">{t('orders.businessType')}</label>
              <select value={form.businessType} onChange={e => update('businessType', e.target.value)}
                className="w-full px-4 py-2.5 border border-cream-dark/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta/30 bg-warm-white">
                <option value="restaurant">{t('orders.restaurant')}</option>
                <option value="bar">{t('orders.bar')}</option>
                <option value="hotel">{t('orders.hotel')}</option>
                <option value="other">{t('orders.other')}</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-brown-dark mb-1.5">{t('orders.cif')}</label>
              <input type="text" required value={form.cif} onChange={e => update('cif', e.target.value)}
                className="w-full px-4 py-2.5 border border-cream-dark/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta/30 bg-warm-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brown-dark mb-1.5">{t('orders.contactPerson')}</label>
              <input type="text" required value={form.contactPerson} onChange={e => update('contactPerson', e.target.value)}
                className="w-full px-4 py-2.5 border border-cream-dark/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta/30 bg-warm-white" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-brown-dark mb-1.5">{t('contact.email')}</label>
            <input type="email" required value={form.email} onChange={e => update('email', e.target.value)}
              className="w-full px-4 py-2.5 border border-cream-dark/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta/30 bg-warm-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-brown-dark mb-1.5">{t('contact.phone')}</label>
            <input type="tel" required value={form.phone} onChange={e => update('phone', e.target.value)}
              className="w-full px-4 py-2.5 border border-cream-dark/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta/30 bg-warm-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-brown-dark mb-1.5">{t('orders.deliveryAddress')}</label>
            <input type="text" required value={form.deliveryAddress} onChange={e => update('deliveryAddress', e.target.value)}
              className="w-full px-4 py-2.5 border border-cream-dark/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta/30 bg-warm-white" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-brown-dark mb-1.5">{t('orders.password')}</label>
              <input type="password" required value={form.password} onChange={e => update('password', e.target.value)}
                className="w-full px-4 py-2.5 border border-cream-dark/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta/30 bg-warm-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brown-dark mb-1.5">{t('orders.confirmPassword')}</label>
              <input type="password" required value={form.confirmPassword} onChange={e => update('confirmPassword', e.target.value)}
                className="w-full px-4 py-2.5 border border-cream-dark/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta/30 bg-warm-white" />
            </div>
          </div>
          <button type="submit" className="w-full bg-terracotta hover:bg-terracotta-dark text-cream py-3 rounded-xl font-medium transition-colors cursor-pointer border-none">
            {t('nav.register')}
          </button>
        </form>
      </div>
    </div>
  )
}

function WholesaleCatalog() {
  const { t, lang } = useLanguage()
  const { addItem } = useCart()
  const [quantities, setQuantities] = useState({})

  const getQty = (id) => quantities[id] || 1

  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-brown-dark mb-6">{t('orders.catalog')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-xl p-4 border border-cream-dark/30 shadow-sm">
            <h3 className="font-serif font-semibold text-brown-dark mb-1">
              {lang === 'ca' ? product.ca : product.es}
            </h3>
            <p className="text-sm text-warm-gray mb-2">{lang === 'ca' ? product.descCa : product.descEs}</p>
            <div className="flex items-center justify-between">
              <span className="text-terracotta font-bold">{product.wholesalePrice.toFixed(2)} €</span>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  value={getQty(product.id)}
                  onChange={e => setQuantities({ ...quantities, [product.id]: parseInt(e.target.value) || 1 })}
                  className="w-16 px-2 py-1 border border-cream-dark/50 rounded-lg text-center text-sm bg-warm-white"
                />
                <button
                  onClick={() => addItem(product, getQty(product.id))}
                  className="bg-terracotta hover:bg-terracotta-dark text-cream px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer border-none"
                >
                  {t('orders.addToCart')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Cart() {
  const { t } = useLanguage()
  const { user } = useAuth()
  const { items, deliveryDate, setDeliveryDate, updateQuantity, removeItem, clearCart, total } = useCart()
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handlePlaceOrder = async () => {
    if (!deliveryDate || items.length === 0) return
    await api.createOrder({
      userId: user.id,
      businessName: user.businessName,
      items: items.map(i => ({
        productId: i.product.id,
        name: i.product.ca,
        quantity: i.quantity,
        unitPrice: i.product.wholesalePrice,
        subtotal: i.product.wholesalePrice * i.quantity,
      })),
      deliveryDate,
      total,
    })
    clearCart()
    setOrderPlaced(true)
    setTimeout(() => setOrderPlaced(false), 4000)
  }

  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-brown-dark mb-6">{t('orders.cart')}</h2>
      {orderPlaced && (
        <div className="mb-4 bg-green-50 text-green-700 px-4 py-3 rounded-xl text-sm font-medium">
          {t('orders.orderPlaced')}
        </div>
      )}
      {items.length === 0 ? (
        <p className="text-warm-gray py-8 text-center">{t('orders.emptyCart')}</p>
      ) : (
        <div className="bg-white rounded-xl border border-cream-dark/30 overflow-hidden">
          <div className="divide-y divide-cream-dark/20">
            {items.map(item => (
              <div key={item.product.id} className="p-4 flex items-center justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-medium text-brown-dark">{item.product.ca}</h4>
                  <p className="text-sm text-warm-gray">{item.product.wholesalePrice.toFixed(2)} € / unitat</p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={e => updateQuantity(item.product.id, parseInt(e.target.value) || 0)}
                    className="w-16 px-2 py-1 border border-cream-dark/50 rounded-lg text-center text-sm bg-warm-white"
                  />
                  <span className="text-sm font-medium text-brown-dark w-20 text-right">
                    {(item.product.wholesalePrice * item.quantity).toFixed(2)} €
                  </span>
                  <button onClick={() => removeItem(item.product.id)} className="text-red-400 hover:text-red-600 cursor-pointer bg-transparent border-none">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-cream/30 border-t border-cream-dark/20">
            <div className="flex items-center justify-between mb-4">
              <span className="font-serif font-bold text-lg text-brown-dark">{t('orders.total')}</span>
              <span className="font-bold text-xl text-terracotta">{total.toFixed(2)} €</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <label className="block text-xs font-medium text-brown-dark mb-1">{t('orders.deliveryDate')}</label>
                <input
                  type="date"
                  value={deliveryDate}
                  onChange={e => setDeliveryDate(e.target.value)}
                  min={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
                  className="w-full px-3 py-2 border border-cream-dark/50 rounded-lg bg-warm-white text-sm"
                />
              </div>
              <button
                onClick={handlePlaceOrder}
                disabled={!deliveryDate}
                className="bg-terracotta hover:bg-terracotta-dark disabled:opacity-50 disabled:cursor-not-allowed text-cream px-6 py-2 rounded-lg font-medium transition-colors cursor-pointer border-none self-end"
              >
                {t('orders.placeOrder')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function OrderHistory() {
  const { t } = useLanguage()
  const { user } = useAuth()
  const { addItem } = useCart()
  const [orders, setOrders] = useState([])
  const [loaded, setLoaded] = useState(false)

  if (!loaded) {
    api.getOrdersByUser(user.id).then(o => { setOrders(o.reverse()); setLoaded(true) })
    return <p className="text-warm-gray">Carregant...</p>
  }

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-700',
    confirmed: 'bg-blue-100 text-blue-700',
    preparing: 'bg-orange-100 text-orange-700',
    ready: 'bg-green-100 text-green-700',
    delivered: 'bg-gray-100 text-gray-600',
  }

  const handleRepeat = (order) => {
    order.items.forEach(item => {
      const product = products.find(p => p.id === item.productId)
      if (product) addItem(product, item.quantity)
    })
  }

  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-brown-dark mb-6">{t('orders.myOrders')}</h2>
      {orders.length === 0 ? (
        <p className="text-warm-gray py-8 text-center">{t('orders.noOrders')}</p>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-xl p-5 border border-cream-dark/30 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-xs text-warm-gray">#{order.id.slice(-6)}</span>
                  <p className="font-medium text-brown-dark">{new Date(order.createdAt).toLocaleDateString('ca')}</p>
                  <p className="text-sm text-warm-gray">Entrega: {order.deliveryDate}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                    {t(`orders.status.${order.status}`)}
                  </span>
                  <button
                    onClick={() => handleRepeat(order)}
                    className="text-terracotta hover:text-terracotta-dark text-xs font-medium cursor-pointer bg-transparent border-none"
                  >
                    {t('orders.repeatOrder')}
                  </button>
                </div>
              </div>
              <div className="divide-y divide-cream-dark/20 text-sm">
                {order.items.map((item, i) => (
                  <div key={i} className="py-1.5 flex justify-between">
                    <span className="text-brown">{item.name} x{item.quantity}</span>
                    <span className="text-brown-dark font-medium">{item.subtotal.toFixed(2)} €</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-cream-dark/20 flex justify-between">
                <span className="font-serif font-bold text-brown-dark">{t('orders.total')}</span>
                <span className="font-bold text-terracotta">{order.total.toFixed(2)} €</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Orders() {
  const { t } = useLanguage()
  const { user, isAdmin } = useAuth()
  const { itemCount } = useCart()
  const [tab, setTab] = useState('catalog')

  if (!user) {
    return (
      <div>
        <section className="bg-gradient-to-br from-cream to-cream-dark/50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brown-dark mb-4">{t('orders.title')}</h1>
            <p className="text-lg text-warm-gray">{t('orders.subtitle')}</p>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <LoginForm />
        </section>
      </div>
    )
  }

  if (isAdmin) {
    window.location.href = '#/admin'
  }

  const tabs = [
    { id: 'catalog', label: t('orders.catalog') },
    { id: 'cart', label: `${t('orders.cart')}${itemCount > 0 ? ` (${itemCount})` : ''}` },
    { id: 'history', label: t('orders.myOrders') },
  ]

  return (
    <div>
      <section className="bg-gradient-to-br from-cream to-cream-dark/50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brown-dark mb-2">{t('orders.title')}</h1>
          <p className="text-warm-gray">{user.businessName}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {tabs.map(tb => (
            <button
              key={tb.id}
              onClick={() => setTab(tb.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all cursor-pointer border-none ${
                tab === tb.id ? 'bg-terracotta text-cream' : 'bg-white text-brown hover:bg-cream'
              }`}
            >
              {tb.label}
            </button>
          ))}
        </div>

        {tab === 'catalog' && <WholesaleCatalog />}
        {tab === 'cart' && <Cart />}
        {tab === 'history' && <OrderHistory />}
      </section>
    </div>
  )
}
