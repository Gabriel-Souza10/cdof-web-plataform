import Header from "./components/home/Header";
import Hero from "./components/home/Hero";
import Metrics from "./components/home/Metrics";
import About from "./components/home/About";
import Testimonials from "./components/home/Testimonials";
import Units from "./components/home/Units";
import Footer from "./components/home/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Metrics />
      <About />
      <Testimonials />
      <Units />
      <Footer />
    </main>
  );
}
