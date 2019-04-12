import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

render() {
    return (
      <div className="button-holder">
      <button>All</button>
      <button>Easy</button>
      <button>Medium</button>
      <button>Hard</button>
      <button>Completed</button>
      </div>);
    }
  
}


export default NavBar;
