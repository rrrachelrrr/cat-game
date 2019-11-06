import React from 'react';
// import logo from './logo.svg';
// // import cat from './public/football-cat.jpg'
import Kitten from './components/Kitten.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='./football-cat.jpg' className="App-logo" alt="logo" />
        <p>
          Hello! Pet some cats here soon
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cats are fun
        </a>
      </header>
      <Kitten />
      <Kitten />
      <Kitten />
    </div>
  );
}

export default App;
