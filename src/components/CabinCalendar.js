import React, { Component } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import "./../css/Calendar.css";
import "./../css/main.scss";

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
        <div>Calendar</div>
        <div className="calendar-wrapper">
          <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
        </div>
      </div>
    );
  }
}