import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SellerTopNavbar() {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* <h1 className="font-bold text-lg">amazon.in</h1> */}

        <div className="flex gap-6">

          {/* START */}
          <div onMouseEnter={() => setOpen("start")} onMouseLeave={() => setOpen(null)}>
            <button>Start ▾</button>

            {open === "start" && (
              <div className="absolute bg-white shadow p-4 mt-2 rounded">
                <p>How to register</p>
                <p>How to sell</p>
                <p>List a product</p>
              </div>
            )}
          </div>

          {/* GROW */}
          <div onMouseEnter={() => setOpen("grow")} onMouseLeave={() => setOpen(null)}>
            <button>Grow ▾</button>

            {open === "grow" && (
              <div className="absolute bg-white shadow p-4 mt-2 rounded">
                <p>Grow your business</p>
                <p>Amazon programs</p>
              </div>
            )}
          </div>

          {/* PRICING */}
          <div onMouseEnter={() => setOpen("pricing")} onMouseLeave={() => setOpen(null)}>
            <button>Pricing ▾</button>

            {open === "pricing" && (
              <div className="absolute bg-white shadow p-4 mt-2 rounded">
                <p>Types of fees</p>
                <p>Compare fees</p>
              </div>
            )}
          </div>

          {/* RESOURCES */}
          <div onMouseEnter={() => setOpen("resources")} onMouseLeave={() => setOpen(null)}>
            <button>Resources ▾</button>

            {open === "resources" && (
              <div className="absolute bg-white shadow p-4 mt-2 rounded">
                <p>Seller help</p>
                <p>Guides</p>
              </div>
            )}
          </div>

        </div>

        <button
  onClick={() => navigate("/seller/register/")}
  className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
>
  Start Selling
</button>

      </div>
    </div>
  );
}