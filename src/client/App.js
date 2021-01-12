import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header/Header';
import { About } from './pages/About/About';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { Home } from './pages/Home/Home';

export const App = () => (
  <div className="App">
    <Header />
    <div className="App__container">
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/*" render={() => <ErrorPage />} />
      </Switch>
    </div>
  </div>
);
