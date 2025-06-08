import React from 'react';
import AppBar from './components/AppBar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Packages from './components/Packages .jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';

function App() {
  return (
    <div>
      <AppBar />
      <Home />
      <About />
      <Gallery />
      <Packages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;