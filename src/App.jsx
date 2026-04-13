import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ClientWork from './components/ClientWork';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <ClientWork />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
