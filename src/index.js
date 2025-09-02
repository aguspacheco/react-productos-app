/** 
 * Importo la biblioteca principal de React
 */
import React from 'react'
/**
 * Importo ReactDOM para interactuar con el DOM del navegador
 */
import ReactDOM from 'react-dom/client'
/**
 * Importamos el componente principal desde el archivo App.js
 */
import App from './App';

// Creo un contenedor raiz para la aplicacion React
const root = ReactDOM.createRoot(document.getElementById('root'));
// muestra nuestra aplicacion en la pagina web
root.render(<App />);