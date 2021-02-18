import styled from 'styled-components';

const StyledMenu = styled.nav`
  opacity:1;
  z-index:50;
  background-color:white;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  text-align: left;
  padding: 2rem;
  top: 85.5px;
  border-right:outset;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-120%)'};

  a {
    font-size: 25px;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
  }
`;

export default StyledMenu;