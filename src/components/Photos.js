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
                caption: "After Rain"
              },
              {
                src: "images/Uploaded_Photos/IMAG0316.jpg",
                thumbnail: "images/Uploaded_Photos/IMAG0316.jpg",
              },
              {
                src: "images/Uploaded_Photos/Kings Hole 1.jpg",
                thumbnail: "images/Uploaded_Photos/Kings Hole 1.jpg",
              },
              {
                src: "images/Uploaded_Photos/Kings Hole 2.jpg",
                thumbnail: "images/Uploaded_Photos/Kings Hole 2.jpg",
              },
              {
                src: "images/Uploaded_Photos/Kings Hole 3.jpg",
                thumbnail: "images/Uploaded_Photos/Kings Hole 3.jpg",
              },
              {
                src: "images/Uploaded_Photos/Kings Hole 4.jpg",
                thumbnail: "images/Uploaded_Photos/Kings Hole 4.jpg",
              },
              {
                src: "images/Uploaded_Photos/Kings Hole Sign.jpg",
                thumbnail: "images/Uploaded_Photos/Kings Hole Sign.jpg",
              },
              {
                src: "images/Uploaded_Photos/River.jpg",
                thumbnail: "images/Uploaded_Photos/River.jpg",
              },
              {
                src: "images/Uploaded_Photos/tracks.jpg",
                thumbnail: "images/Uploaded_Photos/tracks.jpg",
              },
              {
                src: "images/Uploaded_Photos/Tree.jpg",
                thumbnail: "images/Uploaded_Photos/Tree.jpg",
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

          <Gallery images={this.state.photos}/>
        </div>
      </div>
    );
  }
}