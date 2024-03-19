import React from "react";

export const Box = (props) => {
  let result;
  console.log("title", props.title);

  if (
    props.title === "COMPUTER" &&
    props.result !== "Tie" &&
    props.result !== ""
  ) {
    result = props.result === "Win" ? "Lose" : "Win";
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result === "Lose" || result === "" ? "" : "neon"}`}>
      <h1 className={props.title === "YOU" ? "you" : ""}>{props.title}</h1>
      <div className='img_wrap'>
        <img
          src={props.item && props.item.img}
          alt={props.item && props.item.describe}
        />
      </div>

      <h2 className={props.title === "YOU" ? "you" : ""}>{result}</h2>
    </div>
  );
};