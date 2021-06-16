import React, { Component } from 'react';

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1> 이벤트 연습</h1>
        <input
          text="text"
          message="message"
          placeholder="아무거나 입력해 보세요"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default EventPractice;
