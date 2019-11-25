import React, { Component } from "react";
import "./../css/Photos.css";

export class Photos extends Component{
  constructor(props) {
    super();
    this.state = {
      visibility: props.visibility,
      modalIsOpen: true,
      photos: [
                {src:'http://via.placeholder.com/400x400/', name:'1'},
                {src:'http://via.placeholder.com/400x400/', name:'2'},
                {src:'http://via.placeholder.com/600x400/', name:'3'},
                {src:'http://via.placeholder.com/800x400/', name:'4'},
              ]
    }
  }

  componentWillReceiveProps({visibility}) {
    this.setState({...this.state, visibility})
  }

  render(){
    let visibility = this.state.visibility ? "visible" : "hidden";

    return(
      <div className={"Photos "+visibility}>
        <h2>Photos</h2>
        <div className="photo-grid">
          { this.state.photos.map((photo, key) => 
            <img key={photo.name} src={photo.src} alt="cabin" />
          )}
        </div>
      </div>
    );
  }
}