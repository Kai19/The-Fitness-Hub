import styled from 'styled-components';
import { Link } from 'react-router';
import media from '../../theme/media';

export const NavigationContainer = styled.div`
  position: fixed;
  right: 0;
  right: 2em;

  ${media.phone`
    left: 0;
  `}
`;
  
export const NavItem = styled(Link)`
  padding-top: 10px;
  font-size: 17px;
  color: white;
  text-transform: uppercase;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    color: orange;
  }
  z-index: 1000;

  ${media.phone`
    font-size: 12px;
  `}
`
    