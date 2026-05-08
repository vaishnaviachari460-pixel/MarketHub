import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function CategorySidebar({ selectedCategory, selectedSubcategory, onCategorySelect, onSubcategorySelect }) {
  const [expandedCategory, setExpandedCategory] = useState(selectedCategory || null);

  const categories = {
    'Electronics': [
      'iPhone',
      'Samsung',
      'Google Pixel',
      'OnePlus',
      'Xiaomi',
      'Laptop',
      'Tablet',
      'Chargers',
      'Earbuds',
      'Bluetooth',
      'Headphones',
      'Speakers'
    ],
    'Fashion': [
      'Men\'s T-Shirts',
      'Men\'s Jeans',
      'Men\'s Shirts',
      'Men\'s Kurta',
      'Women\'s Dress',
      'Kurti',
      'Saree',
      'Salwar Kameez',
      'Lehenga',
      'Running Shoes',
      'Casual Shoes',
      'Formal Shoes',
      'Sandals'
    ],
    'Home & Garden': [
      'Sofa',
      'Dining Table',
      'Bed',
      'Chair',
      'Wall Clock',
      'Plant Pots',
      'Wall Art',
      'Lamp',
      'Bedroom',
      'Kitchen',
      'Living Room'
    ],
    'Sports': [
      'Ball Sports',
      'Yoga & Fitness',
      'Weights',
      'Fitness Equipment',
      'Running Gear',
      'Outdoor Sports'
    ],
    'Beauty': [
      'Skincare',
      'Fragrance',
      'Makeup',
      'Hair Care',
      'Personal Care'
    ],
    'Books': [
      'Fiction',
      'Self-Help',
      'Non-Fiction',
      'Mystery',
      'Romance'
    ],
    'Kitchen': [
      'Appliances',
      'Cookware',
      'Utensils',
      'Bakeware',
      'Storage'
    ]
    
  };

  const toggleCategory = (category) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
      onCategorySelect(category);
    }
  };

  const handleSubcategoryClick = (subcategory, category) => {
    onSubcategorySelect(subcategory);
    onCategorySelect(category);
  };

  return (
    <div className="w-full md:w-64 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-lg font-bold text-gray-800">Categories</h2>
      </div>

      <div className="divide-y divide-gray-200">
        {Object.keys(categories).map((category) => (
          <div key={category} className="border-b border-gray-100">
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(category)}
              className={`w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition ${
                selectedCategory === category ? 'bg-blue-50 border-l-4 border-blue-500' : ''
              }`}
            >
              <span className={`font-semibold text-sm ${
                selectedCategory === category ? 'text-blue-600' : 'text-gray-700'
              }`}>
                {category}
              </span>
              {expandedCategory === category ? (
                <ChevronDown size={18} className="text-gray-500" />
              ) : (
                <ChevronRight size={18} className="text-gray-500" />
              )}
            </button>

            {/* Subcategories */}
            {expandedCategory === category && (
              <div className="bg-gray-50 pl-4">
                {categories[category].map((subcategory) => (
                  <button
                    key={subcategory}
                    onClick={() => handleSubcategoryClick(subcategory, category)}
                    className={`w-full text-left px-4 py-2 text-sm transition flex items-center ${
                      selectedSubcategory === subcategory
                        ? 'text-blue-600 font-semibold bg-blue-100'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <span className="inline-block mr-2">→</span>
                    {subcategory}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Clear Filters Button */}
      {(selectedCategory || selectedSubcategory) && (
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <button
            onClick={() => {
              onCategorySelect('');
              onSubcategorySelect('');
              setExpandedCategory(null);
            }}
            className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition font-medium text-sm"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
