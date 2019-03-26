import React, { Component } from 'react';
import Navigation from './components/layout/navigation'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import List from './pages/list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" component={List} />
          <Route path="/about/" component={Navigation} />
        </Router>
      </div>
    );
  }
}

export default App;
