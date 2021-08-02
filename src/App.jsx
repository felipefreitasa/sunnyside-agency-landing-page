import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import './App.scss';
import Banner from './components/Banner/Banner';
import Transform from './components/Transform/Transform';
import Navbar from "./components/Navbar/Navbar";
import Stand from './components/Stand/Stand';
import Graphic from './components/Graphic/Graphic';
import Clients from './components/Clients/Clients';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

function App() {

  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Transform />
      <Stand />
      <Graphic />
      <Clients />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
