import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Facilities from './components/Facilities/Facilities';
import Activities from './components/Activities/Activities';
import Membership from './components/Membership/Membership';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Facilities />
        <Activities />
        <Membership />
      </main>
      <Footer />
    </>
  );
}

export default App;
