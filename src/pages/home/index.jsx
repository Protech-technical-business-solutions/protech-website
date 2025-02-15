// App.js
import React from 'react';
import HeroCarousel from './HeroCarousel';
import MainServiceSection from './MainServiceSection';
import PicturedServiceSection from './picturedServiceSection';
import BestServiceSection from './bestServiceSection';
import Features from './Features';
import './home.css';

function App() {
  return (
    <>
      <HeroCarousel />
      <Features />
      <MainServiceSection />
      <PicturedServiceSection />
      <BestServiceSection />
    </>
  );
}

export default App;