import Footer from './Footer';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';

const Main = () => {
  return (
    <main className='w-full h-full flex flex-col items-center justify-center pt-18'>
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
};

export default Main;
