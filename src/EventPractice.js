import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.production.min';

const EventPractice = () => {
  const [username, setUsername] = useState('');
  const [usermessage, setUsermessage] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleUsermessage = (e) => {
    setUsermessage(e.target.value);
  };

  const handleClick = () => {
    alert(username + ' : ' + usermessage);
    setUsername('');
    setUsermessage('');
    alert('삭제 완료');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div>
      <h1>&nbsp;이벤트 연습</h1>
      <input
        text="text"
        name="username"
        placeholder="이름"
        value={username}
        onChange={handleUsername}
      />
      <input
        text="text"
        name="usermessage"
        placeholder="메시지"
        value={usermessage}
        onChange={handleUsermessage}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

// class EventPractice extends Component {
//   state = {
//     username: '',
//     usermessage: '',
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleClick = () => {
//     alert(this.state.username + ' : ' + this.state.usermessage);
//     this.setState({ username: '', usermessage: '' }, () => {
//       alert('삭제 완료' + this.state.username + this.state.usermessage);
//     });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>&nbsp;이벤트 연습</h1>
//         <input
//           text="text"
//           name="username"
//           placeholder="이름"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />
//         <input
//           text="text"
//           name="usermessage"
//           placeholder="메시지"
//           value={this.state.usermessage}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

export default EventPractice;
