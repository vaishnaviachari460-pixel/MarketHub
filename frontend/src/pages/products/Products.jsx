import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Star, Filter, Search, ChevronDown, ShoppingCart, X } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import { productAPI } from '../../services/api';
import ProductCard from '../../components/ProductCard';

export default function Products() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [sortBy, setSortBy] = useState('relevant');

  // Get unique brands from products
  const uniqueBrands = [...new Set(products
    .filter(p => p.brand)
    .map(p => p.brand)
    .sort())];

  // Category structure with subcategories (matching backend data)
  const categories = {
    'Clothing & Fashion': {
      icon: '👕',
      subcategories: ['Men\'s T-Shirts', 'Men\'s Jeans', 'Women\'s Kurtis', 'Women\'s Sarees', 'Women\'s Dresses', 'Running Shoes', 'Casual Shoes', 'Formal Shoes', 'Sandals']
    },
    'Electronics': {
      icon: '💻',
      subcategories: ['iPhone', 'Samsung', 'Google Pixel', 'OnePlus', 'Xiaomi', 'Laptop', 'Tablet', 'Headphones', 'Speakers', 'Chargers']
    },
    'Sports & Outdoors': {
      icon: '⚽',
      subcategories: ['Ball Sports', 'Yoga & Fitness', 'Weights', 'Fitness Equipment', 'Running Shoes', 'Camping', 'Footwear']
    },
    'Home & Garden': {
      icon: '🏠',
      subcategories: ['Bedding', 'Cookware', 'Sofa', 'Dining Table', 'Bed', 'Chair', 'Wall Clock', 'Plant Pots', 'Wall Art', 'Lamp', 'Lighting', 'Curtains', 'Storage']
    },
    'Books': {
      icon: '📚',
      subcategories: ['Fiction', 'Non-Fiction', 'Self-Help', 'Mystery', 'Romance']
    },
    'Beauty & Personal Care': {
      icon: '💄',
      subcategories: ['Skincare', 'Haircare', 'Makeup', 'Fragrances', 'Body Care', 'Lip Care', 'Hair Care']
    },
    'Kitchen': {
      icon: '🍳',
      subcategories: ['Appliances', 'Cookware', 'Utensils', 'Bakeware', 'Storage']
    },
    'Accessories': {
      icon: '⌚',
      subcategories: ['Wallets', 'Eyewear', 'Watches', 'Bags']
    },
    'Grocery & Gourmet Food': {
      icon: '🛒',
      subcategories: ['Beverages', 'Nuts & Seeds', 'Snacks', 'Breakfast Foods', 'Coffee']
    },
    'Pet Supplies': {
      icon: '🐾',
      subcategories: ['Aquarium Supplies', 'Cat Litter', 'Dog Toys', 'Dog Treats', 'Cat Food']
    },
    'Automotive': {
      icon: '🚗',
      subcategories: ['Tools & Equipment', 'Replacement Parts', 'Car Care']
    }
  };

  // Fetch all products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await productAPI.getActive();
        setProducts(res.data || []);
      } catch (err) {
        console.error('Error fetching products:', err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter and sort products
  useEffect(() => {
    let result = [...products];

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchLower) ||
        product.description?.toLowerCase().includes(searchLower) ||
        product.category?.toLowerCase().includes(searchLower) ||
        product.subcategory?.toLowerCase().includes(searchLower)
      );
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Filter by subcategory
    if (selectedSubcategory) {
      result = result.filter(product => product.subcategory === selectedSubcategory);
    }

    // Filter by brand
    if (selectedBrand) {
      result = result.filter(product => product.brand === selectedBrand);
    }

    // Filter by price range
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
        break;
      default:
        break;
    }

    setFiltered(result);
  }, [products, searchTerm, selectedCategory, selectedSubcategory, selectedBrand, priceRange, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedSubcategory('');
    setSelectedBrand('');
    setPriceRange([0, 500000]);
    setSortBy('relevant');
  };

  const getPageTitle = () => {
    if (searchTerm) return `Search Results: "${searchTerm}"`;
    if (selectedSubcategory) return selectedSubcategory;
    if (selectedCategory) return selectedCategory;
    return 'All Products';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Search */}
      <div className="bg-white border-b border-gray-200 py-4 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-center mb-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded transition"
            >
              <Filter className="w-5 h-5" />
            </button>

            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products, brands, categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">
              {getPageTitle()}
            </h1>
            <p className="text-sm text-gray-600">{filtered.length} products</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Sidebar - Desktop */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
              {/* Categories */}
              <div className="mb-6">
                <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5" /> Categories
                </h2>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setSelectedCategory('');
                      setSelectedSubcategory('');
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md transition ${
                      !selectedCategory ? 'bg-blue-100 text-blue-800 font-semibold' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    All Categories
                  </button>
                  {Object.entries(categories).map(([catName, catData]) => (
                    <div key={catName}>
                      <button
                        onClick={() => {
                          setSelectedCategory(catName);
                          setSelectedSubcategory('');
                        }}
                        className={`w-full text-left px-3 py-2 rounded-md transition font-medium flex items-center gap-2 ${
                          selectedCategory === catName
                            ? 'bg-blue-100 text-blue-800'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span>{catData.icon}</span>
                        {catName}
                      </button>
                      {/* Subcategories - Show when category is selected */}
                      {selectedCategory === catName && (
                        <div className="ml-2 mt-1 space-y-1">
                          {catData.subcategories.map(subcat => (
                            <button
                              key={subcat}
                              onClick={() => setSelectedSubcategory(subcat)}
                              className={`w-full text-left px-3 py-2 rounded-md text-sm transition ${
                                selectedSubcategory === subcat
                                  ? 'bg-blue-500 text-white font-medium'
                                  : 'text-gray-600 hover:bg-gray-100'
                              }`}
                            >
                              → {subcat}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="border-t pt-6">
                <h3 className="font-bold text-lg mb-4">Brands</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedBrand('')}
                    className={`w-full text-left px-3 py-2 rounded-md transition ${
                      !selectedBrand ? 'bg-blue-100 text-blue-800 font-semibold' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    All Brands
                  </button>
                  {uniqueBrands.map(brand => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand)}
                      className={`w-full text-left px-3 py-2 rounded-md transition ${
                        selectedBrand === brand
                          ? 'bg-blue-500 text-white font-semibold'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="border-t pt-6">
                <h3 className="font-bold text-lg mb-4">Price Range (₹)</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Min: ₹{priceRange[0].toLocaleString()}</label>
                    <input
                      type="range"
                      min="0"
                      max="500000"
                      step="200"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Max: ₹{priceRange[1].toLocaleString()}</label>
                    <input
                      type="range"
                      min="0"
                      max="500000"
                      step="200"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              {(searchTerm || selectedCategory || selectedSubcategory || selectedBrand || priceRange[0] !== 0 || priceRange[1] !== 500000) && (
                <button
                  onClick={clearFilters}
                  className="w-full mt-6 px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition font-medium"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4">
            {/* Mobile Sidebar */}
            {showMobileFilters && (
              <div className="lg:hidden mb-6 fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
                <div className="bg-white rounded-t-2xl mt-auto max-h-96">
                  <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-lg font-bold">Filters</h2>
                    <button onClick={() => setShowMobileFilters(false)}>
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="p-4 space-y-4">
                    <div>
                      <h3 className="font-bold mb-2">Categories</h3>
                      <div className="space-y-1">
                        {Object.keys(categories).map(cat => (
                          <button
                            key={cat}
                            onClick={() => {
                              setSelectedCategory(cat);
                              setShowMobileFilters(false);
                            }}
                            className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded"
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        clearFilters();
                        setShowMobileFilters(false);
                      }}
                      className="w-full px-4 py-2 bg-red-100 text-red-700 rounded"
                    >
                      Clear Filters
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Sort Bar */}
            <div className="mb-6 flex justify-between items-center bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600">
                {filtered.length > 0 
                  ? `Showing ${filtered.length} result${filtered.length !== 1 ? 's' : ''}`
                  : 'No results found'
                }
              </p>
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="relevant">Most Relevant</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>

            {/* Active Filters Display */}
            {(searchTerm || selectedCategory || selectedSubcategory || selectedBrand || priceRange[0] !== 0 || priceRange[1] !== 500000) && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div className="flex flex-wrap gap-2">
                    {searchTerm && (
                      <span className="badge bg-blue-100 text-blue-800 text-sm py-1 px-3 rounded-full flex items-center gap-1">
                        🔍 {searchTerm}
                        <button onClick={() => setSearchTerm('')} className="ml-1 hover:text-red-600">✕</button>
                      </span>
                    )}
                    {selectedCategory && (
                      <span className="badge bg-blue-100 text-blue-800 text-sm py-1 px-3 rounded-full flex items-center gap-1">
                        📁 {selectedCategory}
                        <button onClick={() => setSelectedCategory('')} className="ml-1 hover:text-red-600">✕</button>
                      </span>
                    )}
                    {selectedSubcategory && (
                      <span className="badge bg-blue-100 text-blue-800 text-sm py-1 px-3 rounded-full flex items-center gap-1">
                        🏷️ {selectedSubcategory}
                        <button onClick={() => setSelectedSubcategory('')} className="ml-1 hover:text-red-600">✕</button>
                      </span>
                    )}
                    {selectedBrand && (
                      <span className="badge bg-blue-100 text-blue-800 text-sm py-1 px-3 rounded-full flex items-center gap-1">
                        🏢 {selectedBrand}
                        <button onClick={() => setSelectedBrand('')} className="ml-1 hover:text-red-600">✕</button>
                      </span>
                    )}
                    {(priceRange[0] !== 0 || priceRange[1] !== 500000) && (
                      <span className="badge bg-blue-100 text-blue-800 text-sm py-1 px-3 rounded-full flex items-center gap-1">
                        💰 ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                        <button onClick={() => setPriceRange([0, 500000])} className="ml-1 hover:text-red-600">✕</button>
                      </span>
                    )}
                  </div>
                  <button
                    onClick={clearFilters}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            )}

            {/* Products Grid */}
            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 animate-pulse shadow-sm">
                    <div className="bg-gray-200 aspect-square rounded-lg mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            ) : filtered.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
