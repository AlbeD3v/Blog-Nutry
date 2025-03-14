const PlanesNutricionales = () => {
  const planes = [
    {
      id: 1,
      nombre: "Plan Básico",
      precio: "$29.99",
      duracion: "1 mes",
      caracteristicas: [
        "Plan alimenticio personalizado",
        "Seguimiento semanal",
        "Recetas básicas",
        "Soporte por email"
      ]
    },
    {
      id: 2,
      nombre: "Plan Premium",
      precio: "$49.99",
      duracion: "1 mes",
      caracteristicas: [
        "Plan alimenticio personalizado",
        "Seguimiento diario",
        "Recetas premium",
        "Soporte 24/7",
        "Consultas por videollamada"
      ]
    },
    {
      id: 3,
      nombre: "Plan Familiar",
      precio: "$89.99",
      duracion: "1 mes",
      caracteristicas: [
        "Planes personalizados para toda la familia",
        "Seguimiento personalizado",
        "Recetas familiares",
        "Soporte prioritario",
        "Consultas ilimitadas"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">
        Planes Nutricionales
      </h1>
      
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Elige el plan que mejor se adapte a tus necesidades y comienza tu viaje hacia una vida más saludable
      </p>

      {/* Grid de planes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {planes.map((plan) => (
          <div key={plan.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h2 className="text-2xl font-bold text-primary mb-4">{plan.nombre}</h2>
            <div className="text-3xl font-bold mb-2">{plan.precio}</div>
            <p className="text-gray-500 mb-6">{plan.duracion}</p>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {plan.caracteristicas.map((caracteristica, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {caracteristica}
                </li>
              ))}
            </ul>

            <button className="w-full bg-primary text-white py-3 rounded-md hover:bg-secondary transition-colors mt-auto">
              Elegir Plan
            </button>
          </div>
        ))}
      </div>

      {/* Sección de FAQ */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-primary mb-8 text-center">
          Preguntas Frecuentes
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold mb-2">¿Puedo cambiar de plan?</h3>
            <p className="text-gray-600">
              Sí, puedes cambiar tu plan en cualquier momento. Los cambios se aplicarán en tu próximo ciclo de facturación.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold mb-2">¿Los planes incluyen seguimiento personalizado?</h3>
            <p className="text-gray-600">
              Todos nuestros planes incluyen algún nivel de seguimiento personalizado. El nivel de seguimiento varía según el plan elegido.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanesNutricionales;
