import React, { Component} from "react";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <video autoPlay mute loop>
            <source src="/images/Uploaded Videos/rain.webm" type="video/webm" />
        </video>
      </div>
    );
  }
}

export default App;