import React, { Component } from "react";
import "./../css/Calendar.css";

export class Calendar extends Component{
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
      <div className={"Calendar "+visibility}>
        <h2>Calendar</h2>
      </div>
    );
  }
}