export default function RightSidebar() {
  return (
    <aside className="p-4 space-y-6 bg-gradient-to-b from-[#e0f7ff]/40 to-[#f5f9ff]/30 rounded-3xl backdrop-blur-md">
      {/* Profile Card */}
      <div className="relative bg-white/30 backdrop-blur-xl p-5 rounded-2xl shadow-md border border-white/40">
        {/* Avatar */}
        <div className="relative w-20 h-20 mx-auto">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="w-20 h-20 rounded-full mx-auto border-2 border-white shadow-sm"
          />
          <span className="absolute bottom-1 right-1 bg-blue-500 text-white text-xs rounded-full p-1 shadow-md">
            👤
          </span>
        </div>

        {/* Name and Company */}
        <h3 className="mt-3 font-semibold text-gray-900 text-lg">Alex Chen</h3>
        <p className="text-gray-600 text-sm">Global Tech Trade Inc.</p>
        <p className="text-gray-500 text-xs mt-1">Good morning, Alex – 5 new matches found</p>

        {/* Score Circle */}
        <div className="mt-4 flex items-center justify-center gap-6">
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center w-14 h-14">
              <svg className="w-14 h-14 transform -rotate-90">
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  stroke="#e5e7eb"
                  strokeWidth="5"
                  fill="none"
                />
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  stroke="#3b82f6"
                  strokeWidth="5"
                  fill="none"
                  strokeDasharray="150"
                  strokeDashoffset="20"
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute text-sm font-semibold text-gray-800">98</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Score</p>
          </div>
          <div className="text-xs text-gray-700">
            <p><strong>Posts:</strong> 46</p>
            <p><strong>Offers:</strong> 18</p>
            <p><strong>Matches:</strong> 10</p>
          </div>
        </div>

        <button className="mt-5 w-full bg-orange-500 text-white font-medium text-sm py-2 rounded-xl shadow-md hover:bg-orange-600 transition">
          Explore Matches
        </button>
      </div>

      {/* Trending Market Insights */}
      <div className="bg-white/30 backdrop-blur-xl p-5 rounded-2xl shadow-md border border-white/40">
        <h3 className="font-semibold mb-3 text-gray-800 text-base">
          Trending Market Insights
        </h3>

        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex items-center justify-between">
            <p>📈 Asia demand for components</p>
            <span className="text-green-600 text-xs font-medium">+12% WoW</span>
          </div>
          <div className="flex items-center justify-between">
            <p>💰 Avg. bulk value</p>
            <span className="text-blue-600 text-xs font-medium">$273/unit</span>
          </div>
          <div className="flex items-center justify-between">
            <p>🤖 AI-matched buyers</p>
            <span className="text-purple-600 text-xs font-medium">+5%</span>
          </div>
        </div>
      </div>

      {/* Join Trust Network */}
      <div className="bg-white/30 backdrop-blur-xl p-5 rounded-2xl shadow-md border border-white/40 text-center">
        <h4 className="font-semibold text-gray-800 mb-3">Join Trust Network</h4>
        <button className="bg-orange-500 text-white font-medium text-sm py-2 px-5 rounded-xl shadow-md hover:bg-orange-600 transition">
          Upgrade to Verified
        </button>
      </div>
    </aside>
  );
}
