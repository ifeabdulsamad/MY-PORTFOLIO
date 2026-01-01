import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-slate-300">
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#120040] via-[#0f172a] to-[#120040]" />
        <div className="absolute top-20 left-[10%] w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <Skills /> */}
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div >
  );
}

export default App;
