import React from 'react';

const InputText = (props) => {
  const handleKeyUp = (ev) => {
    const data = {
      name: props.inputName,
      value: ev.currentTarget.value,
    };
    props.handleInput(data);
  };

  return (
    <div>
      <label className='collapsible__content--style-text required' htmlFor={props.id}>
        {props.labelText}
      </label>
      <input required className='collapsible__content--input-form' type={props.inputType} value={props.value} placeholder={props.inputPlaceholder} id={props.id} name={props.inputName} onChange={handleKeyUp} />
    </div>
  );
};

export default InputText;
