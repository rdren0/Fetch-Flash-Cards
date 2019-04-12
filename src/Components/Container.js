import React, { Component } from 'react';
import NavBar from './NavBar.js'
import Card from './Card';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      };
  }
  render() {
     return (
      <div className="container">
        <NavBar/>
        <Card
          ID={card.ID}
          Question = {card.Question}
          Answer = {card.Answer}
          Difficulty = {card.Difficulty}
              />

      </div>);
  }

  
}


export default Container;



      