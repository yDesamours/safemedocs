import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './components/App';
import Acceuil from './components/acceuil';
import Prescription from './components/prescription';
import Lecteur from './components/lecteur';
import reportWebVitals from './reportWebVitals';

const routes = (
  <Routes>
    <Route path='/' element={<App />}>
      <Route index element={<Acceuil />} />
      <Route path='/write' element={ <Prescription /> } />
      <Route path='/read'  element={ <Lecteur /> } />
    </Route>
  </Routes>
)

ReactDOM.render(
  <BrowserRouter>
    {routes}
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
