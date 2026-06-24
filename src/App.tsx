import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import CustomerAppreciation from './components/CustomerAppreciation';
import Gallery from './components/Gallery';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-navy-900 focus:font-bold focus:rounded-lg"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Skills />
        <Experience />
        <Testimonials />
        <CustomerAppreciation />
        <Gallery />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
