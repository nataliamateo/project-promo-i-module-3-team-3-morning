import React from 'react';
import '../stylesheets/Design.scss';

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

);

export default Design;
