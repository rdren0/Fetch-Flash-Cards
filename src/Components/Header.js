import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

render() {
    return (
      <div className="header">
         <h1>Made Fetch Happen</h1>
          <h4> Flash Cards for Fetch/Networks/Servers </h4>
      </div>);
    }
  
}


export default Header;
