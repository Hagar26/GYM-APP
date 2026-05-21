// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const featuresData = [
  {
    id: 0,
    title: "Cutting-Edge Equipment",
    desc: "Experience fitness with our state-of-the-art equipment featuring the latest technology, ergonomic designs, and premium quality.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200",
  },
  {
    id: 1,
    title: "Accessible 24/7",
    desc: "Your fitness journey doesn't stop when the sun sets. Enjoy unlimited access to our facilities whenever inspiration strikes.",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200",
  },
  {
    id: 2,
    title: "Elite Personal Training",
    desc: "Our certified trainers bring expertise and personalized attention to help you achieve goals faster and safer.",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200",
  },
  {
    id: 3,
    title: "Luxury Amenities",
    desc: "Enjoy premium amenities including spa-quality changing rooms, towel service, and juice bars to refresh post-workout.",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200",
  },
  {
    id: 4,
    title: "Customized Programs",
    desc: "Achieve your specific fitness goals with our tailored programs that adapt to your progress and pace over time.",
    img: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1200",
  },
  {
    id: 5,
    title: "Fitness App Integration",
    desc: "Track your progress, book classes, and connect with trainers through our dedicated smart fitness platform.",
    img: "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=1200",
  },
];

// بيانات الإحصائيات
const statsData = [
  { value: "50+", label: "Fitness Classes" },
  { value: "24/7", label: "Access" },
  { value: "15+", label: "Expert Trainers" },
  { value: "1000+", label: "Happy Members" },
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-red-600 font-bold tracking-widest text-xs uppercase bg-red-50 px-4 py-2 rounded-full">
            Premium Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Why Choose <span className="tracking-tight">FITELITE</span>?
          </h2>
        </div>

        {/* MAIN FEATURES GRID */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-10 items-center">
          {/* LEFT SIDE: List */}
          <div className="space-y-2">
            {featuresData.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveFeature(item.id)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  activeFeature === item.id
                    ? "bg-white border-gray-150 shadow-xl translate-x-2"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg shrink-0 ${activeFeature === item.id ? "bg-red-50 text-red-600" : "bg-gray-100 text-gray-500"}`}>
                    ⚙️
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed line-clamp-1">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Image */}
          <div className="relative h-[700px] rounded-3xl overflow-hidden shadow-2xl group">
            <img
              src={featuresData[activeFeature].img}
              alt={featuresData[activeFeature].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-10 text-white">
              <h3 className="text-3xl font-bold mb-3">{featuresData[activeFeature].title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">{featuresData[activeFeature].desc}</p>
            </div>
          </div>
        </div>

        {/* STATS SECTION (الجديد) */}
        <div className="grid grid-cols-4 md:grid-cols-4 gap-2 mt-20">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center hover:shadow-md transition-shadow"
            >
              <h4 className="text-2xl md:text-3xl font-black text-[#E11D48]">
                {stat.value}
              </h4>
              <p className="text-gray-600 font-bold mt-2 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#E11D48] text-white px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-red-700 transition-all shadow-lg flex items-center gap-2">
            Explore Our Membership Options →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Features;