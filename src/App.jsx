import About from './components/layout/About';
import Contact from './components/layout/Contact';
import Footer from './components/layout/Footer';
import Hero from './components/layout/Hero';
import Navbar from './components/layout/Navbar';
import Projects from './components/layout/Projects';
import { Skills } from './components/layout/Skills';

import Reveal from './components/ui/Reveal';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  return (
    <main className='bg-background text-foreground'>
      <Navbar />

      <Reveal>
        <Hero />
      </Reveal>

      <Reveal delay={100}>
        <About />
      </Reveal>

      <Reveal delay={100}>
        <Skills />
      </Reveal>

      <Reveal delay={100}>
        <Projects />
      </Reveal>

      <Reveal delay={100}>
        <Contact />
      </Reveal>

      <Footer />

      <ScrollToTop />
    </main>
  );
}

export default App;
