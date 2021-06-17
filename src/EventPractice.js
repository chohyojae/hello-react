import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    usermessage: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + ' : ' + this.state.usermessage);
    this.setState({ username: '', usermessage: '' }, () => {
      alert('삭제 완료' + this.state.username + this.state.usermessage);
    });
  };

  render() {
    return (
      <div>
        <h1>&nbsp;이벤트 연습</h1>
        <input
          text="text"
          name="username"
          placeholder="이름"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          text="text"
          name="usermessage"
          placeholder="메시지"
          value={this.state.usermessage}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
