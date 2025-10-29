/*
Place these images into your project's public folder (public/images/...):

- /images/company-avatar-t.png      (circular avatar with letter T)
- /images/flag-us.png               (US flag 20x20)
- /images/laptop-860.png            (product image like in the reference)
- /images/icon-cart.png             (cart icon PNG/SVG)
- /images/icon-heart.png            (heart icon PNG/SVG)
- /images/icon-share.png            (share icon PNG/SVG)

This component reads from a small JSON array (3 items) and renders cards
that match the provided design using Tailwind CSS. It's a single-file React
component (JSX) and uses images from the public folder instead of icon
components.
*/

import { Check, MessageCircleCode, MessageCircleIcon, MessageCircleOffIcon } from "lucide-react";
import React from "react";

const PRODUCTS_JSON = [
  {
    id: 1,
    company: "Tech Global LLC",
    avatar: "/images/company-avatar-t.png",
    flag: "/laptop.png",
    verified: true,
    productImage: "/laptop.png",
    title: "HP EliteBook 860 G9 - Pristine Condition",
    desc: "Bulk quantity of Grade A refurb laptops ready for global export",
    price: "$580/unit",
    moq: "500 pcs",
    quantity: "500",
    grade: "Grade A",
    payment: "Prepay",
    location: "Worldwide",
    shipping: "Worldwide",
    offers: 5,
    matches: 8,
    posted: "6h ago",
  },
  {
    id: 2,
    company: "Pacific Imports",
    avatar: "/images/company-avatar-t.png",
    flag: "/images/flag-us.png",
    verified: false,
    productImage: "/laptop.png",
    title: "Lenovo ThinkPad X1 Carbon - Refurbished",
    desc: "Grade A+ refurbished units for wholesale",
    price: "$620/unit",
    moq: "200 pcs",
    quantity: "200",
    grade: "Grade A+",
    payment: "Net 30",
    location: "Worldwide",
    shipping: "Worldwide",
    offers: 2,
    matches: 4,
    posted: "1d ago",
  },
  {
    id: 3,
    company: "North Tech Resale",
    avatar: "/images/company-avatar-t.png",
    flag: "/images/flag-us.png",
    verified: true,
    productImage: "/laptop.png",
    title: "Dell Latitude 7430 - Grade A",
    desc: "Bulk lots available, tested and boxed",
    price: "$450/unit",
    moq: "300 pcs",
    quantity: "300",
    grade: "Grade A",
    payment: "Prepay",
    location: "Worldwide",
    shipping: "Worldwide",
    offers: 3,
    matches: 6,
    posted: "12h ago",
  },
];

export default function Tradewall() {
  return (
    <div className="grid gap-6 md:grid-cols-1 ">
      {PRODUCTS_JSON.map((p) => (
        <article
          key={p.id}
          className="backdrop-blur-2xl bg-white/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              {/* <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <img src={p.avatar} alt={p.company} className="w-full h-full object-cover" />
              </div> */}
              <span className="font-semibold text-gray-800">{p.company}</span>
            </div>

            <div className="flex items-center gap-2">
              {/* <img src={p.flag} alt="flag" className="w-5 h-5" /> */}
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold flex items-center gap-2">
               <Check className="w-4"/>
                {p.verified ? 'Verified' : 'Unverified'}
              </span>
            </div>
          </div>

          {/* Product image */}
          <div className="flex justify-center mb-6 bg-transparent rounded-xl">
            <img src={p.productImage} alt={p.title} className="w-48 h-44 object-contain" />
          </div>

          {/* Title & description */}
          <h3 className="text-xl font-bold text-gray-800 mb-2">{p.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{p.desc}</p>

          {/* Info grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
            <InfoTile label="580 units" value={p.price} />
            <InfoTile label="500 pcs" value={p.moq} />
            <InfoTile label="Quantity" value={p.quantity} />
            <InfoTile label="Payment" value={p.payment} />
            <InfoTile label="Payment" value={p.payment} />
          </div>

          <div className="grid grid-cols-5 gap-3 mb-4">
            <InfoTile label="Location" value={"Dubai"} />
            <InfoTile label="Shipping" value={p.shipping} />
            <InfoTile label="Shipping" value={p.shipping} />
            <button className="flex-1 col-span-2 bg-[#168D97ff] text-white py-3 rounded-xl  hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
             <MessageCircleIcon/> Chat Offer - Sale
            </button>
          </div>

          {/* Footer meta */}
          <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
            <span>
              {p.offers} Offers Received • {p.matches} AI Matches • Posted {p.posted}
            </span>
          </div>

        </article>
      ))}
    </div>
  );
}

function InfoTile({ label, value }) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3">
      {/* <div className="text-xs text-gray-600">{label}</div> */}
      <div className="font-semibold text-center text-gray-800">{label}</div>
    </div>
  );
}
