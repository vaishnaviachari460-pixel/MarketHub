import React from "react";
import { Link } from "react-router-dom";
import SellerNavbar from "../components/SellerNavbar";  

export default function Seller() {
  return (
    <div className="bg-white">
      <SellerNavbar />
    
      {/* HERO SECTION */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              ZERO referral fee <br />
              on over <span className="text-orange-500">12.5 crore</span> products
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Register with a valid GSTIN and an active bank account to become a seller.
            </p>

            <Link
              to="/register/vendor"
              className="inline-block mt-6 px-8 py-3 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600"
            >
              Start Selling
            </Link>
          </div>

          <div className="text-center text-8xl">📦</div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-gray-900 text-white py-14 px-6">
        <h2 className="text-4xl text-center font-bold mb-10">
          Fee Drop Highlights
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-orange-400 text-2xl font-bold">Zero</p>
            <p className="text-gray-300">Referral Fee</p>
          </div>

          <div>
            <p className="text-orange-400 text-2xl font-bold">₹15</p>
            <p className="text-gray-300">Save per order</p>
          </div>

          <div>
            <p className="text-orange-400 text-2xl font-bold">4% - 9%</p>
            <p className="text-gray-300">Lower Fees</p>
          </div>

          <div>
            <p className="text-orange-400 text-2xl font-bold">₹20 - ₹26</p>
            <p className="text-gray-300">Lower closing fee</p>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-14 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Big savings with new fee reductions
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {["👗 Saree", "🛢 Oil", "🛋 Cushion", "🔋 Power Bank",
            "👟 Shoes", "🧥 Jacket", "🚁 Drone", "🎧 Headphones"].map((item, i) => (
            
            <div key={i} className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg">
              <div className="text-4xl mb-3">{item.split(" ")[0]}</div>
              <p className="font-semibold">{item.split(" ")[1]}</p>
              <p className="text-orange-500 font-bold mt-2">₹{200 + i * 100}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-14 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          How to sell on MarketHub?
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-xl font-bold">Step 1</p>
            <p>Register Account</p>
          </div>

          <div>
            <p className="text-xl font-bold">Step 2</p>
            <p>Choose shipping</p>
          </div>

          <div>
            <p className="text-xl font-bold">Step 3</p>
            <p>List products</p>
          </div>

          <div>
            <p className="text-xl font-bold">Step 4</p>
            <p>Start selling</p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-100 py-14 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why become a seller?
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-bold text-lg">Crores of Customers</h3>
            <p className="text-gray-600 text-sm mt-2">
              Reach millions of buyers across India
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-bold text-lg">High Growth</h3>
            <p className="text-gray-600 text-sm mt-2">
              Grow your business faster
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-bold text-lg">Pan India Reach</h3>
            <p className="text-gray-600 text-sm mt-2">
              Deliver across all locations
            </p>
          </div>

        </div>

        <div className="text-center mt-10">
          <Link
            to="/register/vendor"
            className="px-8 py-3 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600"
          >
            Start Selling
          </Link>
        </div>
      </section>

    </div>
  );
}