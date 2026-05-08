import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus, Minus, X, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some products to get started!</p>
          <Link to="/products" className="btn-primary inline-block">
            Continue Shopping <ArrowRight className="inline ml-2" size={20} />
          </Link>
        </div>
      </div>
    );
  }

  const total = getTotal();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-12">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div key={`${item.id}-${item.selectedSize || 'nosize'}-${index}`} className="card p-6 flex gap-6">
                
                <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">📦</span>
                </div>

                <div className="flex-1">
                  <Link to={`/products/${item.id}`} className="font-bold text-lg hover:text-amber-600">
                    {item.name}
                  </Link>

                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>

                  {/* ✅ SHOW SIZE */}
                  {item.selectedSize && (
                    <p className="text-sm text-gray-700 mt-1">
                      Size: <span className="font-semibold">{item.selectedSize}</span>
                    </p>
                  )}

                  <p className="font-bold text-amber-600 text-lg mt-2">
                    ₹{item.price}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-4">
                  
                  {/* ✅ FIX: PASS selectedSize */}
                  <button
                    onClick={() => removeFromCart(item.id, item.selectedSize)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <X size={24} />
                  </button>

                  <div className="flex items-center border-2 border-gray-300 rounded-lg">
                    
                    {/* ✅ FIX: PASS selectedSize */}
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="px-4 py-2">{item.quantity}</span>

                    {/* ✅ FIX: PASS selectedSize */}
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <p className="font-bold text-lg">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="card-premium p-8 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="text-green-600 font-semibold">Free</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span>₹{(total * 0.08).toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t-2 pt-4 mb-6">
                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span className="text-amber-600">
                    ₹{(total + total * 0.08).toFixed(2)}
                  </span>
                </div>
              </div>

              <Link to="/checkout" className="w-full btn-primary py-3 font-bold mb-3 block text-center">
                Proceed to Checkout
              </Link>

              <Link to="/products" className="w-full btn-outline block text-center py-3">
                Continue Shopping
              </Link>

              <button
                onClick={clearCart}
                className="w-full text-red-600 hover:text-red-700 font-semibold mt-4 py-2"
              >
                Clear Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}