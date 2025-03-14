const About = () => {
  const equipo = [
    {
      id: 1,
      nombre: "Dra. María López",
      cargo: "Nutricionista Principal",
      descripcion: "Especialista en nutrición deportiva con más de 10 años de experiencia."
    },
    {
      id: 2,
      nombre: "Dr. Juan Martínez",
      cargo: "Especialista en Nutrición Clínica",
      descripcion: "Experto en trastornos alimenticios y nutrición terapéutica."
    },
    {
      id: 3,
      nombre: "Lic. Ana García",
      cargo: "Nutricionista Deportiva",
      descripcion: "Especializada en planes de nutrición para atletas de alto rendimiento."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">
        Sobre Nosotros
      </h1>

      {/* Sección de Historia */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Nuestra Historia
          </h2>
          <p className="text-gray-600 mb-4">
            NutriVida nació en 2020 con la misión de transformar la vida de las personas a través de la nutrición saludable.
            Desde entonces, hemos ayudado a miles de personas a alcanzar sus objetivos de salud y bienestar.
          </p>
          <p className="text-gray-600">
            Nuestro enfoque integral combina la ciencia de la nutrición con un acompañamiento personalizado,
            garantizando resultados sostenibles y una mejor calidad de vida para nuestros clientes.
          </p>
        </div>
      </section>

      {/* Sección de Misión y Visión */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Nuestra Misión
            </h2>
            <p className="text-gray-600">
              Proporcionar asesoramiento nutricional de calidad y personalizado,
              ayudando a nuestros clientes a desarrollar hábitos alimenticios saludables
              y sostenibles que mejoren su calidad de vida.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Nuestra Visión
            </h2>
            <p className="text-gray-600">
              Ser reconocidos como el referente principal en asesoramiento nutricional,
              destacando por nuestro compromiso con la excelencia, la innovación y
              el bienestar integral de nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Sección del Equipo */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Nuestro Equipo
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipo.map((miembro) => (
            <div key={miembro.id} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4">
                {/* Aquí iría la foto del miembro del equipo */}
              </div>
              <h3 className="text-xl font-semibold mb-2">{miembro.nombre}</h3>
              <p className="text-primary font-medium mb-2">{miembro.cargo}</p>
              <p className="text-gray-600">{miembro.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Valores */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Nuestros Valores
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Profesionalismo</h3>
            <p className="text-gray-600">
              Compromiso con la excelencia y la mejora continua.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Empatía</h3>
            <p className="text-gray-600">
              Entendemos y nos adaptamos a las necesidades de cada cliente.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Innovación</h3>
            <p className="text-gray-600">
              Constantemente buscamos nuevas formas de mejorar nuestros servicios.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Compromiso</h3>
            <p className="text-gray-600">
              Dedicados al éxito y bienestar de nuestros clientes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
