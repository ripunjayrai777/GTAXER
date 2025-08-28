import { Briefcase, Code, Smartphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Briefcase className="w-10 h-10 text-orange-600" />,
      title: "Business Strategy",
      desc: "Helping you plan, scale, and grow with data-driven insights."
    },
    {
      icon: <Code className="w-10 h-10 text-orange-600" />,
      title: "Web Development",
      desc: "Building modern, responsive, and scalable websites and web apps."
    },
    {
      icon: <Smartphone className="w-10 h-10 text-orange-600" />,
      title: "Mobile Apps",
      desc: "Custom mobile applications with seamless user experiences."
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
