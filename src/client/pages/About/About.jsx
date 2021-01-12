import React from 'react';
import './About.scss';

export const About = () => (
  <div className="about">
    <div className="jumbotron">
      <h1 className="display-4 about__title">About</h1>
      <p className="lead about__subtitle">
        App creates a 3D model of cone from your data
      </p>
      <p className="about__author">
        Created by Oleg Rudenko&nbsp;
        <a className="badge badge-primary" href="mailto:oleg.ru93@yandex.ru">
          oleg.ru93@yandex.ru
        </a>
      </p>
    </div>
  </div>
);
