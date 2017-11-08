import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';
import ReallySmoothScroll from 'really-smooth-scroll';
import { hashHistory } from 'react-router';

hashHistory.listen(() => {
  window.scrollTo(0,0);
});

ReallySmoothScroll.shim();

class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
          <NavItem to="/">Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Location</NavItem>
          <NavItem>Contact</NavItem>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;