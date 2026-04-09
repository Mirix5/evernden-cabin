import React from "react";
import PhotoGallery from "./PhotoGallery";
import "./../css/Photos.css";
import 'photoswipe/style.css';

const images = [
  {
    largeURL: "/images/Uploaded_Photos/IMG_20211106_124518.jpg",
    thumbnailURL: "/images/thumbnails/IMG_20211106_124518.jpg",
    width: 4608,
    height: 2112
  },
  {
    largeURL: "/images/Uploaded_Photos/IMG_20211106_124717.jpg",
    thumbnailURL: "/images/thumbnails/IMG_20211106_124717.jpg",
    width: 4608,
    height: 2112
  },
  {
    largeURL: "/images/Uploaded_Photos/IMG_20211107_130717.jpg",
    thumbnailURL: "/images/thumbnails/IMG_20211107_130717.jpg",
    width: 4000,
    height: 1824
  },
  {
    largeURL: "/images/Uploaded_Photos/Kings Hole Sign.jpg",
    thumbnailURL: "/images/thumbnails/Kings Hole Sign.jpg",
    width: 2688,
    height: 1520
  },
  {
    largeURL: "/images/Uploaded_Photos/PXL_20211107_221149028.jpg",
    thumbnailURL: "/images/thumbnails/PXL_20211107_221149028.jpg",
    width: 2268,
    height: 4032
  },
  {
    largeURL: "/images/Uploaded_Photos/northspur.jpg",
    thumbnailURL: "/images/thumbnails/northspur.jpg",
    width: 2688,
    height: 1520
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
