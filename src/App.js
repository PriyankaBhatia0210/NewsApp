import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';
import NewsItem from './Components/NewsItem';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

export class App extends Component {
  myStyle = {
    backgroundColor: '#ced4da'
  }
  render() {
    return (
      <Router>
      <div style={this.myStyle}>
        <Navbar/>
        <Routes>
        <Route exact path="/business" element = {<NewsComponent key = "business" pageSize={20} country={'in'} categories={'business'} sourceColor = {'primary'}/>} />
        <Route exact path="/entertainment" element = {<NewsComponent key = 'entertainment' pageSize={20} country={'in'} categories={'entertainment'} sourceColor = {'secondary'}/>} />
        <Route exact path="/general" element = {<NewsComponent key = 'general' pageSize={20} country={'in'} categories={'general'} sourceColor = {'success'}/>} />
        <Route exact path="/health" element = {<NewsComponent key='health' pageSize={20} country={'in'} categories={'health'} sourceColor = {'danger'} />} />
        <Route exact path="/science" element = {<NewsComponent key='science' pageSize={20} country={'in'} categories={'science'} sourceColor = {'warning'}/>} />
        <Route exact path="/sports" element = {<NewsComponent key='sports' pageSize={20} country={'in'} categories={'sports'} sourceColor = {'info'}/>} />
        <Route exact path="/technology" element = {<NewsComponent key='technology' pageSize={20} country={'in'} categories={'technology'} sourceColor = {'dark'}/>} />              
        </Routes>
        
      </div>
      </Router>
    )
  }
}

export default App

