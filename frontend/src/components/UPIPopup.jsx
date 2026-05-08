import React from "react";

export default function UPIPopup({ amount, onClose, onSuccess }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl text-center w-[300px]">

        <h2 className="text-xl font-bold mb-4">Scan & Pay</h2>

        {/* QR IMAGE */}
        <img
          src="/images/upi-qr.png" // 👉 put your QR here
          className="w-48 mx-auto mb-4"
          alt="qr"
        />

        <p className="mb-2 font-semibold">Amount: ₹{amount}</p>
        <p className="text-sm text-gray-500 mb-4">
          Pay using PhonePe / GPay / Paytm
        </p>

        <button
          onClick={onSuccess}
          className="bg-green-500 text-white px-4 py-2 rounded w-full mb-2"
        >
          I Paid ✅
        </button>

        <button
          onClick={onClose}
          className="text-gray-500 text-sm"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}