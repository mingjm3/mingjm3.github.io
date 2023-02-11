import './App.css';
import Nav from './components/Navbar.js'
import Intro from './components/Intro';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="App-body">
        <section id='intro'>
          <Intro />
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
