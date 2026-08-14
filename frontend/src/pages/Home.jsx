import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import {
  Search,
  Zap,
  Truck,
  Shield,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import RecommendationEngine from '@/components/recommendations/RecommendationEngine';

// Categories
const categories = [
  { id: 1, name: 'Electronics', icon: '📱', color: 'bg-blue-100' },
  { id: 2, name: 'Fashion', icon: '👗', color: 'bg-pink-100' },
  { id: 3, name: 'Home & Garden', icon: '🏠', color: 'bg-green-100' },
  { id: 4, name: 'Sports', icon: '⚽', color: 'bg-yellow-100' },
  { id: 5, name: 'Books', icon: '📚', color: 'bg-purple-100' },
  { id: 6, name: 'Toys & Games', icon: '🎮', color: 'bg-red-100' },
  { id: 7, name: 'Beauty', icon: '💄', color: 'bg-orange-100' },
  { id: 8, name: 'Automotive', icon: '🚗', color: 'bg-gray-100' },
];

// Products
const featuredProducts = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 99.99,
    originalPrice: 149.99,
    rating: 4.5,
    reviewCount: 234,
    category: 'Electronics',
    description: 'High-quality wireless headphones with noise cancellation',
    image: '🎧',
  },
  {
    id: 2,
    name: 'Ultra-Slim Laptop Stand',
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.8,
    reviewCount: 156,
    category: 'Electronics',
    description: 'Ergonomic laptop stand for better posture',
    image: '💻',
  },
  {
    id: 3,
    name: 'Portable Phone Charger',
    price: 34.99,
    originalPrice: 59.99,
    rating: 4.7,
    reviewCount: 89,
    category: 'Electronics',
    description: 'Fast charging portable battery pack',
    image: '🔋',
  },
  {
    id: 4,
    name: 'Smart Watch Series 5',
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.6,
    reviewCount: 178,
    category: 'Electronics',
    description: 'Advanced fitness tracking and health monitoring',
    image: '⌚',
  },
];

// Banner Deals
const bannerDeals = [
  { title: 'Up to 70% Off', subtitle: 'Electronics', color: 'from-orange-400 to-orange-600' },
  { title: 'Winter Sale', subtitle: 'Fashion', color: 'from-orange-400 to-orange-600' },
  { title: 'New Arrivals', subtitle: 'Home', color: 'from-green-400 to-green-600' },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleCategoryClick = (categoryName) => {
    navigate(`/products?category=${encodeURIComponent(categoryName)}`);
  };

  const handleProductClick = (product) => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="bg-gray-100 space-y-6">

      {/* 🔥 HERO */}
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-pink-400 to-pink-600 text-white py-16 px-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Greate winter sale
            </h1>
            <p className="text-lg mb-4">Deals Revealed</p>

            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/products"
                className="bg-yellow-400 text-black px-6 py-2 rounded font-semibold"
              >
                Shop Now
              </Link>
            </motion.div>
          </div>

          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-7xl opacity-30 hidden md:block"
          >
            🛍️
          </motion.div>
        </div>
      </motion.section>

      {/* 🔍 SEARCH */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="px-4"
      >
        <div className="max-w-5xl mx-auto -mt-10">
          <form onSubmit={handleSearch}>
            <div className="flex bg-white rounded-full shadow-lg overflow-hidden border">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 px-6 py-4 outline-none"
              />
              <button className="bg-orange-500 px-6 text-white">
                <Search size={20} />
              </button>
            </div>
          </form>
        </div>
      </motion.section>

      {/* 🎯 TRUST */}
      <section className="bg-white py-6 shadow-sm">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center gap-4">
          {[Truck, Shield, Zap].map((Icon, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.1 }}
              className="flex justify-center items-center gap-2"
            >
              <Icon className="text-orange-500" />
              {["Free Delivery", "Secure Payment", "Fast Checkout"][i]}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🧱 DEALS */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4">
          {bannerDeals.map((deal, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-r ${deal.color} text-white p-6 rounded-lg shadow`}
            >
              <h3 className="text-2xl font-bold">{deal.title}</h3>
              <p>{deal.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🧭 CATEGORIES */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="text-orange-500" />
            Shop by Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <motion.div
                key={cat.id}
                whileHover={{ scale: 1.1 }}
                onClick={() => handleCategoryClick(cat.name)}
                className={`${cat.color} p-4 rounded-lg text-center cursor-pointer`}
              >
                <div className="text-3xl">{cat.icon}</div>
                <p className="font-semibold mt-2">{cat.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🛒 PRODUCTS */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto bg-white p-6 rounded shadow">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link to="/products" className="text-orange-500 flex items-center">
              View All <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {featuredProducts.map((p) => (
              <motion.div key={p.id} whileHover={{ scale: 1.05 }}>
                <Link
                  to={`/products/${p.id}`}
                  className="border rounded-lg p-4 block"
                >
                  <div className="text-5xl text-center mb-3">{p.image}</div>

                  <h3 className="font-semibold text-sm mb-2">{p.name}</h3>

                  <div className="text-yellow-500 text-sm">
                    ★ {p.rating}
                  </div>

                  <div className="mt-2">
                    <span className="font-bold text-orange-600">
                      ${p.price}
                    </span>
                    <span className="line-through text-gray-400 ml-2 text-sm">
                      {p.originalPrice}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🤖 AI RECOMMENDATIONS */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="px-4 py-8"
      >
        <div className="max-w-7xl mx-auto">
          <RecommendationEngine 
            products={featuredProducts} 
            onProductClick={handleProductClick}
          />
        </div>
      </motion.section>

      {/* 🚀 CTA */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-orange-500 text-white text-center py-10"
      >
        <h2 className="text-2xl font-bold mb-2">Start Selling Today</h2>

        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            to="/seller"
            className="bg-white text-orange-600 px-6 py-2 rounded font-semibold"
          >
            Become a Seller
          </Link>
        </motion.div>
      </motion.section>

    </div>
  );
}