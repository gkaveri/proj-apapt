import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      authenticated: false,
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    const {email, password} = this.state
    // Hardcoded credentials for demonstration
    const hardcodedEmail = 'user@example.com'
    const hardcodedPassword = 'password123'

    if (email === hardcodedEmail && password === hardcodedPassword) {
      // Set a cookie to indicate the user is authenticated
      Cookies.set('authToken', '123456', {expires: 1}) // Expires in 1 day
      this.setState({authenticated: true})
    } else {
      alert('Invalid email or password')
    }
  }

  render() {
    const {email, password, authenticated} = this.state

    // Redirect to home if authenticated
    if (authenticated || Cookies.get('authToken')) {
      return <Redirect to="/home" />
    }

    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login
