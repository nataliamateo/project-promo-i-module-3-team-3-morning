import React from 'react';
import InputRadio from './InputRadio';
import '../../stylesheets/Design.scss';

const Design = (props) => (
  <fieldset className='collapsible collapsable--open'>
    <div className='collapsible__content'>
      <h3 className='collapsible__content--title'>Colores</h3>
      <div className='collapsible__content--position'>
        <InputRadio classLabel='palette1' classInput='palette1--radio' id='palette1' value='1' name='palette' checked={props.palette === '1'} colorA='palette1--colorA' colorB='palette1--colorB' colorC='palette1--colorC' handleInput={props.handleInput} />

        <InputRadio classLabel='palette2' classInput='palette2--radio' id='palette2' value='2' name='palette' checked={props.palette === '2'} colorA='palette2--colorA' colorB='palette2--colorB' colorC='palette2--colorC' handleInput={props.handleInput} />

        <InputRadio classLabel='palette3' classInput='palette3--radio' id='palette3' value='3' name='palette' checked={props.palette === '3'} colorA='palette3--colorA' colorB='palette3--colorB' colorC='palette3--colorC' handleInput={props.handleInput} />
      </div>
    </div>
  </fieldset>
);

export default Design;
