import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Footer from "./components/Footer";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Testimonials from "./sections/Testimonials";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Services/>
        <Portfolio/>
        <About/>
        <Testimonials/>
        <Contact/>
      </main>
      <Footer />
    </>
  );
}
