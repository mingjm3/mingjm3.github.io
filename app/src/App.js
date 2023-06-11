import React, { useState } from 'react';
import { FaSun } from 'react-icons/fa'
import './App.css';

import Profile from './components/Profile';
import Greeting from './components/Greeting';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
      <div className={`App-${theme}`}>
        <div className='App'>
          <button className="Theme" onClick={toggleTheme}>
            <FaSun />
          </button>
          <Profile />
          <Greeting />
        </div>
      </div>
  );
}

export default App;
