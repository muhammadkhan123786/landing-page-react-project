import HeroSection from './components/hero/HeroSection';
import Navbar from './components/navbar/Navbar';
import Partners from './components/partners/Partners';

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <HeroSection />
        <Partners />
      </div>
    </main>
  );
}

export default App;
