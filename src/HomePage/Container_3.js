import { Link } from 'react-router-dom'

import FireFighter from '../pictures/firefighter.jpg'

export default function Container_3() {
    return(
        <div className = "container">
            <div className = "HomeContainer">
                <div className = "Container50">
                    <img src = {FireFighter} alt = "firefighter Danny" width = "500" height = "320"></img>
                </div>
                <div className = "Parallax Container50-alt" style = {{background:"gray"}}>
                    <Link className = "HomeButton" to = "/contact" style = {{background:"gray"}}>Contact</Link>
                </div>
            </div>
        </div>
    )
}