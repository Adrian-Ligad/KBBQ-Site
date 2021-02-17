import Logo from './Logo'
import BusinessHours from './BusinessHours'
import SocialMedia from '../Integrations/SocialMedia'
import Hamburger from './Hamburger/Hamburger'

import './Header.css'

export default function Header() {
    return(
        <div className = "Header">
            <Hamburger/>
            <Logo/>
            <BusinessHours/>
            <div className = "Phone_Number">
                Phone Number
            </div>
            <div className = "LocationHeader">
                Location
            </div>
            <SocialMedia/>
        </div>
    )
}