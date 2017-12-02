import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';
import logo from '../../assets/logo.png'
// import ReallySmoothScroll from 'really-smooth-scroll';
// import { hashHistory } from 'react-router';

// hashHistory.listen(() => {
//   window.scrollTo(0,0);
// });

// ReallySmoothScroll.shim();

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <span id="top" />
        {<img id="logo" src={logo} />}
        <NavigationContainer>
          <NavItem href="#top">Home</NavItem>
          <NavItem href="#About">About</NavItem>
          <NavItem href="#Location">Location</NavItem>
          <NavItem href="#Contact">Contact</NavItem>
        </NavigationContainer>
      </div>
    );
  }
}

export default NavigationBar;