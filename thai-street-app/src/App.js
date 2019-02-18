import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header.js'
import Menu from './Menu/Menu.js'
import Home from './Home/Home'

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <Home />
        <Menu />
      </div>
    );
  }
}

export default App;
