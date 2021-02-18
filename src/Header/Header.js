import { useState, useEffect } from 'react'

import Logo from './Logo'
import SocialMedia from '../Integrations/SocialMedia'
import Ham from './Hamburger/Hamburger'
import HamMenu from './Hamburger/HamMenu'

import { Business_Hours, Contact_Us, Location, Header, LeftSide_Header, RightSide_Header } from './Header.styled'


export default function HeaderArea() {
    const location = "https://www.google.com/maps/place/4155+University+Pkwy,+San+Bernardino,+CA+92407/@34.1660689,-117.3342482,17z/data=!3m1!4b1!4m5!3m4!1s0x80c352273252f45b:0x3de888116e7c46bf!8m2!3d34.1660689!4d-117.3320595"
    
    //handles scroll and position location
    const [scroll, setScroll] = useState(window.scrollY);
    const handleScroll = () => setScroll(window.scrollY);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
      }, []);

      //handles open close of hamburger
      const [isOpen, setOpen] = useState(false)

      const closeMenu = () => {
          setOpen(false);
      }
  
    return(
        <Header scroll = {scroll}>
            <LeftSide_Header>
                <Ham scroll = {scroll} setOpen = {setOpen} isOpen = {isOpen}/>
                <HamMenu scroll = {scroll} isOpen = {isOpen} closeMenu = {closeMenu}/>


                <Logo/>
            </LeftSide_Header>
            <RightSide_Header>
                <Business_Hours scroll = {scroll}>
                    Business Hours:<br/>
                    Mon-Fri : 9AM - 11PM <br/>
                    Sat-Sun : 9AM - 9PM
                </Business_Hours>
                <Contact_Us scroll = {scroll}>
                    Call us:<br/>
                    (909)631-3417
                </Contact_Us>
                <Location href = {location} target = "blank" scroll = {scroll}>
                    Find us: <br/>
                    12345 Danny Buscemi Avenue<br/>
                    Great People, CA 917deeznuts
                </Location>
                <SocialMedia/>
            </RightSide_Header>
        </Header>
    )
}