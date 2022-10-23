import React, { Component } from "react";
import "./../css/Documents.css";

export class Documents extends Component{
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
      <div className={"Documents "+visibility}>
        <h1>Documents</h1>
        <p>These documents contain basic information about the cabin and how to maintain it.</p>
        <div className="documents-list">
          <ul>
            <li>
              <p>
                <a href="#" target="_blank" rel="noopener noreferrer">Opening and Closing the Cabin</a>
              </p>
            </li>
            <li>
              <p>
                <a href="pdf/humphrey-gas-light-manual.pdf" target="_blank" rel="noopener noreferrer">Gas Light Manual</a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://www.propanegaslight.com/lighting/indoor-gas-light-mantles/preformed-mantle-humphrey-l13-2-falk-3769-17.html" target="_blank" rel="noopener noreferrer">Purchase more mantles</a>
              </p>
              <p className="note">(Note: Our gas lights use the "Humphrey L13-2" mantle. Google it if this link is dead.)</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}