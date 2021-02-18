import styled from 'styled-components';

const StyledMenu = styled.nav`
  z-index:100;
  background-color:white;
  display: flex;
  flex-direction: column;
  position: absolute;
  height: ${({ scroll }) => scroll < 60 ? "900%" : "1200%"};
  width: 250px;
  padding-left:${({ scroll }) => scroll < 60 ? "75px" : "93.5px"};
  padding-top:${({ scroll }) => scroll < 60 ? "0px" : "19px"};
  text-align: left;
  top: ${({ scroll }) => scroll < 60 ? "81px" : "62px"};
  border-right:solid 2px;
  border-color: ${({ scroll }) => scroll < 60 ? "black" : "gray"};
  transition:  0.2s ease-out;
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
      color:gray;
    }
  }
`;

export { StyledMenu };