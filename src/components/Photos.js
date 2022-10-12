import React, { Component } from "react";
import "./../css/Photos.css";
import Gallery from 'react-grid-gallery';

export class Photos extends Component{
  constructor(props) {
    super();
    this.state = {
      visibility: props.visibility,
      modalIsOpen: true,
      photos: [{
          src: "images/Uploaded_Photos/IMG_20211106_124717.jpg",
          thumbnail: "images/thumbnails/IMG_20211106_124717.jpg",
          caption: "After Rain"
        },
        {
          src: "images/Uploaded_Photos/IMG_20211106_124717.jpg",
          thumbnail: "images/Uploaded_Photos/IMG_20211106_124717.jpg",
          caption: "After Rain"
        }]
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
          {/* { this.state.photos.map((photo, key) => 
            <img key={photo.name} src={photo.src} alt="cabin" />
          )} */}

          <Gallery images={this.state.photos} enableLightbox={true}/>
        </div>
      </div>
    );
  }
}