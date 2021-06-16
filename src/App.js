import Say from './Say.js';

function App() {
  const name = 'react';

  const style = {
    backgroundColor: 'gray',
    color: 'black',
    fontSize: '32px',
    fontWeight: 'bold',
    padding: 16,
  };

  return (
    <div style={style} className="App">
      <Say />
    </div>
  );
}

export default App;
