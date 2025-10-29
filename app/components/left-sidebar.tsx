"use client";

import { Laptop, Monitor, Cpu, Network, Star, Flame } from "lucide-react";

export default function LeftSidebar() {
    return (
        <aside className="bg-white/40 backdrop-blur-md border border-white/30 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] p-5 w-64 text-gray-700">
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Left Categories</h2>

            {/* Category List */}
            <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/40 hover:bg-white/60 transition cursor-pointer">
                    <Laptop className="w-4 h-4 text-gray-700" />
                    <span>Laptops</span>
                </li>
                <li className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/40 hover:bg-white/60 transition cursor-pointer">
                    <Monitor className="w-4 h-4 text-gray-700" />
                    <span>Desktops</span>
                </li>
                <li className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/40 hover:bg-white/60 transition cursor-pointer">
                    <Cpu className="w-4 h-4 text-gray-700" />
                    <span>Components</span>
                </li>
                <li className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/40 hover:bg-white/60 transition cursor-pointer">
                    <Network className="w-4 h-4 text-gray-700" />
                    <span>Networking Equipment</span>
                </li>
                <li className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/40 hover:bg-white/60 transition cursor-pointer">
                    <Star className="w-4 h-4 text-gray-700" />
                    <span>Accessories</span>
                </li>
            </ul>

            {/* Bottom Info */}
            <div className="mt-5 flex items-center gap-2 text-xs text-[#8fc1c8] font-medium">
                <Flame className="w-4 h-4 text-orange-500" />
                <span>
                    Laptops — <span className="text-[#8fc1c8]">12% demand rise this week</span>
                </span>
            </div>
        </aside>
    );
}
