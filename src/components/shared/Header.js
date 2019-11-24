import React, {Component} from 'react';
import "./../../css/header.css";
import { Content } from '../Content';

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
        <h1 className='logo underline' onClick={this.repositionMiddle.bind(this)}> The Evernden Cabin </h1>
        <ul className='navigation-list' >
          <li onClick={this.repositionTop.bind(this)}>news</li>
          <li onClick={this.repositionTop.bind(this)}>photos</li>
          <li onClick={this.repositionTop.bind(this)}>calendar</li>
        </ul>
        <Content visibility={this.state.contentVisible}/>
      </div>
    );
  }
}
