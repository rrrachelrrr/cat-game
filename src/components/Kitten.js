import React, { Component } from 'react';

class Kitten extends Component {
  state = {
    pets: 0
  }

  petKitten = () => {
    const howManyPets = this.state.pets+=1
    this.setState({pets: howManyPets})
    this.props.whoGotPet(this.props.name, this.state.pets)
    if (this.state.pets > Math.random()*(10-5) + 5){
      alert("STOP PETTING ME!!!! 💀 I BITE YOU!!!")
      this.setState({pets: 0})
      this.props.clearPets()
    }
  }

//   function getRandomArbitrary(min, max) {
//    return Math.random() * (max - min) + min;
// }

// Math.floor(Math.random() * 100) + 1

    render(){
      return (
      <div>"🐈"
        <button value="submit" className="kitten-petting-button" onClick={this.petKitten}>Pet me</button>
        <span className="kitten-pet-count"> {this.props.name} has been pet <strong>{this.state.pets} times </strong></span>
      </div>
    )
  }
}

export default Kitten;
