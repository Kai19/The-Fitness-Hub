import React, { Component } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar'

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        {this.props.children}
      </div>
    );
  }
}

export default App;
