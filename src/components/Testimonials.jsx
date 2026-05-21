/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const testimonialsData = [
  {
    id: 0,
    name: "Jennifer K.",
    role: "Member since 2020",
    stars: 5,
    comment:
      "FitLife completely transformed my fitness journey. The trainers are knowledgeable and the community is so supportive!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 1,
    name: "Robert L.",
    role: "Member since 2022",
    stars: 5,
    comment:
      "The facility is state-of-the-art and always clean. 24/7 access fits perfectly into my hectic schedule.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = testimonialsData[currentIndex];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
 <div className="text-center mb-12">
   <h2 className="text-4xl font-extrabold tracking-tight">What Our Members Say</h2>
    <p className="text-gray-500 mt-3 text-md">Don't just take our word for it - hear from our satisfied members</p> 
    </div>

        {/* MAIN WRAPPER - IMPORTANT */}
        <div className="flex flex-row flex-nowrap items-stretch">

          {/* LEFT BOX (IMAGE) */}
          <div className="w-[220px] flex-shrink-0 bg-white  shadow-md  p-4 flex flex-col items-center text-center">
            <img
              src={data.img}
              alt={data.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-red-400"
            />

            <h3 className="mt-3 font-bold text-sm">{data.name}</h3>
            <p className="text-[11px] text-gray-400">{data.role}</p>

            <div className="text-yellow-500 text-xs mt-2">
              {"★".repeat(data.stars)}
            </div>
          </div>

          {/* RIGHT BOX (TEXT) */}
          <div className="flex-1 bg-red-100  p-6 flex items-center">
            <p className="text-gray-800 text-base md:text-lg font-medium leading-relaxed">
              {data.comment}
            </p>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? testimonialsData.length - 1 : prev - 1
              )
            }
            className="px-4 py-2 border rounded-full"
          >
            ←
          </button>

          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === testimonialsData.length - 1 ? 0 : prev + 1
              )
            }
            className="px-4 py-2 border rounded-full"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}