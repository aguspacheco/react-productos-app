/**
 * Importo useState para manejar los estados y useEffect para los efectos secundarios
 */
import React, { useState, useEffect } from 'react';
/**
 * Importo axios que es una biblioteca para hacer peticiones HTTP a APIs
 */
import axios from 'axios';
import "./App.css";

/**
 * Componente principal 
 */
function App() {
  // Estado para almacenar la lista de productos que comienza vacio
  const [productos, setProductos] = useState([]);
  const [comerciantes, setComerciantes] = useState([])
  // Estado para controlar si se estan cargando los datos que empieza en true si se esta cargando
  const [cargando, setCargando] = useState(true);

  // se ejecuta cuando se carga la pagina
  useEffect(() => {    
  // Petición para productos
  axios.get('http://127.0.0.1:8000/productos/')
    .then(response => {
      console.log('Productos:', response.data);
      setProductos(response.data);
    })
    .catch(error => console.error('Error productos:', error));

  // Petición para comerciantes
  axios.get('http://127.0.0.1:8000/comerciantes/')
    .then(response => {
      console.log('Comerciantes:', response.data);
      setComerciantes(response.data);
    })
    .catch(error => console.error('Error comerciantes:', error))
    .finally(() => setCargando(false));
}, []);

  // Si esta cargando, se muestra un mensaje de carga
  if (cargando) return <div>Cargando...</div>;

  // Retorna el JSX que se va a renderizar en la pagina
  return (
    <div className='App'>
      <h1>Productos</h1>
      {/* Si no hay productos muestra un mensaje sino muestra la lista */}
      {productos.length === 0 ? (
        <p>No hay productos</p>
      ) : (
        <ul>
          {/* Mapea cada producto del array a un elemento */}
          {productos.map(producto => (
            // Key se usa para que React identifique cada elemento unico
            <li key={producto.id}>
              {/* Muestra el nombre y tipo de cada producto */}
              {producto.nombre} - {producto.tipo}
            </li>
          ))}
        </ul>
      )}

      <h1>Comerciantes</h1>
      {comerciantes.length === 0 ? (
        <p>No hay comerciantes cargados</p>
      ) : (
        <ul>
          {comerciantes.map(comerciante => (
            <l1 key={comerciante.id}>
              {comerciante.nombre} - {comerciante.email}
              {comerciante.telefono && ` - Tel: ${comerciante.telefono}` }
            </l1>
          ))}
        </ul>
        )}
    </div>
  );
}

// Exporto el componente para que se pueda usar en otros archivos
export default App;