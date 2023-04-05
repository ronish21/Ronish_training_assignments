/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About Me</h1>
        <p>I am Ronish from Mysore. I am pursing B.E. at MIT,Mysore. I'm good at problem solving. My eagerness to learn new skills stands me highlighted from the crowd. </p>
      </header>
      <section className="projects-section">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Department Association Management System</h3>
         
          <a href="#">Link to the project</a>
        </div>
        <div className="project-card">
          <h3>Moblie Application development</h3>
          
          <a href="#">Link to the project</a>
        </div>
      </section>
      <section className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>C</li>
          <li>C++</li>
          <li>MySql</li>
         
        </ul>
      </section>
      <section className="resume-section">
        <h2>Resume</h2>
        <p>Add a link to your resume</p>
      </section>
      <footer className="contact-section">
        <h2>Contact</h2>
        <ul>
          <li>Email: your-email-address</li>
       
        </ul>
      </footer>
    </div>
  );
}

export default App;

