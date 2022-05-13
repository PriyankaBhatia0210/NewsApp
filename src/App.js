import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';
import NewsItem from './Components/NewsItem';

export class App extends Component {
  myStyle = {
    backgroundColor: '#ced4da'
  }
  render() {
    return (
      <div style={this.myStyle}>
        <Navbar/>
        <NewsComponent pageSize={'20'} country={'in'}/>
        
      </div>
    )
  }
}

export default App

