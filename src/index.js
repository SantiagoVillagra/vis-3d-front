import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/store';

// Usando `createRoot` en lugar de `render`
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
    <BrowserRouter>
  
        <App />
      
    </BrowserRouter> 
    </Provider>
  </React.StrictMode>
);

// Mantén el reporte de métricas de rendimiento (si es necesario)
reportWebVitals(sendToVercelAnalytics);

