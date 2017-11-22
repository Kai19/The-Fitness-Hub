import styled from 'styled-components';
import { Link } from 'react-router';

export const NavigationContainer = styled.div`
  position: fixed;
  right: 0;
  right: 2em;
  `;
  
  export const NavItem = styled(Link)`
    padding-top: 10px;
    font-size: 13px;
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
`
    