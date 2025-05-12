import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import DelayedRouteRenderer from './components/DelayedRouteRenderer';

function AppWrapper() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <DelayedRouteRenderer location={location} />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router basename="/Portfolio">
      <AppWrapper />
    </Router>
  );
}

export default App;
