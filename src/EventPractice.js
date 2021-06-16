import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
  };

  render() {
    return (
      <div>
        <h1> 이벤트 연습</h1>
        <input
          text="text"
          message="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={(e) => {
            this.setState({ message: e.target.value });
            console.log(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            alert(this.state.message);
            this.setState({ message: '' }, () => {
              alert('삭제 완료' + this.state.message);
            });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;
