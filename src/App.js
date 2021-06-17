// import Say from './Say.js';
// import EventPractice from './EventPractice.js';
// import ValidationSample from './ValidationSample';
import React, { Component } from 'react';
import ScrollBox from './ScrollBox';
class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />

        <button onClick={() => this.scrollBox.scrollToBottom()}>
          아래로 스크롤
        </button>
      </div>
    );
  }
}

export default App;
