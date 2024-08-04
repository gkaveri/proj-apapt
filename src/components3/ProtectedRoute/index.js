import React from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = ({element: Element, ...rest}) => {
  const isAuthenticated = !!Cookies.get('authToken')

  return isAuthenticated ? <Element {...rest} /> : <Redirect to="/login" />
}

export default ProtectedRoute
