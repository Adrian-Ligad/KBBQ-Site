import styled from 'styled-components'

import SteveHotty from '../pictures/SteveHotty.jpg'

const AboutPageWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const AboutPageStory = styled.div`
    background-image: url('${SteveHotty}');
    background-attachment: fixed;
    background-position: center;
    background-color: gray; 
    height:700px;
    width:100%;
`

const AboutPageStoryContent = styled.div`
    color:white;
    border-radius: 100px;
    text-align:center;
    margin-top:20%;
    margin-left:20%;
    padding: 50px;
    font-size: 50px;
    width:50%;
    transition: opacity .2s ease-in;
    background:black;
    opacity:${({ scroll }) => scroll < 20 ? "0.5" : "0" };
`

const AboutPageArrowDown = styled.div`
    color:white;
    opacity:1;
    text-align:center;
    margin-top:9%;
    font-size:50px;
    transition: opacity .2s ease-in;
    opacity:${({ scroll }) => scroll < 20 ? "0.8" : "0" };

`

export { AboutPageWrapper, AboutPageStory, AboutPageStoryContent, AboutPageArrowDown }