import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';

import { Skills } from './components/sections/Skills';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

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
        <Projects />
      </Reveal>

      <Reveal delay={100}>
        <About />
      </Reveal>

      <Reveal delay={100}>
        <Skills />
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
