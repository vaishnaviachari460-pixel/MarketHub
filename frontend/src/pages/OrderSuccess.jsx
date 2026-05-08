import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function OrderSuccess() {
  
  const location = useLocation();
  const navigate = useNavigate();
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        🎉 Order Placed Successfully!
      </h1>
      <button
  onClick={() => navigate("/track-order", {
  state: {
    products: location.state?.products
  }
})}
  className="bg-orange-500 text-white px-6 py-3 rounded-lg mt-4 hover:bg-orange-600 transition"
>
  Track Your Order 🚚
</button>

      <p className="text-gray-700 mb-6">
        Thank you for shopping with us.
      </p>

      <button
        onClick={() => navigate('/')}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Continue Shopping
      </button>
    </div>
  );
}