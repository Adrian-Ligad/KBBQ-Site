import {Squash as Hamburger} from 'hamburger-react'
import { useState } from 'react'

import HamMenu from './HamMenu'

export default function Ham () {
    const [isOpen, setOpen] = useState(false)

    const closeMenu = () => {
        setOpen(false);
    }
    return (
        <div className = "Hamburger">
            <Hamburger size = "20" easing="ease-in"  duration={0.2} toggled={isOpen} toggle={setOpen} distance="lg" 
                onToggle = { toggled => {
                    if(toggled) {
                        setOpen(true)
                    } else {
                        setOpen(false)
                    }
                }}
            ></Hamburger>
            <HamMenu isOpen = {isOpen} closeMenu = {closeMenu}/>
        </div>
    )
}