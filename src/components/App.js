import React, { Component } from "react";
import { Header } from './shared/Header'
import { Content } from './Content'
import "./../css/App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <div className='background-overlay'></div>
        <Header middle={false} />
        <Content />
        <img className='background-image' src="/images/deck.png" type="image" />
      </div>
    );
  }
}

export default App;