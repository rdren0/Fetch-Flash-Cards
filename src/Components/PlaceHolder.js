import React from 'react';
import Bulb from '../Images/bulb.svg'

function PlaceHolder(props) {
  return (
    <div className="card">
      <h2>Select a category to begin!</h2>
      <img className="bulb" src={Bulb} alt="Light Bulb palceholder"/>
    </div>
  );
}
  


export default PlaceHolder;
