import React from 'react';
import InputRadio from './InputRadio';
import '../stylesheets/Design.scss';

<<<<<<< HEAD
const Design = (props) => (
  <fieldset className="collapsible collapsable--open">
    <div className="js-collapsible--trigger collapsible__header--design">
      <i className="far fa-object-ungroup collapsible__header--icon"></i>
      <h2 className="collapsible__header--title">Diseña</h2>
      <i className="fas fa-chevron-up collapsible__header--arrow-icon"></i>
    </div>
    <div className="collapsible__content">
      <h3 className="collapsible__content--title">Colores</h3>
      <div className="collapsible__content--position">
        <InputRadio 
        classLabel="js-palette1 collapsible__content__palette" 
        classInput="js-palette1 js-radio collapsible__content__palette--radio" 
        id="palette1" 
        value="1" 
        checked="checked"
        colorA="collapsible__content__palette--box bg-dark-green" colorB="collapsible__content__palette--box bg-dirty-blue" colorC="collapsible__content__palette--box bg-hospital-green" 
        handleInput={props.handleInput}/>

        <InputRadio 
        classLabel="js-palette2 collapsible__content__palette" 
        classInput="js-palette2 js-radio collapsible__content__palette--radio" 
        id="palette2" 
        value="2"
        colorA="collapsible__content__palette--box bg-dried-blood" colorB="collapsible__content__palette--box bg-rusty-red" colorC="collapsible__content__palette--box bg-tomato"
        handleInput={props.handleInput} />

        <InputRadio 
        classLabel="js-palette3 collapsible__content__palette" 
        classInput="js-palette3 js-radio collapsible__content__palette--radio" id="palette3" 
        value="3"
        colorA="collapsible__content__palette--box bg-slate" colorB="collapsible__content__palette--box bg-faded-orange" colorC="collapsible__content__palette--box bg-light-grey-blue" 
        handleInput={props.handleInput}/>
      </div>
    </div>
  </fieldset>
=======
const Design = () => (
  <div >
    <h3 class="collapsible__content--title">Colores</h3>
    <div class="collapsible__content--position">
      <label class="js-palette1 collapsible__content__palette" for="firstcolor">
        <input class="js-palette1 js-radio collapsible__content__palette--radio" id="firstcolor" type="radio" value="1" name="colors" checked="checked" />
        <div class="collapsible__content__palette--box bg-dark-green"></div>
        <div class="collapsible__content__palette--box bg-dirty-blue"></div>
        <div class="collapsible__content__palette--box bg-hospital-green"></div>
      </label>
      <label class="js-palette2 collapsible__content__palette" for="secondcolor">
        <input class="js-palette2 js-radio collapsible__content__palette--radio" id="secondcolor" type="radio" value="2" name="colors" />
        <div class="collapsible__content__palette--box bg-dried-blood"></div>
        <div class="collapsible__content__palette--box bg-rusty-red"></div>
        <div class="collapsible__content__palette--box bg-tomato"></div>
      </label>
      <label class="js-palette3 collapsible__content__palette" for="tertiarycolor">
        <input class="js-palette3 js-radio collapsible__content__palette--radio" id="tertiarycolor" type="radio" value="3" name="colors" />
        <div class="collapsible__content__palette--box bg-slate"></div>
        <div class="collapsible__content__palette--box bg-faded-orange"></div>
        <div class="collapsible__content__palette--box bg-light-grey-blue"></div>
      </label>
    </div>
  </div>

>>>>>>> Collapsable
);

export default Design;
