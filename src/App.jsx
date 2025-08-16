import About from './components/about/About';
import Features from './components/features/Features';
import HeroSection from './components/hero/HeroSection';
import Navbar from './components/navbar/Navbar';
import Objectives from './components/objectives/Objectives';
import Partners from './components/partners/Partners';
import Schedule from './components/schedule/Schedule';
import Pricing from './components/pricing/Pricing';
import Services from './components/services/Services';
import Testimonials from './components/testinomials/Testimonials';
import NewsLetter from './components/newsLetter/NewsLetter';
import Footer from './components/footer/Footer';

function App() {
  return (
    <main>
      <div className="overflow-hidden">
        <Navbar />
        <section id="home">
          <HeroSection />
          <Partners />
        </section>
        <section id="objectives">
          <Objectives />
        </section>
        <section id="why_we">
          <Features />
        </section>
        <section id="services">
          <Schedule />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Pricing />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <Testimonials />
        </section>
        <section>
          <NewsLetter />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </main>
  );
}

export default App;
