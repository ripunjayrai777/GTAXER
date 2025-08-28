import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-100 shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-orange-600">
          Agency
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="#home" className="hover:text-orange-600">Home</a></li>
          <li><a href="#services" className="hover:text-orange-600">Services</a></li>
          <li><a href="#portfolio" className="hover:text-orange-600">Portfolio</a></li>
          <li><a href="#about" className="hover:text-orange-600">About</a></li>
          <li><a href="#contact" className="hover:text-orange-600">Contact</a></li>
          <li><a href="#testimonials" className="hover:text-orange-600">Testimonials</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-16 right-6 bg-gray-100 shadow-lg rounded-lg p-4 space-y-3 md:hidden">
            <li><a href="#home" className="block hover:text-orange-600">Home</a></li>
            <li><a href="#services" className="block hover:text-orange-600">Services</a></li>
            <li><a href="#portfolio" className="block hover:text-orange-600">Portfolio</a></li>
            <li><a href="#about" className="block hover:text-orange-600">About</a></li>
            <li><a href="#contact" className="block hover:text-orange-600">Contact</a></li>
            <li><a href="#testimonials" className="block hover:text-orange-600">Testimonials</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
}
