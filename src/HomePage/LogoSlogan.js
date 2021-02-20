import Danny from '.././DannyBuscemi.jpg'

export default function LogoSlogan() {
    return(
            <div className = "container">
                    <img className = "DannyImage" src = {Danny} alt = "DannyBuscemi"></img>
                    <div className = "SlogoLogan content">
                        REALLY COOL CONTENT<br/>
                        DANNY BUSCEMI ROCKS
                    </div>   
            </div>
    )
}