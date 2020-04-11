<<<<<<< HEAD
import React from "react";

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
      <label className="collapsible__content--style-text required" htmlFor={props.id}>
        {props.labelText}
      </label>
      <input required className="collapsible__content--input-form" type={props.inputType} placeholder={props.inputPlaceholder} id={props.id} name={props.inputName} onKeyUp={handleKeyUp} />
    </div>
  );
};

export default InputText;
=======
import React from "react";

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
      <label className="collapsible__content--style-text required" htmlFor={props.id}>
        {props.labelText}
      </label>
      <input required className="collapsible__content--input-form" type={props.inputType} defaultValue={props.value} placeholder={props.inputPlaceholder} id={props.id} name={props.inputName} onKeyUp={handleKeyUp} />
    </div>
  );
};

export default InputText;
>>>>>>> card
