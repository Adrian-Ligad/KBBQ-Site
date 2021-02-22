import { Link } from 'react-router-dom'

export default function Container1() {
    return (
        <div className = "container">
            <div className = "HomeContainer">
                <div className = "Parallax SteveDevito"></div>
                <div className = "Parallax Container25">
                    <Link className = "HomeButton" to = "/about">About</Link>
                </div>
                <div className = "Parallax Container25-alt">
                    <Link className = "HomeButton-alt" to = "/menu">Menu</Link>
                </div>
            </div>
        </div>
    )
}