import { Link } from 'react-router-dom'

import { StyledMenu }  from './StyledMenu.styled'

export default function HamMenu({ isOpen, closeMenu, scroll }) {
    return(
            <StyledMenu open = {isOpen} scroll = {scroll}>
                <Link to = "/" onClick = {() => closeMenu()}>Home</Link>
                <Link to = "/Menu" onClick = {() => closeMenu()}>Menu</Link>
                <Link to = "/About" onClick = {() => closeMenu()}>About</Link>
                <Link to = "/Contact" onClick = {() => closeMenu()}>Contact Us</Link>
                <Link to = "/Testimonies" onClick = {() => closeMenu()}>Testimonies</Link>
            </StyledMenu>
    )
}