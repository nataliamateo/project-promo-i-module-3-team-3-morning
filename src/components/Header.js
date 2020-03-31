import React from 'react';
import image from '../images/descarga.svg';
import '../stylesheets/Header.scss';

const Header = () => (
  <div className="header__container">
    <img className="header__image" src={image} title="Awesome profile-cards" alt="Awesome profile-cards" />
  </div>
);

export default Header;
