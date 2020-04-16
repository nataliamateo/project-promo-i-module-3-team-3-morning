import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/Landing.scss';
import card from '../images/card.png';
import Footer from './Footer';

function Landing() {
  return (
    <>
      <main className='container'>
        <img className='container__image' src={card} alt='Awesome' />
        <h2 className='container__title'>Crea tu tarjeta de visita</h2>
        <p className='container__text'>Crea mejores contactos profesionales de forma fácil y cómoda</p>
        <div className='container__box'>
          <div className='container__box--links'>
            <i className='far fa-object-ungroup container__box--icons'></i>
            <p className='container__box--text'>Diseña</p>
          </div>
          <div className='container__box--links'>
            <i className='far fa-keyboard container__box--icons'></i>
            <p className='container__box--text'>Rellena</p>
          </div>
          <div className='container__box--links'>
            <i className='fas fa-share-alt container__box--icons'></i>
            <p className='container__box--text'>Comparte</p>
          </div>
        </div>
        <Link className='container__button' to='/userinterface'>
          <p className='container__button--text'>Comenzar</p>
        </Link>
      </main>
      <Footer />
    </>
  );
}
export default Landing;
