import React, { Component } from 'react';
import Header from './Components/Header.js'
import Container from './Components/Container.js';
import data from './data.js';
import loading from './Images/loading.svg';


export class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
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
    if (this.state.completed.includes(ID) && status === true) {
      newState = this.state.completed.filter(card => card !== ID);
    } else{
      newState = [...this.state.completed, ID];
    this.setState({
      completed : newState
    }, () => {
      this.saveToStorage();
    });
    }
  }


  saveToStorage = () => {
    localStorage.setItem('Completed', JSON.stringify(this.state.completed));
  }


  componentDidMount() {
    fetch("https://fe-apps.herokuapp.com/api/v1/memoize/1901/rachael-fetch/flashcards")
    .then(response => response.json())
    .then(questions => this.setState({questions: questions.flashCards}))
    .catch(err => {
      throw new Error(err);
    })
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
        </div>)
    }else{
      return(
        <div>
          <Header/>
          <div className="button-holder">
            <button id= "showAll" onClick={this.showAll}>All</button>
            <button id="easy"onClick={this.sortCards}>Easy</button>
            <button id="medium" onClick={this.sortCards}>Medium</button>
            <button id="hard" onClick={this.sortCards}>Hard</button>
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
