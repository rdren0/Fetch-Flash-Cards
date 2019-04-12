import React, { Component } from 'react';

class CompleteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleFav(this.props.name)
  }

  render() {
    return (
      <div>
        <img onClick={this.handleClick}
        src={ this.props.isFavorite ? this.props.like : this.props.unlike }
        className="like-btn"></img>
      </div>
    );
  }
}
export default LikeButton;
