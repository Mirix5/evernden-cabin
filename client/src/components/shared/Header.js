import React, {Component} from 'react';
import "./../../css/header.css";
import { News } from '../News';
import { Photos } from '../Photos';
import { CabinCalendar } from '../CabinCalendar';
import { LoginForm } from '../LoginForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class Header extends Component {
  constructor(props) {
    super();
    this.state = {
      middle: true,
      loggedIn: false,
      contentVisible: false
    }

    this.updateLoggedIn = this.updateLoggedIn.bind(this);
  }

  repositionTop() {
    this.setState({middle: false, contentVisible: true});
  }

  repositionMiddle() {
    this.setState({middle: true, contentVisible: false});
  }

  updateLoggedIn(loggedIn) {
    this.setState(loggedIn);
  }

  render(){
    let position = this.state.middle ? "middle" : "top";
    let loggedIn = this.state.loggedIn;
    if(!this.state.contentVisible){
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }

    if(loggedIn){
      return(
        <div className={"Header noselect "+position} >
          <Router>
            <Link to="/">
              <h1 className='logo underline' onClick={this.repositionMiddle.bind(this)}> The Evernden Cabin </h1>
            </Link>
            <ul className='navigation-list' >
              <li onClick={this.repositionTop.bind(this)}>
                <Link to="/news">news</Link>
              </li>
              <li onClick={this.repositionTop.bind(this)}>
                <Link to="/photos">photos</Link>
              </li>
              <li onClick={this.repositionTop.bind(this)}>
                <Link to="/calendar">calendar</Link>
              </li>
            </ul>

            <Switch>
              <Route path="/news">
                <News visibility={this.state.contentVisible}/>
              </Route>
              <Route path="/photos">
                <Photos visibility={this.state.contentVisible}/>
              </Route>
              <Route path="/calendar">
                <CabinCalendar visibility={this.state.contentVisible}/>
              </Route>
            </Switch>
          </Router>
        </div>
      );
    } else {
      return(
        <div className={"Header noselect "+position}>
          <Router>
            <Link to="/">
              <h1 className='logo underline'> The Evernden Cabin </h1>
            </Link>
            <LoginForm updateLoggedIn={this.updateLoggedIn} />
          </Router>
        </div>
      );
    }
  }
}
