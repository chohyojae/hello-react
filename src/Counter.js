/* 클래스형 컴포넌트의 state*/

import React, { Component } from 'react';

class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       number: 0,
  //       fixedNumber: -1,
  //     };
  //   }
  state = {
    number: 0,
    fixedNumber: -1,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            // this.setState({ number: this.state.number + 1 });
            // this.setState({ number: this.state.number + 1 });

            this.setState((prevState, props) => {
              return {
                number: prevState.number + 1,
              };
            });

            this.setState((prevState, props) => {
              return {
                number: prevState.number + 1,
              };
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
