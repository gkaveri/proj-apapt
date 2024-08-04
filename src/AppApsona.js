import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components3/Login' // Adjust path as per your structure
import Home from './components3/Home' // Adjust path as per your structure
import ProtectedRoute from './components3/ProtectedRoute' // Adjust path as per your structure

function AppApsona() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/home" component={Home} />
      </Switch>
    </Router>
  )
}

export default AppApsona
