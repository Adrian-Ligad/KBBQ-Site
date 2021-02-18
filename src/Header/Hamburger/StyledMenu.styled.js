import styled from 'styled-components';

const StyledMenu = styled.nav`
  z-index:100;
  background-color:white;
  display: flex;
  flex-direction: column;
  position: absolute;
  height: ${({ scroll }) => scroll < 50 ? "900%" : "1200%"};
  width: 250px;
  padding-left:${({ scroll }) => scroll < 50 ? "75px" : "93.5px"};
  padding-top:${({ scroll }) => scroll < 50 ? "0px" : "19px"};
  text-align: left;
  top: ${({ scroll }) => scroll < 50 ? "81px" : "62px"};
  border-right:solid 2px;
  border-color: ${({ scroll }) => scroll < 50 ? "black" : "gray"};
  transition:  0.2s ease-in;
  transform: ${({ open }) => open ? 'translateX(4%)' : 'translateX(-120%)'};

  a {
    font-size: 25px;
    color: black;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export { StyledMenu };