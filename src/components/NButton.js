import React from "react";

function NButton(props) {
  return (
    <button className={props?.className} {...props}>
      {props.name}
    </button>
  );
}

export default NButton;
