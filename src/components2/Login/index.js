import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMessage: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    localStorage.setItem('jwt_token', jwtToken) // Store token in localStorage
    this.props.history.replace('/') // Redirect to home page
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMessage: errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok) {
        this.onSubmitSuccess(data.jwt_token)
      } else {
        this.onSubmitFailure(data.error_msg)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      this.onSubmitFailure('An error occurred. Please try again.')
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMessage} = this.state
    const jwtToken = localStorage.getItem('jwt_token') // Retrieve token from localStorage

    if (jwtToken) {
      return <Redirect to="/" /> // Redirect if token exists
    }

    return (
      <div className="login">
        <div className="login-form-container">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
            alt="website logo"
            className="mobile-bg-img"
          />
          <div className="form-cardcontainer">
            <form className="form-container" onSubmit={this.submitForm}>
              <img
                src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
                className="website-logo"
                alt="website login"
              />
              <h1 className="website-name">Swiggy</h1>
              <h1 className="login">Login</h1>
              <div className="input-container">
                {this.renderUsernameField()}
              </div>
              <div className="input-container">
                {this.renderPasswordField()}
              </div>
              {showSubmitError && (
                <p className="error-message">*{errorMessage}</p>
              )}
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
          <div className="website-container-img">
            <img
              src="https://5.imimg.com/data5/JO/YU/GLADMIN-52114571/swiggy-food-delivery-app-250x250.png"
              alt="website logo"
              className="website-bg-img"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Login
