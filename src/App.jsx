import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import RecetasSaludables from './pages/RecetasSaludables';
import PlanesNutricionales from './pages/PlanesNutricionales';
import Calculadora from './pages/Calculadora';
import Contacto from './pages/Contacto';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/recetas" element={<RecetasSaludables />} />
            <Route path="/planes" element={<PlanesNutricionales />} />
            <Route path="/calculadora" element={<Calculadora />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
