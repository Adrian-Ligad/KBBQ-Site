import { Link } from 'react-router-dom'

import kbbq2 from '../pictures/kbbq2.jpg'

export default function Container_5() {
    return(
        <div className = "ContentContainer">
            <div className = "Parallax Container50">
                <Link className = "HomeButton" to = "/testimonies">Testimonies</Link>
            </div>
            <div className = "Parallax kbbq9"/>
        </div>
    )
}