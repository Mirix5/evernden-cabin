import React from "react";
import PhotoGallery from "./PhotoGallery";
import "./../css/Photos.css";
import 'photoswipe/style.css';

const images = [
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
];

export function Photos({ visibility }) {
  const visibilityClass = visibility ? "visible" : "hidden";

  return (
    <div className={"Photos " + visibilityClass}>
      <h2>Photos</h2>
      <PhotoGallery galleryID="my-test-gallery" images={images} />
    </div>
  );
}
