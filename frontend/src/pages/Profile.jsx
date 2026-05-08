import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { User, Mail, LogOut, ShieldAlert, Edit2 } from 'lucide-react';
import { useState } from 'react';
import SellerNavbar from "../components/SellerNavbar";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SellerNavbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">My Profile</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="md:col-span-1">
            <div className="card-premium p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-white" size={48} />
              </div>
              <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
              <p className="text-gray-600 mb-6">{user.email}</p>

              <div className="space-y-2">
                <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full font-semibold">
                  {user.role === 'vendor' ? '👨‍💼 Vendor' : '👤 Customer'}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t space-y-3">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="w-full btn-outline flex items-center justify-center gap-2 py-2"
                >
                  <Edit2 size={18} />
                  Edit Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-50 border-2 border-red-200 text-red-600 font-bold py-2 rounded-lg hover:bg-red-100 flex items-center justify-center gap-2"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="md:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="card-premium p-8">
              <h3 className="text-2xl font-bold mb-6">Personal Information</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="inline mr-2" size={18} />
                    Full Name
                  </label>
                  {isEditing ? (
                    <input type="text" value={user.name} className="w-full" />
                  ) : (
                    <p className="text-lg text-gray-900">{user.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="inline mr-2" size={18} />
                    Email Address
                  </label>
                  {isEditing ? (
                    <input type="email" value={user.email} className="w-full" />
                  ) : (
                    <p className="text-lg text-gray-900">{user.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <ShieldAlert className="inline mr-2" size={18} />
                    Account Type
                  </label>
                  <p className="text-lg text-gray-900 capitalize">
                    {user.role === 'vendor' ? 'Vendor Account' : 'Customer Account'}
                  </p>
                </div>

                {isEditing && (
                  <div className="pt-4 flex gap-3">
                    <button className="flex-1 btn-primary py-2">Save Changes</button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="flex-1 btn-outline py-2"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Account Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card p-6 text-center">
                <p className="text-3xl font-bold text-amber-600">12</p>
                <p className="text-gray-600 text-sm mt-2">Orders</p>
              </div>
              <div className="card p-6 text-center">
                <p className="text-3xl font-bold text-amber-600">$1,245</p>
                <p className="text-gray-600 text-sm mt-2">Total Spent</p>
              </div>
              <div className="card p-6 text-center">
                <p className="text-3xl font-bold text-amber-600">4.8★</p>
                <p className="text-gray-600 text-sm mt-2">Rating</p>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="card-premium p-8">
              <h3 className="text-2xl font-bold mb-6">Recent Orders</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((order) => (
                  <div
  key={order}
  className="border-b pb-4 last:border-b-0 flex justify-between items-center"
>
                    <div>
                      <p className="font-semibold">#ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                      <p className="text-sm text-gray-600">3 items • Delivered</p>
                    </div>
                    <div className="flex items-center gap-3">
  <p className="font-bold text-lg">$129.99</p>

  <button
    onClick={() => navigate("/track-order")}
    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
  >
    Track Order 📦
  </button>
</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
