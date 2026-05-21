// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

// روابط صور حية وشغالة من Unsplash مخصصة للـ Gym والـ Workouts
const backgroundImages = [
  'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1600',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1600'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // السلايدر يغير الخلفية تلقائياً كل 3 ثواني (3000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-cover bg-center flex items-center px-6 md:px-16 pt-24 transition-all duration-1000 ease-in-out"
      style={{ 
        backgroundImage: ` url('${backgroundImages[currentImageIndex]}')` 
      }}
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start lg:items-center pt-8 mb-10">
        
        {/* Left Side: Typography & Buttons */}
        <div className="lg:col-span-7 space-y-5 text-white ml-12">
          <h1 className="text-6xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
            Transform <br />
            Your <span className="text-[#E11D48]">Body</span> <br />
            Transform Your <span className="text-[#E11D48]">Life</span>
          </h1>
          
          <p className="text-gray-300 text-sm max-w-lg font-normal leading-relaxed">
            Join FITELITE and experience premium fitness with state-of-the-art facilities, 
            expert trainers, and a supportive community committed to your success.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-2">
            <button className="bg-[#E11D48] text-white px-6 py-3 rounded-full font-bold text-xs md:text-sm hover:bg-red-700 transition-all shadow-lg shadow-red-900/30">
              Explore Classes
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-bold text-xs md:text-sm hover:bg-white hover:text-black transition-all">
              View Membership
            </button>
          </div>

          {/* Members Avatars Counter */}
          <div className="flex items-center gap-3 pt-4">
            <div className="flex -space-x-3">
              {[
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100',
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=100'
              ].map((url, i) => (
                <img 
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-black object-cover" 
                  src={url} 
                  alt="member"
                />
              ))}
            </div>
            <div>
              <p className="text-xs md:text-sm font-black">1,000+ members</p>
              <p className="text-[10px] md:text-xs text-gray-400">Join our fitness community</p>
            </div>
          </div>
        </div>

  {/* Right Side: Why Choose Us (مرفوع لفوق، مائل لليمين ومكفول الحجم) */}
<div className="lg:col-span-5 flex lg:mt-10  justify-end mr-12 absolute   lg:right-20 lg:w-auto ">
  {/* هنا كبرنا الـ max-w من 360px إلى 390px عشان الحجم يكبر شوية صغيرين */}
<div className="w-full lg:w-[400px] flex-shrink-0 bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 text-white shadow-2xl">    {/* Header with dots */}
<div className="flex justify-between items-center mb-4">
        <h3 className="text-base md:text-lg font-bold tracking-tight">Why Choose Us</h3>
      <div className="flex gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
      </div>
    </div>

    {/* List Items */}
    <div className="space-y-4">
      {/* Item 1 */}
      <div className="flex items-start gap-3">
        <div className="bg-[#E11D48]/20 text-[#E11D48] p-1.5 rounded-xl mt-0.5 text-xs flex items-center justify-center w-7 h-7">
          🏋️‍♂️
        </div>
        <div>
          <h4 className="font-bold text-xs md:text-sm">Premium Equipment</h4>
          <p className="text-[10px] md:text-xs text-gray-300 mt-0.5 leading-relaxed">Access to the latest fitness technology and high-quality equipment.</p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex items-start gap-3">
        <div className="bg-[#E11D48]/20 text-[#E11D48] p-1.5 rounded-xl mt-0.5 text-xs flex items-center justify-center w-7 h-7">
          🎓
        </div>
        <div>
          <h4 className="font-bold text-xs md:text-sm">Expert Trainers</h4>
          <p className="text-[10px] md:text-xs text-gray-300 mt-0.5 leading-relaxed">Certified professionals to guide your fitness journey.</p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="flex items-start gap-3">
        <div className="bg-[#E11D48]/20 text-[#E11D48] p-1.5 rounded-xl mt-0.5 text-xs flex items-center justify-center w-7 h-7">
          🕒
        </div>
        <div>
          <h4 className="font-bold text-xs md:text-sm">Flexible Hours</h4>
          <p className="text-[10px] md:text-xs text-gray-300 mt-0.5 leading-relaxed">Open 24/7 to fit your busy schedule.</p>
        </div>
      </div>
    </div>

    {/* Bottom Link */}
    <div className="mt-5 pt-3 border-t border-white/10">
      <a href="#features" className="text-xs font-semibold text-[#E11D48] flex items-center gap-1 hover:underline">
        Discover all features <span>→</span>
      </a>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;