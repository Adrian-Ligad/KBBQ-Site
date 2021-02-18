import { Link } from 'react-router-dom'

import StyledMenu  from './StyledMenu.styled'

export default function HamMenu({ isOpen, closeMenu }) {
    return(
            <StyledMenu open = {isOpen}>
                <Link to = "/" onClick = {() => closeMenu()}>Home</Link>
                <Link to = "/menu" onClick = {() => closeMenu()}>Menu</Link>
                <Link to = "/about" onClick = {() => closeMenu()}>About</Link>
                <Link to = "/contact" onClick = {() => closeMenu()}>Contact Us</Link>
                <Link to = "/testimonies" onClick = {() => closeMenu()}>Testimonies</Link>
            </StyledMenu>
    )
}