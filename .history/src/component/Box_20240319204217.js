import React from "react";

export const Box = (props) => {
  let result;

  if (props.title == "COPUTER") {
    result = props.result == "win" ? "lose" : "win";
  } else {
    result = props.result;
  }

  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img
        src={props.item && props.item.img}
        alt={props.item && props.item.describe}
      />
      <h2>{result}</h2>
    </div>
  );
};
