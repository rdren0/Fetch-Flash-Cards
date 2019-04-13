import React, { Component } from 'react';
import Header from './Components/Header.js'
import Container from './Components/Container.js';
import Card from './Components/Card.js';
import data from './data.js';
import loading from './Images/loading.svg';
import './App.scss';


export class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: data.flashCards,
      completed: [],
      selection: [],
      loading: true
    }
  }


  showAll = () =>{
    let allCards = this.state.questions.filter(card =>{
      return (!this.state.completed.includes(card.ID))
    }).sort(() => Math.random() - 0.5);
    this.setState({
      selection: allCards
    });    
  }


  sortCards = (e) =>{
    let value = e.target.innerText;
    let sortedCards =  this.state.questions.filter(card =>{
      return card.Difficulty.toString() === value;
    })
    this.setState({
        selection: sortedCards
    }); 
  }

  onlyCompleted = () =>{
    let completedCards = this.state.questions.filter(card =>{
      return (this.state.completed.includes(card.ID))
    })
    this.setState({
        selection: completedCards
    }); 
  }


  addCompleted = (ID, status) => {
    let newState;
    if (this.state.completed.includes(ID) && status === false) {
      newState = this.state.completed.filter(card => card !== ID);
    } else{
      newState = [...this.state.completed, ID];
    }
    this.setState({
      completed : newState
    }, () => {
      this.saveToStorage();
    });
  }


  saveToStorage = () => {
    localStorage.setItem('Completed', JSON.stringify(this.state.completed));
  }


  componentDidMount() {
    const completedCards = JSON.parse(localStorage.getItem('Completed')) || [];
      this.setState({
        completed: completedCards,
        loading: false

      });
  }
  
  render() {
     if(this.state.loading){
      return(
        <div>
        <img className="App-loading" src={loading} alt="loading-icon" />
          <p>
            Loading flashCards...          
          </p>
        </div>

      )
    }else{
      return(
        <div>
          <Header/>
          <div className="button-holder">
            <button onClick={this.showAll}>All</button>
            <button onClick={this.sortCards}>Easy</button>
            <button onClick={this.sortCards}>Medium</button>
            <button onClick={this.sortCards}>Hard</button>
            <button className= "completed-button" onClick={this.onlyCompleted}>Completed</button>
          </div>
          <hr/>
          <Container 
          data = {this.state.selection}
          completed = {this.state.completed}
          addCompleted = {this.addCompleted}
          />
      </div>
      );
    }
  }

}

export default App;
