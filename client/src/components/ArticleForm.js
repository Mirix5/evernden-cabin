import React, { Component } from 'react'
import axios from 'axios'

export class ArticleForm extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            body: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()

        let article = {
          title: this.state.title,
          body: this.state.body,
          date: new Date().toString(),
          author: 'Jacob Gronert'
        }

        axios.post('/api/form', article)
        .then(response => {
            if (response.status === 200) {
              this.props.submitForm(article);
            }
        }).catch(error => {
            console.log('article submission error: ')
            console.log(error); 
        })
    }

    render() {
      return (
          <div>
            <form onSubmit={this.handleSubmit} id="article-form">
              <label>
                <input className="form-title" name="title" type="text" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
              </label>
              <textarea rows="15" placeholder="Article text here..." className="body" name="body" value={this.state.body} form="article-form" onChange={this.handleChange}></textarea>
              <div className="form-buttons">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
      )
  }
}