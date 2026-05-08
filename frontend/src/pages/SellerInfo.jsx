import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function SellerInfo() {
  const navigate = useNavigate();
  return (
    <div className="bg-white">

      {/* 🔥 HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between">
        
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            ZERO referral fee on over{" "}
            <span className="text-orange-500">12.5 crore products</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Register with a valid GSTIN and an active bank account to become a seller.
          </p>

          <Link
            to="/seller/register"
            className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Start Selling
          </Link>
        </div>

        {/* IMAGE */}
        <img
          src="/seller-hero.png"
          alt="Seller"
          className="w-[350px] mt-10 md:mt-0"
        />
      </section>

      {/* 🔥 FEE DROP HIGHLIGHTS */}
      <section className="bg-[#0F1B2A] text-white py-16 relative overflow-hidden">

        <h2 className="text-center text-3xl font-bold mb-10">
          Fee Drop Highlights
        </h2>

        {/* 🔴 LINE */}
        <div className="relative max-w-6xl mx-auto">

          <div className="h-1 bg-orange-500 w-full rounded-full"></div>

          {/* 🔴 MOVING DOT */}
          <div className="absolute top-[-6px] left-0 animate-moveDot">
            <div className="w-4 h-4 bg-white border-4 border-orange-500 rounded-full"></div>
          </div>

        </div>

        {/* ICONS */}
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <img src="/zero.png" className="mx-auto w-20 mb-4" />
            <h3 className="text-orange-400 font-bold text-lg">
              Zero Referral Fee
            </h3>
            <p className="text-gray-300">(Under ₹1000)</p>
          </div>

          <div>
            <img src="/save.png" className="mx-auto w-20 mb-4" />
            <h3 className="font-bold text-lg">
              Save ₹15 per order
            </h3>
            <p className="text-gray-300">(Easy Ship under ₹300)</p>
          </div>

          <div>
            <img src="/graph.png" className="mx-auto w-20 mb-4" />
            <h3 className="text-orange-400 font-bold text-lg">
              4%–9.5% Lower Fees
            </h3>
            <p className="text-gray-300">(Above ₹1000)</p>
          </div>

          <div>
            <img src="/delivery.png" className="mx-auto w-20 mb-4" />
            <h3 className="font-bold text-lg">
              Lower Closing Fees
            </h3>
            <p className="text-gray-300">(₹20–₹26 per order)</p>
          </div>

        </div>

        {/* BUTTON */}
        <div className="text-center mt-10">
          <button onClick={() => navigate("/seller/fee-details")}>
  Know more
</button>
        </div>

      </section>

    </div>
  );
}