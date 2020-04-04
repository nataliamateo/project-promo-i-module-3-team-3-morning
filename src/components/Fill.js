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
       <InputText
        id="phone"
        labelText="Teléfono"
        inputName="phone"
        inputType= "tel"
        inputPlaceholder="Ej: 555-55-55-55"
        handleInput={props.handleInput}
      />
        <InputText
        id="email"
        labelText="Email"
        inputName="email"
        inputType= "email"
        inputPlaceholder="Ej: sally-hill@gmail.com"
        handleInput={props.handleInput}
      />
        <InputText
        id="linkedin"
        labelText="Linkedin"
        inputName="linkedin"
        inputType= "linkedin"
        inputPlaceholder="Ej: linkedin.com/in/sally.hill"
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
       <InputText
        id="github"
        labelText="Github"
        inputName="github"
        inputType= "github"
        inputPlaceholder="Ej: @sally-hill"
        handleInput={props.handleInput}
      />
    </div>
  </fieldset>
);

export default Fill;
