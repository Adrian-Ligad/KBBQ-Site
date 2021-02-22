import Danny from '../pictures/DannyBuscemi.jpg'

export default function LogoSlogan() {
    return(
            <div className = "container">
                    <img className = "DannyImage" src = {Danny} alt = "DannyBuscemi"></img>
                    <div className = "SlogoLogan content">
                       <div>Danny Buscem's KBBQ</div>
                       <div className = "Header2">Classic Venue with Modern Style<br/>EST. 2021</div>
                        
                    </div>   
            </div>
    )
}