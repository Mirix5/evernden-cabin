import React, { Component } from "react";
import 'react-calendar/dist/Calendar.css';
import "./../css/Calendar.css";
import Calendar from 'react-calendar';

export class CabinCalendar extends Component{
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
        <div className='calendar-wrapper'>
          <Calendar  />
        </div>
      </div>
    );
  }
}