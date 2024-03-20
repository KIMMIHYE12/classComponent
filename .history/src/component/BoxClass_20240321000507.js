import React, { Component } from "react";

export default class BoxClass extends Component {
  constructor() {
    super();
    this.result = "";
  }
  result() {
    if (
      this.props.title === "COMPUTER" &&
      this.props.result !== "Tie" &&
      this.props.result !== ""
    ) {
      this.result = this.props.result === "Win" ? "Lose" : "Win";
    } else {
      this.result = this.props.result;
    }
  }

  render() {
    return (
      result();
      <div
        className={`box ${
          this.result === "Lose" || this.result === "" ? "" : "neon"
        }`}
      >
        <h1 className={this.props.title === "YOU" ? "you" : ""}>
          {this.props.title}
        </h1>
        <div className='img_wrap'>
          <img
            src={this.props.item && this.props.item.img}
            alt={this.props.item && this.props.item.describe}
          />
        </div>

        <h2>{this.result}</h2>
      </div>
    );
  }
}
