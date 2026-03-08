import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import CV from './components/CV';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <div className="section-bg section-bg--white">
        <div className="reveal"><About /></div>
      </div>
      <div className="section-bg section-bg--lavender">
        <div className="reveal"><Projects /></div>
      </div>
      <div className="section-bg section-bg--slate">
        <div className="reveal"><CV /></div>
      </div>
      <div className="section-bg section-bg--deep">
        <div className="reveal"><Contact /></div>
      </div>
      <Footer />
    </>
  );
}
