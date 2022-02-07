import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {

  pageSize = 6;
  apiKey = '67094f40903c4e0ab0f73d415277b578'
  // apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <LoadingBar 
            color='rgb(237, 9, 25)' 
            progress={this.state.progress} 
            height={5} 
            shadow={true} 
            loaderSpeed={1000}
            />
          
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country="in" category="general"/>} />
            <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country="in" category="sports"/>} />
            <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country="in" category="science"/>} />
            <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="health" pageSize={this.pageSize} country="in" category="health"/>} />
            <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} country="in" category="technology"/>} />
            <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country="in" category="business"/>} />
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
