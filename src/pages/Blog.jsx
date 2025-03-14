const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Los beneficios de una dieta mediterránea",
      excerpt: "Descubre por qué la dieta mediterránea es considerada una de las más saludables del mundo...",
      author: "Dra. María López",
      date: "14 Marzo 2025",
      category: "Nutrición"
    },
    {
      id: 2,
      title: "Guía completa de proteínas vegetales",
      excerpt: "Todo lo que necesitas saber sobre las fuentes de proteína en una dieta basada en plantas...",
      author: "Dr. Juan Martínez",
      date: "13 Marzo 2025",
      category: "Vegetarianismo"
    },
    // Más posts pueden ser agregados aquí
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Blog de Nutrición</h1>
      
      {/* Grid de posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">
                {post.category} • {post.date}
              </div>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Por {post.author}
                </span>
                <button className="text-primary hover:text-secondary transition-colors">
                  Leer más →
                </button>
              </div>
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

export default Blog;
