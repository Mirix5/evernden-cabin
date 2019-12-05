import React, { Component } from "react";
import {Article } from "./Article"
import "./../css/News.css";

export class News extends Component{
  constructor(props) {
    super(props);
    this.state = {
      visibility: props.visibility,
      articles: []
    }
  }

  componentDidMount() {
    this.getArticles();
  }

  componentWillReceiveProps({visibility}) {
    this.setState({...this.state, visibility})
  }

  getArticles = () => {
    fetch('/api/getArticles')
    .then(res => res.json())
    .then(articles => this.setState({ articles }))
  }

  render(){
    let visibility = this.state.visibility ? "visible" : "hidden";
    let articles = this.state.articles;

    return(
      <div className={"News "+visibility}>
        <h2>News</h2>
        <div className='article-container'>
          {articles.length ? (
            articles.map((article) => 
              <Article title={article.title} author={article.author} date={article.date} body={article.body} />
            )
          ) : (
            <div>
              <p>
                no articles found
              </p>
              <Article />
            </div>
          )
        }
        </div>
      </div>
    );
  }
}