import React, { Component } from "react";
import { Article } from "./Article"
import { ArticleForm } from "./ArticleForm"
import "./../css/News.css";

export class News extends Component{
  constructor(props) {
    super(props);
    this.state = {
      visibility: props.visibility,
      formVisible: false,
      articles: []
    }

    this.showForm = this.showForm.bind(this)
    this.hideForm = this.hideForm.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  componentDidMount() {
    this.getArticles();
  }

  componentWillReceiveProps({visibility}) {
    this.setState({...this.state, visibility})
  }

  getArticles(){
    fetch('/api/articles')
    .then(res => res.json())
    .then(articles => this.setState({ articles }))
  }

  showForm(){
    this.setState({formVisible: true})
  }

  hideForm(){
    this.setState({formVisible: false})
  }

  submitForm(article){
    console.log("posting article"+article)
    var newArticles = this.state.articles
    newArticles.unshift(article)
    this.setState({
      formVisible: false,
      articles:  newArticles
    })
  }

  render(){
    let visibility = this.state.visibility ? "visible" : "hidden";
    let articles = this.state.articles;
    // console.log(JSON.stringify(articles))

    return(
      <div className={"News "+visibility}>
        <h2>News</h2>
        <div className='article-container'>
          <div className="new-article-buttons">
            {!this.state.formVisible ? (
              <button className="new-article-button" onClick={this.showForm}>New Article</button>
            ) : (
              <button className="new-article-button" onClick={this.hideForm}>Cancel</button>
            ) 
            }
          </div>
          { this.state.formVisible ? (
              <ArticleForm submitForm={this.submitForm}/>
            ) : (
              <br></br>
            )
          }
          {articles.length ? (
            articles.map((article) => 
              <Article title={article.title} author={article.author} date={article.date} body={article.body} key={article._id}/>
            )
          ) : (
            <div>
              <p>
                no articles found
              </p>
              {/* <Article /> */}
            </div>
          )
        }
        </div>
      </div>
    );
  }
}