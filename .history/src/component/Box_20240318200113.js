import React from "react";

export const Box = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
      <img src='' />
      <h2>이겼다</h2>
    </div>
  );
};
