import React from 'react';
import { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });

  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ' : ' + message);
    const nextForm = {
      username: '',
      message: '',
    };
    setForm(nextForm);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
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
        onChange={onChange}
      />
      <input
        text="text"
        name="message"
        placeholder="메시지"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

// const EventPractice = () => {
//   const [username, setUsername] = useState('');
//   const [usermessage, setUsermessage] = useState('');

//   const handleUsername = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleUsermessage = (e) => {
//     setUsermessage(e.target.value);
//   };

//   const handleClick = () => {
//     alert(username + ' : ' + usermessage);
//     setUsername('');
//     setUsermessage('');
//     alert('삭제 완료');
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleClick();
//     }
//   };

//   return (
//     <div>
//       <h1>&nbsp;이벤트 연습</h1>
//       <input
//         text="text"
//         name="username"
//         placeholder="이름"
//         value={username}
//         onChange={handleUsername}
//       />
//       <input
//         text="text"
//         name="usermessage"
//         placeholder="메시지"
//         value={usermessage}
//         onChange={handleUsermessage}
//         onKeyPress={handleKeyPress}
//       />
//       <button onClick={handleClick}>확인</button>
//     </div>
//   );
// };
export default EventPractice;
