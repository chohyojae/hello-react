import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    setNames([...names, { id: nextId, text: inputText }]);
    setNextId(nextId + 1);
    setInputText('');
  };

  const onRemove = (id) => {
    console.log('id to be removed: ' + id);
    const nextNames = names.filter((name) => name.id !== id);
    console.log('length: ' + nextNames.length);
    for (let i = 0; i < nextNames.length; i++)
      console.log(
        'nextNames ' + i + ': ' + nextNames[i].id + ', ' + nextNames[i].text
      );

    console.log(nextNames);
    setNames(nextNames);
  };

  const nameList = names.map((item) => (
    <li key={item.id} onDoubleClick={() => onRemove(item.id)}>
      {item.text}
    </li>
  ));

  return (
    <div>
      <div>
        <input value={inputText} onChange={onChange} />
        <button onClick={onClick}>추가</button>
      </div>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
