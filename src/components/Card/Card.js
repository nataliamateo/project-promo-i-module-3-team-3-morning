import React from 'react';
import Icons from './Icons';
import '../../stylesheets/Card.scss';
import PropTypes from 'prop-types';
import woman from '../../images/woman.png';

const Card = (props) => {
  console.log(props);
  function handleReset(ev) {
    ev.preventDefault();
    //es el nombre de la madre
    props.handleReset(ev.currentTarget);
  }

  return (
    <section className='img-creation'>
      <div className={`img-creation__container background background--palette-${props.palette}`}>
        <div className='img-creation__container--card'>
          <button onClick={handleReset} className='img-creation__button'>
            <i className='far fa-trash-alt'></i>Reset
          </button>
          <article className='img-creation__card'>
            <div className={`img-creation__card--container container--palette-${props.palette} `}>
              <h2 className={`img-creation__card--name name--palette-${props.palette} `} value=''>
                {props.name || Card.defaultProps.name}
              </h2>
              <h3 className='img-creation__card--profession' value=''>
                {props.job || Card.defaultProps.job}
              </h3>
            </div>
            <div className='profile__image'>
              <img src={props.photo || Card.defaultProps.photo} alt={props.name} className='profile__image' />
            </div>
            <Icons palette={props.palette} phone={parseInt(props.phone)} email={props.email} linkedin={props.linkedin} github={props.github} />
          </article>
        </div>
      </div>
    </section>
  );
};

Card.defaultProps = {
  name: 'Nombre Apellidos',
  job: 'FrontEnd Developer',
  photo: woman,
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
