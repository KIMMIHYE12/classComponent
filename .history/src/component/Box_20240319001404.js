import React from "react";
https://github.com/KIMMIHYE12/rockpaperscissor.git
export const Box = (props) => {
  console.log("props", props);
-m -
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
