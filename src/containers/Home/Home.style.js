import styled, {css} from 'styled-components';
import media from '../../theme/media';

export const Image = styled.img`
  width: 100%;
`;

export const HeroImage = styled.div`
  height: 100vh;
  background-image: url(${require('../../assets/interior3.jpg')});
  background-repeact: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  text-align: center;
  colour: white;

  @import url("https://fonts.googleapis.com/css?family=Oswald:700");
  
  ${media.tablet`
    height: 50vh;
    background-width: auto;
  `}

  ${media.phone`
    height: 50vh;
    background-width: auto;
  `}

.square {
  top: 225px;
  width: 480px;
  height: 520px;
  position: relative;
  margin: auto;
  transform: translateY(-50%);
  overflow: hidden;
  animation: movinInBlock 1s ease-out;
  z-index: 10;
  // background-color: rgba(255, 255, 255, 0.3);
  
  ${media.tablet`
    top: 200px;
    width: 350px;
    height: 350px;
  `}

  ${media.phonePlus`
    top: 110px;
    width: 250px;
    height: 250px;
  `}

  ${media.phone`
    top: 110px;
    width: 200px;
    height: 200px;
  `}
}

.square div {
  position: absolute;
  background: white;
  margin-left: auto;
  margin-right: auto;
}

.square .line-top {
  height: 12px;
  width: 100%;
  top: 0;
  left: 0;
  animation: lineTop 0.8s cubic-bezier(0.05, 0.79, 0.82, 0.31);
  ${media.phonePlus`
    height: 10px;
  `}
  ${media.phone`
    height: 8px;
  `}
}

.square .line-right {
  height: 100%;
  width: 12px;
  top: 0;
  right: 0;
  animation: lineRight 0.8s cubic-bezier(0.05, 0.79, 0.82, 0.31);
  ${media.phonePlus`
    width: 10px;
  `}
  ${media.phone`
    width: 8px;
  `}
}

.square .line-bottom {
  height: 12px;
  width: 100%;
  bottom: 0;
  left: 0;
  animation: lineBottom 0.8s cubic-bezier(0.05, 0.79, 0.82, 0.31);
  ${media.phonePlus`
    height: 10px;
  `}
  ${media.phone`
    height: 8px;
  `}
}

.square .line-left {
  height: 100%;
  width: 12px;
  top: 0;
  left: 0;
  transform: translateY(60%);
  animation: lineLeft 0.8s cubic-bezier(0.05, 0.79, 0.82, 0.31);
  ${media.phonePlus`
    width: 10px;
  `}
  ${media.phone`
    width: 8px;
  `}
}

.square .black-mask {
  width: 100%;
  height: 100%;
  transform: translateX(100%);
  animation: blackMask 1s 0.9s cubic-bezier(0.35, 1.1, 0.57, 0.76);
}

.square .text {
  padding-top: 100px;
  padding-left: 30px;
  background: none;
  font-size: 5em;
  // line-height: 1;
  font-weight: bold;
  letter-spacing: 10px;
  text-transform: uppercase;
  opacity: 0;
  animation: moveIn 0s 1.4s cubic-bezier(0.35, 1.1, 0.57, 0.76) forwards;
  font-family: 'Times New Roman', Times, serif,
  sans-serif;
  z-index:100;
  ${media.tablet`
    font-size: 50px;
    font-weight: bold;
    bottom: 60px;
  `}

  ${media.phonePlus`
    font-size: 30px;
    font-weight: bold;
    right: 15px;
  `}

  ${media.phone`
    font-size: 25px;
    font-weight: bold;
    bottom: 40px;
    right:0px;
  `}
}

.square .text p {
  margin: 10px;
  color: black;
  // -webkit-text-stroke-width: 1px;
  // -webkit-text-stroke-color: white;
}

.glow {
  z-index:1000;
  border-bottom: 10px;
  -webkit-animation: neon5 1.5s ease-in-out infinite alternate;
  -moz-animation: neon5 1.5s ease-in-out infinite alternate;
  animation: neon5 1.5s ease-in-out infinite alternate;
}

@-moz-keyframes neon5 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF9900, 0 0 70px #FF9900, 0 0 80px #FF9900, 0 0 100px #FF9900, 0 0 150px #FF9900;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF9900, 0 0 35px #FF9900, 0 0 40px #FF9900, 0 0 50px #FF9900, 0 0 75px #FF9900;
  }
}


@-webkit-keyframes neon5 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF9900, 0 0 70px #FF9900, 0 0 80px #FF9900, 0 0 100px #FF9900, 0 0 150px #FF9900;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF9900, 0 0 35px #FF9900, 0 0 40px #FF9900, 0 0 50px #FF9900, 0 0 75px #FF9900;
  }
}

@keyframes neon5 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF9900, 0 0 70px #FF9900, 0 0 80px #FF9900, 0 0 100px #FF9900, 0 0 150px #FF9900;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF9900, 0 0 35px #FF9900, 0 0 40px #FF9900, 0 0 50px #FF9900, 0 0 75px #FF9900;
  }
}


@-moz-keyframes movinInBlock {
  0% {
    opacity: 0;
    transform: translate(20%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(0%, -50%);
  }
}

@-webkit-keyframes movinInBlock {
  0% {
    opacity: 0;
    transform: translate(20%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(0%, -50%);
  }
}

@-o-keyframes movinInBlock {
  0% {
    opacity: 0;
    transform: translate(20%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(0%, -50%);
  }
}

@keyframes movinInBlock {
  0% {
    opacity: 0;
    transform: translate(20%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(0%, -50%);
  }
}

@-moz-keyframes lineTop {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}

@-webkit-keyframes lineTop {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}

@-o-keyframes lineTop {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes lineTop {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}

@-moz-keyframes lineRight {
  0% {
    transform: translateY(200%);
  }
  100% {
    transform: translateY(0%);
  }
}

@-webkit-keyframes lineRight {
  0% {
    transform: translateY(200%);
  }
  100% {
    transform: translateY(0%);
  }
}

@-o-keyframes lineRight {
  0% {
    transform: translateY(200%);
  }
  100% {
    transform: translateY(0%);
  }
}

@keyframes lineRight {
  0% {
    transform: translateY(200%);
  }
  100% {
    transform: translateY(0%);
  }
}

@-moz-keyframes lineBottom {
  0% {
    transform: translateX(150%);
  }
  100% {
    transform: translateX(0%);
  }
}

@-webkit-keyframes lineBottom {
  0% {
    transform: translateX(150%);
  }
  100% {
    transform: translateX(0%);
  }
}

@-o-keyframes lineBottom {
  0% {
    transform: translateX(150%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes lineBottom {
  0% {
    transform: translateX(150%);
  }
  100% {
    transform: translateX(0%);
  }
}

@-moz-keyframes lineLeft {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(60%);
  }
}

@-webkit-keyframes lineLeft {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(60%);
  }
}

@-o-keyframes lineLeft {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(60%);
  }
}

@keyframes lineLeft {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(60%);
  }
}

@-moz-keyframes blackMask {
  0% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}

@-webkit-keyframes blackMask {
  0% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}

@-o-keyframes blackMask {
  0% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes blackMask {
  0% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}

@-moz-keyframes moveIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes moveIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes moveIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes moveIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

`;

export const RevealP = styled.span`
  font-size: 22px;
  font-family: 'Times New Roman', Times, serif;
  color: white;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  display: inline-block;
  z-index: -100;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    transform-origin: right;
    transform: rotateY(90deg);
    transition: transform 3s;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;