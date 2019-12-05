import React, { Component } from "react";
import "./../css/Article.css";

export class Article extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      author: props.author,
      date: props.date,
      body: props.body
      // title: "Test Title", 
      // author:"Jacob Gronert", 
      // date:"December 4, 2019", 
      // body:"This is the body"
    }
  }

  render(){
    return(
      <div className={"Article"}>
        <div className='title-bar'>
          <h3 className="title">{this.state.title}</h3>
          <p className='author'>by {this.state.author} on {this.state.date}</p>
        </div>
        <hr />
        <p className='body'>{this.state.body}</p>
      </div>
    );
  }
}