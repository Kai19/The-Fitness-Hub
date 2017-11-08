import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';
import logo from '../../assets/LOGO-v2.jpg'
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
        <img id="logo" src={logo} />
        <NavigationContainer>
          <NavItem href="#logo">Home</NavItem>
          <NavItem href="#About">About</NavItem>
          <NavItem href="#Location">Location</NavItem>
          <NavItem href="#Contact">Contact</NavItem>
        </NavigationContainer>
      </div>
    );
  }
}

export default NavigationBar;