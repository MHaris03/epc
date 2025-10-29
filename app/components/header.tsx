import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Package,
  Search,
  Mic,
  MessageSquare,
  MessageCircle,
  Bell,
} from "lucide-react";

// AnimatedHeader.component.jsx
// Default export: <AnimatedHeader />
// Requirements satisfied:
// - Stylish glassy gradient header like the provided image
// - Animated search that expands on focus with suggestion list
// - 'Post' button opens a modal
// - Notifications and Messages open animated panels
// - Framer Motion used for smooth animations
// - Tailwind CSS classes used for styling (assumes Tailwind is configured)

export default function AnimatedHeader() {
  const [isPostOpen, setPostOpen] = useState(false);
  const [isNotifOpen, setNotifOpen] = useState(false);
  const [isMsgOpen, setMsgOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isSearchFocused, setSearchFocused] = useState(false);

  const notifRef = useRef(null);
  const msgRef = useRef(null);

  // close on outside click
  useEffect(() => {
    if (typeof window === "undefined") return;

    function handleClick(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) setNotifOpen(false);
      if (msgRef.current && !msgRef.current.contains(e.target)) setMsgOpen(false);
    }

    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    function onKey(e) {
      if (e.key === "Escape") {
        setPostOpen(false);
        setNotifOpen(false);
        setMsgOpen(false);
        setSearchFocused(false);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);


  return (
    <header className="relative rounded-2xl p-4 md:p-6 mb-6 shadow-2xl">
      {/* Background gradient + glass effect */}
      <div className="absolute inset-0 rounded-2xl -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F3F78] via-[#0f6b77] to-[#168D97] opacity-95 blur-sm transform-gpu" />
        {/* subtle decorative stripes */}
        <svg className="absolute inset-0 opacity-10" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#000" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g)" />
        </svg>
      </div>

      <div className="relative flex items-center justify-between flex-wrap gap-4">
        {/* Left: logo */}
        <div className="flex items-center gap-4">
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl ring-1 ring-white/10">
            <Package className="w-8 h-8 text-white drop-shadow" />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">EPC 2.0</h1>
        </div>

        {/* Center: animated search */}
        <div className="flex-1 max-w-3xl mx-4">
          <div className="relative">
            <motion.div
              initial={{ scale: 1 }}
              whileFocus={{ scale: 1 }}
              className="w-full"
            >
              <motion.input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 150)}
                placeholder="Search globally or ask AI to find buyers..."
                className="w-full pl-12 pr-36 py-3 rounded-xl bg-white/12 backdrop-blur-md text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all shadow-md"
                as="input"
                // animate width for subtle pop
                style={{
                  boxShadow: isSearchFocused
                    ? "0 8px 30px rgba(7, 90, 100, 0.25)"
                    : "0 4px 18px rgba(0,0,0,0.12)",
                }}
              />

              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />

              <button className="absolute right-12 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-lg transition-all" aria-label="voice search">
                <Mic className="w-5 h-5 text-white/90" />
              </button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-[#ffd78a] to-[#d99c2d] text-black rounded-lg font-semibold shadow-lg"
                onClick={() => alert("You clicked the mini action — replace with real action")}
              >
                AI
              </motion.button>
            </motion.div>

            {/* Suggestions dropdown (animated) */}
            <AnimatePresence>
              {isSearchFocused && (
                <motion.ul
                  initial={{ opacity: 0, y: -6, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute left-0 right-0 mt-2 bg-white/6 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-xl text-white z-30"
                >
                  {/* Static suggestions — replace with live results */}
                  {[
                    "Find buyers in Germany",
                    "Top suppliers for electronics",
                    "Use AI to generate outreach",
                  ].map((s) => (
                    <li
                      key={s}
                      onMouseDown={() => {
                        setSearchValue(s);
                        setSearchFocused(false);
                      }}
                      className="px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer"
                    >
                      {s}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: action icons */}
        <div className="flex items-center gap-3">
          <ActionIcon onClick={() => setMsgOpen((s) => !s)} icon={<MessageSquare className="w-6 h-6 text-white" />} ariaLabel="Messages">
            <div ref={msgRef}>
              <MessagesPanel open={isMsgOpen} />
            </div>
          </ActionIcon>

          <ActionIcon onClick={() => setNotifOpen((s) => !s)} icon={<Bell className="w-6 h-6 text-white" />} ariaLabel="Notifications">
            <div ref={notifRef}>
              <NotificationsPanel open={isNotifOpen} />
            </div>
          </ActionIcon>

          <ActionIcon onClick={() => alert("Go to chat — placeholder")} icon={<MessageCircle className="w-6 h-6 text-white" />} ariaLabel="Open chat" />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setPostOpen(true)}
            className="px-6 py-2 bg-gradient-to-r from-[#ffd78a] to-[#d99c2d] text-black rounded-xl font-semibold shadow-2xl"
            aria-label="Add Post"
          >
            Post
          </motion.button>
        </div>
      </div>

      {/* Modals & Panels */}
      <AnimatePresence>
        {isPostOpen && <PostModal onClose={() => setPostOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}

// Small reusable action icon wrapper
function ActionIcon({ children, icon, onClick, ariaLabel }) {
  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        onClick={onClick}
        className="p-3 hover:bg-white/10 rounded-xl transition-all backdrop-blur-sm ring-1 ring-white/6"
        aria-label={ariaLabel}
      >
        {icon}
      </motion.button>

      {/* Render children (panels) next to the icon if provided */}
      {children}
    </div>
  );
}

function NotificationsPanel({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="absolute right-0 mt-3 w-80 bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-2xl z-40"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-white">Notifications</h3>
            <button className="text-sm text-white/60">Mark all read</button>
          </div>

          <ul className="space-y-2">
            {[1, 2, 3].map((i) => (
              <li key={i} className="px-3 py-2 rounded-lg hover:bg-white/8 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/12 flex items-center justify-center">🔔</div>
                  <div>
                    <div className="text-sm text-white/90 font-medium">New lead assigned</div>
                    <div className="text-xs text-white/60 mt-1">You have a new lead from Brazil</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MessagesPanel({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="absolute right-0 mt-3 w-96 bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-2xl z-40"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-white">Messages</h3>
            <button className="text-sm text-white/60">New message</button>
          </div>

          <ul className="space-y-2">
            {["Ali", "Sara", "Omar"].map((name) => (
              <li key={name} className="px-3 py-2 rounded-lg hover:bg-white/8 cursor-pointer flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6ee7b7] to-[#3b82f6] flex items-center justify-center text-black font-bold">{name[0]}</div>
                <div>
                  <div className="text-sm text-white/90 font-medium">{name}</div>
                  <div className="text-xs text-white/60 mt-1">Hey — are you available for a quick call?</div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PostModal({ onClose }) {
  const [content, setContent] = useState("");
  const fileRef = useRef(null);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        initial={{ y: 12, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 12, opacity: 0, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="relative w-full max-w-2xl bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl z-50"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Create a post</h2>
          <button className="text-white/60" onClick={onClose}>
            Close
          </button>
        </div>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          placeholder="Write something..."
          className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/8 focus:outline-none focus:ring-2 focus:ring-white/20"
        />

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <input ref={fileRef} type="file" className="hidden" />
            <button
              onClick={() => fileRef.current?.click()}
              className="px-3 py-2 bg-white/8 rounded-lg text-white/90"
            >
              Upload image
            </button>
            <button className="px-3 py-2 bg-white/8 rounded-lg text-white/90">Add emojis</button>
          </div>

          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-lg bg-white/8 text-white/80" onClick={onClose}>
              Cancel
            </button>
            <button
              onClick={() => {
                // placeholder for real submit
                console.log({ content });
                onClose();
              }}
              className="px-6 py-2 bg-gradient-to-r from-[#ffd78a] to-[#d99c2d] text-black rounded-xl font-semibold"
            >
              Post
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
