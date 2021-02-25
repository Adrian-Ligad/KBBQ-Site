import { Link } from 'react-router-dom'

import SteveHead from '../pictures/SteveBuscemiHead.jpg'

export default function Container_5() {
    return(
        <div className = "ContentContainer">
            <div className = "Parallax Container50">
                <Link className = "HomeButton" to = "/testimonies">Testimonies</Link>
            </div>
            <div className = "Parallax Container25">
                <img src = {SteveHead} alt = "Steve Head" width = "380" height = "320"></img>
            </div>
        </div>
    )
}