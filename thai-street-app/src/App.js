import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import Header from './Header/Header'
import Menu from './Menu/Menu'
import Home from './Home/Home'
import Footer from './Footer/Footer'

class App extends Component {

  render() {
    return (
      <div className="app">
      
        <Header />
        <Route path='/' exact component={ Home } /> 
        <Route path='/menu' exact component={ Menu } /> 
       
      </div>
    );
  }
}

export default App;
