import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './fonts/Northead-0WgdX.ttf';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
