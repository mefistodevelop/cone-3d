import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.scss';
import { ConeState } from './state/ConeState';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <ConeState>
    <App />
  </ConeState>,
  document.getElementById('root')
);
