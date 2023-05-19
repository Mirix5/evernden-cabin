import React, { Component } from "react";
import PhotoGallery from "./PhotoGallery";
import "./../css/Photos.css";
import 'photoswipe/style.css';

export class Photos extends Component{
  constructor(props) {
    super();
    this.state = {
      visibility: props.visibility,
      modalIsOpen: true,
      images: [
        {
          largeURL: "/images/Uploaded_Photos/IMG_20211106_124518.jpg",
          thumbnailURL: "/images/thumbnails/IMG_20211106_124518.jpg",
          width: 1875,
          height: 2500
        },
        {
          largeURL: "/images/Uploaded_Photos/IMG_20211106_124717.jpg",
          thumbnailURL: "/images/thumbnails/IMG_20211106_124717.jpg",
          width: 1875,
          height: 2500
        },
        {
          largeURL: "/images/Uploaded_Photos/IMG_20211107_130717.jpg",
          thumbnailURL: "/images/thumbnails/IMG_20211107_130717.jpg",
          width: 1875,
          height: 2500
        }
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
        <PhotoGallery galleryID="my-test-gallery" images={ this.state.images } />
      </div>
    );
  }
}