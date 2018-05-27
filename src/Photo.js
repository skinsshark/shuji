import React, { Component } from 'react';
import './Photo.css';

class Photo extends Component {
  onImageLoad = () => {
    const el = document.getElementById(this.props.name);
    el.classList.add('ready');
  }

  render() {
    const currPhoto = require(`./images/${this.props.name}.jpg`);
    const background = require(`./images/${this.props.name}s.jpg`);

    return (
      <img
        alt={this.props.name}
        id={this.props.name}
        onLoad={this.onImageLoad}
        src={currPhoto}
        style={{'backgroundImage': `url(${background})`}}
      />
    );
  }
}

export default Photo;
