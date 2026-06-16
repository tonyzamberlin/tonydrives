import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Skills />
      <Experience />
      <Testimonials />
      <Gallery />
      <QuoteForm />
      <Contact />
      <Footer />
    </div>
  );
}
