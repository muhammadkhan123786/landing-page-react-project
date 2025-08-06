import About from './components/about/About';
import Features from './components/features/Features';
import HeroSection from './components/hero/HeroSection';
import Navbar from './components/navbar/Navbar';
import Objectives from './components/objectives/Objectives';
import Partners from './components/partners/Partners';
import Schedule from './components/schedule/Schedule';

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
      </div>
    </main>
  );
}

export default App;
