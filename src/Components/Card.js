import React, { Component } from 'react';

function Card(props){
  return (
      <div>
        <h2> {props.Question} </h2>
        <h4> {props.Answer} </h4>
        <h6> {props.Difficulty} </h6>
      </div>);
    
  
}


export default Card;
