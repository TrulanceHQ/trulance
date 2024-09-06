import React from "react";
import { Button } from "flowbite-react";

// About component that includes Navbar and HeroSection
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
};

// Navbar component with fixed position and transparency
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-1 px-6 bg-transparent w-full z-10">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/about/logo.png" alt="Logo" className="h-8 w-20 mt-3" />
      </div>

      {/* Links */}
      <div className="hidden md:flex space-x-8">
        <a href="#about" className="text-white hover:text-blue-500 transition me-5">
          About Us
        </a>
        <a href="#products" className="text-white hover:text-blue-500 transition">
          Our Products
        </a>
      </div>

      {/* Contact Us Button */}
      <Button
        className="bg-transparent text-green-400 border border-green-400 rounded-full px-4 py-1 mt-2 hover:bg-green-400 hover:text-white transition-colors duration-300 ease-in-out"
        color="light"
      >
        Contact Us
      </Button>
    </nav>
  );
};

// Hero Section with background image and spacing adjustment
const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center text-center py-20"
      style={{ backgroundImage: `url('/about/aboutbg.png')`, height: '500px', paddingTop: '100px' }} // Extra padding to account for fixed navbar
    >
      <div className="text-white" style={{ marginTop: '7%' }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
          Innovative solutions from concept to completion
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Digitally transform your business and online presence with our solutions
        </p>
      </div>
    </section>
  );
};

export default About;
