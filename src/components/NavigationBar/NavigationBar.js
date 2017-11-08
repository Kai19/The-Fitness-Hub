import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';
// import ReallySmoothScroll from 'really-smooth-scroll';
// import { hashHistory } from 'react-router';

// hashHistory.listen(() => {
//   window.scrollTo(0,0);
// });

// ReallySmoothScroll.shim();

class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
          <NavItem href="/">Home</NavItem>
          <NavItem href="#About">About</NavItem>
          <NavItem href="#Location">Location</NavItem>
          <NavItem href="#Contact">Contact</NavItem>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;