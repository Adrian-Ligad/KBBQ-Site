import styled, { css } from 'styled-components'

import dannyLogo from '../DannyBuscemi.jpg'

//different stylings
const Header = styled.div`
    font-size: 14px;
    border-bottom: solid;
    border-color: ${({ scroll  }) => scroll < 60 ?  "black" : "maroon"};
    border-width: ${({ scroll  }) => scroll < 60 ?  "1px" : "2px"};
    background-color: ${({ scroll  }) => scroll < 60 ?  "white" : "black"};
    transition: .2s ease-out;
    position: fixed;
    height:60px;
    top: 0;
    width:100%;
    z-index: 100;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    padding:${( { scroll }) => scroll < 60 ? "10px" : "0px"};

`

const LogoPic = styled.div`
    background-image:url(${dannyLogo});
    width:100px;
    height:100%;
    background-size:cover;
`

//css for combining
const SideHeaders = css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const LeftSide = css`
    width: 15%;
`

const RightSide = css`
    width: 50%;
`
const StaticText = css`
    color: ${( { scroll } ) => scroll < 60 ? "gray" : "white"};
`

//combined stylings and css
const LeftSide_Header = styled.div`${SideHeaders} ${LeftSide}`

const RightSide_Header = styled.div`${SideHeaders} ${RightSide}`

const Business_Hours = styled.div`${StaticText}`

const Location = styled.a`
    ${StaticText}
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

const HamburgerHolder = styled.div`${SideHeaders} flex-direction: column;`

const Contact_Us = styled.div`${StaticText}`
export { Header, LeftSide_Header, RightSide_Header, Business_Hours, Contact_Us, Location, HamburgerHolder, LogoPic }