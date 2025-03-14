import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-white font-bold text-xl">
            NutriVida
          </Link>
          
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-white hover:text-accent transition-colors">
              Inicio
            </Link>
            <Link to="/blog" className="text-white hover:text-accent transition-colors">
              Blog
            </Link>
            <Link to="/recetas" className="text-white hover:text-accent transition-colors">
              Recetas
            </Link>
            <Link to="/planes" className="text-white hover:text-accent transition-colors">
              Planes
            </Link>
            <Link to="/calculadora" className="text-white hover:text-accent transition-colors">
              Calculadora
            </Link>
            <Link to="/contacto" className="text-white hover:text-accent transition-colors">
              Contacto
            </Link>
            <Link to="/about" className="text-white hover:text-accent transition-colors">
              Nosotros
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
