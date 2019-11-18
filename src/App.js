import React from 'react';
// import logo from './logo.svg';
// // import cat from './public/football-cat.jpg'
import Kitten from './components/Kitten.js'
import './App.css';

class App extends React.Component {
  state = {
    allKittens: ['Lucy', 'Achilles', 'Chumley'],
    bestBoy: 'Lil Mama',
    newCatName: '',
    highScorePets: 0
  }

  whoGotPet = (name, numPets) => {
    if (numPets > this.state.highScorePets){
      this.setState({
        bestBoy: name,
        highScorePets: numPets
      })
    }
  }

  clearPets = () => {
    this.setState({highScorePets: 0, bestBoy: "Lil Mama"})
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state)
  }

  addACat = (e) => {
    e.preventDefault()
    if (this.state.newCatName){
    const extraKittens = this.state.allKittens
    extraKittens.push(this.state.newCatName)
    console.log(extraKittens)
    this.setState({allKittens: extraKittens})}
  }


  render(){
  const kittenArray = this.state.allKittens.map(kitten => <Kitten name={kitten} whoGotPet={this.whoGotPet} clearPets={this.clearPets}/>)

//add mechanism where you pet a cat too many times and it bites you; essentially don't wake the wiggler

//How to do?? As pets increase include random number generator. compare each pet count to num generator??

    return (
      <div className="App">
        <header className="App-header">
          <img src='./football-cat.jpg' className="App-logo" alt="logo" />
            <p>
              Hello! Here is a safe space to love on some cats ❤️ 🐈
            </p>
        </header>
        <div className="main-div">
        <p> "🐈" {this.state.bestBoy} loves you the most</p>

          <div className="kitten-div">
            {kittenArray}
          </div>
          <form className="new-cat-form" onSubmit={this.addACat}>
              <h4>Add a cat!!! ❤️ 🐈</h4>
              new kitty:
              <input
                type="text"
                name="newCatName"
                value={this.state.newCatName}
                placeholder="Mittens"
                onChange={this.handleChange} />
              <input type="submit" />
          </form>

        </div>
      </div>
    );
  }
}

export default App;
