import React, { Component } from 'react';
import Header from './Components/Header.js'
import Container from './Components/Container.js';
import Card from './Components/Card.js';
import './App.scss';


export class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: []

    }
  }

  componentDidMount() {
  }
  
  render() {
      return(
        <div>
          <Header/>
          <Container/>
          <hr/>
      </div>
      );
  }
}

export default App;
