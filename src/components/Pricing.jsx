// eslint-disable-next-line no-unused-vars
import React from "react";

const Pricing = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      
  <div className="w-full max-w-[1600px] mx-auto px-8">        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          
          <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
            Pricing Plans
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-5">
            Membership Plans
          </h2>

          <p className="text-gray-500 mt-4 text-sm md:text-base leading-relaxed">
            Choose the perfect membership plan that fits your fitness
            goals, lifestyle, and budget.
          </p>
        </div>

        {/* PRICING CARDS */}
{/* PRICING CARDS */}
<div className="w-full flex flex-row flex-wrap lg:flex-nowrap justify-center items-stretch gap-8">

  {/* BASIC */}
  <div className="w-[340px] max-h-[600px] bg-white rounded-3xl p-8 border border-gray-200 flex flex-col shadow-sm hover:shadow-2xl transition-all duration-500">
    
    <div className="flex-1">
      <h3 className="text-2xl font-bold text-gray-900">
        Basic
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        Perfect for beginners starting their fitness journey.
      </p>

      <div className="mt-8 flex items-end gap-2">
        <span className="text-5xl font-black text-gray-900">
          $29
        </span>

        <span className="text-gray-400 text-sm mb-2">
          / month
        </span>
      </div>

      <ul className="space-y-4 mt-10">
        <li className="flex items-center gap-3">
          <span className="text-green-500 text-lg">✓</span>
          <span className="text-gray-600 text-sm">
            Gym access (6 AM - 10 PM)
          </span>
        </li>

        <li className="flex items-center gap-3">
          <span className="text-green-500 text-lg">✓</span>
          <span className="text-gray-600 text-sm">
            Basic fitness equipment
          </span>
        </li>

        <li className="flex items-center gap-3">
          <span className="text-green-500 text-lg">✓</span>
          <span className="text-gray-600 text-sm">
            Locker room access
          </span>
        </li>

        <li className="flex items-center gap-3">
          <span className="text-green-500 text-lg">✓</span>
          <span className="text-gray-600 text-sm">
            2 group classes weekly
          </span>
        </li>

        <li className="flex items-center gap-3">
          <span className="text-green-500 text-lg">✓</span>
          <span className="text-gray-600 text-sm">
            Fitness assessment
          </span>
        </li>
      </ul>
    </div>

    <button className="w-full mt-9 border-2 border-gray-900 text-gray-900 py-4 rounded-2xl font-bold hover:bg-gray-900 hover:text-white transition-all duration-300">
      Choose Basic
    </button>
  </div>

  {/* PREMIUM */}
  <div className="w-[380px] max-h-[600px] bg-white rounded-[32px] p-10 border-2 border-red-600 relative flex flex-col shadow-2xl lg:scale-105 lg:-translate-y-6 z-10">

    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
      <span className="bg-red-600 text-white px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg">
        Most Popular
      </span>
    </div>

    <div className="flex-1">
      <h3 className="text-3xl font-black text-gray-900">
        Premium
      </h3>

      <p className="text-gray-500 text-sm mt-3">
        Best choice for serious fitness enthusiasts.
      </p>

      <div className="mt-8 flex items-end gap-2">
        <span className="text-6xl font-black text-red-600">
          $59
        </span>

        <span className="text-gray-400 text-sm mb-3">
          / month
        </span>
      </div>

      <ul className="space-y-5 mt-12">
        <li className="flex items-center gap-3">
          <span className="text-red-600 text-lg">✓</span>
          <span className="text-gray-700 text-sm font-medium">
            24/7 gym access
          </span>
        </li>

        <li className="flex items-center gap-3">
          <span className="text-red-600 text-lg">✓</span>
          <span className="text-gray-700 text-sm font-medium">
            Full equipment access
          </span>
        </li>

        <li className="flex items-center gap-3">
          <span className="text-red-600 text-lg">✓</span>
          <span className="text-gray-700 text-sm font-medium">
            Unlimited group classes
          </span>
        </li>

        <li className="flex items-center gap-3">
          <span className="text-red-600 text-lg">✓</span>
          <span className="text-gray-700 text-sm font-medium">
            1 PT session monthly
          </span>
        </li>

        <li className="flex items-center gap-3">
          <span className="text-red-600 text-lg">✓</span>
          <span className="text-gray-700 text-sm font-medium">
            Nutrition consultation
          </span>
        </li>

        <li className="flex items-center gap-3">
          <span className="text-red-600 text-lg">✓</span>
          <span className="text-gray-700 text-sm font-medium">
            Sauna & spa access
          </span>
        </li>
      </ul>
    </div>

    <button className="w-full mt-3 bg-red-600 text-white py-4 rounded-2xl font-bold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-200">
      Choose Premium
    </button>
  </div>

  {/* ELITE */}
  <div className="w-[340px] max-h-[600px] bg-white rounded-3xl p-8 border border-gray-200 flex flex-col shadow-sm hover:shadow-2xl transition-all duration-500">

    <div className="flex-1">
      <h3 className="text-2xl font-bold text-gray-900">
        Elite
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        Advanced plan with elite premium benefits.
      </p>

      <div className="mt-8 flex items-end gap-2">
        <span className="text-5xl font-black text-gray-900">
          $99
        </span>

        <span className="text-gray-400 text-sm mb-2">
          / month
        </span>
      </div>

      <ul className="space-y-4 mt-10">
        <li className="flex items-center gap-3">
          <span className="text-green-500 text-lg">✓</span>
          <span className="text-gray-600 text-sm">
            24/7 gym access
          </span>
        </li>

        <li className="flex items-center gap-3">
          <span className="text-green-500 text-lg">✓</span>
          <span className="text-gray-600 text-sm">
            Full equipment access
          </span>
        </li>

        <li className="flex items-center gap-3">
          <span className="text-green-500 text-lg">✓</span>
          <span className="text-gray-600 text-sm">
            Unlimited group classes
          </span>
        </li>

        <li className="flex items-center gap-3">
          <span className="text-green-500 text-lg">✓</span>
          <span className="text-gray-600 text-sm">
            4 PT sessions monthly
          </span>
        </li>

        <li className="flex items-center gap-3">
          <span className="text-green-500 text-lg">✓</span>
          <span className="text-gray-600 text-sm">
            Monthly body composition
          </span>
        </li>

        <li className="flex items-center gap-3">
          <span className="text-green-500 text-lg">✓</span>
          <span className="text-gray-600 text-sm">
            Personal nutrition plan
          </span>
        </li>

        <li className="flex items-center gap-3">
          <span className="text-green-500 text-lg">✓</span>
          <span className="text-gray-600 text-sm">
            VIP amenities access
          </span>
        </li>
      </ul>
    </div>

    <button className="w-full mt-4 border-2 border-gray-900 text-gray-900 py-4 rounded-2xl font-bold hover:bg-gray-900 hover:text-white transition-all duration-300">
      Choose Elite
    </button>
  </div>
</div>
</div>
    </section>
  );
};

export default Pricing;