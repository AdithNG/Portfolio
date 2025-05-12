import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProgrammingPortfolio from './pages/ProgrammingPortfolio';
import GamePortfolio from './pages/GamePortfolio';
import About from './pages/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programming" element={<ProgrammingPortfolio />} />
        <Route path="/games" element={<GamePortfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Contact /> {/* Add this below Routes to show on all pages */}
    </Router>
  );
}
export default App;
