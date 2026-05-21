// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const trainersData = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "CrossFit Specialist",
    desc: "10+ years experience in CrossFit and functional training.",
    img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800",
  },

  {
    id: 2,
    name: "Sarah Chen",
    role: "Yoga Instructor",
    desc: "Certified yoga teacher with expertise in multiple disciplines.",
    img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800",
  },

  {
    id: 3,
    name: "Mike Peterson",
    role: "Strength Coach",
    desc: "Former athlete specializing in strength and power development.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800",
  },

  {
    id: 4,
    name: "Emma Wilson",
    role: "Pilates Expert",
    desc: "Certified pilates instructor focusing on core strength and flexibility.",
    img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800",
  },
];

const Trainers = () => {
  return (
    <section
      id="trainers"
      className="py-24 bg-gray-50 overflow-hidden"
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">

          <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
            Professional Coaches
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-5">
            Meet Our Expert Trainers
          </h2>

          <p className="text-gray-500 mt-4 text-sm md:text-base leading-relaxed">
            Our certified professionals are here to help you
            achieve your fitness goals faster and smarter.
          </p>
        </div>

        {/* TRAINERS */}
        <div className="flex flex-wrap justify-center gap-6">

          {trainersData.map((trainer) => (

            <div
              key={trainer.id}
              className="w-[260px] bg-white rounded-[30px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >

              {/* IMAGE */}
              <div className="h-[260px] overflow-hidden">

                <img
                  src={trainer.img}
                  alt={trainer.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col flex-1 text-center">

                <h3 className="text-xl font-bold text-gray-900">
                  {trainer.name}
                </h3>

                <p className="text-xs font-bold text-red-600 uppercase tracking-wider mt-2">
                  {trainer.role}
                </p>

                <p className="text-xs text-gray-500 mt-3 leading-relaxed flex-1">
                  {trainer.desc}
                </p>

                {/* SOCIAL ICONS */}
                <div className="flex justify-center items-center gap-4 pt-5 mt-5 border-t border-gray-100">

                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-red-600 hover:text-white transition-all duration-300"
                  >
                    <FaInstagram size={15} />
                  </a>

                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-red-600 hover:text-white transition-all duration-300"
                  >
                    <FaFacebookF size={14} />
                  </a>

                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-red-600 hover:text-white transition-all duration-300"
                  >
                    <FaTwitter size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-16 text-center">

          <button className="bg-red-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-200">
            Book a Training Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trainers;