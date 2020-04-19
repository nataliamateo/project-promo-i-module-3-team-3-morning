import React from 'react';
import '../../stylesheets/Share.scss';
import PropTypes from 'prop-types';

const Share = (props) => {
  const isValidated = props.isValidated;
  console.log(props);
  return (
    <section className='share__container collapsable-content'>
      <button onClick={props.createCardFetch} className={`${!isValidated === false ? 'button-active' : 'button'}`} id='share_btn'>
        <i className='far fa-address-card'></i>
        <h2 className='button__title'>Crear tarjeta</h2>
      </button>
      <div className={` ${!props.url ? 'share__twitter hiddenButton' : 'share__twitter -button'}`}>
        <span className='share__twitter-message'> Tu tarjeta ha sido creada:</span>
        <a href={props.url} className={` ${!props.url ? 'hiddenButton' : 'share__twitter-url'}`} target='_blank' rel='noopener noreferrer'>
          {props.url}
        </a>
        <a href={`https://twitter.com/intent/tweet?text=Hey!%20Mira%20que%20tarjeta%20he%20creado%20${props.url}`} target='_blank' rel='noopener noreferrer' className='share__twitter-button'>
          <i className='fab fa-twitter'></i>Compartir en Twitter
        </a>
      </div>
    </section>
  );
};

Share.propTypes = {
  isValidated: PropTypes.bool,
  generateUrl: PropTypes.func,
  url: PropTypes.string,
};
export default Share;
