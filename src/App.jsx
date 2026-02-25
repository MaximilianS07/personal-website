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
      <div className="reveal"><About /></div>
      <div className="reveal"><Projects /></div>
      <div className="reveal"><CV /></div>
      <div className="reveal"><Contact /></div>
      <Footer />
    </>
  );
}
