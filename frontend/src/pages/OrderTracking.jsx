import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import LiveTrackingMap from "@/components/map/LiveTrackingMap";

const trackingSteps = [
  "Order Placed",
  "Packed",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];

export default function OrderTracking() {
  const [currentStep, setCurrentStep] = useState(3);
  const [showMap, setShowMap] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate order progress
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= 4) {
          clearInterval(interval);
          return 4;
        }
        return prev + 1;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Track Your Order
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT COLUMN - MAP */}
          <div className="space-y-4">
            {/* Toggle Buttons */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-2 flex gap-2">
              <button
                onClick={() => setShowMap(true)}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                  showMap
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                📍 Live Map
              </button>
              <button
                onClick={() => setShowMap(false)}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                  !showMap
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                📋 Tracking Info
              </button>
            </div>

            {/* Map or Tracking Steps */}
            {showMap ? (
              <LiveTrackingMap />
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Order Status</h2>
                
                {/* TRACKING STEPS */}
                <div className="relative">
                  <div className="absolute left-5 top-0 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
                  
                  {trackingSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 mb-10 relative">
                      {/* CIRCLE */}
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                          index <= currentStep
                            ? "bg-green-500 text-white"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      >
                        {index <= currentStep ? "✔" : ""}
                      </div>

                      {/* TEXT */}
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{step}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
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
            )}

            {/* PRODUCT INFO */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Order Details</h3>
              <div className="flex gap-4 items-center">
                <img
                  src={location.state?.productImage || "https://picsum.photos/seed/headphones/100/100.jpg"}
                  className="w-20 h-20 object-cover rounded-lg"
                  alt="product"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-white">Wireless Headphones</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Quantity: 1</p>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">$99.99</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - ADDITIONAL INFO */}
          <div className="space-y-4">
            {/* Delivery Address */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Delivery Address</h3>
              <div className="space-y-2">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>John Doe</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  123, Market Street<br />
                  Bandra West, Mumbai<br />
                  Maharashtra 400050<br />
                  India
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  📞 +91 98765 43210
                </p>
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Payment Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span className="text-gray-900 dark:text-white">$99.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Delivery Fee</span>
                  <span className="text-gray-900 dark:text-white">$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax</span>
                  <span className="text-gray-900 dark:text-white">$8.00</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
                  <div className="flex justify-between font-bold text-gray-900 dark:text-white">
                    <span>Total</span>
                    <span>$112.99</span>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                    Paid Online
                  </span>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-400 mb-2">Need Help?</h3>
              <p className="text-blue-800 dark:text-blue-300 text-sm mb-3">
                Our customer support team is here to help you with any questions about your order.
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                  📞 Call Support
                </button>
                <button className="flex-1 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-sm font-medium">
                  💬 Chat Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}