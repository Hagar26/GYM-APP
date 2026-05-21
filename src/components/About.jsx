// eslint-disable-next-line no-unused-vars
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              About FitLife
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Founded in 2010, FitLife has grown to become the premier
              fitness destination in the region. Our mission is to help
              individuals of all fitness levels achieve their health and
              wellness goals in a supportive and motivating environment.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              We believe that fitness is not just about physical strength,
              but also about mental well-being and creating a balanced
              lifestyle. That's why we offer a comprehensive approach to
              fitness that addresses all aspects of health.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-y-8 gap-x-10 pt-4">
              
              <div>
                <span className="block text-3xl md:text-4xl font-black text-red-600">
                  10+
                </span>

                <span className="text-xs font-bold text-gray-500 uppercase mt-1 block tracking-wider">
                  Years of Experience
                </span>
              </div>

              <div>
                <span className="block text-3xl md:text-4xl font-black text-red-600">
                  15+
                </span>

                <span className="text-xs font-bold text-gray-500 uppercase mt-1 block tracking-wider">
                  Expert Trainers
                </span>
              </div>

              <div>
                <span className="block text-3xl md:text-4xl font-black text-red-600">
                  50+
                </span>

                <span className="text-xs font-bold text-gray-500 uppercase mt-1 block tracking-wider">
                  Weekly Classes
                </span>
              </div>

              <div>
                <span className="block text-3xl md:text-4xl font-black text-red-600">
                  5000+
                </span>

                <span className="text-xs font-bold text-gray-500 uppercase mt-1 block tracking-wider">
                  Happy Members
                </span>
              </div>
            </div>

            {/* BUTTON */}
            <div className="pt-4">
              <button className="bg-red-600 text-white font-bold px-8 py-3 rounded-full hover:bg-red-700 transition-all text-sm shadow-lg shadow-red-200">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            
            {/* IMAGE CONTAINER */}
            <div className="relative w-full max-w-[520px]">
              
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200"
                  alt="Fitness space"
                  className="w-full h-[500px] md:h-[580px] object-cover"
                />
              </div>

              {/* FLOATING CARD */}
              <div className="absolute bottom-6 left-6 md:-left-10 bg-red-600 text-white p-6 rounded-2xl shadow-2xl w-[260px] border-4 border-white">
                
                <h4 className="font-bold text-lg">
                  Premium Facilities
                </h4>

                <p className="text-sm text-red-50 mt-2 leading-relaxed opacity-90">
                  15,000 sq ft of workout space equipped with premium
                  training modules.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BUTTON */}
        <div className="mt-24 text-center">
          <button className="inline-flex items-center gap-2 bg-red-600 text-white font-bold px-10 py-4 rounded-full hover:bg-red-700 transition-all shadow-lg shadow-red-200 text-sm">
            Explore Our Membership Options
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;