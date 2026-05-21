// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "features", label: "Features" },
    { id: "about", label: "About" },
    { id: "classes", label: "Classes" },
    { id: "pricing", label: "Pricing" },
    { id: "trainers", label: "Trainers" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-4"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          
          {/* LOGO */}
          <a
            href="#home"
            className={`text-2xl md:text-3xl font-black italic tracking-wide transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            FIT<span className="text-[#E11D48]">ELITE</span>
          </a>

          {/* === DESKTOP NAV === */}
          {/* مختفي تماماً في الموبايل، وبيظهر كـ flex من أول شاشات التابلت واللابتوب */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`relative text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? isScrolled
                        ? "text-black"
                        : "text-white"
                      : isScrolled
                      ? "text-gray-600 hover:text-black"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#E11D48] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* === DESKTOP BUTTON === */}
          <button className="hidden md:flex bg-[#E11D48] text-white px-5 lg:px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-700 transition-colors">
            Join Now
          </button>

          {/* === MOBILE MENU BUTTON === */}
          {/* بيظهر في الموبايل فقط، وبيختفي أول ما الشاشة تكبر */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden flex items-center justify-center z-[60] transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* === MOBILE MENU OVERLAY === */}
      {/* القائمة السوداء اللي بتفتح في الموبايل */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[55] flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setIsOpen(false)}
            className={`text-2xl font-bold transition-all duration-300 ${
              activeSection === link.id ? "text-[#E11D48]" : "text-white hover:text-[#E11D48]"
            }`}
          >
            {link.label}
          </a>
        ))}

        <button className="bg-[#E11D48] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-red-700 transition-all duration-300">
          Join Now
        </button>
      </div>
    </>
  );
};

export default Navbar;