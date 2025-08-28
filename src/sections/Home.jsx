export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-orange-500 to-black text-white"
    >
      <h1 className="text-5xl font-bold mb-4">Welcome to Our Agency</h1>
      <p className="text-lg max-w-xl">
        We build modern websites, apps, and digital experiences to grow your business.
      </p>
      <a
        href="#services"
        className="mt-6 px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
      >
        Explore Services
      </a>
    </section>
  );
}
