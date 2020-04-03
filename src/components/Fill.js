import React from 'react';
import InputText from './InputText';
import '../stylesheets/Fill.scss';

const Fill = (props) => (
  <fieldset className="collapsible collapsable--open js-myform">
    <div className="js-collapsible--trigger collapsible__header--fill">
      <i className="far fa-keyboard collapsible__header--icon"></i>
      <h2 className="collapsible__header__title">Rellena</h2>
      <i className="fas fa-chevron-up collapsible__header--arrow-icon"></i>
    </div>
    <div className="collapsible__content">
      <InputText
        id="fullname"
        labelText="Nombre completo"
        inputName="name"
        inputPlaceholder="Ej: Sally Jill"
        handleInput={props.handleInput}
      />
      <InputText
        id="job"
        labelText="Puesto"
        inputName="job"
        inputPlaceholder="Ej: Front-end"
        handleInput={props.handleInput}
      />
      {/* <label className="collapsible__content--style-text" htmlFor="image"> Imagen de perfil</label>
      <div className=" action collapsible__content--container-button">
        <button className="action__upload-btn js__profile-trigger collapsible__content--style-text--button" type="button">Añadir imagen</button>
        <input type="file" name="" id="img-selector" className="action__hiddenField js__profile-upload-btn" />
      </div>
      <div className="profile">
        <div className="js__profile-preview collapsible__content--container-button--image-box"></div>
      </div> */}
      <label className="collapsible__content--style-text required" htmlFor="phone"> Teléfono</label>
      <input className="js-input-phone js-input-text collapsible__content--input-form" placeholder="Ej: 555-55-55-55" type="tel" id="phone" name="phone" required />
      <div>
        <label className="collapsible__content--style-text required" htmlFor="email"> Email</label>
        <input className="js-input-email  js-input-text collapsible__content--input-form" placeholder="Ej: sally-hill@gmail.com" type="email" id="email" name="email" required />
      </div>
      <div>
        <label className="collapsible__content--style-text required" htmlFor="linkedin"> Linkedin</label>
        <input className="js-input-linkedin js-input-text collapsible__content--input-form" placeholder="Ej: linkedin.com/in/sally.hill" type="url" id="linkedin" name="linkedin" required />
      </div>
      <div>
        <label className="collapsible__content--style-text required" htmlFor="github"> Github</label>
        <input className="js-input-github js-input-text collapsible__content--input-form" placeholder="Ej: @sally-hill" type="url" id="github" name="github" required />
      </div>
    </div>
  </fieldset>
);

export default Fill;
