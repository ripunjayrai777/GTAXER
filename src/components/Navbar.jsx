// import { useState } from "react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 w-full bg-gray-100 shadow-md z-50">
//       <nav className="container mx-auto flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <a href="#home" className="text-2xl font-bold text-orange-600">
//           GTAXER
//         </a>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 font-medium">
//           <li><a href="#home" className="hover:text-orange-600">Home</a></li>
//           <li><a href="#services" className="hover:text-orange-600">Services</a></li>
//           <li><a href="#portfolio" className="hover:text-orange-600">Portfolio</a></li>
//           <li><a href="#about" className="hover:text-orange-600">About</a></li>
//           <li><a href="#contact" className="hover:text-orange-600">Contact</a></li>
//           <li><a href="#testimonials" className="hover:text-orange-600">Testimonials</a></li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           ☰
//         </button>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <ul className="absolute top-16 right-6 bg-gray-100 shadow-lg rounded-lg p-4 space-y-3 md:hidden">
//             <li><a href="#home" className="block hover:text-orange-600">Home</a></li>
//             <li><a href="#services" className="block hover:text-orange-600">Services</a></li>
//             <li><a href="#portfolio" className="block hover:text-orange-600">Portfolio</a></li>
//             <li><a href="#about" className="block hover:text-orange-600">About</a></li>
//             <li><a href="#contact" className="block hover:text-orange-600">Contact</a></li>
//             <li><a href="#testimonials" className="block hover:text-orange-600">Testimonials</a></li>
//           </ul>
//         )}
//       </nav>
//     </header>
//   );
// }


"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-orange-500/80 via-red-600/80 to-gray-900/80 backdrop-blur-md shadow-lg">
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white hover:scale-105 transition-transform"
        >
          GTAXER
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative text-gray-100 hover:text-orange-300 transition"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Menu with animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 right-6 left-6 bg-gradient-to-r from-orange-500/95 to-gray-900/95 backdrop-blur-lg shadow-xl rounded-xl p-6 space-y-4 text-center md:hidden"
            >
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block text-lg text-gray-100 hover:text-orange-300 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
