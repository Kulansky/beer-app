import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'index.css';
import 'assets/fonts/Northead-0WgdX.ttf';
import { AgeVerificationContextProvider } from 'contexts/ageVerification-context';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AgeVerificationContextProvider>
        <App />
      </AgeVerificationContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

