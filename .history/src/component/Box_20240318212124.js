import React from "react";

export const Box = (props) => {
  console.log(props);
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img src='/images/rock.png' alt='바위' />
      <h2>WINNER</h2>
    </div>
  );
};
