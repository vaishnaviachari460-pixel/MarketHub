import React, { useState, useEffect } from 'react';
import { Brain, Lightbulb, TrendingUp, Users, Star, ArrowRight } from 'lucide-react';

// Mock recommendation algorithm
class ProductRecommendationEngine {
  constructor() {
    this.userBehavior = {
      viewedProducts: [],
      purchasedProducts: [],
      wishlistItems: [],
      searchHistory: [],
      categories: {}
    };
  }

  // Track user interactions
  trackProductView(productId, category) {
    this.userBehavior.viewedProducts.push(productId);
    this.userBehavior.categories[category] = (this.userBehavior.categories[category] || 0) + 1;
  }

  trackPurchase(productId, category) {
    this.userBehavior.purchasedProducts.push(productId);
    this.userBehavior.categories[category] = (this.userBehavior.categories[category] || 0) + 2;
  }

  trackWishlist(productId, category) {
    this.userBehavior.wishlistItems.push(productId);
    this.userBehavior.categories[category] = (this.userBehavior.categories[category] || 0) + 1.5;
  }

  // Generate recommendations based on collaborative filtering
  generateRecommendations(allProducts) {
    const recommendations = {
      trending: [],
      personalized: [],
      similar: [],
      categoryBased: []
    };

    // Trending products (high rating + high orders)
    recommendations.trending = allProducts
      .filter(p => p.rating >= 4.5 && p.reviewCount >= 10)
      .sort((a, b) => (b.rating * b.reviewCount) - (a.rating * a.reviewCount))
      .slice(0, 5);

    // Category-based recommendations
    const topCategories = Object.entries(this.userBehavior.categories)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([category]) => category);

    recommendations.categoryBased = allProducts
      .filter(p => topCategories.includes(p.category))
      .filter(p => !this.userBehavior.viewedProducts.includes(p.id))
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4);

    // Similar products (based on viewed products)
    if (this.userBehavior.viewedProducts.length > 0) {
      const lastViewedCategory = allProducts.find(p => 
        p.id === this.userBehavior.viewedProducts[this.userBehavior.viewedProducts.length - 1]
      )?.category;

      if (lastViewedCategory) {
        recommendations.similar = allProducts
          .filter(p => p.category === lastViewedCategory)
          .filter(p => !this.userBehavior.viewedProducts.includes(p.id))
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 3);
      }
    }

    // Personalized recommendations (combination of factors)
    recommendations.personalized = allProducts
      .filter(p => !this.userBehavior.viewedProducts.includes(p.id))
      .map(product => {
        let score = 0;
        
        // Category preference score
        if (this.userBehavior.categories[product.category]) {
          score += this.userBehavior.categories[product.category] * 0.3;
        }
        
        // Rating score
        score += product.rating * 0.2;
        
        // Review count score
        score += Math.min(product.reviewCount / 10, 5) * 0.1;
        
        // Price preference (medium price range)
        const avgPrice = 100; // Mock average price
        const priceDiff = Math.abs(product.price - avgPrice);
        score += Math.max(0, 5 - priceDiff / 20) * 0.2;
        
        // Random factor for diversity
        score += Math.random() * 0.2;
        
        return { ...product, recommendationScore: score };
      })
      .sort((a, b) => b.recommendationScore - a.recommendationScore)
      .slice(0, 6);

    return recommendations;
  }
}

export default function RecommendationEngine({ products, onProductClick }) {
  const [recommendations, setRecommendations] = useState({
    trending: [],
    personalized: [],
    similar: [],
    categoryBased: []
  });
  const [engine] = useState(() => new ProductRecommendationEngine());
  const [activeTab, setActiveTab] = useState('personalized');

  useEffect(() => {
    // Simulate user behavior tracking
    if (products.length > 0) {
      // Mock some user behavior for demonstration
      const randomProducts = products.sort(() => Math.random() - 0.5).slice(0, 3);
      randomProducts.forEach(product => {
        engine.trackProductView(product.id, product.category);
      });

      const randomPurchased = products.sort(() => Math.random() - 0.5).slice(0, 1);
      randomPurchased.forEach(product => {
        engine.trackPurchase(product.id, product.category);
      });

      const randomWishlist = products.sort(() => Math.random() - 0.5).slice(0, 2);
      randomWishlist.forEach(product => {
        engine.trackWishlist(product.id, product.category);
      });

      // Generate recommendations
      const recs = engine.generateRecommendations(products);
      setRecommendations(recs);
    }
  }, [products, engine]);

  const tabs = [
    { id: 'personalized', label: 'For You', icon: Brain, description: 'AI-powered recommendations' },
    { id: 'trending', label: 'Trending', icon: TrendingUp, description: 'Popular right now' },
    { id: 'categoryBased', label: 'Similar Categories', icon: Lightbulb, description: 'Based on your interests' },
    { id: 'similar', label: 'You Might Like', icon: Users, description: 'Similar to viewed items' }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const ProductCard = ({ product, showScore = false }) => (
    <div 
      onClick={() => onProductClick && onProductClick(product)}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-shadow cursor-pointer group"
    >
      <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg mb-3 overflow-hidden">
        <img 
          src={product.imageUrl || `https://picsum.photos/seed/${product.id}/200/200.jpg`} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 line-clamp-2">
        {product.name}
      </h3>
      <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 line-clamp-1">
        {product.description}
      </p>
      <div className="flex items-center justify-between">
        <p className="font-bold text-blue-600 dark:text-blue-400">{formatPrice(product.price)}</p>
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 text-yellow-500 fill-current" />
          <span className="text-xs text-gray-600 dark:text-gray-400">{product.rating}</span>
        </div>
      </div>
      {showScore && product.recommendationScore && (
        <div className="mt-2 text-xs text-green-600 dark:text-green-400">
          Match: {(product.recommendationScore * 20).toFixed(0)}%
        </div>
      )}
    </div>
  );

  if (!products.length) {
    return (
      <div className="text-center py-8">
        <Brain className="w-12 h-12 text-gray-400 mx-auto mb-2" />
        <p className="text-gray-500 dark:text-gray-400">Loading recommendations...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          AI Recommendations
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Discover products tailored just for you
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span className="text-sm font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Description */}
      <div className="text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {tabs.find(t => t.id === activeTab)?.description}
        </p>
      </div>

      {/* Recommendations Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recommendations[activeTab]?.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            showScore={activeTab === 'personalized'}
          />
        ))}
      </div>

      {/* No Recommendations */}
      {recommendations[activeTab]?.length === 0 && (
        <div className="text-center py-8">
          <Lightbulb className="w-12 h-12 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-500 dark:text-gray-400">
            No recommendations available yet. Start browsing to get personalized suggestions!
          </p>
        </div>
      )}

      {/* View More Button */}
      {recommendations[activeTab]?.length > 0 && (
        <div className="text-center">
          <button className="flex items-center gap-2 mx-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <span>View More</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
