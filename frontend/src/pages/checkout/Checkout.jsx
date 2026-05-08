import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {

  const { cart, getTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [showQR, setShowQR] = useState(false);

  const [address, setAddress] = useState({
    name: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    pincode: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [upiApp, setUpiApp] = useState('');
  const [error, setError] = useState('');

  const total = getTotal();
  const tax = total * 0.08;
  const finalTotal = total + tax;

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const isAddressValid = () => {
    return (
      address.name.trim() &&
      address.phone.trim() &&
      address.street.trim() &&
      address.city.trim() &&
      address.state.trim() &&
      address.pincode.trim()
    );
  };

  const handleAddressSubmit = () => {
    if (!isAddressValid()) {
      setError("Please fill all address fields");
      return;
    }

    setError('');
    setStep(2);
  };

  const handlePaymentContinue = () => {
    if (!paymentMethod) {
      setError("Please select payment method");
      return;
    }

    if (paymentMethod === "UPI" && !upiApp) {
      setError("Please select UPI app");
      return;
    }

    setError('');
    setStep(3);
  };

  const handlePlaceOrder = () => {

    if (paymentMethod === "UPI") {
      setShowQR(true);
      return;
    }

    alert("Order placed successfully 🎉");

    navigate("/order-success", {
  state: {
    productImage: cart
  }
});

clearCart();
  };

  const handleUPISuccess = () => {

    setShowQR(false);

    navigate("/order-success", {
  state: {
    productImage: cart
  }
});

clearCart();
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">

      <h1 className="text-3xl font-bold mb-6">
        Checkout 🛍️
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-4">

          {/* ADDRESS */}
          <div className="bg-white p-5 rounded-xl shadow">

            <h2 className="text-xl font-bold mb-4">
              📍 Delivery Address
            </h2>

            {step === 1 && (
              <>
                {["name", "phone", "street", "city", "state", "pincode"].map((field) => (
                  <input
                    key={field}
                    name={field}
                    placeholder={field.toUpperCase()}
                    className="border p-3 w-full mb-3 rounded-lg outline-none focus:border-orange-400"
                    onChange={handleChange}
                  />
                ))}

                {error && (
                  <p className="text-red-500 text-sm mb-2">
                    {error}
                  </p>
                )}

                <button
                  onClick={handleAddressSubmit}
                  className="bg-yellow-500 hover:bg-yellow-600 transition px-4 py-3 rounded-lg w-full font-semibold"
                >
                  Deliver Here 🚚
                </button>
              </>
            )}

            {step > 1 && (
              <div className="text-gray-700">
                <p>{address.name}</p>
                <p>{address.street}</p>
                <p>{address.city}</p>
              </div>
            )}
          </div>

          {/* PAYMENT */}
          <div className="bg-white p-5 rounded-xl shadow">

            <h2 className="text-xl font-bold mb-4">
              💳 Payment Method
            </h2>

            {step === 2 && (
              <>

                {/* COD */}
                <label className="block border p-4 mb-3 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    value="COD"
                    checked={paymentMethod === "COD"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />

                  {" "}💵 Cash on Delivery
                </label>

                {/* UPI */}
                <label className="block border p-4 mb-3 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    value="UPI"
                    checked={paymentMethod === "UPI"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />

                  {" "}📱 UPI Payment
                </label>

                {/* UPI APPS */}
                {paymentMethod === "UPI" && (

                  <div className="mt-4 space-y-3">

                    <p className="font-semibold">
                      Select UPI App
                    </p>

                    {["PhonePe", "Google Pay", "Paytm"].map((app) => (

                      <button
                        key={app}
                        onClick={() => setUpiApp(app)}
                        className={`w-full border p-3 rounded-lg flex justify-between items-center transition ${
                          upiApp === app
                            ? "bg-green-100 border-green-500"
                            : "hover:bg-gray-50"
                        }`}
                      >

                        <div className="flex items-center gap-3">

                          {app === "PhonePe" && (
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg"
                              className="h-7"
                              alt=""
                            />
                          )}

                          {app === "Google Pay" && (
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
                              className="h-7"
                              alt=""
                            />
                          )}

                          {app === "Paytm" && (
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Paytm_logo.png"
                              className="h-7"
                              alt=""
                            />
                          )}

                          <span className="font-medium">
                            {app}
                          </span>

                        </div>

                        {upiApp === app && (
                          <span className="text-green-600 font-bold">
                            ✔
                          </span>
                        )}

                      </button>
                    ))}
                  </div>
                )}

                {error && (
                  <p className="text-red-500 text-sm mt-2">
                    {error}
                  </p>
                )}

                <button
                  onClick={handlePaymentContinue}
                  className="bg-yellow-500 hover:bg-yellow-600 transition px-4 py-3 mt-5 rounded-lg w-full font-semibold"
                >
                  Continue ➡️
                </button>
              </>
            )}

            {step > 2 && (
              <p className="text-gray-700">
                {paymentMethod} {upiApp && `(${upiApp})`}
              </p>
            )}
          </div>

          {/* REVIEW */}
          <div className="bg-white p-5 rounded-xl shadow">

            <h2 className="text-xl font-bold mb-4">
              🛒 Review Items
            </h2>

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex gap-4 border-b py-4"
              >

                <img
                  src={item.imageUrl}
                  className="w-20 h-20 rounded-lg object-cover"
                  alt=""
                />

                <div className="flex-1">
                  <h3 className="font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>

                <div className="font-bold text-orange-600">
                  ₹{item.price * item.quantity}
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-5 rounded-xl shadow h-fit sticky top-5">

          <h2 className="text-xl font-bold mb-5">
            📦 Order Summary
          </h2>

          <div className="flex justify-between mb-3">
            <span>Items</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Tax</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>

          <div className="flex justify-between border-t pt-3 text-lg font-bold">
            <span>Total</span>

            <span className="text-green-600">
              ₹{finalTotal.toFixed(2)}
            </span>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 mt-5 rounded-lg font-bold"
          >
            Place Order 🛍️
          </button>

        </div>

      </div>

      {/* QR POPUP */}
      {showQR && (

        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-[320px]">

            <h2 className="text-2xl font-bold mb-4">
              Scan & Pay 📱
            </h2>

            <img
              src="/upi-qr.png"
              className="w-52 mx-auto mb-4"
              alt="QR"
            />

            <p className="text-gray-600 mb-4">
              Complete payment using {upiApp}
            </p>

            <button
              onClick={handleUPISuccess}
              className="bg-green-500 hover:bg-green-600 transition text-white px-5 py-3 rounded-lg w-full font-semibold"
            >
              Payment Done ✅
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

