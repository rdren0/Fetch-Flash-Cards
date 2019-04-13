import React, { Component } from 'react';
import Card from './Card';
import PlaceHolder from './PlaceHolder';

class Container extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let completionStatus;
    let cards;
    if(this.props.data.length){
    cards = this.props.data.map(card =>{
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
    }else{
      cards = <PlaceHolder />
    }

    return (
      <div  className="container" >
        {cards}
      </div>
    )
  }  
}
      // cards = <iframe src="https://giphy.com/embed/xlYKItjhiDsY" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>


export default Container;


      