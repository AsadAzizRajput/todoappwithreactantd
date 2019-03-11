import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
import Router from './routes'

class App extends Component {
  render() {
    return (
        <React.Fragment>
       <Router />
        </React.Fragment>
    );
  }
}

export default App;
