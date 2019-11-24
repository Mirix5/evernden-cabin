import React, { Component } from "react";
import "./../css/News.css";

export class News extends Component{
  constructor(props) {
    super();
    this.state = {
      visibility: props.visibility
    }
  }

  componentWillReceiveProps({visibility}) {
    this.setState({...this.state, visibility})
  }

  render(){
    let visibility = this.state.visibility ? "visible" : "hidden";

    return(
      <div className={"News "+visibility}>
        <div>This is the news.</div>
      </div>
    );
  }
}