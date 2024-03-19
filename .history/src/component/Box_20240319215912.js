import React from "react";

export const Box = (props) => {
  let result;
  console.log("title", props.title);

  if (
    props.title === "COMPUTER" &&
    props.result !== "Tie" &&
    props.result !== ""
  ) {
    result = props.result == "Win" ? "Lose" : "Win";
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result == "Lose" ? "" : "neon"}`}>
      <h1>{props.title}</h1>
      <div className='img_wrap'></div>
      <img
        src={props.item && props.item.img}
        alt={props.item && props.item.describe}
      />
      <h2>{result}</h2>
    </div>
  );
};
