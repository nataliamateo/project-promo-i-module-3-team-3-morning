import React from 'react';
import Icons from './Icons';
import '../stylesheets/ColorInteractions.scss';
import '../stylesheets/Card.scss';
import woman from '../images/woman.png';

const Card = (props) => (
  <section className='img-creation'>
    <div className={`img-creation__container background background--palette-${props.palette}`}>
      <div className='img-creation__container--card'>
        <button className='js-reset img-creation__button'>
          <i className='far fa-trash-alt'></i>Reset
        </button>
        <article className='img-creation__card'>
          <div className={`img-creation__card--container container--palette-${props.palette} `}>
            <h2 className={`img-creation__card--name name--palette-${props.palette} `} value=''>
              {props.name || 'Nombre Apellidos'}
            </h2>
            <h3 className='img-creation__card--profession' value=''>
              {props.job || 'FrontEnd Developer'}
            </h3>
          </div>
          <div className='profile__image js__profile-image'>
            <img src={props.img || woman} alt='' className='profile__image' />
          </div>
          <Icons palette={props.palette} phone={props.phone} email={props.email} linkedin={props.linkedin} github={props.github} />
        </article>
      </div>
    </div>
  </section>
);

export default Card;
