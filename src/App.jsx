import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react'; // Import Suspense from react
import Header from './components/Header';

// Lazy load route components
const Home = lazy(() => import('./pages/Home'));
const OilChange = lazy(() => import('./pages/OilChange'));
const AutoRepair = lazy(() => import('./pages/AutoRepair'));
const AutoMaintenance = lazy(() => import('./pages/AutoMaintenance'));
const ExhaustMufflers = lazy(() => import('./pages/ExhaustMufflers'));
const Transmission = lazy(() => import('./pages/Transmission'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div className="p-6 text-ultra-blue text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/oil-change" element={<OilChange />} />
          <Route path="/services/auto-repair" element={<AutoRepair />} />
          <Route path="/services/auto-maintenance" element={<AutoMaintenance />} />
          <Route path="/services/exhaust-mufflers" element={<ExhaustMufflers />} />
          <Route path="/services/transmission" element={<Transmission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;