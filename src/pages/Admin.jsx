import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../context/AuthContext'
import { api } from '../services/api'
import { products } from '../data/products'

function Dashboard({ orders, clients }) {
  const { t } = useLanguage()
  const today = new Date().toISOString().split('T')[0]
  const todayOrders = orders.filter(o => o.createdAt?.startsWith(today))
  const pendingOrders = orders.filter(o => o.status === 'pending')
  const monthTotal = orders
    .filter(o => o.createdAt?.startsWith(new Date().toISOString().slice(0, 7)))
    .reduce((sum, o) => sum + (o.total || 0), 0)

  const stats = [
    { label: t('admin.ordersToday'), value: todayOrders.length, color: 'bg-blue-500', icon: '📦' },
    { label: t('admin.pendingOrders'), value: pendingOrders.length, color: 'bg-yellow-500', icon: '⏳' },
    { label: t('admin.totalClients'), value: clients.length, color: 'bg-green-500', icon: '👥' },
    { label: t('admin.monthlyRevenue'), value: `${monthTotal.toFixed(2)} €`, color: 'bg-terracotta', icon: '💰' },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <div key={i} className="bg-white rounded-xl p-5 border border-cream-dark/30 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl">{s.icon}</span>
            <div className={`w-2 h-2 rounded-full ${s.color}`} />
          </div>
          <div className="text-2xl font-bold text-brown-dark">{s.value}</div>
          <div className="text-sm text-warm-gray">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

function OrderManagement({ orders, refreshOrders }) {
  const { t } = useLanguage()
  const [noteText, setNoteText] = useState({})

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-700',
    confirmed: 'bg-blue-100 text-blue-700',
    preparing: 'bg-orange-100 text-orange-700',
    ready: 'bg-green-100 text-green-700',
    delivered: 'bg-gray-100 text-gray-600',
  }

  const statusFlow = ['pending', 'confirmed', 'preparing', 'ready', 'delivered']

  const changeStatus = async (orderId, newStatus) => {
    await api.updateOrder(orderId, { status: newStatus })
    refreshOrders()
  }

  const addNote = async (orderId) => {
    if (!noteText[orderId]?.trim()) return
    await api.addOrderNote(orderId, noteText[orderId])
    setNoteText({ ...noteText, [orderId]: '' })
    refreshOrders()
  }

  const handleExportPdf = () => {
    const today = new Date().toLocaleDateString('ca')
    const todayOrders = orders.filter(o => o.status !== 'delivered')
    let content = `FORN DE PA BO - Comandes ${today}\n${'='.repeat(50)}\n\n`
    todayOrders.forEach(o => {
      content += `#${o.id.slice(-6)} | ${o.businessName} | ${t(`orders.status.${o.status}`)}\n`
      content += `Entrega: ${o.deliveryDate}\n`
      o.items.forEach(item => {
        content += `  - ${item.name} x${item.quantity} (${item.subtotal.toFixed(2)}€)\n`
      })
      content += `Total: ${o.total.toFixed(2)}€\n\n`
    })
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `comandes-${today.replace(/\//g, '-')}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-xl font-bold text-brown-dark">{t('admin.manageOrders')}</h2>
        <button
          onClick={handleExportPdf}
          className="bg-brown-dark hover:bg-brown text-cream px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer border-none flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {t('admin.exportPdf')}
        </button>
      </div>

      {orders.length === 0 ? (
        <p className="text-warm-gray text-center py-8">No hi ha comandes.</p>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-xl p-5 border border-cream-dark/30 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-warm-gray font-mono">#{order.id.slice(-6)}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                      {t(`orders.status.${order.status}`)}
                    </span>
                  </div>
                  <p className="font-medium text-brown-dark">{order.businessName}</p>
                  <p className="text-sm text-warm-gray">
                    {new Date(order.createdAt).toLocaleDateString('ca')} | Entrega: {order.deliveryDate}
                  </p>
                </div>
                <div className="flex gap-1 flex-wrap">
                  {statusFlow.map(s => (
                    <button
                      key={s}
                      onClick={() => changeStatus(order.id, s)}
                      disabled={order.status === s}
                      className={`px-2 py-1 rounded text-xs font-medium transition-colors cursor-pointer border-none ${
                        order.status === s
                          ? 'bg-terracotta text-cream'
                          : 'bg-cream text-brown hover:bg-cream-dark'
                      }`}
                    >
                      {t(`orders.status.${s}`)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="divide-y divide-cream-dark/20 text-sm mb-3">
                {order.items.map((item, i) => (
                  <div key={i} className="py-1.5 flex justify-between">
                    <span>{item.name} x{item.quantity}</span>
                    <span className="font-medium">{item.subtotal.toFixed(2)} €</span>
                  </div>
                ))}
                <div className="py-2 flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-terracotta">{order.total.toFixed(2)} €</span>
                </div>
              </div>

              {/* Notes */}
              {order.notes?.length > 0 && (
                <div className="mb-3 space-y-1">
                  {order.notes.map((note, i) => (
                    <div key={i} className="bg-cream/50 px-3 py-1.5 rounded-lg text-xs text-brown">
                      <span className="text-warm-gray">{new Date(note.date).toLocaleString('ca')}: </span>
                      {note.text}
                    </div>
                  ))}
                </div>
              )}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder={t('admin.addNote')}
                  value={noteText[order.id] || ''}
                  onChange={e => setNoteText({ ...noteText, [order.id]: e.target.value })}
                  className="flex-1 px-3 py-1.5 border border-cream-dark/50 rounded-lg text-sm bg-warm-white"
                  onKeyDown={e => e.key === 'Enter' && addNote(order.id)}
                />
                <button
                  onClick={() => addNote(order.id)}
                  className="bg-brown hover:bg-brown-dark text-cream px-3 py-1.5 rounded-lg text-sm cursor-pointer border-none"
                >
                  {t('admin.addNote')}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function ClientManagement({ clients }) {
  const { t } = useLanguage()

  const typeLabels = {
    restaurant: t('orders.restaurant'),
    bar: t('orders.bar'),
    hotel: t('orders.hotel'),
    other: t('orders.other'),
  }

  return (
    <div>
      <h2 className="font-serif text-xl font-bold text-brown-dark mb-6">{t('admin.manageClients')}</h2>
      {clients.length === 0 ? (
        <p className="text-warm-gray text-center py-8">No hi ha clients registrats.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map(client => (
            <div key={client.id} className="bg-white rounded-xl p-5 border border-cream-dark/30 shadow-sm">
              <h3 className="font-semibold text-brown-dark mb-1">{client.businessName}</h3>
              <span className="inline-block bg-cream px-2 py-0.5 rounded text-xs text-warm-gray mb-2">
                {typeLabels[client.businessType] || client.businessType}
              </span>
              <div className="space-y-1 text-sm text-brown">
                <p>{client.contactPerson}</p>
                <p>{client.email}</p>
                <p>{client.phone}</p>
                <p className="text-warm-gray text-xs">{client.deliveryAddress}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function CatalogManagement() {
  const { t, lang } = useLanguage()

  return (
    <div>
      <h2 className="font-serif text-xl font-bold text-brown-dark mb-6">{t('admin.manageCatalog')}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-cream-dark/30">
              <th className="text-left py-3 px-3 text-brown-dark font-medium">Producte</th>
              <th className="text-left py-3 px-3 text-brown-dark font-medium">Categoria</th>
              <th className="text-right py-3 px-3 text-brown-dark font-medium">{t('admin.price')} (retail)</th>
              <th className="text-right py-3 px-3 text-brown-dark font-medium">{t('admin.price')} (majorista)</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="border-b border-cream-dark/20 hover:bg-cream/30">
                <td className="py-2.5 px-3">{lang === 'ca' ? product.ca : product.es}</td>
                <td className="py-2.5 px-3">
                  <span className="bg-cream px-2 py-0.5 rounded text-xs">{product.category}</span>
                </td>
                <td className="py-2.5 px-3 text-right">{product.price.toFixed(2)} €</td>
                <td className="py-2.5 px-3 text-right font-medium text-terracotta">{product.wholesalePrice.toFixed(2)} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function Admin() {
  const { t } = useLanguage()
  const { isAdmin } = useAuth()
  const [tab, setTab] = useState('dashboard')
  const [orders, setOrders] = useState([])
  const [clients, setClients] = useState([])

  const loadData = async () => {
    const [o, c] = await Promise.all([api.getOrders(), api.getUsers()])
    setOrders(o.reverse())
    setClients(c.filter(u => u.role === 'client'))
  }

  useEffect(() => { loadData() }, [])

  if (!isAdmin) return <Navigate to="/comandes" replace />

  const tabs = [
    { id: 'dashboard', label: t('admin.dashboard') },
    { id: 'orders', label: t('admin.manageOrders') },
    { id: 'clients', label: t('admin.manageClients') },
    { id: 'catalog', label: t('admin.manageCatalog') },
  ]

  return (
    <div>
      <section className="bg-gradient-to-br from-brown-dark to-brown py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-cream mb-2">{t('admin.title')}</h1>
          <p className="text-cream/60">Forn de Pa Bo</p>
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

        {tab === 'dashboard' && <Dashboard orders={orders} clients={clients} />}
        {tab === 'orders' && <OrderManagement orders={orders} refreshOrders={loadData} />}
        {tab === 'clients' && <ClientManagement clients={clients} />}
        {tab === 'catalog' && <CatalogManagement />}
      </section>
    </div>
  )
}
