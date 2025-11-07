import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
