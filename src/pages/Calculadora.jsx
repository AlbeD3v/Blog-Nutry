import { useState } from 'react';

const Calculadora = () => {
  const [formData, setFormData] = useState({
    peso: '',
    altura: '',
    edad: '',
    genero: 'masculino',
    actividad: 'sedentario'
  });

  const [resultado, setResultado] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calcularIMC = () => {
    const altura = formData.altura / 100; // convertir cm a metros
    const imc = formData.peso / (altura * altura);
    return imc.toFixed(1);
  };

  const calcularTMB = () => {
    // Fórmula de Harris-Benedict
    const { peso, altura, edad, genero } = formData;
    let tmb;
    
    if (genero === 'masculino') {
      tmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * edad);
    } else {
      tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad);
    }

    // Factor de actividad
    const factores = {
      sedentario: 1.2,
      ligero: 1.375,
      moderado: 1.55,
      activo: 1.725,
      muyActivo: 1.9
    };

    return Math.round(tmb * factores[formData.actividad]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const imc = calcularIMC();
    const calorias = calcularTMB();
    
    setResultado({
      imc,
      calorias,
      estado: getEstadoIMC(imc)
    });
  };

  const getEstadoIMC = (imc) => {
    if (imc < 18.5) return 'Bajo peso';
    if (imc < 24.9) return 'Peso normal';
    if (imc < 29.9) return 'Sobrepeso';
    return 'Obesidad';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">
        Calculadora Nutricional
      </h1>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Peso (kg)</label>
              <input
                type="number"
                name="peso"
                value={formData.peso}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Altura (cm)</label>
              <input
                type="number"
                name="altura"
                value={formData.altura}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Edad</label>
              <input
                type="number"
                name="edad"
                value={formData.edad}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Género</label>
              <select
                name="genero"
                value={formData.genero}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Nivel de Actividad</label>
              <select
                name="actividad"
                value={formData.actividad}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="sedentario">Sedentario</option>
                <option value="ligero">Actividad Ligera</option>
                <option value="moderado">Actividad Moderada</option>
                <option value="activo">Muy Activo</option>
                <option value="muyActivo">Extremadamente Activo</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-md hover:bg-secondary transition-colors mt-6"
          >
            Calcular
          </button>
        </form>

        {resultado && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Resultados</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Índice de Masa Corporal (IMC)</h3>
                <p className="text-3xl font-bold text-primary">{resultado.imc}</p>
                <p className="text-gray-600">{resultado.estado}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Calorías Diarias Recomendadas</h3>
                <p className="text-3xl font-bold text-primary">{resultado.calorias}</p>
                <p className="text-gray-600">kcal/día</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculadora;
