import { Link } from 'react-router-dom'

import FireFighter from '../pictures/firefighter.jpg'

export default function Container_3() {
    return(
        <div className = "container">
            <div className = "HomeContainer">
                <div className = "Container50">
                    <img src = {FireFighter} alt = "firefighter Danny" width = "500" height = "320"></img>
                </div>
                <div className = "Parallax Container50-alt">
                    <Link className = "HomeButton-alt" to = "/contact">Contact</Link>
                </div>
            </div>
        </div>
    )
}