import React from 'react';
import Icons from './Icons';
import '../stylesheets/Card.scss';
import PropTypes from 'prop-types';

console.log();

function Card(props) {
  return (
    <section className="js-card img-creation">
      <div className="js-card-palette1 js-background img-creation__container">
        <div className="img-creation__container--card">
          <button className="js-reset img-creation__button">
            <i className="far fa-trash-alt"></i>Reset
          </button>
          <article className=" img-creation__card">
            <div className="js-border img-creation__card--container">
              <h2 className="js-cardname js-pastename img-creation__card--name" value="">
                {props.name || Card.defaultProps.name}
              </h2>
              <h3 className="js-cardjob img-creation__card--profession" value="">
                {props.job || Card.defaultProps.job}
              </h3>
            </div>
            <div className="profile__image js__profile-image"></div>
            <Icons phone={props.phone} email={props.email} linkedin={props.linkedin} github={props.github} />
          </article>
        </div>
      </div>
    </section>
  );
}
Card.defaultProps = {
  name: 'Nombre y Apellidos',
  job: 'FrontEnd Developer',
};

Card.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.number,
  linkedin: PropTypes.string,
  github: PropTypes.string,
};

export default Card;
