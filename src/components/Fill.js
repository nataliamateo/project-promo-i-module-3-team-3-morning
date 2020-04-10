import React from 'react';
import InputText from './InputText';
import '../stylesheets/Fill.scss';
import InputFile from './InputFile';

const Fill = (props) => (
  <div className='collapsible__content'>
    <InputText id='fullname' labelText='Nombre completo' inputName='name' inputPlaceholder='Ej: Sally Jill' handleInput={props.handleInput} />
    <InputText id='job' labelText='Puesto' inputName='job' inputPlaceholder='Ej: Front-end' handleInput={props.handleInput} />
    <InputFile handleImage={props.handleImage} />
    <InputText id='phone' labelText='Teléfono' inputName='phone' inputType='tel' inputPlaceholder='Ej: 555-55-55-55' handleInput={props.handleInput} />
    <InputText id='email' labelText='Email' inputName='email' inputType='email' inputPlaceholder='Ej: sally-hill@gmail.com' handleInput={props.handleInput} />
    <InputText id='linkedin' labelText='Linkedin' inputName='linkedin' inputType='linkedin' inputPlaceholder='Ej: linkedin.com/in/sally.hill' handleInput={props.handleInput} />
    <InputText id='github' labelText='Github' inputName='github' inputType='github' inputPlaceholder='Ej: @sally-hill' handleInput={props.handleInput} />
  </div>
);

export default Fill;
