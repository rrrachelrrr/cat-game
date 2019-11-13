import React from 'react';
// import logo from './logo.svg';
// // import cat from './public/football-cat.jpg'
import Kitten from './components/Kitten.js'
import './App.css';

class App extends React.Component {
  state = {
    allKittens: ['Lucy', 'Achilles', 'Chumley']
  }

  render(){
  const kittenArray = this.state.allKittens.map(kitten => <Kitten name={kitten}/>)

    return (
      <div className="App">
        <header className="App-header">
          <img src='./football-cat.jpg' className="App-logo" alt="logo" />
          <p>
            Hello! Pet some cats here soon
          </p>
          <a
            className="App-link"
            href="https://nypost.com/2019/11/05/black-cat-who-dashed-onto-field-during-giants-game-is-among-strays-living-at-metlife-stadium/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cats are fun
          </a>
        </header>
          <div className="kitten-div">
            {kittenArray}
          </div>
      </div>
    );
  }
}

export default App;
