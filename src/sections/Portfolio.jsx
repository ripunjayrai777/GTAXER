export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Website",
      image: "/portfolio/project1.jpg",
    },
    {
      title: "Mobile App UI",
      image: "/portfolio/project2.jpg",
    },
    {
      title: "Business Dashboard",
      image: "/portfolio/project3.jpg",
    },
    {
      title: "Portfolio Design",
      image: "/portfolio/project4.jpg",
    },
    {
      title: "Marketing Landing Page",
      image: "/portfolio/project5.jpg",
    },
    {
      title: "Healthcare Platform",
      image: "/portfolio/project6.jpg",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Portfolio</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-white text-xl font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
