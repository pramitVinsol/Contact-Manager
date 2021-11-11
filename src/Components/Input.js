import React from 'react';
import ValidationMessage from '../Components/ValidationsMessage';

function Input(props) {

  const invalidClass = `${props.touched && !props.valid ? "Invalid" : null}`;

  return (
    <div className={`form-group mt-4 ${invalidClass}`}>
      <label>{props.label}</label>
      <input className='form-control' value={props.value} type={props.type} checked={props.valid} onChange={props.changed} />
      <ValidationMessage touched={props.touched} valid={props.valid} validationMessage={props.validationMessage} />
    </div>
  )
};

export default Input;