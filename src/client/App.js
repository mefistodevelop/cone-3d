import React, { useContext, useEffect } from 'react';
import './App.css';
import { Cone } from './components/Cone/Cone';
import { ConeContext } from './state/ConeState';

export const App = () => {
  const { getPoints, points } = useContext(ConeContext);
  useEffect(() => {
    getPoints(5, 5, 15);
  }, []);
  return (
    <div className="App">
      <div className="App__cone">
        {points.length && <Cone points={points} />}
      </div>
    </div>
  );
};
