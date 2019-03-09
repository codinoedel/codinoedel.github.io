// App.js
import React, { Component } from 'react';

import Banner from './Banner';
import Resume from './Resume';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner className="App-banner" />
        <Resume className="App-resume" />
      </div>
    );
  }
}

export default App;
