import React, { Component} from "react";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <video className="deck-video" autoPlay muted loop >
            <source src="/images/Uploaded Videos/rain_0.webm" type="video/webm" />
        </video>
      </div>
    );
  }
}

export default App;