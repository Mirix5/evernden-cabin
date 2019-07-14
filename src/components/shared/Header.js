import React, {Component} from 'react';
import "./../../css/header.css";

export class Header extends Component {
  constructor(props) {
    super();
    this.state = {
      middle: props.middle
    }
  }

  reposition() {
    this.setState({middle: !this.state.middle});
  }

  render(){
    let position = this.state.middle ? "middle" : "top";

    return(
      <div className={"Header "+position} onClick={this.reposition.bind(this)}>
        <h1 className='logo underline'> The Evernden Cabin </h1>
        <ul className='navigation-list' >
          <li>News</li>
          <li>Photos</li>
          <li>Calendar</li>
        </ul>
      </div>
    );
  }
}
