import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NutriVida</h3>
            <p className="text-sm">
              Transformando vidas a través de la nutrición saludable y el bienestar integral.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/recetas" className="hover:text-accent transition-colors">Recetas Saludables</Link>
              </li>
              <li>
                <Link to="/planes" className="hover:text-accent transition-colors">Planes Nutricionales</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li>Email: contacto@nutrivida.com</li>
              <li>Teléfono: (123) 456-7890</li>
              <li>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="hover:text-accent transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="hover:text-accent transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="hover:text-accent transition-colors">
                    Twitter
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} NutriVida. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
