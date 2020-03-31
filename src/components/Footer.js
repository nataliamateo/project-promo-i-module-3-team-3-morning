import React from 'react';
import logoAdalab from '../images/logo-adalab.png';
import '../stylesheets/Footer.scss';

const Footer = () => (
  <footer className="footer">
    <small className="footer__copy">
      <span>Awesome profile-cards &copy;2020</span>
    </small>

    <div className="footer__logo">
      <img className="footer__logo--width" src={logoAdalab} alt="logo-adalab" />
    </div>
  </footer>
);

export default Footer;
