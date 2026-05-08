import '@/styles/globals.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';
import Wishlist from '@/pages/Wishlist';    
import OrderSuccess from './pages/OrderSuccess';
import Seller from './pages/Seller';
import SellerInfo from './pages/SellerInfo';  
import SellerLogin from './pages/SellerLogin';  
import SellerFeeDetails from "@/pages/SellerFeeDetails";
import PaymentSuccess from "@/pages/PaymentSuccess";
import OrderTracking from "@/pages/OrderTracking";

// Layout
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Pages
import Home from '@/pages/Home';
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import VendorRegister from '@/pages/auth/VendorRegister';
import Products from '@/pages/products/Products';
import ProductDetail from '@/pages/products/ProductDetail';
import Cart from '@/pages/cart/Cart';
import Profile from '@/pages/Profile';
import VendorDashboard from '@/pages/vendor/Dashboard';
import { WishlistProvider } from '@/context/WishlistContext';
  

// ✅ ADD THIS IMPORT
import Checkout from '@/pages/checkout/Checkout';

function App() {
  return (

    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
              <Navbar />
              <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="/register/vendor" element={<VendorRegister />} /> */}
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/order-success" element={<OrderSuccess />} />
                <Route path="/track-order" element={<OrderTracking />} />



                {/* <Route path="/seller" element={<Seller />} /> */}
                <Route path="/seller" element={<SellerInfo />} />
                <Route path="/seller/login" element={<SellerLogin />} />
                <Route path="/seller/register" element={<VendorRegister />} />
                <Route path="/seller/fee-details" element={<SellerFeeDetails />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />

                {/* ✅ ADDED ROUTE */}
                <Route path="/checkout" element={<Checkout />} />

                <Route path="/profile" element={<Profile />} />
                <Route path="/vendor/dashboard" element={<VendorDashboard />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
    
  );
}


export default App;