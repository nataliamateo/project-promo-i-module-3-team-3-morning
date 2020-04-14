import React from 'react';
import '../stylesheets/Card.scss';
import '../stylesheets/ColorInteractions.scss';

const Icons = (props) => (
  <ul className='img-creation__card--list'>
    <li className={` img-creation__card--round list--palette-${props.palette}`}>
      <a className={`img-creation__card--list--icon icon--palette-${props.palette}`} href={'tel:' + props.phone}>
        <i className='fas fa-mobile-alt' title='Teléfono'></i>
      </a>
    </li>
    <li className={` img-creation__card--round list--palette-${props.palette}`}>
      <a className={`img-creation__card--list--icon icon--palette-${props.palette}`} href={'mailto:' + props.email}>
        <i className='far fa-envelope' title='Enviar email'></i>
      </a>
    </li>
    <li className={` img-creation__card--round list--palette-${props.palette}`}>
      <a className={`img-creation__card--list--icon icon--palette-${props.palette}`} href={props.linkedin} alt='Linkedin'>
        <i className='fab fa-linkedin-in' title='Ir al Linkedin'></i>
      </a>
    </li>
    <li className={` img-creation__card--round list--palette-${props.palette}`}>
      <a className={`img-creation__card--list--icon icon--palette-${props.palette}`} href={props.github}>
        <i className='fab fa-github-alt' title='Ir al Github'></i>
      </a>
    </li>
  </ul>
);

export default Icons;
