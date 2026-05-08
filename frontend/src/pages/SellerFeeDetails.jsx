import React from "react";
import SellerTopNavbar from "@/components/SellerTopNavbar";
import { useNavigate } from "react-router-dom";

export default function SellerFeeDetails() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f3f4f6] min-h-screen">

      {/* ✅ AMAZON STYLE NAVBAR */}
      <SellerTopNavbar />

      {/* 🔥 HERO SECTION */}
      
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-6">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-3">
              Biggest Fee Drop Ever!
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">
              Zero Referral Fees on 12.5 Cr+ Products:
              <br />
              Get up to 70% Fee Savings
            </h2>

            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <span className="text-xl">📅</span>
              Effective March 16th, 2026
            </div>
          </div>

          <video
  className="rounded-lg w-full h-auto"
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/videos/hero.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
        </div>
      </section>

      {/* 📦 SECTION 1 */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Here’s What’s Changing in Your Fees
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center mb-12">
          <img src="/fee1.png" className="rounded-xl shadow" />

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pay Zero Referral Fees on products under ₹1,000
            </h3>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5 shadow-sm">
              <p className="font-semibold text-gray-800 mb-3">
                What this means for you?
              </p>

              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✔</span>
                  Over 12.5 crore products are now eligible for Zero Referral Fees.
                </li>

                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✔</span>
                  Applicable across 1,800+ categories.
                  <span className="underline text-blue-600 cursor-pointer ml-1">
                    View full list
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 📦 SECTION 2 */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Save ₹15 per order for products under ₹300 on Easy Ship
            </h3>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5 shadow-sm">
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✔</span>
                  ₹10 lower weight handling fee across slabs
                </li>

                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✔</span>
                  ₹5 lower closing fee
                </li>
              </ul>
            </div>
          </div>

          <img src="/fee2.png" className="rounded-xl shadow" />
        </div>

        {/* 📦 SECTION 3 */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center mb-12">
          <img src="/fee3.png" className="rounded-xl shadow" />

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Referral Fees just dropped for products priced above ₹1000
            </h3>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5 shadow-sm">
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✔</span>
                  Fees reduced in the range of 4% to 9.5%
                </li>

                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✔</span>
                  Applies to categories like Apparel, Shoes, Home & more
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 📦 SECTION 4 */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Reduced Closing Fees on Self Ship Orders
            </h3>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5 shadow-sm">
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✔</span>
                  ₹20 closing fee under ₹300
                </li>

                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✔</span>
                  ₹26 closing fee for ₹300–₹500
                </li>
              </ul>
            </div>
          </div>

          <img src="/fee4.png" className="rounded-xl shadow" />
        </div>
      </section>

      {/* 🧠 HOW TO USE */}
<section className="bg-white py-12 px-6">
  <div className="max-w-5xl mx-auto flex justify-center">
    <img
      src="/fee5.png"
      className="rounded-xl shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl"
      alt="work"
    />
  </div>
</section>

      {/* 🛍 PRODUCTS GRID */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Seller Fee Savings Across Products
        </h2>

        <div className="max-w-6xl mx-auto">
  <img
    src="/p1.png"   // 👈 change this to your image name
    className="rounded-xl shadow hover:scale-105 transition"
    alt="product"
  />
</div>
      </section>

    </div>
  );
}