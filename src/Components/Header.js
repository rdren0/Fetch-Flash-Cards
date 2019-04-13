import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

render() {
    return (
      <div className="header">
         <h1>Make Fetch Happen</h1>
          <h3> Fetch/Networks/Servers</h3>
      </div>);
    }
  
}


export default Header;
