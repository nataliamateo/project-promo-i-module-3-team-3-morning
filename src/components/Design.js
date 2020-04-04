import React from 'react';
import '../stylesheets/Design.scss';

const Design = () => (
<fieldset className="collapsible collapsable--open">
  <div className="js-collapsible--trigger collapsible__header--design">
    <i className="far fa-object-ungroup collapsible__header--icon"></i>
    <h2 className="collapsible__header--title">Diseña</h2>
    <i className="fas fa-chevron-up collapsible__header--arrow-icon"></i>
  </div>
  <div className="collapsible__content">
    <h3 className="collapsible__content--title">Colores</h3>
    <div className="collapsible__content--position">
      <label className="js-palette1 collapsible__content__palette" htmlFor="firstcolor">
        <input className="js-palette1 js-radio collapsible__content__palette--radio" id="firstcolor" type="radio" value="1" name="colors" checked="checked" />
        <div className="collapsible__content__palette--box bg-dark-green"></div>
        <div className="collapsible__content__palette--box bg-dirty-blue"></div>
        <div className="collapsible__content__palette--box bg-hospital-green"></div>
      </label>
      <label className="js-palette2 collapsible__content__palette" htmlFor="secondcolor">
        <input className="js-palette2 js-radio collapsible__content__palette--radio" id="secondcolor" type="radio" value="2" name="colors" />
        <div className="collapsible__content__palette--box bg-dried-blood"></div>
        <div className="collapsible__content__palette--box bg-rusty-red"></div>
        <div className="collapsible__content__palette--box bg-tomato"></div>
      </label>
      <label className="js-palette3 collapsible__content__palette" htmlFor="tertiarycolor">
        <input className="js-palette3 js-radio collapsible__content__palette--radio" id="tertiarycolor" type="radio" value="3" name="colors" />
        <div className="collapsible__content__palette--box bg-slate"></div>
        <div className="collapsible__content__palette--box bg-faded-orange"></div>
        <div className="collapsible__content__palette--box bg-light-grey-blue"></div>
      </label>
    </div>
  </div>
</fieldset>
);

export default Design;
