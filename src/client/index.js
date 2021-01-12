import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.scss';
import { ConeState } from './state/ConeState';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <ConeState>
      <App />
    </ConeState>
  </BrowserRouter>,
  document.getElementById('root')
);
