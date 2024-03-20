import React, { Component } from "react";

export default class BoxClass extends Component {
  constructor(props) {
    let result;
    if (
      this.props.title === "COMPUTER" &&
      this.props.result !== "Tie" &&
      this.props.result !== ""
    ) {
      result = this.props.result === "Win" ? "Lose" : "Win";
    } else {
      result = this.props.result;
    }
  }

  render() {
    return (
      <div
        className={`box ${result === "Lose" || result === "" ? "" : "neon"}`}
      >
        <h1 className={props.title === "YOU" ? "you" : ""}>{props.title}</h1>
        <div className='img_wrap'>
          <img
            src={props.item && props.item.img}
            alt={props.item && props.item.describe}
          />
        </div>

        <h2>{result}</h2>
      </div>
    );
  }
}
