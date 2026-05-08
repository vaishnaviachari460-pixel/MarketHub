import React from 'react';
import { Link } from 'react-router-dom';

export default function SellerLogin() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Seller Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-4 rounded"
        />

        <button className="w-full bg-orange-500 text-white py-3 rounded">
          Login
        </button>

        <p className="text-sm text-center mt-4">
          Don't have an account?{' '}
          <Link to="/register/vendor" className="text-orange-500">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}