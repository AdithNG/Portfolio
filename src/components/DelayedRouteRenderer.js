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
    const timeout = setTimeout(() => {
      setRenderLocation(location); // switch route
      window.scrollTo(0, 0);        // then reset scroll
      AOS.refreshHard();           // then re-init animations
    }, 100); // small delay still applies

    return () => clearTimeout(timeout);
  }, [location]);

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
