import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Content from './Content.js';

class App extends Component {
  render() {

    return (
      <div className="App" >
        <Navbar />
        <Content />
      </div>
    );
  }
}

export default App;
