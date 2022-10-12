import React, { Component } from "react";
import { Header } from './shared/Header';
import "./../css/App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        {/* <div className='background-overlay'></div> */}
        <Header middle={true} />
        <div className="background-img-wrapper">
          <img className='background-image' src="/images/kitchen.jpg" type="image" />
        </div>
      </div>
    );
  }
}

export default App;