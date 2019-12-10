import React, { Component } from 'react'
import axios from 'axios'

export class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
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
                    // update the state to redirect to home
                    // this.setState({
                    //     redirectTo: '/'
                    // })
                }
            }).catch(error => {
                console.log('login error: ')
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
              </form>
          </div>
      )
  }
}