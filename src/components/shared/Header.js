import React, {Component} from 'react';
import "./../../css/Header.css";
import { News } from '../News';
import { Photos } from '../Photos';
import { CabinCalendar } from '../CabinCalendar';
import { Documents } from '../Documents';
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
      contentVisible: false
    }
  }

  repositionTop() {
    this.setState({middle: false, contentVisible: true});
  }

  repositionMiddle() {
    this.setState({middle: true, contentVisible: false});
  }

  render(){
    let position = this.state.middle ? "middle" : "top";

    return(
      <div className={"Header noselect "+position} >
        <Router>
          <Link to="/"
            ><h1 className='logo underline' onClick={this.repositionMiddle.bind(this)}> The Evernden Cabin </h1>
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
            <li onClick={this.repositionTop.bind(this)}>
              <Link to="/documents">documents</Link>
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
            <Route path="/documents">
              <Documents visibility={this.state.contentVisible}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
