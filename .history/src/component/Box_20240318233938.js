import React from "react";

export const Box = (props) => {
  console.log("props", props);

  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img src={props.img} alt={props.describe} />
      <h2>WINNER</h2>
    </div>
  );
};
