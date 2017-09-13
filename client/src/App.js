import React, { Component } from 'react';

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
      </div>
    );
  }
}

export default App;
