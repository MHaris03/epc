import React from "react";

/**
 * Circular progress using SVG
 * props:
 *  - value: number 0-100
 *  - size: px
 *  - strokeWidth: px
 *  - color: stroke color
 */
function CircularProgress({ value = 75, size = 96, strokeWidth = 10, color = "#10B981" }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - Math.max(0, Math.min(100, value)) / 100);

  return (
    <svg width={size} height={size} className="block">
      <defs>
        <linearGradient id="gradRing" x1="0" x2="1">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>

      {/* background ring */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="rgba(255,255,255,0.12)"
        strokeWidth={strokeWidth}
        fill="transparent"
      />

      {/* progress ring */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="url(#gradRing)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
        fill="transparent"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />

      {/* center number */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="font-semibold  text-xl"
        // style={{ fontSize: size * 0.26, fill: "white", color: "black" }}
      >
        {Math.round(value)}
      </text>
    </svg>
  );
}

/** tiny sparkline bars under the circle */
function MiniBarGraph({ values = [6, 9, 4, 11, 8, 10] }) {
  const max = Math.max(...values, 1);
  return (
    <div className="flex items-end gap-1 mt-3">
      {values.map((v, i) => (
        <div
          key={i}
          title={`${v}`}
          className="rounded-sm"
          style={{
            width: 6,
            height: `${(v / max) * 28}px`,
            background: `linear-gradient(180deg,#60A5FA,#06B6D4)`,
            opacity: 0.95,
          }}
        />
      ))}
    </div>
  );
}

/** Main card component */
export default function ProfileCard({
  name = "Alex Chen",
  company = "Global Trade Inc.",
  greeting = "Good morning, Alex – 9 new enquiries are here! 🔥",
  score = 98,
  reach = 45,
  offers = 38,
  matched = 18,
}) {
  return (
    <div className="max-w-sm">
      <div className="bg-white/60 rounded-2xl shadow-lg backdrop-blur-xl p-6" style={{ boxShadow: "0 10px 30px rgba(2,6,23,0.18)" }}>
        {/* header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner">
            AC
          </div>

          <div>
            <h3 className="font-bold text-gray-800 text-lg">{name}</h3>
            <p className="text-sm text-gray-600">{company}</p>
          </div>
        </div>

        {/* content panel with gradient */}
        <div className="mb-1 border border-white/30">
          <p className="text-sm text-gray-700 mb-3">{greeting}</p>

          <div className="flex items-center gap-4">
            {/* circular score + sparkline */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <CircularProgress  value={score} size={80} strokeWidth={8} />
                </div>
              </div>

            </div>

            {/* metrics with separators */}
            <div className="flex-1 grid grid-cols-3 text-center items-center">
              <div className="px-2">
                <div className="font-bold text-2xl text-gray-800">{reach}</div>
                <div className="text-xs text-gray-600 mt-1">Reach</div>
              </div>

              <div className="h-12 border-l border-r border-white/40 flex flex-col justify-center px-2">
                <div className="font-bold text-2xl text-gray-800">{offers}</div>
                <div className="text-xs text-gray-600 mt-1">Offers</div>
              </div>

              <div className="px-2">
                <div className="font-bold text-2xl text-gray-800">{matched}</div>
                <div className="text-xs text-gray-600 mt-1">Matched</div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button
              className="w-full py-2 rounded-lg font-semibold text-white hover:shadow-lg transform transition hover:scale-[1.03]"
              style={{
                background: "linear-gradient(90deg,#ffd78a,#d99c2d)",
                color: "#0b0b0b",
              }}
            >
              Explore Matches
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
