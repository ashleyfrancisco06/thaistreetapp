import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header.js'
import Menu from './Menu/Menu.js'

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <Menu />
      </div>
    );
  }
}

export default App;
