import './App.css';

// 67094f40903c4e0ab0f73d415277b578 - news API key
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  c = 'John';

  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}
