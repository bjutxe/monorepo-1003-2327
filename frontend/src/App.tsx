import React from 'react';
import './App.css';

function App() {
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    fetch('http://localhost:8080/')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{message || 'Loading...'}</p>
      </header>
    </div>
  );
}

export default App;
