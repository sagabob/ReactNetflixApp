import React from "react";

function NButton(props) {
  return (
    <button className={props?.className} {...props}>
      <i className={props?.iconClassName}></i>
      {props.name}
    </button>
  );
}

export default NButton;
