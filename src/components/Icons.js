import React from "react";
import "../stylesheets/Card.scss";

const Icons = (props) => (
  <ul className="img-creation__card--list">
    <li className="js-card-phone img-creation__card--round">
      <a className="js-cardphone js-pastename" href={"tel:" + props.phone}>
        <i className="fas fa-mobile-alt" title="Teléfono"></i>
      </a>
    </li>
    <li className="js-card-email img-creation__card--round">
      <a className="js-cardemail js-pastename" href={"mailto:" + props.email}>
        <i className="far fa-envelope" title="Enviar email"></i>
      </a>
    </li>
    <li className="js-card-linkedin img-creation__card--round">
      <a className="js-cardlinkedin js-pastename" href={props.linkedin} alt="Linkedin">
        <i className="fab fa-linkedin-in" title="Ir al Linkedin"></i>
      </a>
    </li>
    <li className="js-card-github img-creation__card--round">
      <a className="js-cardgithub js-pastename" href={props.github}>
        <i className="fab fa-github-alt" title="Ir al Github"></i>
      </a>
    </li>
  </ul>
);

export default Icons;
