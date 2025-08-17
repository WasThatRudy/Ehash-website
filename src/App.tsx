import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter">
      <Header />
      <div className="min-h-screen snap-start">
        <Hero />
      </div>
      <div className="min-h-screen snap-start">
        <Projects />
      </div>
      <div className="min-h-screen snap-start">
        <TechStack />
      </div>
      <div className="min-h-screen snap-start">
        <Team />
      </div>
      <div className="min-h-screen snap-start">
        <Testimonials />
      </div>
      <div className="min-h-screen snap-start">
        <Contact />
      </div>
      <div className="min-h-screen snap-start">
        <Footer />
      </div>
    </div>
  );
}

export default App;