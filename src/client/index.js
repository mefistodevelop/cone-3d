import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';
import { ConeState } from './state/ConeState';

ReactDOM.render(
  <ConeState>
    <App />
  </ConeState>,
  document.getElementById('root')
);
