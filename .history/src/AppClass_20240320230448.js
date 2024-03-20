import React, { Component } from "react";

export default class AppClass extends Component {
  render() {
    return (
      <div className='content'>
        <div className='game_screen'>
          <Box title='YOU' item={userSelect} result={result} />
          <Box title='COMPUTER' item={computerSelect} result={result} />
        </div>
        <div className='btn_wrap'>
          <button
            className='scissors'
            onClick={() => {
              play("scissors");
            }}
          >
            <div className='btn_items'>
              <img src='/images/btn_scissors.png' alt='가위 이미지' />
              <span>가위</span>
            </div>
          </button>
          <button
            className='rock'
            onClick={() => {
              play("rock");
            }}
          >
            <div className='btn_items'>
              <img src='/images/btn_rock.png' alt='바위 이미지' />
              <span>바위</span>
            </div>
          </button>
          <button
            className='paper'
            onClick={() => {
              play("paper");
            }}
          >
            <div className='btn_items'>
              <img src='/images/btn_paper.png' alt='보 이미지' />
              <span>보</span>
            </div>
          </button>
        </div>
      </div>
    );
  }
}
