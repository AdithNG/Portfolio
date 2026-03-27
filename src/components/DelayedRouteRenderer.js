import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import Home from '../pages/Home';
import ProgrammingPortfolio from '../pages/ProgrammingPortfolio';
import GamePortfolio from '../pages/GamePortfolio';
import About from '../pages/About';

function DelayedRouteRenderer({ location }) {
  const [renderLocation, setRenderLocation] = useState(location);

  useEffect(() => {
    setRenderLocation(location);
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const frame = window.requestAnimationFrame(() => {
      AOS.refreshHard();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [renderLocation]);

  return (
    <Routes location={renderLocation}>
      <Route path="/" element={<Home />} />
      <Route path="/programming" element={<ProgrammingPortfolio />} />
      <Route path="/games" element={<GamePortfolio />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default DelayedRouteRenderer;
