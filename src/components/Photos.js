import React, { Component } from "react";
import ReactPhotoGrid from 'react-photo-grid';
import "./../css/Photos.css";

export class Photos extends Component{
  constructor(props) {
    super();
    this.state = {
      visibility: props.visibility,
      modalIsOpen: true,
      photos: [
                {src:'http://via.placeholder.com/400x400/', name:'1'}, 
                {src:'http://via.placeholder.com/500x700/', name:'2'}
              ]
    }
  }

  componentWillReceiveProps({visibility}) {
    this.setState({...this.state, visibility})
  }

  render(){
    let visibility = this.state.visibility ? "visible" : "hidden";
    var imageData = [
        'http://via.placeholder.com/400x400/',
        'http://via.placeholder.com/500x700/',
        'http://via.placeholder.com/600x500/',
        'http://via.placeholder.com/600x800/'
    ];

    return(
      <div className={"Photos "+visibility}>
        <h2>Photos</h2>
        <div className="photo-grid">
          {/* { this.state.photos.map((photo, key) => 
            <img key={photo.name} src={photo.src} alt="cabin" />
          )} */}

          <ReactPhotoGrid
            onImageClick={this.handleImageClick}
            data={imageData} />
        </div>
      </div>
    );
  }
}