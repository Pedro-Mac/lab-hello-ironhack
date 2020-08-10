import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <img src="./images/ironhack-logo.svg" alt="ironhack-logo" />
          <img src="./images/menu-top.svg" alt="menu-top" />
        </nav>
        <header className="App-header">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn a Frontend framework from scratch, to become a Ninja
            Developer.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Awesome!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
