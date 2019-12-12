import React, { Component } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import { format } from 'date-fns'
import "./../css/Calendar.css";
import "./../css/main.scss";

export class CabinCalendar extends Component{
  constructor(props) {
    super();
    this.state = {
      visibility: props.visibility,
      events: []
    }
  }

  componentWillReceiveProps({visibility}) {
    this.setState({...this.state, visibility})
  }

  componentWillUnmount(){
      document.body.style.overflowY = "hidden";
  }

  componentWillMount(){
    var year = new Date().getFullYear()
    var month = new Date().getMonth()
    var day = 5
    var eventList = [ {title: 'my event', date: format(new Date(year, month, day), 'yyyy-MM-dd')}, 
                      {title: 'my event', date: format(new Date(year, month, day+8), 'yyyy-MM-dd')},
                      {title: 'my event', date: format(new Date(year, month, day+17), 'yyyy-MM-dd')}]
    this.setState({events: eventList})
  }

  handleDateClick = (arg) => {
    console.log(arg)
  }

  render(){
    let visibility = this.state.visibility ? "visible" : "hidden"
    let eventList = this.state.events

    return(
      <div className={"Calendar "+visibility}>
        <h2>Calendar</h2>
        <div className="calendar-wrapper">
          <FullCalendar defaultView="dayGridMonth" dateClick={this.handleDateClick} plugins={[ dayGridPlugin, interactionPlugin ]} events={ eventList }/>
        </div>
        <div className="calendar-footer"></div>
      </div>
    );
  }
}