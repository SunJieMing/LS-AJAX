import React, { Component } from 'react';
import logo from './d2rdDroidEmoji.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br></br>
          <br></br>
          <p>
  Welcome to d2rd Friends
          </p>
          <a
            className="App-link"
            href="https://linkedin.com/in/gddaniel"
            target="_blank"
            rel="noopener noreferrer"
          >
            About D2rd
          </a>
        </header>
      </div>
    );
  }
}

export default App;
