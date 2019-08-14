import React, { Component } from "react";
import "./../css/Content.css";

export class Content extends Component{
  constructor(props) {
    super();
    this.state = {
      visibility: false
    }
  }

  render(){
    let visibility = this.state.visibility ? "visible" : "hidden";

    return(
      <div className={"Content "+visibility}>
        <div>This is the content.</div>
      </div>
    );
  }
}