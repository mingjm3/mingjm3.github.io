import React, { useState } from 'react';
import { FaSun } from 'react-icons/fa'
import './App.css';

import Profile from './components/Profile';
import Greeting from './components/Greeting';
import Skills from './components/Skills';
import Education from './components/Education';

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
          <Skills />
          <Education />
        </div>
      </div>
  );
}

export default App;
