import HeroSection from './components/hero/HeroSection';
import Navbar from './components/navbar/Navbar';
import Objectives from './components/objectives/Objectives';
import Partners from './components/partners/Partners';

import Pricing from './components/pricing/Pricing';

import Testimonials from './components/testinomials/Testimonials';
import NewsLetter from './components/newsLetter/NewsLetter';
import Footer from './components/footer/Footer';
import AboutUs from './components/about/AboutUs';
import WhyWeAre from './components/why-we-are/why-we-are';
import Services from './components/services/Services';
import DigitalServices from './components/digital-services/Digital-Services';

function App() {
  return (
    <main>
      <div className="overflow-hidden">
        <Navbar />
        <section id="home">
          <HeroSection />
        </section>
        <section>
          <Partners />
        </section>
        <section id="objectives">
          <Objectives />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="why_we">
          <WhyWeAre />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="digital-services">
          <DigitalServices />
        </section>
        <section id="pricing">
          <Pricing />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="newsletter">
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
