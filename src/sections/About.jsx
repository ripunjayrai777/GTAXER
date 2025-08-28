export default function About() {
  const team = [
    {
      name: "Alice Johnson",
      role: "CEO & Founder",
      image: "/team/team1.jpg",
    },
    {
      name: "Michael Smith",
      role: "Lead Developer",
      image: "/team/team2.jpg",
    },
    {
      name: "Sophia Lee",
      role: "UI/UX Designer",
      image: "/team/team3.jpg",
    },
    {
      name: "David Brown",
      role: "Marketing Head",
      image: "/team/team4.jpg",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are a creative digital agency dedicated to building 
            modern websites, mobile apps, and digital solutions 
            that help businesses grow. Our mission is to deliver 
            innovation with excellence and create meaningful 
            experiences for our clients.
          </p>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-10">
            Meet Our Team
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 text-center transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h4 className="text-lg font-bold">{member.name}</h4>
                <p className="text-blue-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
