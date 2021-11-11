import React from "react";

function Button(props) {
  return (
    <div className="form-group mt-4">
      <button className="btn btn-success" onClick={props.clicked}>{props.text}</button>
    </div>
  );
}

export default Button;