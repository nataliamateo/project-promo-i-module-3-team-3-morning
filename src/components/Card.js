import React from 'react';
import '../stylesheets/Card.scss';

const Card = () => (
  <section className="js-card img-creation">
    <div className="js-card-palette1 js-background img-creation__container">
      <div className="img-creation__container--card">
        <button className="js-reset img-creation__button"><i className="far fa-trash-alt"></i>Reset</button>
        <article className=" img-creation__card">
          <div className="js-border img-creation__card--container">
            <h2 className="js-cardname js-pastename img-creation__card--name" value="">Nombre y Apellido</h2>
            <h3 className="js-cardjob img-creation__card--profession" value="">Frontent developer</h3>
          </div>
          <div className="profile__image js__profile-image"></div>
          <ul className="img-creation__card--list">
            <li className="js-card-phone img-creation__card--round">
              <a className="js-cardphone js-pastename" href="tel:"><i className="fas fa-mobile-alt" title="Teléfono"></i></a>
            </li>
            <li className="js-card-email img-creation__card--round">
              <a className="js-cardemail js-pastename" href="mailto:"><i className="far fa-envelope" title="Enviar email"></i></a>
            </li>
            <li className="js-card-linkedin img-creation__card--round">
              <a className="js-cardlinkedin js-pastename" href="/" alt="Linkedin"><i className="fab fa-linkedin-in" title="Ir al Linkedin"></i></a>
            </li>
            <li className="js-card-github img-creation__card--round">
              <a className="js-cardgithub js-pastename" href="/"><i className="fab fa-github-alt" title="Ir al Github"></i></a>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
);

export default Card;
