import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

// Usando `createRoot` en lugar de `render`
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     {/* <ChakraProvider>
        <App />
      </ChakraProvider>
        */}
         <App />
    </BrowserRouter> 
       
  </React.StrictMode>
);

// Mantén el reporte de métricas de rendimiento (si es necesario)
reportWebVitals(sendToVercelAnalytics);

