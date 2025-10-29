'use client'
import React, { useState } from 'react';
import { Search, Mic, MessageSquare, MessageCircle, Bell, Laptop, Monitor, Tablet, Smartphone, HardDrive, Package, Star, TrendingUp, Users, DollarSign, Heart, Share2, ShoppingCart } from 'lucide-react';
import ProfileCard from './components/profile-card';
import Tradewall from './components/trade-wall';

export default function EPCDashboard() {
  const [activeCategory, setActiveCategory] = useState('Mobiles');

  const categories = [
    { name: 'Computers', icon: Monitor },
    { name: 'Mobiles', icon: Smartphone },
    { name: 'Tablets', icon: Tablet },
    { name: 'Laptops', icon: Laptop },
    { name: 'Electronics', icon: Package },
    { name: 'Others', icon: Package }
  ];

  const leftCategories = [
    { name: 'Laptops', icon: Laptop, discount: '12% discount this week', highlight: true },
    { name: 'Desktops', icon: Monitor },
    { name: 'Compositions', icon: Package },
    { name: 'Networking Equipment', icon: HardDrive },
    { name: 'Accessories', icon: Star }
  ];

  // NOTE: header height (h-24) + top spacing (top-4) = 7rem -> we use top-28 for fixed sidebars
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-cyan-50 p-4 md:p-6">
      {/* Fixed Header */}
      <header className="fixed  top-4 left-4 right-4 z-50 h-24 backdrop-blur-xl bg-gradient-to-b from-[#1F3F78ff] to-[#168D97ff] rounded-2xl shadow-2xl p-4 md:p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">EPC 2.0</h1>
          </div>

          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search globally or ask AI to find buyers..."
                className="w-full px-12 py-3 rounded-xl bg-white/20 backdrop-blur-md text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-white/20 rounded-lg transition-all">
                <Mic className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-3 hover:bg-white/20 rounded-xl transition-all backdrop-blur-sm">
              <MessageSquare className="w-6 h-6 text-white" />
            </button>
            <button className="p-3 hover:bg-white/20 rounded-xl transition-all backdrop-blur-sm">
              <MessageCircle className="w-6 h-6 text-white" />
            </button>
            <button className="p-3 hover:bg-white/20 rounded-xl transition-all backdrop-blur-sm relative">
              <Bell className="w-6 h-6 text-white" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full"></span>
            </button>
            <button className="px-6 py-2 bg-[#D99C2Dff] text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all">
              Post
            </button>
          </div>
        </div>
      </header>

        <div className="fixed top-[106px] flex w-full justify-center mx-auto gap-3 overflow-x-auto py-6 px-8 z-50">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center cursor-pointer gap-2 px-6 py-3 rounded-xl font-medium transition-all hover:scale-105 whitespace-nowrap ${
                activeCategory === cat.name
                  ? 'bg-[#168D97ff] text-white shadow-lg'
                  : 'bg-white/60 backdrop-blur-md text-gray-700 hover:bg-white/80'
              }`}
            >
              <cat.icon className="w-5 h-5" />
              {cat.name}
            </button>
          ))}
        </div>
      {/* Push page content below fixed header */}
      <main className="pt-28 md:pt-48">
        {/* Category Pills */}

        {/* Main Content Grid (center column uses horizontal margins so fixed sidebars don't overlap) */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 ">
            {/* Left Sidebar (fixed on lg) */}
            <div className="lg:col-span-3 lg:fixed lg:top-48 lg:left-6 lg:w-[320px]">
              <div className="bg-white/60 rounded-2xl shadow-gray-300  backdrop-blur-xl p-6 max-h-[calc(100vh-7rem)] overflow-auto">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Left Categories</h2>
                <div className="space-y-2">
                  {leftCategories.map((cat, idx) => (
                    <button
                      key={idx}
                      className={`w-full flex cursor-pointer items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-white/80 hover:scale-102 ${
                        cat.highlight 
                          ? 'bg-white/40' 
                          : 'bg-white/40'
                      }`}
                    >
                      <cat.icon className="w-5 h-5 text-gray-700" />
                      <div className="flex-1 text-left">
                        <div className="text-sm font-medium text-gray-800">{cat.name}</div>
                        {cat.discount && (
                          <div className="text-xs text-[#168D97ff] font-semibold">{cat.discount}</div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Trade Wall */}
            <div className="lg:col-span-12 mx-auto">
              <div className="rounded-2xl shadow-xl">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Center Trade Wall</h2>

                <Tradewall/>

                <div className="mt-6 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">EPC AI: 27 buyers looking for similar laptops this week</span>
                </div>
              </div>
            </div>

            {/* Right Sidebar (fixed on lg) */}
            <div className="lg:col-span-3 lg:fixed lg:top-48 lg:right-6 lg:w-[320px] space-y-6">
              {/* User Profile Card */}
              <div>
                <ProfileCard
                  name="Alex Chen"
                  company="Global Trade Inc."
                  greeting="Good morning, Alex – 5 new matches await!"
                  score={98}
                  reach={45}
                  offers={38}
                  matched={10}
                />
              </div>

              {/* Trending Market Insights */}
              <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl p-6 max-h-[calc(100vh-7rem)] overflow-auto">
                <h3 className="font-bold text-gray-800 mb-4">Trending Market Insights</h3>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 hover:scale-105 transition-all cursor-pointer">
                    <TrendingUp className="w-6 h-6 text-green-600 mb-2" />
                    <div className="text-xs text-gray-600">Trade AI score</div>
                    <div className="font-bold text-gray-800">$845M GPV</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 hover:scale-105 transition-all cursor-pointer">
                    <Users className="w-6 h-6 text-blue-600 mb-2" />
                    <div className="text-xs text-gray-600">Active now</div>
                    <div className="font-bold text-gray-800">8,620 Users</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">Averaged valuation: <span className="font-bold">$275k/unit (+14%)</span></span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
