// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Classes from './components/Classes';
import Pricing from './components/Pricing';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white antialiased selection:bg-red-600 selection:text-white">
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="features"><Features /></div>
      <div id="about"><About /></div>
      <div id="classes"><Classes /></div>
      <div id="pricing"><Pricing /></div>
      <div id="trainers"><Trainers /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;