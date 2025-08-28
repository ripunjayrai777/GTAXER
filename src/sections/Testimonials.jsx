export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, StartupX",
      feedback: "Amazing service! The team was professional and delivered beyond expectations.",
      image: "/clients/client1.jpg",
    },
    {
      name: "Sarah Williams",
      role: "Founder, DesignHub",
      feedback: "Highly recommend! Great communication and top-notch results.",
      image: "/clients/client2.jpg",
    },
    {
      name: "Michael Brown",
      role: "Marketing Head, Brandify",
      feedback: "They transformed our online presence. Truly impressed!",
      image: "/clients/client3.jpg",
    },
    {
      name: "Emily Johnson",
      role: "Product Manager, AppFlow",
      feedback: "Fantastic work! The website looks stunning and performs flawlessly.",
      image: "/clients/client4.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-12">What Our Clients Say</h2>

        {/* Infinite Scroll Wrapper */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll gap-8">
            {[...testimonials, ...testimonials].map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 w-80 flex-shrink-0"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-gray-800">{t.name}</h4>
                    <p className="text-sm text-blue-600">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">“{t.feedback}”</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
