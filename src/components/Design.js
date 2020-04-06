import React from 'react';
import InputRadio from './InputRadio';
import '../stylesheets/Design.scss';

const Design = (props) => (
  <fieldset className='collapsible collapsable--open'>
    <div className='collapsible__content'>
      <h3 className='collapsible__content--title'>Colores</h3>
      <div className='collapsible__content--position'>
        <InputRadio classLabel='js-palette1 collapsible__content__palette' classInput='js-palette1 js-radio collapsible__content__palette--radio' id='palette1' value='1' checked='checked' colorA='collapsible__content__palette--box bg-dark-green' colorB='collapsible__content__palette--box bg-dirty-blue' colorC='collapsible__content__palette--box bg-hospital-green' handleInput={props.handleInput} />

        <InputRadio classLabel='js-palette2 collapsible__content__palette' classInput='js-palette2 js-radio collapsible__content__palette--radio' id='palette2' value='2' colorA='collapsible__content__palette--box bg-dried-blood' colorB='collapsible__content__palette--box bg-rusty-red' colorC='collapsible__content__palette--box bg-tomato' handleInput={props.handleInput} />

        <InputRadio classLabel='js-palette3 collapsible__content__palette' classInput='js-palette3 js-radio collapsible__content__palette--radio' id='palette3' value='3' colorA='collapsible__content__palette--box bg-slate' colorB='collapsible__content__palette--box bg-faded-orange' colorC='collapsible__content__palette--box bg-light-grey-blue' handleInput={props.handleInput} />
      </div>
    </div>
  </fieldset>
);

export default Design;
