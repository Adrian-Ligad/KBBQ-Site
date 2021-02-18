import Logo from './Logo'
import SocialMedia from '../Integrations/SocialMedia'
import Ham from './Hamburger/Hamburger'

import './Header.css'

export default function Header() {
    const location = "https://www.google.com/maps/place/4155+University+Pkwy,+San+Bernardino,+CA+92407/@34.1660689,-117.3342482,17z/data=!3m1!4b1!4m5!3m4!1s0x80c352273252f45b:0x3de888116e7c46bf!8m2!3d34.1660689!4d-117.3320595"
    return(
        <div className = "Header">
            <div className = "LeftSide_Header">
                <Ham/>
                <Logo/>
            </div>
            <div className = "RightSide_Header">
                <div className = "Business_Hours">
                    Business Hours:<br/>
                    Mon-Fri : 9AM - 11PM <br/>
                    Sat-Sun : 9AM - 9PM
                </div>
                <div className = "Phone_Number">
                    Call us:<br/>
                    (909)631-3417
                </div>
                <a className = "LocationHeader" href = {location} target = "blank">
                    Find us: <br/>
                    12345 Danny Buscemi Avenue<br/>
                    Great People, CA 917deeznuts
                </a>
                <SocialMedia/>
            </div>
        </div>
    )
}