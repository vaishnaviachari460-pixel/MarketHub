import React, { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  const [selectedImage, setSelectedImage] = useState(() => {
    if (product.imageUrls && product.imageUrls.length > 0) {
      return product.imageUrls[0];
    } else {
      return product.imageUrl || '';
    }
  });

  const [liked, setLiked] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);

  return (
    <>
      {/* Entire Card Clickable */}
      <Link to={`/products/${product.id}`} className="block">
        <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow group border border-gray-100 relative">

          {/* Image */}
          <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform relative">
            {selectedImage ? (
              <img src={selectedImage} alt={product.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-6xl">📦</span>
            )}

            {/* ❤️ Wishlist */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setLiked(!liked);
              }}
              className="absolute top-2 left-2 bg-white p-2 rounded-full shadow"
            >
              {liked ? '❤️' : '🤍'}
            </button>

            {/* Stock Labels */}
            {product.stock <= 5 && product.stock > 0 && (
              <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                Only {product.stock} left
              </div>
            )}

            {product.stock === 0 && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="bg-gray-800 text-white px-4 py-2 rounded font-bold">Out of Stock</span>
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {product.imageUrls && product.imageUrls.length > 1 && (
            <div className="flex gap-1 p-2 bg-gray-50 justify-center">
              {product.imageUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`${product.name} ${index + 1}`}
                  className={`w-10 h-10 object-cover rounded cursor-pointer border-2 ${
                    selectedImage === url ? 'border-blue-500' : 'border-gray-300'
                  } hover:border-blue-400 transition`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedImage(url);
                  }}
                />
              ))}
            </div>
          )}

          {/* Info */}
          <div className="p-4">
            <div className="mb-2 flex gap-2 flex-wrap">
              {product.category && (
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  {product.category}
                </span>
              )}
              {product.subcategory && (
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {product.subcategory}
                </span>
              )}
            </div>

            <h3 className="font-bold text-sm mb-2 line-clamp-2 group-hover:text-blue-600">
              {product.name}
            </h3>

            <p className="text-gray-600 text-xs mb-3 line-clamp-2">
              {product.description}
            </p>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-xs text-gray-600">
                  ({product.rating})
                </span>
              </div>
            )}

            {/* Price */}
            <div className="flex justify-between mb-3">
              <span className="font-bold text-lg">
                ₹{product.price?.toLocaleString()}
              </span>
            </div>

            {/* Quick View Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowQuickView(true);
              }}
              className="w-full mb-2 bg-black text-white py-2 rounded-md"
            >
              Quick View
            </button>

            {/* Buttons */}
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToCart(product);
                }}
                disabled={product.stock === 0}
                className="flex-1 bg-blue-600 text-white py-2 rounded-md"
              >
                Add to Cart
              </button>

              <Link
                to={`/products/${product.id}`}
                onClick={(e) => e.stopPropagation()}
                className="flex-1 bg-gray-200 text-center py-2 rounded-md"
              >
                View
              </Link>
            </div>
          </div>
        </div>
      </Link>

      {/* Quick View Modal */}
      {showQuickView && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowQuickView(false)}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="mb-2">{product.description}</p>
            <p className="font-bold mb-4">₹{product.price}</p>

            <Link
              to={`/products/${product.id}`}
              className="block bg-blue-600 text-white text-center py-2 rounded"
              onClick={() => setShowQuickView(false)}
            >
              Full Details
            </Link>

            <button
              onClick={() => setShowQuickView(false)}
              className="mt-2 w-full bg-gray-200 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;