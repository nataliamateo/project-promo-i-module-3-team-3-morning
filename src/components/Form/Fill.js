/* eslint-disable no-sequences */
import React from 'react';
import InputText from './InputText';
import '../../stylesheets/Fill.scss';
import InputFile from './InputFile';

const Fill = (props) => {
  return (
    <div className='collapsible__content'>
      <InputText id='fullname' labelText='Nombre completo' inputName='name' inputType='text' value={props.formData.name} inputPlaceholder='Ej: Sally Jill' handleInput={props.handleInput} />
      <InputText id='job' labelText='Puesto' inputName='job' inputType='text' value={props.formData.job} inputPlaceholder='Ej: Front-end' handleInput={props.handleInput} />
      <InputFile handleImage={props.handleImage} photo={props.formData.photo} />
      <InputText id='phone' labelText='Teléfono' inputName='phone' inputType='tel' value={props.formData.phone} inputPlaceholder='Ej: 555-55-55-55' handleInput={props.handleInput} />
      <InputText id='email' labelText='Email' inputName='email' inputType='email' value={props.formData.email} inputPlaceholder='Ej: sally-hill@gmail.com' handleInput={props.handleInput} />
      <InputText id='linkedin' labelText='Linkedin' inputName='linkedin' inputType='text' value={props.formData.linkedin} inputPlaceholder='Ej: linkedin.com/in/sally.hill' handleInput={props.handleInput} />
      <InputText id='github' labelText='Github' inputName='github' inputType='text' value={props.formData.github} inputPlaceholder='Ej: @sally-hill' handleInput={props.handleInput} />
    </div>
  );
};

export default Fill;
