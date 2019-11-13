import React, { Component } from 'react';

class Kitten extends Component {
  state = {
    pets: 0
  }

  petKitten = () => {
    this.setState({pets: this.state.pets += 1})
    this.props.whoGotPet(this.props.name, this.state.pets)
  }

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
