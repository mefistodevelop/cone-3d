import React, { useContext } from 'react';
import './App.scss';
import { Cone } from './components/Cone/Cone';
import { Form } from './components/Form/Form';
import { ConeContext } from './state/ConeState';

export const App = () => {
  const { points } = useContext(ConeContext);

  return (
    <div className="App">
      <div className="App__container">
        <div className="App__form">
          <Form />
        </div>
        <div className="App__cone">
          {points.length ? <Cone points={points} /> : null}
        </div>
      </div>
    </div>
  );
};
