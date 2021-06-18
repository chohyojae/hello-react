import React, { Component, useState } from 'react';
import LifeCycleSample from './LifeCycleSample';

const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const App = () => {
  const [color, setColor] = useState('#000000');

  const handleClick = () => {
    setColor(getRandomColor());
  };

  return (
    <div>
      <button onClick={() => handleClick()}>랜덤 색상</button>
      <LifeCycleSample color={color} />
    </div>
  );
};
export default App;
