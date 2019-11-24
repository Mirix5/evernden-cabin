import React, { Component } from "react";
import "./../css/Content.css";

export class Content extends Component{
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
    console.log(visibility)

    return(
      <div className={"Content "+visibility}>
        <div>This is the content.</div>
      </div>
    );
  }
}