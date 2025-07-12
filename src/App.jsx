// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import Us from './pages/Us';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Addresses from './pages/Addresses';
import Orders from './pages/Orders';
import Payments from './pages/Payments';
import WhatsAppButton from './components/WhatsAppButton';
import Guides from './pages/Guides';
import GuideDetail from './pages/GuideDetail';
import { CartProvider } from './context/CartContext';
import UserLayout from './components/UserLayout';
import './styles/navbar.css';
import './index.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="container-fluid px-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/us" element={<Us />} />
            <Route path="/login" element={<Login />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/guides/:slug" element={<GuideDetail />} />

            {/* Rutas protegidas con Layout de Usuario */}
            <Route path="/profile" element={<UserLayout><Profile /></UserLayout>} />
            <Route path="/addresses" element={<UserLayout><Addresses /></UserLayout>} />
            <Route path="/orders" element={<UserLayout><Orders /></UserLayout>} />
            <Route path="/payments" element={<UserLayout><Payments /></UserLayout>} />
          </Routes>
        </div>
        <WhatsAppButton />
      </Router>
    </CartProvider>
  );
}

export default App;
