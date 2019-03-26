import React, { Component } from 'react'
import './navigation.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export class navigation extends Component {
  render() {
    return (
      <div className="navigation-header">
        <ul>
          <Router>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/inbox">Inbox</Link></li>
          </Router>
        </ul>
        <div>zelda</div>
        <div>Link</div>
      </div>
    )
  }
}

export default navigation
