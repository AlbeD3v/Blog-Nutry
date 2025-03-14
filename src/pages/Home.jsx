const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Transforma tu vida con nutrición inteligente
          </h1>
          <p className="text-xl mb-8">
            Descubre el poder de una alimentación saludable y equilibrada
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-accent hover:text-white transition-colors">
            Comenzar Ahora
          </button>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Asesoría Nutricional</h3>
            <p className="text-gray-600">
              Planes personalizados adaptados a tus necesidades y objetivos específicos.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Recetas Saludables</h3>
            <p className="text-gray-600">
              Descubre deliciosas recetas que te ayudarán a mantener una dieta equilibrada.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Seguimiento Personal</h3>
            <p className="text-gray-600">
              Acompañamiento continuo en tu proceso de transformación.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-gray-100 py-12 rounded-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Testimonios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Gracias a NutriVida he logrado alcanzar mis objetivos de salud y bienestar."
              </p>
              <p className="font-semibold">- María García</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Los planes nutricionales son excelentes y muy fáciles de seguir."
              </p>
              <p className="font-semibold">- Juan Pérez</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-secondary text-white py-12 rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para comenzar tu transformación?
          </h2>
          <p className="text-xl mb-8">
            Únete a nuestra comunidad y comienza tu viaje hacia una vida más saludable
          </p>
          <button className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors">
            Contactar Ahora
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
