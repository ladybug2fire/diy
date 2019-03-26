import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './components/layout/navigation'
import { Button } from 'antd'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Button type="danger">按钮</Button>
      </div>
    );
  }
}

export default App;
