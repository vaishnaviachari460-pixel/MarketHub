import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus, Minus, X, ArrowRight, Truck, Shield, CreditCard, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-16 h-16 text-gray-400" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Your cart is empty</h2>
          <p className="text-gray-600 mb-8 text-lg">Looks like you haven't added any products yet. Start shopping to fill your cart!</p>
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Continue Shopping <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  const total = getTotal();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>
          <span className="text-gray-600">{cart.length} {cart.length === 1 ? 'item' : 'items'}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div key={`${item.id}-${item.selectedSize || 'nosize'}-${index}`} className="bg-white rounded-2xl shadow-sm p-6 flex gap-6 hover:shadow-md transition-shadow">
                
                <div className="w-28 h-28 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {item.imageUrl ? (
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-4xl">📦</span>
                  )}
                </div>

                <div className="flex-1">
                  <Link to={`/products/${item.id}`} className="font-bold text-lg hover:text-orange-600 transition-colors">
                    {item.name}
                  </Link>

                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.description}</p>

                  {/* Size */}
                  {item.selectedSize && (
                    <div className="mt-2">
                      <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md">
                        Size: <span className="font-semibold">{item.selectedSize}</span>
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-4">
                    <p className="font-bold text-xl text-gray-900">
                      ₹{item.price}
                    </p>
                    
                    <button
                      onClick={() => removeFromCart(item.id, item.selectedSize)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="px-4 py-2 font-medium min-w-[3rem] text-center">{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <p className="font-bold text-lg text-gray-900">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Order Summary</h2>

              {/* Benefits */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <Truck className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">Free Delivery on orders above ₹500</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">Secure Payment</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <CreditCard className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">Multiple Payment Options</span>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-b border-gray-200 py-4 mb-6 space-y-3">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal ({cart.length} items)</span>
                  <span className="font-medium">₹{total.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">
                    {total >= 500 ? 'Free' : '₹40'}
                  </span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Tax (GST 8%)</span>
                  <span className="font-medium">₹{(total * 0.08).toFixed(2)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="mb-6">
                <div className="flex justify-between text-2xl font-bold">
                  <span className="text-gray-900">Total</span>
                  <span className="text-orange-600">
                    ₹{(total + (total >= 500 ? 0 : 40) + total * 0.08).toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Including all taxes</p>
              </div>

              {/* Action Buttons */}
              <Link 
                to="/checkout" 
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 mb-3"
              >
                Proceed to Checkout <ArrowRight className="w-5 h-5" />
              </Link>

              <Link 
                to="/products" 
                className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 mb-3"
              >
                Continue Shopping
              </Link>

              <button
                onClick={clearCart}
                className="w-full text-red-600 hover:text-red-700 font-medium py-2 flex items-center justify-center gap-2 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Clear Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}