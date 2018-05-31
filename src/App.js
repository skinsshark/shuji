import React, { Component } from 'react';
import Photo from './Photo.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>HUJI SHOES</h1>
        <p><a
            href="https://www.producthunt.com/posts/huji-cam"
            target="_blank"
            rel="noopener noreferrer"
          >
            +
        </a></p>

        {/* COULDDO: sync from somewhere ie drive with file name as caption */}
        <Photo name={'2018-05-30'} />
        <Photo name={'2018-05-29'} />
        <Photo name={'2018-05-28'} />
        <Photo name={'2018-05-27'} />
        <Photo name={'2018-05-26'} />
        <Photo name={'2018-05-25'} />
        <Photo name={'2018-05-24-3'} />
        <Photo name={'2018-05-24-2'} />
        <Photo name={'2018-05-24-1'} />
        <Photo name={'2018-05-23'} />
        <Photo name={'2018-05-22'} />
        <Photo name={'2018-05-21'} />
      </div>
    );
  }
}

export default App;
