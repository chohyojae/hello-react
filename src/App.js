import MyComponent from './MyComponent';

function App() {
  const name = 'react';

  const style = {
    backgroundColor: 'green',
    color: 'black',
    fontSize: '32px',
    fontWeight: 'bold',
    padding: 16,
  };

  return (
    <div style={style} className="App">
      {'리액트' === name ? (
        <h1>'리액트'입니다.</h1>
      ) : (
        <h1>'리액트'가 아닙니다.</h1>
      )}
      <h2>(값: {name})</h2>
      <h3>
        <MyComponent name={'뤼액트'} children="AABB" favoriteNumber={1} />
      </h3>
    </div>
  );
}

export default App;
