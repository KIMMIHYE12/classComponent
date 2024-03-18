import React from "react";
//github.com/KIMMIHYE12/rockpaperscissor.git
https: export const Box = (props) => {
  console.log("props", props);
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img
        src={props.item && props.item.img}
        alt={props.item && props.item.describe}
      />
      <h2>WINNER</h2>
    </div>
  );
};
