import React from "react";
import { motion } from "framer-motion";

const trackingSteps = [
  "Order Placed",
  "Packed",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];

export default function OrderTracking() {
  const currentStep = 3;

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">
              Track Your Order
            </h1>

            <p className="text-gray-500 mt-1">
              Order ID: #MH12345678
            </p>
          </div>

          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-5xl"
          >
            🚚
          </motion.div>
        </div>

        {/* PRODUCT */}
        <div className="flex gap-4 items-center border rounded-xl p-4 mb-8">
          <img
  src={location.state?.productImage || "/default-product.png"}
  className="w-24 h-24 object-cover rounded"
  alt="product"
/>

          <div className="flex-1">
            <h2 className="font-bold text-lg">
              Wireless Headphones
            </h2>

            <p className="text-gray-500">
              Expected Delivery: Tomorrow
            </p>

            <p className="text-green-600 font-semibold mt-1">
              Out for Delivery
            </p>
          </div>
        </div>

        {/* TRACKING STEPS */}
        <div className="relative">

          <div className="absolute left-5 top-0 h-full w-1 bg-gray-200"></div>

          {trackingSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 mb-10 relative">

              {/* CIRCLE */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                  index <= currentStep
                    ? "bg-green-500 text-white"
                    : "bg-gray-300"
                }`}
              >
                {index <= currentStep ? "✔" : ""}
              </div>

              {/* TEXT */}
              <div>
                <h3 className="font-bold text-lg">{step}</h3>

                <p className="text-gray-500 text-sm">
                  {index === 0 && "Your order has been placed"}
                  {index === 1 && "Seller packed your item"}
                  {index === 2 && "Package shipped from warehouse"}
                  {index === 3 && "Your item is arriving today"}
                  {index === 4 && "Package delivered successfully"}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}