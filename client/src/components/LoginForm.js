import React, { Component } from 'react'
import axios from 'axios'

export class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null,
            error: false,
            errorText: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios.post('/api/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                if (response.status === 200) {
                    // update Header state
                    this.props.updateLoggedIn({
                        loggedIn: true
                    })
                    console.log('login success')
                    this.setState({
                        error: false
                    })
                }
            }).catch(error => {
                this.setState({
                    error: true,
                    errorText: 'User name or password is incorrect.'
                })
                console.log(error);
            })
    }

    render() {
      return (
          <div>
              <form>
                  <div>
                    <div>
                      <label htmlFor="username">Username: </label>
                      <input
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Username"
                          value={this.state.username}
                          onChange={this.handleChange}
                      />
                    </div>
                    <label htmlFor="password">Password: </label>
                    <input 
                        placeholder="password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    </div>
                    <button onClick={this.handleSubmit} type="submit">Login</button>
                        {this.state.error ? (
                            <p className='error-text'>{this.state.errorText}</p>
                        ):(
                            <p></p>
                        )
                        }
              </form>
          </div>
      )
  }
}