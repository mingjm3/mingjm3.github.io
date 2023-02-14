import './App.css';
import NavBar from './components/NavBar.js'
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-body">
        <section id='home'>
          <Home />
        </section>
        <section id='about'>
          <Profile />
        </section>
        <section id='experience'>
          <h2>Experience</h2>
        </section>
        <section id='projects'>
          <h2>Projects</h2>
        </section>
        <section id='contact'>
          <h2>Contact</h2>
        </section>
      </div>
    </div>
  );
}

export default App;
