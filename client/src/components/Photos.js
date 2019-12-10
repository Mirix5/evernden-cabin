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
                src: "images/Uploaded_Photos/IMAG0310.jpg",
                thumbnail: "images/Uploaded_Photos/IMAG0310.jpg",
                caption: "After Rain",
                thumbnailWidth: 512,
                thumbnailHeight: 288
              },
              {
                src: "images/Uploaded_Photos/IMAG0316.jpg",
                thumbnail: "images/Uploaded_Photos/IMAG0316.jpg",
                thumbnailWidth: 512,
                thumbnailHeight: 288
              },
              {
                src: "images/Uploaded_Photos/Kings Hole 1.jpg",
                thumbnail: "images/Uploaded_Photos/Kings Hole 1.jpg",
                thumbnailWidth: 512,
                thumbnailHeight: 288
              },
              {
                src: "images/Uploaded_Photos/Kings Hole 2.jpg",
                thumbnail: "images/Uploaded_Photos/Kings Hole 2.jpg",
                thumbnailWidth: 512,
                thumbnailHeight: 288
              },
              {
                src: "images/Uploaded_Photos/Kings Hole 3.jpg",
                thumbnail: "images/Uploaded_Photos/Kings Hole 3.jpg",
                thumbnailWidth: 512,
                thumbnailHeight: 288
              },
              {
                src: "images/Uploaded_Photos/Kings Hole 4.jpg",
                thumbnail: "images/Uploaded_Photos/Kings Hole 4.jpg",
                thumbnailWidth: 512,
                thumbnailHeight: 288
              },
              {
                src: "images/Uploaded_Photos/Kings Hole Sign.jpg",
                thumbnail: "images/Uploaded_Photos/Kings Hole Sign.jpg",
                thumbnailWidth: 512,
                thumbnailHeight: 288
              },
              {
                src: "images/Uploaded_Photos/River.jpg",
                thumbnail: "images/Uploaded_Photos/River.jpg",
                thumbnailWidth: 512,
                thumbnailHeight: 288
              },
              {
                src: "images/Uploaded_Photos/tracks.jpg",
                thumbnail: "images/Uploaded_Photos/tracks.jpg",
                thumbnailWidth: 512,
                thumbnailHeight: 288
              },
              {
                src: "images/Uploaded_Photos/Tree.jpg",
                thumbnail: "images/Uploaded_Photos/Tree.jpg",
                thumbnailWidth: 512,
                thumbnailHeight: 288
              }]
    }
  }

  componentWillReceiveProps({visibility}) {
    this.setState({...this.state, visibility})
  }

  lightboxClose(){
    console.log("lightbox closing");
    document.body.style.overflow = "visible";
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

          <Gallery 
            images={this.state.photos}
            enableLightbox={true} 
            backdropClosesModal={true} 
            showLightboxThumbnails={true} 
            lightboxWidth={2048}
            lightboxWillClose={this.lightboxClose()}
            />
        </div>
      </div>
    );
  }
}