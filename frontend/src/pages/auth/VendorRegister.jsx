import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, Phone, Store, AlertCircle, MapPin, FileText } from 'lucide-react';
import { authAPI } from '@/services/api';

export default function VendorRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    shopName: '',
    shopDescription: '',
    shopAddress: '',
    businessLicense: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Personal details are required');
      return false;
    }
    if (!formData.shopName || !formData.shopDescription || !formData.shopAddress) {
      setError('Shop details are required');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const response = await authAPI.registerVendor({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        shopName: formData.shopName,
        shopDescription: formData.shopDescription,
        shopAddress: formData.shopAddress,
        businessLicense: formData.businessLicense,
      });

      // Redirect to login after successful registration
      navigate('/login?registered=true&vendor=true');
    } catch (err) {
      setError(err.response?.data?.message || 'Vendor registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Store className="text-orange-500" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">
              Market<span className="text-orange-500">Hub</span> Seller
            </h2>
          </div>
          <p className="text-gray-600 mt-2">Start selling on MarketHub today</p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information Section */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="border p-3 w-full pl-10 rounded bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="border p-3 w-full pl-10 rounded bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="border p-3 w-full pl-10 rounded bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="border p-3 w-full pl-10 rounded bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" />
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="border p-3 w-full pl-10 rounded bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"                  />
                </div>
              </div>
            </div>
          </div>

          {/* Shop Information Section */}
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4">Shop Information</h3>
            <div className="grid grid-cols-1 gap-4">
              {/* Shop Name */}
              <div>
                <label htmlFor="shopName" className="block text-sm font-medium text-gray-700 mb-1">
                  Shop Name
                </label>
                <div className="relative">
                  <Store size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" />
                  <input
                    type="text"
                    id="shopName"
                    name="shopName"
                    value={formData.shopName}
                    onChange={handleChange}
                    placeholder="My Awesome Shop"
                    className="border p-3 w-full pl-10 rounded bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"                  />
                </div>
              </div>

              {/* Shop Address */}
              <div>
                <label htmlFor="shopAddress" className="block text-sm font-medium text-gray-700 mb-1">
                  Shop Address
                </label>
                <div className="relative">
                  <MapPin size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" />
                  <input
                    type="text"
                    id="shopAddress"
                    name="shopAddress"
                    value={formData.shopAddress}
                    onChange={handleChange}
                    placeholder="123 Business St, City, State"
                    className="border p-3 w-full pl-10 rounded bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"                  />
                </div>
              </div>

              {/* Shop Description */}
              <div>
                <label htmlFor="shopDescription" className="block text-sm font-medium text-gray-700 mb-1">
                  Shop Description
                </label>
                <div className="relative">
                  <FileText size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" />
                  <textarea
                    id="shopDescription"
                    name="shopDescription"
                    value={formData.shopDescription}
                    onChange={handleChange}
                    placeholder="Describe your shop and what you sell..."
                    rows="4"
                    className="border p-3 w-full pl-10 rounded bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"                  />
                </div>
              </div>

              {/* Business License */}
              <div>
                <label htmlFor="businessLicense" className="block text-sm font-medium text-gray-700 mb-1">
                  Business License Number (Optional)
                </label>
                <input
                  type="text"
                  id="businessLicense"
                  name="businessLicense"
                  value={formData.businessLicense}
                  onChange={handleChange}
                  placeholder="Your business license number"
                    className="border p-3 w-full pl-10 rounded bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"                  />
              </div>
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              By registering as a seller, you agree to our{' '}
              <span className="font-medium">Seller Terms & Conditions</span> and will comply with all marketplace policies.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating Seller Account...' : 'Create Seller Account'}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-orange-600 hover:text-orange-700 font-medium">
            Sign In
          </Link>
        </p>

        {/* Back to Customer Registration */}
        <p className="text-center text-gray-600 text-sm mt-2">
          Want to shop instead?{' '}
          <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium">
            Register as Customer
          </Link>
        </p>
      </div>
    </div>
  );
}
