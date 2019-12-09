import React, { Component } from "react";
import { Header } from './shared/Header';
import "./../css/App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <div className='background-overlay'></div>
        <Header middle={true} />
        <img className='background-image' alt='' src="/images/deck-min.jpg" type="image" />
      </div>
    );
  }
}

export default App;