import React from 'react';
import logoApp from '../images/descarga.svg';
import '../stylesheets/Header.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => (
  <header className="header__container">
    <img className="header__image" src={logoApp} title="Awesome profile-cards" alt="Awesome profile-cards" />
    <Link className="header__home--container" title="Volver a Home" to='/'>
      <i class="fas fa-home"></i>
    </Link>
  </header>
);

export default Header;
