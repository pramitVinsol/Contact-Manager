import React from "react";

function ValidationMessage(props) {

  if (props.touched && !props.valid) {
    return (
      <div className='error'>
        {props.validationMessage}
      </div>
    )
  } else {
    return <div></div>
  }
};

export default ValidationMessage;