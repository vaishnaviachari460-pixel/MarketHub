import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, User, CreditCard, Smartphone, Truck, Check, ArrowRight, Lock, Shield, ShoppingCart } from 'lucide-react';

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

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [upiApp, setUpiApp] = useState('');
  const [error, setError] = useState('');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

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
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-6">

      {/* Header with Step Indicator */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Checkout</h1>
        
        {/* Step Progress */}
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                step >= stepNumber 
                  ? 'bg-orange-500 border-orange-500 text-white' 
                  : 'bg-white border-gray-300 text-gray-400'
              }`}>
                {step > stepNumber ? <Check className="w-5 h-5" /> : stepNumber}
              </div>
              <div className={`flex-1 h-1 mx-2 transition-all ${
                step > stepNumber ? 'bg-orange-500' : 'bg-gray-300'
              }`} />
              <div className={`mr-4 font-medium ${
                step >= stepNumber ? 'text-orange-600' : 'text-gray-400'
              }`}>
                {stepNumber === 1 && 'Address'}
                {stepNumber === 2 && 'Payment'}
                {stepNumber === 3 && 'Review'}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-4">

          {/* ADDRESS */}
          <div className="bg-white rounded-2xl shadow-sm p-6">

            <h2 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-500" />
              Delivery Address
            </h2>

            {step === 1 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={address.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 9876543210"
                      value={address.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-1" />
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="street"
                      placeholder="123 Main Street, Apartment 4B"
                      value={address.street}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      placeholder="Mumbai"
                      value={address.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <input
                      type="text"
                      name="state"
                      placeholder="Maharashtra"
                      value={address.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">PIN Code</label>
                    <input
                      type="text"
                      name="pincode"
                      placeholder="400001"
                      value={address.pincode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                {error && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <button
                  onClick={handleAddressSubmit}
                  className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  Continue to Payment <ArrowRight className="w-5 h-5" />
                </button>
              </>
            )}

            {step > 1 && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Delivery Address</h3>
                <p className="text-gray-700">{address.name}</p>
                <p className="text-gray-700">{address.phone}</p>
                <p className="text-gray-700">{address.street}</p>
                <p className="text-gray-700">{address.city}, {address.state} - {address.pincode}</p>
              </div>
            )}
          </div>

          {/* PAYMENT */}
          <div className="bg-white rounded-2xl shadow-sm p-6">

            <h2 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-orange-500" />
              Payment Method
            </h2>

            {step === 2 && (
              <>
                {/* Payment Options */}
                <div className="space-y-4">
                  {/* Credit/Debit Card */}
                  <label className={`block border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    paymentMethod === 'card' 
                      ? 'border-orange-500 bg-orange-50' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-3"
                      />
                      <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                      <span className="font-medium">Credit/Debit Card</span>
                    </div>
                  </label>

                  {/* UPI */}
                  <label className={`block border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    paymentMethod === 'upi' 
                      ? 'border-orange-500 bg-orange-50' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        value="upi"
                        checked={paymentMethod === "upi"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-3"
                      />
                      <Smartphone className="w-5 h-5 mr-2 text-green-600" />
                      <span className="font-medium">UPI Payment</span>
                    </div>
                  </label>

                  {/* Cash on Delivery */}
                  <label className={`block border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    paymentMethod === 'cod' 
                      ? 'border-orange-500 bg-orange-50' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-3"
                      />
                      <Truck className="w-5 h-5 mr-2 text-orange-600" />
                      <span className="font-medium">Cash on Delivery</span>
                    </div>
                  </label>
                </div>

                {/* Security Badge */}
                <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
                  <Lock className="w-4 h-4" />
                  <span>Your payment information is secure and encrypted</span>
                </div>

                {error && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <button
                  onClick={handlePaymentContinue}
                  className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  Continue to Review <ArrowRight className="w-5 h-5" />
                </button>
              </>
            )}

            {step > 2 && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Payment Method</h3>
                <div className="flex items-center gap-2">
                  {paymentMethod === 'card' && <CreditCard className="w-4 h-4 text-blue-600" />}
                  {paymentMethod === 'upi' && <Smartphone className="w-4 h-4 text-green-600" />}
                  {paymentMethod === 'cod' && <Truck className="w-4 h-4 text-orange-600" />}
                  <span className="text-gray-700 capitalize">
                    {paymentMethod === 'card' && 'Credit/Debit Card'}
                    {paymentMethod === 'upi' && 'UPI'}
                    {paymentMethod === 'cod' && 'Cash on Delivery'}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* REVIEW */}
          <div className="bg-white rounded-2xl shadow-sm p-6">

            <h2 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-orange-500" />
              Review Items
            </h2>

            <div className="space-y-4">
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedSize || 'nosize'}`} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {item.imageUrl ? (
                      <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-2xl">📦</span>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    {item.selectedSize && (
                      <p className="text-sm text-gray-600">Size: {item.selectedSize}</p>
                    )}
                    <p className="text-gray-600">Qty: {item.quantity}</p>
                  </div>

                  <div className="font-bold text-lg text-gray-900">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white rounded-2xl shadow-sm p-6 h-fit sticky top-6">

          <h2 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
            <Shield className="w-5 h-5 text-orange-500" />
            Order Summary
          </h2>

          {/* Price Breakdown */}
          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal ({cart.length} items)</span>
              <span className="font-medium">₹{total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-gray-700">
              <span>Shipping</span>
              <span className="text-green-600 font-medium">
                {total >= 500 ? 'Free' : '₹40'}
              </span>
            </div>

            <div className="flex justify-between text-gray-700">
              <span>Tax (GST 8%)</span>
              <span className="font-medium">₹{tax.toFixed(2)}</span>
            </div>
          </div>

          {/* Total */}
          <div className="border-t border-b border-gray-200 py-4 mb-6">
            <div className="flex justify-between text-2xl font-bold">
              <span className="text-gray-900">Total</span>
              <span className="text-orange-600">
                ₹{(total + (total >= 500 ? 0 : 40) + tax).toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Including all taxes</p>
          </div>

          {/* Benefits */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm">
              <Truck className="w-4 h-4 text-blue-600" />
              <span className="text-gray-700">Free Delivery on orders above ₹500</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-gray-700">Secure Payment</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Check className="w-4 h-4 text-blue-600" />
              <span className="text-gray-700">Order Confirmation</span>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={step < 3}
            className={`w-full py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 ${
              step >= 3
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {step >= 3 ? (
              <>
                Place Order <ArrowRight className="w-5 h-5" />
              </>
            ) : (
              'Complete all steps to place order'
            )}
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

