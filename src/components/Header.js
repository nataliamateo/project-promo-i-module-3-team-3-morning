import React from 'react';
import logoApp from '../images/descarga.svg';
import '../stylesheets/Header.scss';

const Header = () => (
  <header className="header__container">
    <img className="header__image" src={logoApp} title="Awesome profile-cards" alt="Awesome profile-cards" />
  </header>
);

export default Header;
