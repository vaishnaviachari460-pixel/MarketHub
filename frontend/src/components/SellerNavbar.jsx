import React from "react";
import { Link } from "react-router-dom";

export default function SellerNavbar() {
  return (
    <div className="bg-black text-white px-6 py-3 flex justify-between items-center">

      {/* Logo */}
      <h1 className="text-xl font-bold">
        Market<span className="text-orange-500">Hub Seller</span>
      </h1>

      {/* Links */}
      <div className="flex gap-6">
        <Link to="/seller/login" className="hover:text-orange-400">
          Login
        </Link>

        <Link
          to="/seller/register"
          className="bg-orange-500 px-4 py-1 rounded hover:bg-orange-600"
        >
          Register
        </Link>
      </div>
    </div>
  );
}