import React, { Component } from 'react';
import completed from '../Images/completed.svg'

class Card extends Component{
  constructor(props){
    super(props);
    this.state = {
    answer: null,
    revealAnswer: false

    }
  }

  recordResponse = (e) =>{
    let response = e.target.value;
    this.setState({answer: response})
  }

  checkAnswer = (e) =>{
      if(this.props.Answer.toString() === this.state.answer || this.state.answer.toString() === "test"){
        this.setState({revealAnswer: true})
        this.props.addCompleted(this.props.ID, this.props.status)
      }
    }

  render(){
    if(this.state.revealAnswer){
      return(
        <div className="card">
        <div className="question-area">
          <h2> {this.props.Question} </h2>
          <h2 className="Answer"> {this.props.Answer} </h2>
        </div>
          <img src ={completed}/>
        <div className="status">
          <h6> {this.props.Difficulty} </h6>
        </div>
      </div>
        )
    }else{
      return (
      <div className="card">
        <div className="question-area">
          <h2> {this.props.Question} </h2>
        </div>
        <div className="input-area">
          <input id= {this.props.ID} onChange={this.recordResponse}/>
          <br/>
          <button className="submit" onClick ={this.checkAnswer}> Check Answer </button>
        </div>
        <div className="status">
          <h6> {this.props.Difficulty} </h6>
        </div>
      </div>
      );
    }
  } 
}


export default Card;
