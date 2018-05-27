import React, { Component } from 'react';
import './Photo.css';

class Photo extends Component {
  render() {
    const currPhoto = require(`./images/${this.props.name}.jpg`);
    //todo: alt tag be file name only
    return <img src={currPhoto} alt={currPhoto}/>;
  }
}

export default Photo;
