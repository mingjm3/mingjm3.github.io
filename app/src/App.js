import React, { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
      <div className={`App-${theme}`}>
        <div className='App'>
          <button onClick={toggleTheme}>switch</button>
          <h1>efeiu</h1>
        </div>
      </div>
  );
}

export default App;
