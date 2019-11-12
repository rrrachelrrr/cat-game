import React, { Component } from 'react';

class Kitten extends Component {
  state = {
    pets: 0
  }

  petKitten = () => {
    this.setState({pets: this.state.pets += 1})

  }

    render(){
      return (
      <div>"🐈"
        <button value="submit" onClick={this.petKitten}>Pet me</button>
        <span className="kitten-pet-count"> This kitten has been pet <strong>{this.state.pets} times </strong></span>
      </div>
    )
  }
}

export default Kitten;
