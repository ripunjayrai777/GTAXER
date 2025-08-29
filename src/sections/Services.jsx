// import { Briefcase, Code, Smartphone } from "lucide-react";

// export default function Services() {
//   const services = [
//     {
//       icon: <Briefcase className="w-10 h-10 text-orange-600" />,
//       title: "Business Strategy",
//       desc: "Helping you plan, scale, and grow with data-driven insights."
//     },
//     {
//       icon: <Code className="w-10 h-10 text-orange-600" />,
//       title: "Web Development",
//       desc: "Building modern, responsive, and scalable websites and web apps."
//     },
//     {
//       icon: <Smartphone className="w-10 h-10 text-orange-600" />,
//       title: "Mobile Apps",
//       desc: "Custom mobile applications with seamless user experiences."
//     },
//   ];

//   return (
//     <section id="services" className="py-20 bg-gray-100">
//       <div className="container mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Services</h2>
//         <div className="grid md:grid-cols-3 gap-10">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
//             >
//               <div className="flex justify-center mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//               <p className="text-gray-600">{service.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { Briefcase, Code, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: <Briefcase className="w-10 h-10 text-orange-400" />,
      title: "Business Strategy",
      desc: "Helping you plan, scale, and grow with data-driven insights.",
    },
    {
      icon: <Code className="w-10 h-10 text-orange-400" />,
      title: "Web Development",
      desc: "Building modern, responsive, and scalable websites and web apps.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-orange-400" />,
      title: "Mobile Apps",
      desc: "Custom mobile applications with seamless user experiences.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 bg-gradient-to-r from-orange-500 via-red-600 to-gray-900 text-gray-100 overflow-hidden"
    >
      {/* background blur orbs */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 hover:scale-105 hover:shadow-orange-400/40 transition transform"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full shadow-lg">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-200">
                {service.title}
              </h3>
              <p className="text-gray-200">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
