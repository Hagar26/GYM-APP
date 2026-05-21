// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const categories = [
  "All",
  "Cardio",
  "Strength",
  "Flexibility",
  "Mind & Body",
];

const classesData = [
  {
    id: 1,
    title: "HIIT Challenge",
    category: "Cardio",
    instructor: "Alex Johnson",
    time: "Mon, Wed, Fri - 7:00 AM",
    duration: "45 min",
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 2,
    title: "Spin Class",
    category: "Cardio",
    instructor: "Jessica Miller",
    time: "Tue, Thu, Sat - 8:00 AM",
    duration: "45 min",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 3,
    title: "Endurance Run",
    category: "Cardio",
    instructor: "Ryan Smith",
    time: "Daily - 6:00 AM",
    duration: "30 min",
    img: "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 4,
    title: "Power Lifting",
    category: "Strength",
    instructor: "Mike Peterson",
    time: "Tue, Thu - 6:00 PM",
    duration: "60 min",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 5,
    title: "Muscle Builder",
    category: "Strength",
    instructor: "Chris Walker",
    time: "Mon, Wed - 5:00 PM",
    duration: "50 min",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 6,
    title: "Heavy Training",
    category: "Strength",
    instructor: "David Lee",
    time: "Fri - 7:00 PM",
    duration: "70 min",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 7,
    title: "Yoga Flow",
    category: "Flexibility",
    instructor: "Sarah Chen",
    time: "Mon, Wed, Fri - 6:00 PM",
    duration: "60 min",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 8,
    title: "Stretch Session",
    category: "Flexibility",
    instructor: "Emma Davis",
    time: "Daily - 9:00 AM",
    duration: "40 min",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 9,
    title: "Meditation Class",
    category: "Mind & Body",
    instructor: "Sophia White",
    time: "Sun - 8:00 PM",
    duration: "30 min",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 10,
    title: "Pilates Core",
    category: "Mind & Body",
    instructor: "Anna Green",
    time: "Tue, Thu - 4:00 PM",
    duration: "55 min",
    img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
  },
];

const Classes = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredClasses =
    activeTab === "All"
      ? classesData
      : classesData.filter((item) => item.category === activeTab);

  return (
    <section
      id="classes"
      className="py-24 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-[1700px] mx-auto px-4 md:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Our Classes
          </h2>

          <p className="text-gray-500 mt-4 text-sm md:text-base leading-relaxed">
            From high-intensity workouts to mindful movements,
            we offer a wide range of classes for all fitness levels.
          </p>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-red-600 text-white shadow-lg shadow-red-200"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-red-300 hover:text-red-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* CARDS */}
{/* CLASSES GRID */}
<div className="flex flex-row flex-wrap justify-center gap-6 w-full">

  {filteredClasses.map((cls) => (
    
    <div
      key={cls.id}
      className="w-[300px] bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group flex-shrink-0"
    >

      {/* IMAGE */}
      <div className="relative h-[220px] overflow-hidden">
        <img
          src={cls.img}
          alt={cls.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* CATEGORY */}
        <span
          className={`absolute top-4 left-4 px-4 py-1 rounded-full text-xs font-bold text-white ${
            cls.category === "Cardio"
              ? "bg-red-500"
              : cls.category === "Strength"
              ? "bg-orange-500"
              : cls.category === "Flexibility"
              ? "bg-teal-500"
              : "bg-purple-500"
          }`}
        >
          {cls.category}
        </span>

        {/* DURATION */}
        <span className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
          {cls.duration}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-6">

        <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
          {cls.title}
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          Instructor:
          <span className="font-semibold text-gray-700 ml-1">
            {cls.instructor}
          </span>
        </p>

        <div className="mt-5 pt-5 border-t border-gray-100 flex items-center gap-2 text-gray-500 text-sm">
          <span>⏱️</span>
          <span>{cls.time}</span>
        </div>

        <button className="w-full mt-6 bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300">
          Join Class
        </button>
      </div>

    </div>

  ))}
</div>
      </div>
    </section>
  );
};

export default Classes;