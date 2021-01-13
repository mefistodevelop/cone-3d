import React, { useContext } from 'react';
import { Cone } from '../../components/Cone/Cone';
import { Form } from '../../components/Form/Form';
import { ConeContext } from '../../state/ConeState';
import './Home.scss';

export const Home = () => {
  const { points } = useContext(ConeContext);

  const coneMod = points.length ? 'home__cone_visible' : '';

  return (
    <main className="home">
      <h1 className="visually-hidden">Creating a cone</h1>
      <div className="home__form">
        <Form />
      </div>
      <div className={`home__cone ${coneMod}`}>
        {points.length ? <Cone points={points} /> : null}
      </div>
    </main>
  );
};
