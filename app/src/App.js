import React, { useState } from 'react';
import { FaSun } from 'react-icons/fa'
import './App.css';

import Profile from './components/Profile';


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
          <div className='Introduction'>
            <p>Hey, </p>
            <p>My name is Mingjun 👋</p>
            <p>I'm a Graduate Student in Computer Science, Software Engineer, Geek and Explorer </p>
            <p>Distributed System · Cloud Computing · System</p>
          </div>
        </div>
      </div>
  );
}

export default App;
