const RecetasSaludables = () => {
  const recetas = [
    {
      id: 1,
      title: "Bowl de Quinoa y Vegetales",
      tiempo: "30 min",
      dificultad: "Fácil",
      calorias: "350",
      descripcion: "Un nutritivo bowl lleno de proteínas y vegetales frescos..."
    },
    {
      id: 2,
      title: "Ensalada Mediterránea",
      tiempo: "15 min",
      dificultad: "Fácil",
      calorias: "280",
      descripcion: "Una refrescante ensalada con ingredientes mediterráneos..."
    },
    // Más recetas pueden ser agregadas aquí
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Recetas Saludables</h1>

      {/* Filtros */}
      <div className="mb-8 flex flex-wrap gap-4">
        <select className="px-4 py-2 border rounded-md bg-white">
          <option>Todas las categorías</option>
          <option>Desayunos</option>
          <option>Almuerzos</option>
          <option>Cenas</option>
          <option>Snacks</option>
        </select>

        <select className="px-4 py-2 border rounded-md bg-white">
          <option>Tiempo de preparación</option>
          <option>15 minutos</option>
          <option>30 minutos</option>
          <option>45+ minutos</option>
        </select>

        <select className="px-4 py-2 border rounded-md bg-white">
          <option>Dificultad</option>
          <option>Fácil</option>
          <option>Media</option>
          <option>Difícil</option>
        </select>
      </div>

      {/* Grid de recetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recetas.map((receta) => (
          <article key={receta.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {receta.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {receta.descripcion}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <span>⏰ {receta.tiempo}</span>
                <span>📊 {receta.dificultad}</span>
                <span>🔥 {receta.calorias} cal</span>
              </div>
              <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary transition-colors">
                Ver Receta Completa
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Paginación */}
      <div className="mt-12 flex justify-center">
        <nav className="flex space-x-2">
          <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-primary hover:text-white transition-colors">
            Anterior
          </button>
          <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-primary hover:text-white transition-colors">
            Siguiente
          </button>
        </nav>
      </div>
    </div>
  );
};

export default RecetasSaludables;
