import React, { useContext } from 'react';
import { Cone } from '../../components/Cone/Cone';
import { Form } from '../../components/Form/Form';
import { ConeContext } from '../../state/ConeState';
import './Home.scss';

export const Home = () => {
  const { points } = useContext(ConeContext);

  return (
    <div className="Home">
      <div className="Home__form">
        <Form />
      </div>
      <div className="Home__cone">
        {points.length ? <Cone points={points} /> : null}
      </div>
    </div>
  );
};
