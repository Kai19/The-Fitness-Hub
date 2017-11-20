import React, { Component, ProtoTypes } from 'react';

import {Container} from '../../theme/grid';
import {
  Image,
  HeroImage,
  RevealP
} from './Home.style';
import WhenInView from '../../components/WhenInView/WhenInView'

export default class Home extends Component {
  static protoTypes = {};

  render() {
    return (
      <Container>
        <HeroImage>
          <div id="hero">
            <div className="square">
                <div className="line-top"></div>
                <div className="line-right"></div>
                <div className="line-bottom"></div>
                <div className="line-left"></div>
                <div className="black-mask"></div>
                <div className="text">
                    <p className="glow">The</p>
                    <p className="glow">Fitness</p>
                    <p className="glow">Hub</p>
                </div>
            </div>
          </div>
          <div className="Coming">Coming Soon</div>
        </HeroImage>
        <WhenInView>
          {({ isInView }) => 
            <RevealP hide={!isInView} id="About" >
               <p>About Us</p>
               <p>We are a premium fitness studio that offers specialized one on one training with renowed industry experts.</p>
            </RevealP>
          }
        </WhenInView>
        <WhenInView>
          {({ isInView }) =>
            <RevealP hide={!isInView} id="Location" >
              <p>Find Us at</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31910.209552129807!2d103.86436!3d1.309576!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb22bb04136d8582!2sAperia+Mall!5e0!3m2!1sen!2ssg!4v1510168144228" width="600" height="450" frameborder="0" styles="border:0" allowfullscreen></iframe>
              <p>Address: 12 Kallang Avenue , #02-01, Aperia Mall, Spore 339511</p>
            </RevealP>
          }
        </WhenInView>
        <WhenInView>
          {({ isInView }) =>
            <RevealP hide={!isInView} id="Contact" >
              <p>Contact Us</p>
              <p>info@thefitnesshub.org</p>
            </RevealP>
          }
        </WhenInView>
      </Container>
    );    
  }
}
