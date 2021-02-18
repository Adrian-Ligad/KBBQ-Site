import {Squash as Hamburger} from 'hamburger-react'

import { HamburgerHolder } from '../Header.styled'


export default function Ham ({ scroll,isOpen, setOpen }) {
    const isScrolled = () => {
        return scroll < 50 ? "black" : "white"
    }

    return (
        <HamburgerHolder>
            <Hamburger className = "Hamburger" size = "20" easing="ease-in"  duration={ 0.2 } toggled={isOpen} toggle={ setOpen } distance="lg" 
                onToggle = {toggled => {if(toggled){setOpen(true)} else{setOpen(false)}}}
                color = {isScrolled()}
            >
            </Hamburger>
        </HamburgerHolder>
    )
}