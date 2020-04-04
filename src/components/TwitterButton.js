import React from 'react';
import '../stylesheets/TwitterButton.scss';

const TwitterButton = () => (
<section className="share-container">
  <div className="share-container__button collapsible__content">
    <button className="share-container__button--styles" id="share_btn"><i className="share-container__button--icon-card far fa-address-card"></i> Crear tarjeta</button>
  </div>
  <div className="errorMessage"></div>
  <div className="share-container__twitter collapsible__content--twitter" id="share-div">
    <div className="share__create-card">
      <p className=" share-container__twitter__title">La tarjeta ha sido creada:</p>
    </div>
    <a href="/" target="_blank" className="share-container__twitter--link share-container__twitter__btn"><i className="share-container__twitter--ico-twitter fab fa-twitter"></i>Compartir en twitter</a>
  </div>
</section>


);

export default TwitterButton;
