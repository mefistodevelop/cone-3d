import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => (
  <header className="header">
    <div className="header__container">
      <Navbar
        className="header__navigation"
        bg="dark"
        variant="dark"
        expand="lg"
      >
        <Navbar.Brand className="header__logo">Cone-3D</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse className="header__colapse" id="basic-navbar-nav">
          <Nav className="mr-auto header__navigation-list">
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </header>
);
