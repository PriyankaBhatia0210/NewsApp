import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';
import NewsItem from './Components/NewsItem';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY
  const[progress, setProgress] = useState(10)

  const myStyle = {
    backgroundColor: '#ced4da'
  }
    return (
      <Router>
      <div style={myStyle}>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Navbar/>
        <Routes>
        <Route exact path="/newsapp" element = {<NewsComponent setProgress = {setProgress} apiKey={apiKey}  key = "business" pageSize={20} country={'in'} categories={'business'} sourceColor = {'primary'}/>} />
        <Route exact path="/newsapp/business" element = {<NewsComponent setProgress = {setProgress} apiKey={apiKey}  key = "business" pageSize={20} country={'in'} categories={'business'} sourceColor = {'primary'}/>} />
        <Route exact path="/newsapp/entertainment" element = {<NewsComponent setProgress = {setProgress} apiKey={apiKey}  key = 'entertainment' pageSize={20} country={'in'} categories={'entertainment'} sourceColor = {'secondary'}/>} />
        <Route exact path="/newsapp/general" element = {<NewsComponent setProgress = {setProgress} apiKey={apiKey}  key = 'general' pageSize={20} country={'in'} categories={'general'} sourceColor = {'success'}/>} />
        <Route exact path="/newsapp/health" element = {<NewsComponent setProgress = {setProgress} apiKey={apiKey}  key='health' pageSize={20} country={'in'} categories={'health'} sourceColor = {'danger'} />} />
        <Route exact path="/newsapp/science" element = {<NewsComponent setProgress = {setProgress} apiKey={apiKey}  key='science' pageSize={20} country={'in'} categories={'science'} sourceColor = {'warning'}/>} />
        <Route exact path="/newsapp/sports" element = {<NewsComponent setProgress = {setProgress} apiKey={apiKey}  key='sports' pageSize={20} country={'in'} categories={'sports'} sourceColor = {'info'}/>} />
        <Route exact path="/newsapp/technology" element = {<NewsComponent setProgress = {setProgress} apiKey={apiKey}  key='technology' pageSize={20} country={'in'} categories={'technology'} sourceColor = {'dark'}/>} />              
        </Routes>
        
      </div>
      </Router>
    )
}

export default App

