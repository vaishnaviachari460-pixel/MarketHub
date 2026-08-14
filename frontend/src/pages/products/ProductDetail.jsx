import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, ArrowLeft, Heart, Plus, Minus, Check, Truck, Shield, RefreshCw } from 'lucide-react';
import { productAPI } from '@/services/api';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

export default function ProductDetail() {

  // ✅ GLOBAL SIZE SYSTEM
  const SIZE_CONFIG = {
    shoes: ["6 UK", "7 UK", "8 UK", "9 UK", "10 UK"],
    clothing: ["XS", "S", "M", "L", "XL", "XXL"],
    numeric: ["28", "30", "32", "34", "36", "38"],
    free: ["Free Size"]
  };

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [addedToCart, setAddedToCart] = useState(false);

  const { addToCart } = useCart();
  const { addToWishlist, isWishlisted } = useWishlist();

  // ✅ AUTO SIZE LOGIC (MAIN FIX)
  const availableSizes =
    product?.sizes && product.sizes.length > 0
      ? product.sizes
      : SIZE_CONFIG[product?.sizeType] || [];

  const getProductImages = () => {
    if (!product) return [];
    if (product.imageUrls?.length > 0) return product.imageUrls;
    if (product.imageUrl) return [product.imageUrl];
    return [];
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await productAPI.getById(id);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // ✅ ENHANCED ADD TO CART
  const handleAddToCart = () => {
    if (availableSizes.length > 0 && !selectedSize) {
      return;
    }

    addToCart({
      ...product,
      selectedSize,
      quantity,
    });

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-16 h-16 border-4 border-gray-300 border-t-blue-600 rounded-full" />
      </div>
    );
  }

  if (!product) {
    return <div className="text-center mt-20">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Back */}
      <div className="bg-white border-b p-4">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-blue-600">
          <ArrowLeft /> Back
        </button>
      </div>

      <div className="max-w-7xl mx-auto p-6 grid lg:grid-cols-3 gap-10">

        {/* LEFT: Images */}
        <div>
          <div
            className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setShowImageModal(true)}
          >
            <img
              src={getProductImages()[selectedImageIndex]}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="flex gap-2 mt-3">
            {getProductImages().map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setSelectedImageIndex(i)}
                className={`w-16 h-16 object-cover border cursor-pointer ${
                  selectedImageIndex === i ? 'border-blue-500' : ''
                }`}
              />
            ))}
          </div>
        </div>

        {/* CENTER: Info */}
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>

          <p className="text-gray-600 mt-2">{product.description}</p>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-2 mt-2">
              <Star className="text-yellow-400" />
              {product.rating}
            </div>
          )}

          {/* ✅ NEW SIZE UI (WORKS FOR ALL TYPES) */}
          {availableSizes.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold mb-2 text-lg">
                Size: <span className="font-bold">{selectedSize || "Select"}</span>
              </h3>

              <div className="flex gap-3 flex-wrap">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg font-medium transition ${
                      selectedSize === size
                        ? 'border-blue-600 bg-blue-100 text-blue-700'
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {!selectedSize && (
                <p className="text-red-500 text-sm mt-2">
                  Please select a size
                </p>
              )}
            </div>
          )}

          {/* Quantity */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Quantity</h3>
            <div className="flex items-center gap-2">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
          </div>

                  </div>

        {/* RIGHT: Enhanced Buy Box */}
        <div className="border p-6 rounded-2xl shadow-lg bg-white sticky top-6">
          {/* Price */}
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl font-bold text-gray-900">
              ₹{product.price}
            </h2>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          {/* Stock Status */}
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <p className="text-green-600 font-medium">In Stock</p>
            <p className="text-sm text-gray-500">({product.stock || 10} items available)</p>
          </div>

          {/* Benefits */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Truck className="w-4 h-4 text-blue-600" />
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <RefreshCw className="w-4 h-4 text-blue-600" />
              <span>7-Day Return</span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="p-2 hover:bg-gray-100 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 py-2 font-medium min-w-[3rem] text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="p-2 hover:bg-gray-100 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={addedToCart}
            className={`w-full mt-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 ${
              addedToCart
                ? 'bg-green-500 text-white'
                : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg'
            }`}
          >
            {addedToCart ? (
              <div className="flex items-center justify-center gap-2">
                <Check className="w-5 h-5" />
                Added to Cart!
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </div>
            )}
          </button>

          {/* Buy Now Button */}
          <button
            onClick={handleBuyNow}
            className="w-full mt-3 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
          >
            Buy Now
          </button>

          {/* Wishlist Button */}
          <button
            onClick={() => addToWishlist(product)}
            className="w-full mt-3 py-3 rounded-xl border border-gray-300 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <Heart className={`w-4 h-4 ${isWishlisted(product.id) ? "text-red-500 fill-red-500" : ""}`} />
            {isWishlisted(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>

      {/* IMAGE MODAL */}
      {showImageModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
          onClick={() => setShowImageModal(false)}
        >
          <img
            src={getProductImages()[selectedImageIndex]}
            className="max-h-[80vh]"
          />
        </div>
      )}
    </div>
  );
}