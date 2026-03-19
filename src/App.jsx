import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Orders from './pages/Orders'
import Admin from './pages/Admin'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter basename="/forndepabo">
      <LanguageProvider>
        <AuthProvider>
          <CartProvider>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/nosaltres" element={<About />} />
                  <Route path="/productes" element={<Products />} />
                  <Route path="/contacte" element={<Contact />} />
                  <Route path="/comandes" element={<Orders />} />
                  <Route path="/admin" element={<Admin />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </CartProvider>
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}
