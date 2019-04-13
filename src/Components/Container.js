import React, { Component } from 'react';
import Card from './Card';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      };
  }

  render() {
    let completionStatus;
    console.log(this.props.data)
    let cards = this.props.data.map(card =>{
      if(this.props.completed.includes(card.ID)){
        completionStatus =true;
      }else{
        completionStatus =false; 
      }
      return <Card
          ID={card.ID}
          Question = {card.Question}
          Answer = {card.Answer}
          Difficulty = {card.Difficulty}
          completed = {this.props.completed}
          addCompleted = {this.props.addCompleted}
          status = {completionStatus}
              />
      });
  
      // cards = <iframe src="https://giphy.com/embed/xlYKItjhiDsY" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    
     return (
        <div  className="container" >
          {cards}
        </div>
        )
  }  
}


export default Container;


      