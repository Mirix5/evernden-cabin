import React from "react";
import "./../css/News.css";

export function News({ visibility }) {
  const visibilityClass = visibility ? "visible" : "hidden";

  return (
    <div className={"News " + visibilityClass}>
      <div>This is the news.</div>
    </div>
  );
}
