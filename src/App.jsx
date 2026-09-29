import About from './components/layout/About';
import Contact from './components/layout/Contact';
import Footer from './components/layout/Footer';
import Hero from './components/layout/Hero';
import Navbar from './components/layout/Navbar';
import Projects from './components/layout/Projects';
import { Skills } from './components/layout/Skills';

function App() {
  return (
    <main className='bg-background text-foreground space-y-4'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
